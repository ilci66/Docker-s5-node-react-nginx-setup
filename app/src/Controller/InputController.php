<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class InputController extends AbstractController
{
    /**
     * @Route("/input", name="input", methods="POST")
     */

    // gonna handle database connection decoding and saving to to database
    public function save(): Response
    {
        return $this->render('input/index.html.twig', [
            'controller_name' => 'InputController',
        ]);
    }

    /**
     * @Route("/input", name="input", methods="DELETE")
     */

    // gonna handle database connection decoding and deleteing from database
    public function delete(): Response
    {
        return $this->render('input/index.html.twig', [
            'controller_name' => 'InputController',
        ]);
    }
}
