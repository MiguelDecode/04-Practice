<?php
if(isset($_POST)){
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = 'emailprofesional@gmail.com';
  $subject = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
    <p>
      Datos enviado desde el el formulario del sitio <b>$domain</b> 
    </p> 
    <ul>
      <li>Nombre: $name</li> 
      <li>Email: $email</li> 
      <li>Asunto: $subject</li> 
      <li>Comentarios: $comments</li> 
    </ul>
  "

  $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío Automático No responder <no-reply@$domain>";

  $send_mail = mail($to, $subject, $message, $headers);

  if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados correctamente"
    ]
  } else {
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos intenta nuevamente"
    ]
  }

  header("Content-type: application/json")
  echo json_encode($res)
  exit;
}