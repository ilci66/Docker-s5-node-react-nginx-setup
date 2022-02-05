<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class HomePageController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index(): Response
    {
        // return $this->json([
        //     'message' => 'Welcome to your new controller!',
        //     'path' => 'src/Controller/HomePageController.php',
        // ]);
        return $this->render('base.html.twig');
    }
}
