<?php
$subject = 'Letter from MadMaxxi';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//echo $name;
//echo "<br>";
//echo $email;

if(mail($email, $subject, $message, $name)){
    echo 'Сообщение отправлено!';
}else{
    echo 'Ошибка при отправке';
}
?>