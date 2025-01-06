import logo from "../../assets/nixtour_logo.svg"
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="NixTour Logo"
                        width={48}
                        height={48}
                        className="w-auto h-12"
                    />
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLink href="https://fares.nixtour.com/online3s/UrlLandingPage.aspx?langcode=GB&ReqType=BOOKINGSTATUS&comid=KN2182&webid=13671">Manage Booking</NavLink>
                    <NavLink href="https://agents.nixtour.com/B2BDashBoard/asp/Login.aspx">Agent Login</NavLink>
                    <NavLink href=" https://fares.nixtour.com/Online3s/UrlLandingPage.aspx?ReqType=agt&comid=KN2182&webid=13671&langCode=GB&callfrom=true">Agency Signup</NavLink>
                </nav>
                <button
                    className="md:hidden p-2 text-primary hover:text-[#8B0000] transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col space-y-4 px-4 py-6 bg-white/90 backdrop-blur-md">
                        <NavLink href="https://fares.nixtour.com/online3s/UrlLandingPage.aspx?langcode=GB&ReqType=BOOKINGSTATUS&comid=KN2182&webid=13671">Manage Booking</NavLink>
                        <NavLink href="https://agents.nixtour.com/B2BDashBoard/asp/Login.aspx">Agent Login</NavLink>
                        <NavLink href=" https://fares.nixtour.com/Online3s/UrlLandingPage.aspx?ReqType=agt&comid=KN2182&webid=13671&langCode=GB&callfrom=true">Agency Signup</NavLink>
                    </nav>
                </div>
            )}
        </header>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-base font-bold text-primary hover:text-[#8B0000] transition-colors duration-200"
        >
            {children}
        </a>
    )
}

