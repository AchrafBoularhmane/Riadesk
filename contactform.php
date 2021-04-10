<?php
$RaisonDeContact = $_POST['Objet'];
$NomEtPrenom = $_POST['Nom-Complet'];
$NomEntreprise = $_POST['Nom-Entreprise'];
$Mobile = $_POST['Mobile'];
$Email = $_POST['Email'];
$Message = $_POST['Message'];

$email_from = 'noreply@riadesk.ma';

$email_subject = "Nouvelle demande de contact";

$email_body = "Raison de Contact: $RaisonDeContact\n".
              "Nom et Prénom: $NomComplet\n".
              "Nom de l'entreprise: $NomEntreprise\n".
              "Numéro de Téléphone: $Mobile\n".
              "Email: $Email\n".
              "Message: $Message\n";

$to = "Admin@riadesk.ma";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $Email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html#Home");

?>
