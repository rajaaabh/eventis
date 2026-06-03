<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreContactRequest extends FormRequest
{
    /**
     * Détermine si l'utilisateur est autorisé à faire cette requête.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Retourne les règles de validation applicables à la requête.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom'     => 'required|string|max:255',
            'email'   => 'required|string|email',
            'sujet'   => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ];
    }

    /**
     * Retourne les messages d'erreur personnalisés.
     */
    public function messages(): array
    {
        return [
            'nom.required'     => 'Le nom est obligatoire.',
            'nom.max'          => 'Le nom ne doit pas dépasser 255 caractères.',
            'email.required'   => 'L\'email est obligatoire.',
            'email.email'      => 'L\'email n\'est pas valide.',
            'sujet.required'   => 'Le sujet est obligatoire.',
            'sujet.max'        => 'Le sujet ne doit pas dépasser 255 caractères.',
            'message.required' => 'Le message est obligatoire.',
            'message.max'      => 'Le message ne doit pas dépasser 2000 caractères.',
        ];
    }

    /**
     * Gère une tentative de validation échouée.
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Erreur de validation',
            'errors'  => $validator->errors()
        ], 422));
    }
}
