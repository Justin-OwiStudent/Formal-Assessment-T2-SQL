<?php   

include 'db_connection.php';



header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://petNames');
$data = json_decode($request_body);

$NameOfPet = $data->name;
$SpeciesOfPet = $data->species;
$GenderOfPet = $data->gender;
$AgeOfPet = $data->age;
$PetMicrochipId = $data->microchip;
$PetOwnerName = $data->petOwner;
$PetOwnerIdNumber = $data->ownerId;
$ExportOrigin = $data->exportOrigin;
$ExportDestination = $data->exportDes;

$sql = "INSERT INTO petdetails (id, NameOfPet, SpeciesOfPet, GenderOfPet, AgeOfPet, PetMicroChipId, PetOwnerName, PetOwnerIdNumber, ExportOrigin, ExportDestination) VALUES (NULL, '$name', '$species', '$gender', '$age', '$microchip', '$petOwner', '$ownerId', '$exportOrigin', '$exportDes' )";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Good! Pet Added!");
}

?>