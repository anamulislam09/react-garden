

<?php

    include_once('db_connect.php');

    $data = file_get_contents("php://input");

    $data = json_decode($data);
    $id = $data->prodid;

   $result = mysqli_query($db_conn,"DELETE FROM products WHERE id = '$id'");

    if($result){
        echo json_encode(["msg"=>"Product delete successfully"]);
    }

?>