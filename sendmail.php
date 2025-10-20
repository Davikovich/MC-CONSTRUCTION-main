<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nom = htmlspecialchars_decode($_POST['nom']);
    $email = htmlspecialchars_decode($_POST['email']);
    $message = htmlspecialchars_decode($_POST['message']);

    $to = "sarl.mc.construction@gmail.com";
    $subject = "Nouveau message depuis le site";
    $body = "Nom : $nom\nEmail : $email\nMessage : $message";
    $headers = "From: contact@mc-construction.fr\r\nReply-To: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>