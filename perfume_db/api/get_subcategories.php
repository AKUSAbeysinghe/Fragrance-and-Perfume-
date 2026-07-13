 <?php
// get_subcategories.php
header('Content-Type: application/json');
include 'config.php';

$category_id = isset($_GET['category_id']) ? (int)$_GET['category_id'] : 0;

try {
    $sql = "SELECT id, category_id, name, slug, description 
            FROM subcategories 
            WHERE 1=1";

    $params = [];
    if ($category_id > 0) {
        $sql .= " AND category_id = ?";
        $params[] = $category_id;
    }

    $sql .= " ORDER BY name ASC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    $subcategories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $subcategories
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to fetch subcategories'
    ]);
}
?>