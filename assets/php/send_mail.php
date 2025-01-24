<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize inputs
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    try {
        // PHPMailer setup (same as your current code)
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'gra10.truehost.cloud';
        $mail->SMTPAuth = true;
        $mail->Username = 'info@mssl.ke';
        $mail->Password = 'bD$UgZ{${4Rb';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('info@mssl.ke', 'MSSL KE');
        $mail->addAddress('info@mssl.ke');

        $mail->isHTML(true);
        $mail->Subject = "New Quote Request from $name";
        $mail->Body = "
            <h3>Quote Request Details</h3>
            <p><strong>Full Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();

        // Send success response
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);
    } catch (Exception $e) {
        // Send error response
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email. Error: ' . $mail->ErrorInfo]);
    }
} else {
    // Invalid request
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
