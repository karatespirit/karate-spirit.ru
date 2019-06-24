<?php
	session_start();
	if ($_GET['name'] != "" && $_GET['phone'] != "") {
	
		$name = $_GET['name'];
		$phone = $_GET['phone'];
		
		$to = "denislukashevich@gmail.com";//Почта на которую придут данные
		$from = "denislukashevich@gmail.com";//Почта от которой придут данные
		$subject = "Заказ";//Тема письма
		$subject = "=?utf-8?B?".base64_encode($subject)."?=";
		$message = "Имя: $name\nТелефон: $phone\n".$_SESSION['model'];//Тело письма
		$headers = "From: $from\r\nReply-to: $from\r\nContent-Type: text/html; charset=utf8\r\n";
		mail($to, $subject, $message, $headers);
		unset($_SESSION['model']);
		echo "ok";
	}
?>