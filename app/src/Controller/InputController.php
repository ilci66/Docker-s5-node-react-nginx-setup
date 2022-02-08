<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class InputController extends AbstractController
{   
    /**
     * @Route("/get-all", name="get_all", methods="GET")
     */
    public function getAll(): JsonResponse
    {   
        $values = array(
            array('Workout', 60),
            array('Bake a cake', 30)
        );
        return new JsonResponse($values);

    

    }
    /**
     * @Route("/add", name="add", methods="POST")
     */

    // gonna handle database connection decoding and saving to to database
    public function save(): Response
    {   
        // echo "stuff";
        // print("asdasd");
        $request = Request::createFromGlobals();
        // $request->request->get('name');
        // $request->request->get('duration');
        // print( $name . $duration);
        
        $parameters = json_decode($request->getContent(), false);
        // $name =  $parameters['name']; // will print 'user'
        // $duration = $parameters['duration'];
        // isset($this->$parameters);
        print("parameters ==> " . json_decode($request->getContent(), true));
        
        
        // now save them in the database

    
        // send response 
        $response = new Response();
        $response->setStatusCode(Response::HTTP_OK);

        // return $this->render('input/index.html.twig', [
        //     'controller_name' => 'InputController',
        // ]);
        return $response->send();
    }

    /**
     * @Route("/delete", name="delete", methods="DELETE")
     */

    // gonna handle database connection decoding and deleteing from database
    public function delete(): Response
    {
        return $this->render('input/index.html.twig', [
            'controller_name' => 'InputController',
        ]);
    }
}
