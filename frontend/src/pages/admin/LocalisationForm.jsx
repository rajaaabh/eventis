import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import { useAuth } from '../../context/AuthContext'
import { getLocalisation, createLocalisation, updateLocalisation } from '../../api/localisations'

export default function LocalisationForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { token } = useAuth()
    const isEdit = Boolean(id)

    const [form, setForm] = useState({ libelle: '' })
    const [loading, setLoading] = useState(false)
    const [loadingData, setLoadingData] = useState(isEdit)
    const [errors, setErrors] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!isEdit) return
        const fetchLocalisation = async () => {
            setLoadingData(true)
            try {
                const data = await getLocalisation(id)
                setForm({ libelle: data.localisation?.libelle || '' })
            } catch (err) {
                console.error(err)
            } finally {
                setLoadingData(false)
            }
        }
        fetchLocalisation()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({})
        setError(null)
        setLoading(true)

        try {
            const formData = new FormData()
            formData.append('libelle', form.libelle)

            const data = isEdit
                ? await updateLocalisation(token, id, formData)
                : await createLocalisation(token, formData)

            if (!data.success) {
                if (data.errors) setErrors(data.errors)
                else setError(data.message)
                return
            }

            navigate('/admin/localisations')
        } catch (err) {
            setError('Erreur de connexion au serveur')
        } finally {
            setLoading(false)
        }
    }

    if (loadingData) return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex items-center justify-center">
                <div className="text-gray-400 text-sm">Chargement...</div>
            </div>
        </div>
    )

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 overflow-x-hidden">
                <div className="p-4 pt-20 lg:pt-8 lg:p-8">

                    <div className="my-6 lg:mb-8">
                        <Link
                            to="/admin/localisations"
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 no-underline mb-4 transition-colors"
                        >
                            <ArrowLeft size={15} />
                            Retour aux localisations
                        </Link>
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                            {isEdit ? 'Modifier une localisation' : 'Nouvelle localisation'}
                        </h1>
                        <p className="text-gray-500 text-sm mt-1">
                            {isEdit ? 'Modifiez le libellé de la localisation' : 'Créez une nouvelle localisation'}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="max-w-lg">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Libellé *</label>
                                    <input
                                        type="text"
                                        value={form.libelle}
                                        onChange={(e) => setForm({ libelle: e.target.value })}
                                        placeholder="Ex: Cocody, Plateau, Yopougon..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
                                    />
                                    {errors.libelle && <p className="text-xs text-red-500 mt-1">{errors.libelle[0]}</p>}
                                </div>

                                <div className="flex flex-col gap-3 pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 rounded-xl font-bold text-sm bg-red-500 text-white hover:bg-red-600 transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'Enregistrement...' : isEdit ? 'Modifier la localisation' : 'Créer la localisation'}
                                    </button>
                                    <Link
                                        to="/admin/localisations"
                                        className="w-full py-3 rounded-xl font-bold text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors no-underline text-center"
                                    >
                                        Annuler
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}