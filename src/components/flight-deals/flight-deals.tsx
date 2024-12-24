import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

interface FlightDeal {
    destination: string
    price: number
}

const flightDeals: FlightDeal[] = [
    { destination: "Delhi", price: 5097 },
    { destination: "Mumbai", price: 3114 },
    { destination: "Chennai", price: 5319 },
    { destination: "Pune", price: 3824 },
    { destination: "Ahmedabad", price: 2531 },
    { destination: "Kolkata", price: 4195 },
]

export default function FlightDeals() {
    return (
        <Card className="mx-auto p-6">
            <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
                <div>
                    <p className="text-gray-600 mb-2">Departing from</p>
                    <Select defaultValue="BLR">
                        <SelectTrigger className="w-[200px] bg-white">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="BLR">Bengaluru (BLR)</SelectItem>
                            <SelectItem value="DEL">Delhi (DEL)</SelectItem>
                            <SelectItem value="BOM">Mumbai (BOM)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <p className="text-gray-600 mb-2">Travel Period</p>
                    <Tabs defaultValue="jan" className="w-[300px]">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger
                                value="jan"
                                className="data-[state=active]:bg-black data-[state=active]:text-white"
                            >
                                Jan
                            </TabsTrigger>
                            <TabsTrigger
                                value="feb"
                                className="data-[state=active]:bg-transparent"
                            >
                                Feb
                            </TabsTrigger>
                            <TabsTrigger
                                value="mar"
                                className="data-[state=active]:bg-transparent"
                            >
                                Mar
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            <CardContent className="p-0">
                {flightDeals.map((deal) => (
                    <div
                        key={deal.destination}
                        className="grid grid-cols-3 py-4 border-b last:border-b-0"
                    >
                        <div className="ml-[42px]">
                            <h3 className="text-base font-bold">To {deal.destination}</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-sm font-semibold">Starting From</p>
                            <p className="text-lg text-[#a30f0d] font-bold">
                                <span className="text-base text-[#a30f0d] font-bold">₹</span>
                                {deal.price}
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <Button
                                className="bg-[#a30f0d] hover:bg-[#761A1A] text-white rounded-full px-10"
                            >
                                BOOK NOW
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
