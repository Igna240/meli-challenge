
// --- Iconos SVG ---
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

// --- Componente Header ---
const Header = () => (
    <header className="bg-yellow-400 p-2 shadow-md">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="/" className="flex-shrink-0">
                    <img
                        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png"
                        alt="Mercado Libre"
                        className="h-8"
                    />
                </a>
                {/* Search Bar */}
                <div className="flex-grow max-w-xl relative hidden sm:block">
                    <input
                        type="text"
                        placeholder="Buscar productos, marcas y más..."
                        className="w-full p-2 pl-10 rounded-sm shadow-sm text-sm"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <SearchIcon />
                    </div>
                </div>
                {/* Promo Image */}
                <a href="#" className="hidden lg:block">
                    <img
                        src="https://http2.mlstatic.com/D_NQ_757389-MLA82501256018_022025-OO.webp"
                        alt="Disney+ Promo"
                        className="h-10"
                    />
                </a>
            </div>
            <div className="flex items-center justify-between gap-6 mt-2 text-sm text-gray-700">
                <div className="flex items-center gap-4">
                    <a href="#" className="flex items-center gap-1">
                        <LocationIcon />
                        <div>
                            <p className="text-xs">Enviar a</p>
                            <p className="font-semibold">Capital Federal</p>
                        </div>
                    </a>
                    <nav className="hidden md:flex items-center gap-4">
                        <a href="#" className="flex items-center gap-1">
                            Categorías <ChevronDownIcon />
                        </a>
                        <a href="#">Ofertas</a>
                        <a href="#">Historial</a>
                        <a href="#">Vender</a>
                        <a href="#">Ayuda</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="hidden sm:flex items-center gap-1">Crea tu cuenta</a>
                    <a href="#" className="hidden sm:flex items-center gap-1">Ingresa</a>
                    <a href="#" className="hidden sm:flex items-center gap-1">Mis compras</a>
                    <a href="#">
                        <CartIcon />
                    </a>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
