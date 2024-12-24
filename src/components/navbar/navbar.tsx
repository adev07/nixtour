import logo from "../../assets/nixtour_logo.svg"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#eee] py-6 px-16">
            <div className="container flex items-center justify-between">
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="NixTour Logo"
                        className="h-16 w-auto"
                    />
                </a>
                <nav className="flex items-center space-x-6">
                    <a
                        href="/manage-booking"
                        className="text-base font-bold text-primary hover:text-[#8B0000]"
                    >
                        Manage Booking
                    </a>
                    <a
                        href="/agent-login"
                        className="text-base font-bold text-primary hover:text-[#8B0000]"
                    >
                        Agent Login
                    </a>
                    <a
                        href="/agent-login"
                        className="text-base font-bold text-primary hover:text-[#8B0000]"
                    >
                        Agency Signup
                    </a>
                </nav>
            </div>
        </header>
    )
}
