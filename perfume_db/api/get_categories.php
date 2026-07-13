<?php
// get_categories.php
header('Content-Type: application/json');
include 'config.php';

try {
    $stmt = $pdo->query("SELECT id, name, slug, description FROM categories ORDER BY name ASC");
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $categories
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to fetch categories'
    ]);
}
?>