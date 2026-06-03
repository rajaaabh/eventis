<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;

class ContactController extends Controller
{
    /**
     * Envoyer un message de contact
     */
    public function store(StoreContactRequest $request)
    {
        // TODO: Envoyer l'email de contact

        return response()->json([
            'success' => true,
            'message' => 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
        ], 200);
    }
}
