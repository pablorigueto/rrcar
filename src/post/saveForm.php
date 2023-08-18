<?php

require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $formData = json_decode(file_get_contents('php://input'), true);

    $filename = 'propostas.xlsx';
    $spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();
    
    
    if (file_exists($filename)) {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filename);
    }

    $worksheet = $spreadsheet->getActiveSheet();

    $nextRow = $worksheet->getHighestRow() + 1;

    $worksheet->setCellValue('A' . $nextRow, $formData['name']);
    $worksheet->setCellValue('B' . $nextRow, $formData['email']);
    $worksheet->setCellValue('C' . $nextRow, $formData['cellphone']);
    $worksheet->setCellValue('D' . $nextRow, $formData['description']);
    $worksheet->setCellValue('E' . $nextRow, $formData['wantsToFinance']);
    $worksheet->setCellValue('F' . $nextRow, $formData['wantsToTradeVehicle']);
    $worksheet->setCellValue('G' . $nextRow, $formData['wantsToReceivePromotions']);
    // $worksheet->setCellValue('H' . $nextRow, $formData['agreesToPrivacyPolicy']);


    $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save($filename);

    echo json_encode(['message' => 'Data appended to XLSX file']);
}
