function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Responsable du traitement</h2>
        <p className="text-gray-600">
          Eventis est responsable du traitement de vos données personnelles
          collectées via cette plateforme.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Données collectées</h2>
        <p className="text-gray-600 mb-2">
          Lors de votre inscription à un événement, nous collectons :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Votre nom complet</li>
          <li>Votre adresse email</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Finalité du traitement</h2>
        <p className="text-gray-600">
          Vos données sont collectées uniquement pour :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
          <li>Confirmer votre inscription à un événement</li>
          <li>Vous envoyer un email de confirmation</li>
          <li>Vous permettre de vous désinscrire</li>
          <li>Vous informer en cas d'annulation de l'événement</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Durée de conservation</h2>
        <p className="text-gray-600">
          Vos données sont conservées jusqu'à la fin de l'événement auquel
          vous êtes inscrit. Elles sont supprimées automatiquement après
          l'événement ou sur votre demande.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Vos droits</h2>
        <p className="text-gray-600 mb-2">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement (via le lien de désinscription)</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Pour exercer ces droits, utilisez le lien de désinscription reçu
          par email ou contactez-nous via la page Contact.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Sécurité des données</h2>
        <p className="text-gray-600">
          Vos données sont protégées par des mesures de sécurité appropriées.
          Elles ne sont jamais vendues ou partagées avec des tiers.
        </p>
      </section>
    </div>
  )
}

export default PolitiqueConfidentialite