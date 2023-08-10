<?php

$url = "https://app.revendamais.com.br/application/index.php/apiGeneratorXml/generator/appdaloja/c1846fe87940dfc6f0e8235873334d318116.json";

$maxRetries = 5; // Maximum number of retries
$retryIntervalMin = 1; // Minimum retry interval in seconds
$retryIntervalMax = 10; // Maximum retry interval in seconds

$logFileName = __DIR__ . "/log.txt";

for ($retryCount = 1; $retryCount <= $maxRetries; $retryCount++) {
    $response = file_get_contents($url);

    if ($response !== false) {
        // Save JSON to a local file.
        $filename = __DIR__ . "/data.json";

        if (file_put_contents($filename, $response) !== false) {
            $logMessage = "JSON data saved successfully.";
            echo "JSON data saved successfully.";
        } else {
            $logMessage = "Error saving JSON data.";
        }
        break; // Exit loop on successful fetch and save
    } else {
        $logMessage = "Error fetching data. Retrying...";
        if ($retryCount < $maxRetries) {
            $retryInterval = rand($retryIntervalMin, $retryIntervalMax);
            sleep($retryInterval); // Wait for a random interval before retrying
        } else {
            $logMessage = "Max retries reached. Unable to fetch data.";
        }
    }
    
    file_put_contents($logFileName, date("Y-m-d H:i:s") . ": " . $logMessage . "\n", FILE_APPEND);
}
