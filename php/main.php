<?php

$con = new PDO('mysql:host=localhost;dbname=db_creditos', 'root', '');
date_default_timezone_set('America/Mexico_City') ;

$option=$_GET['option'];
$datos=array();

switch($option){

    case 'insertProducto':

        $sku=$_POST['sku'];
        $nombre=$_POST['nombre'];
        $descripcion=$_POST['descripcion'];
        $precio=$_POST['precio'];

        $insertProducto=$con->prepare('INSERT INTO productos (SKU, NOMBRE_PRODUCTO, DESCRIPCION, PRECIO) VALUES ('.$sku.',"'.$nombre.'","'.$descripcion.'",'.$precio.');');
        
        $ip=$insertProducto->execute();
        if($ip){

            $datos[]=array('mensaje'=>'<div class="alert alert-success alert-dismissible fade show mt-4 text-center" role="alert">
            Inserción exitosa
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>');
        }
        echo json_encode($datos);

    break;

    case 'listaProducto':
        $selectProductos=$con->prepare('SELECT ID_PRODUCTO, SKU, NOMBRE_PRODUCTO, DESCRIPCION, PRECIO FROM productos;');

        $selectProductos->execute();

        while($row=$selectProductos->fetch()){
            $datos[]=array('id_producto'=>$row['ID_PRODUCTO'], 'sku'=>$row['SKU'], 'nombre'=>$row['NOMBRE_PRODUCTO'], 'descripcion'=>$row['DESCRIPCION'], 'precio'=>$row['PRECIO']);
        }
        echo json_encode($datos);
    break;

    case 'insertPlazo':

        $plazo=$_POST['plazo'];
        $tasa_normal=$_POST['tasa_normal'];
        $tasa_puntual=$_POST['tasa_puntual'];
       

        $insertPlazo=$con->prepare('INSERT INTO plazos (PLAZO, TASA_NORMAL, TASA_PUNTUAL) VALUES ("'.$plazo.'",'.$tasa_normal.','.$tasa_puntual.');');
        
        $ip=$insertPlazo->execute();
        if($ip){

            $datos[]=array('mensajePlazo'=>'<div class="alert alert-success alert-dismissible fade show mt-4 text-center" role="alert">
            Inserción exitosa
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>');
        }
        echo json_encode($datos);

    break;

    case 'listaPlazos':
        $selectPlazos=$con->prepare('SELECT ID_PLAZO, PLAZO, TASA_NORMAL, TASA_PUNTUAL FROM plazos;');

        $selectPlazos->execute();

        while($row=$selectPlazos->fetch()){
            $datos[]=array('id_plazo'=>$row['ID_PLAZO'], 'plazo'=>$row['PLAZO'], 'tasa_normal'=>$row['TASA_NORMAL'], 'tasa_puntual'=>$row['TASA_PUNTUAL']);
        }
        echo json_encode($datos);
    break;
}
?>

