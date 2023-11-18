
<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;       

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  									
$mail->SMTPAuth = true;                    
$mail->Username = 'my mail';
$mail->Password = 'mail passwordF'; 
$mail->SMTPSecure = 'ssl';               
$mail->Port = 465;

$mail->setFrom('my mail', 'COFFEE SITE'); 
$mail->addAddress('your`s mail');       
$mail->isHTML(true);
$mail->Subject = 'Заявка с сайта Coffee';
//проверяем поля формы

function clear_data($val){
	$val = trim($val);
	$val = stripslashes($val);
	$val = strip_tags($val);
	$val = htmlspecialchars($val);
	return $val;
}
var_dump($_POST);
$name = clear_data($_POST['name']);
$email = clear_data($_POST['email']);
$message = clear_data($_POST['message']);

//тело письма
$body = '<h1>Сообщение с сайта</h1>';

if(!empty($name)) {
	$body.='<p><strong>Имя:</strong> '.$name.'</p>';
}
if(!empty($email)) {
	$body.='<p><strong>E-mail:</strong> '.$email.'</p>';
}
if(!empty($message)) {
$body.='<p><strong>Сообщение:</strong> '.$message.'</p>';
}

$mail->Body=$body;
$mail->AltBody = '';

if(!$mail->send()) {
	echo 'Данные отправлены';
} else {
	echo 'Произошла ошибка';
}
?>
