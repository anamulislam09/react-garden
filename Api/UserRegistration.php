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
$data = $data->info;


if (
    isset($data->name) && !empty($data->name)
    &&
    isset($data->email) && !empty($data->email)
) {
    $name = $data->name;
    $address = $data->address;
    $email = $data->email;
    $phone = $data->phone;
    $pswd = $data->password;

    $check = mysqli_query($db_conn, "SELECT* FROM users WHERE email = '$email'");
    if (mysqli_num_rows($check) > 0) {

        echo json_encode(['success' => false, 'msg' => 'Try with different email']);
        return;
    } else {

        $result = mysqli_query($db_conn, "INSERT INTO users (name, address ,email, phone, password) VALUES ('$name', '$address', '$email','$phone','$pswd ')");
        if (mysqli_affected_rows($db_conn) > 0) {
            echo json_encode(['success' => true, 'msg' => 'Successfully registered']);
            return;
        }
    }
} else {
    echo json_encode(['success' => false, 'msg' => 'PLease fill the form']);
    return;
}
