import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DatePicker } from "antd";
import { TravelersDropdown } from "../travellers-dropdown/travellers-dropdown";
import { Calendar, User, PlaneTakeoff, PlaneLanding, Plane, ArrowLeftRight } from "lucide-react"; // Import icons
import type { Travelers, TravelClass } from "../../../types/booking";

export default function FlightBooking() {
    const [, setTripType] = useState("one-way");
    const [showReturn, setShowReturn] = useState(false);
    const [fromCity, setFromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [travelers, setTravelers] = useState<Travelers>({
        adults: 1,
        children: 0,
        infants: 0,
    });
    const [travelClass, setTravelClass] = useState<TravelClass>("Economy");

    const handleTravelersUpdate = (newTravelers: Travelers, newClass: TravelClass) => {
        setTravelers(newTravelers);
        setTravelClass(newClass);
    };

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-6xl mx-auto rounded-2xl backdrop-blur-xl bg-white/30 p-6 shadow-xl border border-white/30">
                <form className="space-y-8">
                    {/* Trip Type Selection */}
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                            <RadioGroup
                                defaultValue="one-way"
                                onValueChange={(value) => {
                                    setTripType(value)
                                    setShowReturn(value === "round-trip")
                                }}
                                className="flex gap-6"
                            >
                                {["one-way", "round-trip", "multi-city"].map((type) => (
                                    <div key={type} className="flex items-center sm:space-x-2 space-x-1">
                                        <RadioGroupItem
                                            value={type}
                                            id={type}
                                            className="border-gray-400 border-[2px] text-[#BC1110] focus:ring-[#BC1110]"
                                        />
                                        <Label
                                            htmlFor={type}
                                            className="text-gray-700 font-semibold capitalize sm:text-base text-sm"
                                        >
                                            {type.replace("-", " ")}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Button
                                className="w-full md:w-auto px-8 py-4 bg-[#BC1110] hover:bg-[#BC1110]/90 text-white rounded-full transition-all font-semibold text-base"
                            >
                                Group Booking
                            </Button>
                        </div>
                    </div>

                    {/* Flight Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center relative">
                        {/* From */}
                        <div>
                            <Label htmlFor="from" className="text-gray-700 mb-1 block sm:text-base text-sm">
                                <PlaneTakeoff className="inline-block mr-2" />
                                Flying from
                            </Label>
                            <input
                                type="text"
                                id="from"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                placeholder="Enter city or airport"
                                className="mt-2 w-full px-4 py-4 rounded-[12px] border border-gray-300 focus:outline-none"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={swapCities}
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors ${showReturn ? 'sm:mt-[-100px] mt-[-150px]' : 'sm:mt-[-40px] mt-[-100px]'}`}
                            aria-label="Swap cities"
                        >
                            <ArrowLeftRight size={16} className="text-gray-700" />
                        </button>
                        {/* To */}
                        <div>
                            <Label htmlFor="to" className="text-gray-700 mb-1 block sm:text-base text-sm">
                                <PlaneLanding className="inline-block mr-2" />
                                Flying to
                            </Label>
                            <input
                                type="text"
                                id="to"
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                placeholder="Enter city or airport"
                                className="mt-2 w-full px-4 py-4 rounded-[12px] border border-gray-300 focus:outline-none"
                            />
                        </div>

                        {/* Departure */}
                        <div className="lg:col-span-1">
                            <Label htmlFor="departure" className="text-gray-700 mb-1 block sm:text-base text-sm">
                                <Calendar className="inline-block mr-2" />
                                Departure
                            </Label>
                            <DatePicker
                                className="mt-2 w-full px-4 py-4 border border-gray-300 rounded-[12px] focus:outline-none"
                                placeholder="Select date"
                            />
                        </div>

                        {/* Return */}
                        {showReturn && (
                            <div className="lg:col-span-1">
                                <Label htmlFor="return" className="text-gray-700 mb-1 block sm:text-base text-sm">
                                    <Calendar className="inline-block mr-2" />
                                    Return
                                </Label>
                                <DatePicker
                                    className="w-full px-4 py-4 border border-gray-300 rounded-[12px] mt-2 focus:outline-none"
                                    placeholder="Select date"
                                />
                            </div>
                        )}

                        {/* Travelers & Class */}
                        <div className="lg:col-span-1">
                            <Label className="text-gray-700 mb-1 block sm:text-base text-sm">
                                <User className="inline-block mr-2" />
                                Travellers & Class
                            </Label>
                            <TravelersDropdown
                                travelers={travelers}
                                travelClass={travelClass}
                                onUpdate={handleTravelersUpdate}
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="w-full md:w-auto px-8 py-5 bg-[#BC1110] hover:bg-[#BC1110]/90 text-white rounded-full transition-all font-semibold text-base"
                        >
                            Search Flights
                            <Plane />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
