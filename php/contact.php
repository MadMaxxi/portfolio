<?php

if ($_POST['submit']) {
    //if(isset($_POST['name']) && $_POST['name']!="" && isset($_POST['surname']) && //$_POST['surname']!="") && isset($_POST['email']) && $_POST['email']!="" {
    $to = 'webtestsanae@gmail.com';
    $mes = htmlspecialchars($_POST['message']);
    //сообщение в виде текста
    //кодировка сообщения для текста
    $headers = "Content-type: text/plain; charset=utf-8 \r\n";
    $mail = htmlspecialchars($_POST['email']);
    $name = htmlspecialchars($_POST['name']);
    require 'PHPMailer.php';
    require 'SMTP.php';
    require 'Exception.php';
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    //$mail->SMTPDebug = 3;    
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->CharSet = "utf-8";
    $mail->Username = 'webtestsanae@gmail.com';
    $mail->Password = 'qw12zxui';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    
    $mail->setFrom('webtestsanae@gmail.com');
    $mail->addAddress($to);
    
    $mail->Subject = $mail;
    $mail->Body = 'Пользователь: '.$name ."\n" .'E-mail: '.$mail."\n".'Сообщение клиента: '.$mes."\n";
    $headers = 'От: ' .$mail . "\r\n" .
                            'Кому: madmaxxi.com' . "\r\n" .
                            'X-Mailer: PHP/' . phpversion();
    if(!$mail->send()) {
        //header('location: failure.html');
    } else {
        //header('location: success.html');
        echo("ok");
    }
}
?>