<?php

include('db_connect.php');
$sql = "SELECT * from orders";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
    $orders['id'] = $row['id'];
    $orders['username'] = $row['username'];
    $orders['productname'] = $row['productname'];
    $orders['price'] = $row['price'];

    $myorders['pr'][] = $orders;
}

echo json_encode(['datas' => $myorders]);
