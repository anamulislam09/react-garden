<?php


include_once('db_connect.php');

$data = file_get_contents("php://input");
$data = json_decode($data);

if(isset($data->pname) && $data->pname!=""){
    $pname = $data->pname;
    $pdetails = $data->pdetails;
    $pprice = $data->pprice;

    $row = mysqli_query($db_conn, "INSERT INTO products (name,details,price) VALUE ('$pname','$pdetails','$pprice')"
);

if(mysqli_affected_rows($db_conn)>0){
    echo json_encode(["msg" => "successfully Inserted"]);
}
}else{
    echo json_encode(["msg" => "Invalid"]);
}


?>