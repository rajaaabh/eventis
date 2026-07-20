import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Shield, Database, Target, Clock, UserCheck, Lock } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PolitiqueConfidentialite() {
  const navigate = useNavigate()

  const sections = [
    {
      icon: <Shield size={24} className="text-red-500" />,
      title: '1. Responsable du traitement',
      content: null,
      text: "Éventis est responsable du traitement de vos données personnelles collectées via cette plateforme d'événements locaux à Abidjan, Côte d'Ivoire.",
    },
    {
      icon: <Database size={24} className="text-red-500" />,
      title: '2. Données collectées',
      content: ['Votre nom complet', 'Votre adresse email'],
      text: "Lors de votre inscription à un événement, nous collectons uniquement :",
    },
    {
      icon: <Target size={24} className="text-red-500" />,
      title: '3. Finalité du traitement',
      content: [
        "Confirmer votre inscription à un événement",
        "Vous envoyer un email de confirmation",
        "Vous permettre de vous désinscrire à tout moment",
        "Vous informer en cas d'annulation de l'événement",
      ],
      text: "Vos données sont collectées uniquement pour :",
    },
    {
      icon: <Clock size={24} className="text-red-500" />,
      title: '4. Durée de conservation',
      content: null,
      text: "Vos données sont conservées jusqu'à la fin de l'événement auquel vous êtes inscrit. Elles sont supprimées automatiquement après l'événement ou sur simple demande de votre part.",
    },
    {
      icon: <UserCheck size={24} className="text-red-500" />,
      title: '5. Vos droits',
      content: [
        "Droit d'accès à vos données",
        "Droit de rectification",
        "Droit à l'effacement (via le lien de désinscription)",
        "Droit d'opposition au traitement",
      ],
      text: "Conformément au RGPD, vous disposez des droits suivants. Pour les exercer, utilisez le lien de désinscription reçu par email ou contactez-nous via la page Contact.",
    },
    {
      icon: <Lock size={24} className="text-red-500" />,
      title: '6. Sécurité des données',
      content: null,
      text: "Vos données sont protégées par des mesures de sécurité appropriées incluant le chiffrement des sessions et des tokens uniques de désinscription. Elles ne sont jamais vendues ou partagées avec des tiers.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Retour</span>
          </button>
          <div className="flex items-center gap-3 mb-4">
            <Shield size={32} className="text-red-500" />
            <h1 className="text-4xl font-bold">Politique de confidentialité</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Comment Éventis collecte, utilise et protège vos données personnelles.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Dernière mise à jour : Juillet 2026 · Conforme au RGPD
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">{section.text}</p>
              {section.content && (
                <ul className="space-y-2 mt-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 bg-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Une question sur vos données ?</h3>
          <p className="text-red-100 mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-red-500 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors"
          >
            Nous contacter
          </button>
        </div>

        {/* Back button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mx-auto"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Retour à la page précédente</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}