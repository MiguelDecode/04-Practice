<?php
if(isset($_POST)) {
  error_reporting(0);

  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];

  $to = "correocliente@gmail.com";

  $subject = "Contacto desde el formulario del sitio $domain: $subject";

  $message = "
  <p>
Datos enviados desde el formulario del sitio <b>$domain</b>
  </p>
  <ul>
  <li>Nombre: <b>$name</b></li>
  <li>Email: <b>$email</b></li>
  <li>Asunto: $subject</li>
  <li>Comentarios: $comments</li>
  </ul>
  "

  $headers = "MIME-Version:1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío Automático No Responder <no-reply@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);

  if($send_email0 {
    $res = [
      "error" => false,
      "message" => "Tus datos han sido enviados"
    ]
  }) else {
    $res = [
      "error" => true,
      "message" => "Error al enviar tus datos. Intentalo de nuevo"
    ]
  }

  // header("Access-Control-Allow-Origin:https://jonmircha.com")
  header("Access-Control-Allow-Origin:*")

  header('Content-type: application/json');
  echo json_encode($res);
  exit;
}