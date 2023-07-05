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
        return $this->render('app/index.html.twig');
    }

    #[Route('/react-dashboard/{param}', name: 'app_react_dashboard', requirements: ['param' => '[A-Za-z0-9\/]+'])]
    public function reactDashboard(): Response
    {
        return $this->render('app/react-dashboard.html.twig');
    }

    #[Route('/sendEmail', name: 'app_email')]
    public function sendEmail(Request $request, MailerInterface $mailer): JsonResponse
    {
        try {
            $email = $request->request->get('email');
            $message = $request->request->get('message');

            $email = (new Email())
                ->from('contact@devalex.fr')
                ->to('contact@devalex.fr')
                ->subject('Site Pro')
                ->html($this->renderView('mail.html.twig', compact('message', 'email')));

            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            file_put_contents($this->getParameter('kernel.project_dir') .
                DIRECTORY_SEPARATOR . 'var' .
                DIRECTORY_SEPARATOR . 'log' .
                DIRECTORY_SEPARATOR,
                $e->getMessage(),
                FILE_APPEND
            );
            return $this->json('Une erreur est survenue, essayez à nouveau ou contactez moi via linkedin');
        }

        return $this->json('Email envoyé');
    }
}
