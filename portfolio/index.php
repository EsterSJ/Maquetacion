<?php

$nombre = $_POST["nombre"];
$mail = $_POST["mail"];
$asunto = $_POST["asunto"];
$cuerpo_mensaje = $_POST["mensaje"];

$mensaje = "Nombre: ".$nombre."<br>Email: ".$mail."<br>Asunto: ".$asunto."<br>Mensaje: ".$cuerpo_mensaje;

if(mail("ester_s@hotmail.com",$mensaje)){
    echo "Tu correo ha sido enviado. Te responderé cuanto antes :)"
}
?>
