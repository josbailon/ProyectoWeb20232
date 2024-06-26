<?php
// Incluir el archivo de operaciones CRUD
include 'crud.php';

// Obtener los datos del formulario
$nombre_cliente = $_POST["nombre_cliente"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$modelo = $_POST["modelo"];
$marca = $_POST["marca"];
$color = $_POST["color"];

// Crear un nuevo cliente
crearCliente($nombre_cliente, $telefono, $correo);

// Obtener el ID del cliente recién creado
$id_cliente = $conex->lastInsertId();

// Crear un nuevo vehículo asociado al cliente
crearVehiculo($id_cliente, $nombre_cliente, $modelo, $marca, $color);

// Redireccionar de vuelta a la página de inicio
header("Location: ../html/index.html");
exit();
?>
