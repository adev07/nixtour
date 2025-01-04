import { Building2, Mail, Phone, MapPin, Briefcase, Plane, Umbrella } from 'lucide-react'
import { Card, CardContent } from "../../components/ui/card"

export default function ContactPage() {
    return (
        <div className="min-h-screen sm:py-12 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-center sm:mb-12 mb-6 text-[#BC1110]">Contact us</h1>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-semibold mb-6">Noida</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Building2 className="w-6 h-6 mt-1 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">Nixtour India Private Ltd.</h3>
                                            <p className="text-muted-foreground">
                                                B19, 2nd Floor, Sector-60, Noida, Uttar Pradesh, India.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <a href="mailto:support@nixtour.com" className="text-primary hover:underline">
                                            support@nixtour.com
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <a href="tel:+91-8252646969" className="text-primary hover:underline">
                                            +91-8252646969
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-semibold mb-6">Additional Contacts</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <div>
                                            <span className="font-medium">Agency Support:</span>{' '}
                                            <a href="mailto:agencysupport@nixtour.com" className="text-primary hover:underline">
                                                agencysupport@nixtour.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Plane className="w-5 h-5 text-primary" />
                                        <div>
                                            <span className="font-medium">Visa:</span>{' '}
                                            <a href="mailto:visa@nixtour.com" className="text-primary hover:underline">
                                                visa@nixtour.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Umbrella className="w-5 h-5 text-primary" />
                                        <div>
                                            <span className="font-medium">Holidays:</span>{' '}
                                            <a href="mailto:holidays@nixtour.com" className="text-primary hover:underline">
                                                holidays@nixtour.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                        <div>
                                            <span className="font-medium">Job Opportunities:</span>{' '}
                                            <a href="mailto:hr@nixtour.com" className="text-primary hover:underline">
                                                hr@nixtour.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="h-[510px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.844913392087!2d77.363138!3d28.602103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce571d006ef73%3A0x971df43514911092!2sB%2C%2019%2C%20Block%20B%2C%20Sector%2060%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1736011758643!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nixtour India Private Ltd. Location"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

