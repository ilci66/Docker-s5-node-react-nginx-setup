<?php

namespace App\Controller;

use App\Entity\Activity;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InputController extends AbstractController
{   
    /**
     * @Route("/get-all", name="get_all", methods="GET")
     */
    public function getAll(ManagerRegistry $doctrine): JsonResponse
    {   
        $responseArray = array();
        $activities = $doctrine->getRepository(Activity::class)->findAll();

        if (!$activities) {
            print("nothing here mate!");
            throw $this->createNotFoundException(
                'No activity found'
            );
        }
        foreach ($activities as $activity) {
            array_push($responseArray, array($activity->getName(), $activity->getDuration()));
        }
        // echo $activity;
        // print($activity[0]->getName());

        return new JsonResponse($responseArray);
        // $values = array(
        //     array('Workout', 60),
        //     array('Bake a cake', 30)
        // );
        // return new JsonResponse($values);

    }
    /**
     * @Route("/add", name="add", methods="POST")
     */

    // gonna handle database connection decoding and saving to to database
    public function save(ManagerRegistry $doctrine): Response
    {   
        $request = Request::createFromGlobals();
        
        // $parameters = json_decode($request->getContent(), false);
        // $name =  $parameters['name']; // will print 'user'
        // $duration = $parameters['duration'];
        // isset($this->$parameters);

        // print("parameters ==> " . $request->getContent());
        
        // apparently I didn't need to deserialize
        print($request->request->get('name')); // this one says they cant 
        print($request->request->get('duration')); // this one says they cant 
        
        $a_name = $request->request->get('name'); // this one says they cant 
        $a_duration = $request->request->get('duration'); // this one says they cant 
        
        
        // now save them in the database

        $entityManager = $doctrine->getManager();
        $activity = new Activity();
        $activity->setName($a_name);
        $activity->setDuration($a_duration);

        $entityManager->persist($activity);
        $entityManager->flush();


        // and finally send response 
        // $response = new Response();
        // $response->setStatusCode(Response::HTTP_OK);
        // // return $this->render('input/index.html.twig', [
        // //     'controller_name' => 'InputController',
        // // ]);
        // return $response->send();
        return new Response('Saved new activity');
    }

    /**
     * @Route("/delete/{id}", name="delete", methods="DELETE")
     */

    // gonna handle database connection decoding and deleteing from database
    public function delete(ManagerRegistry $doctrine, int $id): Response
    {
        $entityManager = $doctrine->getManager();
        $activity = $entityManager->getRepository(Activity::class)->find($id);
     
        if (!$activity) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        $entityManager->remove($activity);
        $entityManager->flush();
        

        return new Response('Deleted the activity');
    }
}
