<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("localhost", "root", "", "wdpf51_react_crud");

// Check connection
if ($db_conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors', 'On');

$data = file_get_contents("php://input");
$data = json_decode($data);

if (isset($data->email) && ($data->email != '')) {

    $email = $data->email;
    $pswd = $data->password;

    $result = mysqli_query($db_conn, "SELECT * FROM admin where email='$email' and password='$pswd'");

    $row = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) > 0) {

        echo json_encode(["success" => "Login successfull", "user" => $row]);
    } else {
        echo json_encode(["error" => "Please try with another email"]);
    }
}
