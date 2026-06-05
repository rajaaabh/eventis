import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const navLinks = [
        { to: '/', label: 'Accueil' },
        { to: '/evenements', label: 'Événements' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-black text-gray-900 no-underline">
                        Évent<span className="text-red-500">is</span>
                    </Link>

                    {/* Nav desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`text-sm font-medium no-underline transition-colors ${
                                    isActive(to)
                                        ? 'text-red-500'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Bouton hamburger mobile */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {open && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors ${
                                isActive(to)
                                    ? 'bg-red-50 text-red-500'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}