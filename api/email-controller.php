<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

use PHPMailer\PHPMailer\PHPMailer;

require_once "vendor/autoload.php";

function sendMessage($name, $mail, $mobile, $mess)
{
	$email = new PHPMailer();
	$email->SetFrom($mail, $name); //Name is optional
	$email->Subject   = "Portfolio Form Response";
	$email->Body      = "New Form Response received : \n Name : $name \n Email: $mail \n Mobile: $mobile \n Message: $mess";
	$email->AddAddress('sambhavjain335@gmail.com');

	$email->send();
}

if ($_POST) {
	http_response_code(200);
	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$mess = $_POST['message'];
	sendMessage($name, $email, $mobile, $mess);
} else {
	die();
}
