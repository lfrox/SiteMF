<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "outroemaildomassive";
  $headers = "From: ".$mailFrom;
  $txt = "Você recebeu um email de ".$name.".".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsend");
}

?>