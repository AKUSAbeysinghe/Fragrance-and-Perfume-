<?php
header('Content-Type: application/json');
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
    exit;
}

try {

    $id = (int)$_POST['id'];

    $name               = trim($_POST['name'] ?? '');
    $fragrance_type     = trim($_POST['fragrance_type'] ?? '');
    $tagline            = trim($_POST['tagline'] ?? '');
    $top_notes          = trim($_POST['top_notes'] ?? '');
    $heart_notes        = trim($_POST['heart_notes'] ?? '');
    $base_notes         = trim($_POST['base_notes'] ?? '');
    $price              = floatval($_POST['price'] ?? 0);
    $size               = trim($_POST['size'] ?? '100ml');

    $category_id        = !empty($_POST['category_id']) ? intval($_POST['category_id']) : null;
    $subcategory_id     = !empty($_POST['subcategory_id']) ? intval($_POST['subcategory_id']) : null;

    $sample_available   = isset($_POST['sample_available']) &&
                          ($_POST['sample_available'] == "true" ||
                           $_POST['sample_available'] == 1 ||
                           $_POST['sample_available'] == "on")
                           ? 1 : 0;

    if ($id <= 0) {
        throw new Exception("Invalid product ID");
    }

    if ($name == '') {
        throw new Exception("Product name required");
    }

    $image_url = null;

    // ================= IMAGE UPLOAD =================
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {

        $uploadDir = "../uploads/products/";

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $extension = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
        $allowed = ["jpg","jpeg","png","webp","gif"];

        if (!in_array($extension, $allowed)) {
            throw new Exception("Invalid image type");
        }

        $filename = uniqid("perfume_") . "." . $extension;
        $target = $uploadDir . $filename;

        if (!move_uploaded_file($_FILES["image"]["tmp_name"], $target)) {
            throw new Exception("Image upload failed");
        }

        $image_url = "uploads/products/" . $filename;
    }

    // ================= UPDATE QUERY =================
    $sql = "UPDATE products SET
        name = ?,
        fragrance_type = ?,
        tagline = ?,
        top_notes = ?,
        heart_notes = ?,
        base_notes = ?,
        price = ?,
        size = ?,
        sample_available = ?,
        category_id = ?,
        subcategory_id = ?";

    $params = [
        $name,
        $fragrance_type,
        $tagline,
        $top_notes,
        $heart_notes,
        $base_notes,
        $price,
        $size,
        $sample_available,
        $category_id,
        $subcategory_id
    ];

    if ($image_url) {
        $sql .= ", image_url = ?";
        $params[] = $image_url;
    }

    $sql .= " WHERE id = ?";
    $params[] = $id;

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    echo json_encode([
        "success" => true,
        "message" => "Product updated successfully"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>