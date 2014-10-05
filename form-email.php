<?php
    // Fetching Values from URL.
    $name = $_POST['name1'];
    $email = $_POST['email1'];
    $message = $_POST['msg1'];
    $assunto = $_POST['assunto1'];
    $site = $_POST['site1'];
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
    // After sanitization Validation is performed
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $subject = $assunto;
            // To send HTML mail, the Content-type header must be set.
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'From:' . $email. "\r\n"; // Sender's Email
            $headers .= 'Subject:' . $assunto. "\r\n";
            $template = '<div style="padding:50px;"> Nome: ' . $name . ', e- mail: ' . $email . ', site: ' . $site 
            . '<br/><strong>Mensagem:</strong> <br/><br/>' . $message;                ;
            $sendmessage = "<div>" . $template . "</div>";
            // Message lines should not exceed 70 characters (PHP rule), so wrap it.
            $sendmessage = wordwrap($sendmessage, 70);
            // Send mail by PHP Mail Function.
            mail("contato@murilobast.com", $subject, $sendmessage, $headers);
            echo "Sua mensagem foi enviada, entrarei em contato assim que possivel.";
    } else {
    echo "<span>* email invalido *</span>";
    }
?>