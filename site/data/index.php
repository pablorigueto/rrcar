<?php

header("Access-Control-Allow-Origin: *");

// Configuration
$url = "https://app.revendamais.com.br/application/index.php/apiGeneratorXml/generator/appdaloja/c1846fe87940dfc6f0e8235873334d318116.json";
$maxRetries = 5;
$retryIntervalMin = 1;
$retryIntervalMax = 10;
$fetchInterval = 3600; // 1 hour

// File paths
$logFileName = __DIR__ . "/log.txt";
$dataFileName = __DIR__ . "/data.json";
$successLog = __DIR__ . "/success_log.txt";

/**
 * Log a message to the log file
 */
function logMessage($message, $logFile) {
    $timestamp = date("Y-m-d H:i:s");
    file_put_contents($logFile, "{$timestamp}: {$message}\n", FILE_APPEND);
}

/**
 * Serve cached data if it's fresh enough
 */
function serveCache($dataFileName, $successLog, $fetchInterval) {
    if (!file_exists($successLog) || !file_exists($dataFileName)) {
        return false;
    }

    $lastSuccessTimestamp = trim(file_get_contents($successLog));
    if (empty($lastSuccessTimestamp)) {
        return false;
    }

    $currentTimestamp = time();
    $lastFetchTime = strtotime($lastSuccessTimestamp);
    
    if (($currentTimestamp - $lastFetchTime) >= $fetchInterval) {
        return false;
    }
    
    $jsonData = file_get_contents($dataFileName);
    if ($jsonData === false) {
        return false;
    }
    
    echo $jsonData;
    return true;
}

/**
 * Fetch fresh data from the API
 */
function fetchData($url, $maxRetries, $retryIntervalMin, $retryIntervalMax, $dataFileName, $successLog, $logFileName) {
    for ($retryCount = 1; $retryCount <= $maxRetries; $retryCount++) {
        $response = file_get_contents($url);
        
        if ($response === false) {
            $retryMessage = $retryCount < $maxRetries ? "Retrying..." : "Max retries reached. Unable to fetch data.";
            logMessage("Error fetching data. {$retryMessage}", $logFileName);
            
            if ($retryCount < $maxRetries) {
                sleep(rand($retryIntervalMin, $retryIntervalMax));
            }
            continue;
        }
        
        // Save the data
        if (file_put_contents($dataFileName, $response) === false) {
            logMessage("Error saving JSON data.", $logFileName);
            return false;
        }
        
        // Update success log
        file_put_contents($successLog, date("Y-m-d H:i:s"));
        logMessage("JSON data saved successfully.", $logFileName);
        
        echo $response;
        return true;
    }
    
    return false;
}

// Main execution flow
if (serveCache($dataFileName, $successLog, $fetchInterval)) {
    exit;
}

fetchData($url, $maxRetries, $retryIntervalMin, $retryIntervalMax, $dataFileName, $successLog, $logFileName);