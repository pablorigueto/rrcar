<?php

header("Access-Control-Allow-Origin: *"); // Allow requests from any origin

$url = "https://app.revendamais.com.br/application/index.php/apiGeneratorXml/generator/appdaloja/c1846fe87940dfc6f0e8235873334d318116.json";

$maxRetries = 5; // Maximum number of retries
$retryIntervalMin = 1; // Minimum retry interval in seconds
$retryIntervalMax = 10; // Maximum retry interval in seconds

$logFileName = __DIR__ . "/log.txt";
$dataFileName = __DIR__ . "/data.json";
$successLog = __DIR__ . "/success_log.txt";

$fetchInterval = 3600; // 1 hour in seconds

// Read the last success timestamp from the log file
$lastSuccessTimestamp = trim(file_get_contents($successLog));
$currentTimestamp = time();

if ($lastSuccessTimestamp !== "" && ($currentTimestamp - strtotime($lastSuccessTimestamp)) < $fetchInterval) {
    echo "Data was fetched less than 1 hour ago. Skipping data fetch.";
} else {
    echo 'pegando novo arquivo';
    for ($retryCount = 1; $retryCount <= $maxRetries; $retryCount++) {
        $response = file_get_contents($url);

        if ($response !== false) {
            // Save JSON to a local file.
            if (file_put_contents($dataFileName, $response) !== false) {
                $logMessage = "JSON data saved successfully.";
                echo "JSON data saved successfully.";

                // Log the timestamp when JSON data was saved.
                // Log the timestamp when JSON data was saved.
                $successLogMessage = date("Y-m-d H:i:s");
                file_put_contents($successLog, $successLogMessage);
            } else {
                $logMessage = "Error saving JSON data.";
            }
            break; // Exit loop on successful fetch and save
        }
        else {
            $logMessage = "Error fetching data. Retrying...";
            if ($retryCount < $maxRetries) {
                $retryInterval = rand($retryIntervalMin, $retryIntervalMax);
                sleep($retryInterval); // Wait for a random interval before retrying
            }
            else {
                $logMessage = "Max retries reached. Unable to fetch data.";
            }
        }

        file_put_contents($logFileName, date("Y-m-d H:i:s") . ": " . $logMessage . "\n", FILE_APPEND);
    }
}
