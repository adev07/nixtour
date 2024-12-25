import DomesticAirlines from "../../components/domestic-airlines/domestic-airlines"
import TravelForm from "../../components/travel-form/travel-form"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ClipboardList, DollarSign, Plane, Users } from 'lucide-react'
import Map from "../../assets/svgs/map.svg"

function index() {
    return (
        <div className="sm:px-[112px] px-6 min-h-screen">
            <div className="sm:pt-[40px] pt-5">
                <h2 className="sm:text-2xl text-xl font-semibold mb-4">Group Booking in Flight & Corporate Travel Deals</h2>
            </div>
            <div className="sm:pt-5">
                <h3 className="sm:text-xl text-lg font-semibold mb-3">Looking for Air Ticket for more than 9 Passengers?</h3>
                <p className="text-justify">Nixtour is your one-stop solution for booking group airline tickets to several destinations across the globe. Get attractive deals on group air tickets with round-the-clock support and service. We specialize in bulk flight booking across multiple airlines.</p>
            </div>
            <div className="py-8">
                <TravelForm />
            </div>
            <div>
                <p className="text-justify">When it comes to group airline tickets, you may find it difficult to get hold of the right providers in a highly competitive and confusing market. Of course, group plane tickets require specialized services, since not every online platform or agent is equipped to do the same. It requires special relationships with airlines/carriers along with other stakeholders in the travel and logistics industry.</p>
                <p className="text-justify mt-1">This is where Nixtour stands out as your ideal group flight booking agents. We ensure a smooth and hassle-free process of bulk flight air ticket booking, across leading global airlines like Emirates, Etihad, Malaysia Airlines, and Singapore Airlines, Indigo Airlines, Air India, Aeroflot, Uzbekistan Airways and more. You can also get fabulous discounted air fare while booking group air fare. With our vast experience and connections across the sector, we can take care of all your group booking flight needs promptly and in an organized manner. What’s more, you can expect super-quick service once you contact us, with a dedicated agent taking care of all your queries and providing the solutions right away.</p>
                <p className="text-justify mt-1">So, without waiting any further, reach out to Nixtour right away and let us take care of all your group airline tickets and other bookings at a discounted air fares.</p>
            </div>
            <div className="py-5">
                <DomesticAirlines />
            </div>
            <div className="space-y-8">
                <div className="space-y-3">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        How to book Group Air ticket with Nixtour?
                    </h1>
                    <p className="text-base">
                        Planning a trip for a group? Save on group flight tickets and explore the best group airline tickets deals with these simple tips
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-[25px]">
                                <ClipboardList className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Fill Group Booking Form</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Share your travel details through our form to access group flight booking discounts and special deals on bulk flight bookings.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-[25px]">
                                <DollarSign className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Wait for our Group Travel Desk quote</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Receive a tailored quote featuring the best prices for group airline tickets, maximizing savings for your group travel plans.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-[25px]">
                                <Plane className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Negotiate Air Fare for Group Air ticket Booking</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Work with our team to negotiate airfares and secure discounts on group airline tickets and bulk flight bookings.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-[25px]">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-xl">Book your Airticket for more than 9 Passengers</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Easily book for 9+ passengers with exclusive group flight booking discounts, ensuring affordable and smooth bulk ticket reservations.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img className="object-cover" src={Map} alt="" />
            </div>
        </div>
    )
}

export default index