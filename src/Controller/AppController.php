<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_app')]
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }

    #[Route('/sendEmail', name: 'app_email')]
    public function sendEmail(Request $request, MailerInterface $mailer): JsonResponse
    {
        $params = $request->request->all();

        $email = (new Email())
            ->from($params['email'])
            ->to('perrot.alex.dev@gmail.com')
            ->subject('Site Pro')
            ->html("<p>{$params['message']}</p>");

        try {
            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
//            dd($e->getMessage());
            return $this->json('Une erreur est survenue, essayez à nouveau ou contactez moi via linkedin');
        }

        return $this->json('Email envoyé');
    }
}
