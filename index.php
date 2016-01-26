<?php

require_once 'Twig/lib/Twig/Autoloader.php';
Twig_Autoloader::register();


$loader = new Twig_Loader_Filesystem(__DIR__);
$twig = new Twig_Environment($loader, array(
    'cache' => false,
    'debug' => true,
));
$twig->addExtension(new Twig_Extension_Debug());



$string = file_get_contents("jeopardy.json");
$json_a = json_decode($string, true);

echo $twig->render('index.html.twig', array(
    'jeopardy' => $json_a
));