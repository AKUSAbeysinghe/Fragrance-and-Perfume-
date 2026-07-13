<?php
// api/signup.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = trim($data['username'] ?? '');
$email    = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

if (empty($username) || empty($email) || empty($password)) {
    echo json_encode([
        'success' => false, 
        'message' => 'All fields are required',
        'debug' => $data   // for debugging
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$email]);

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => false, 'message' => 'Email already registered']);
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 'user')");
    $stmt->execute([$username, $email, $hashed_password]);

    echo json_encode([
        'success' => true, 
        'message' => 'Signup successful! You can now login.'
    ]);

} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>