<?php

include('db_connect.php');
$sql = "SELECT * from products";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
   $product['id'] = $row['id'];
   $product['name'] = $row['name'];
   $product['details'] = $row['details'];
   $product['price'] = $row['price'];

   $myproduct['pr'][] = $product;
}

echo json_encode(['datas' => $myproduct]);
