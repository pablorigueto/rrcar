<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use DateTime;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $currentDateTime = new DateTime();
    $formData = json_decode(file_get_contents('php://input'), true);

    $filename = 'propostas.xlsx';
    $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
    
    
    if (file_exists($filename)) {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filename);
    }

    $worksheet = $spreadsheet->getActiveSheet();

    $nextRow = $worksheet->getHighestRow() + 1;
    $worksheet->setCellValue('A' . $nextRow, $currentDateTime->format('Y-m-d H:i:s'));
    $worksheet->setCellValue('B' . $nextRow, $formData['carID']);
    $worksheet->setCellValue('C' . $nextRow, $formData['name']);
    $worksheet->setCellValue('D' . $nextRow, $formData['email']);
    $worksheet->setCellValue('E' . $nextRow, $formData['cellphone']);
    $worksheet->setCellValue('F' . $nextRow, $formData['description']);
    $worksheet->setCellValue('G' . $nextRow, $formData['wantsToFinance']);
    $worksheet->setCellValue('H' . $nextRow, $formData['wantsToTradeVehicle']);
    $worksheet->setCellValue('I' . $nextRow, $formData['wantsToReceivePromotions']);
    // $worksheet->setCellValue('J' . $nextRow, $formData['agreesToPrivacyPolicy']);

    $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save($filename);

    echo json_encode(['message' => 'Data appended to XLSX file']);
}
