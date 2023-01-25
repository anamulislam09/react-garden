<?php

include("db_connect.php");

// file_get_contents($db_conn);
$sql = "SELECT * FROM services";

$result = mysqli_query($db_conn, $sql);




while ($row = mysqli_fetch_assoc($result)) {
    $products[] = $row;
    // $product['id'] = $row['id'];
    // $product['name'] = $row['name'];
    // $product['category'] = $row['category'];
    // $product['seller'] = $row['seller'];
    // $product['price'] = $row['price'];
    // $product['image'] = $row['image'];

    // $myproduct['prod'][] = $product;
}

echo json_encode(['success' => 'yes', 'items' => $products]);
