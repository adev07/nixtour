import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DatePicker } from "antd";
import { TravelersDropdown } from "../travellers-dropdown/travellers-dropdown";
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

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-6xl mx-auto rounded-2xl backdrop-blur-xl bg-white/30 p-6 shadow-xl border border-white/30">
                <form className="space-y-8">
                    {/* Trip Type Selection */}
                    <div className="flex justify-between gap-6">
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
                                    <div key={type} className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value={type}
                                            id={type}
                                            className="border-gray-300 text-[#BC1110] focus:ring-[#BC1110]"
                                        />
                                        <Label
                                            htmlFor={type}
                                            className="text-gray-800 font-medium capitalize"
                                        >
                                            {type.replace("-", " ")}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                        <div>
                            <Button
                                className="w-full md:w-auto px-8 py-4 bg-[#BC1110] hover:bg-[#BC1110]/90 text-white rounded-full transition-all font-semibold text-base"
                            >
                                Group Booking
                            </Button>
                        </div>
                    </div>

                    {/* Flight Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
                        {/* From */}
                        <div className="lg:col-span-1">
                            <Label htmlFor="from" className="text-gray-700 mb-1 block">
                                From
                            </Label>
                            <input
                                type="text"
                                id="from"
                                value={fromCity}
                                onChange={(e) => setFromCity(e.target.value)}
                                placeholder="Enter city or airport"
                                className="w-full px-4 py-2 rounded-[5px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BC1110]"
                            />
                        </div>
                        {/* To */}
                        <div className="lg:col-span-1">
                            <Label htmlFor="to" className="text-gray-700 mb-1 block">
                                To
                            </Label>
                            <input
                                type="text"
                                id="to"
                                value={toCity}
                                onChange={(e) => setToCity(e.target.value)}
                                placeholder="Enter city or airport"
                                className="w-full px-4 py-2 rounded-[5px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BC1110]"
                            />
                        </div>

                        {/* Departure */}
                        <div className="lg:col-span-1">
                            <Label htmlFor="departure" className="text-gray-700 mb-1 block">
                                Departure
                            </Label>
                            <DatePicker
                                className="w-full px-4 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#BC1110]"
                                placeholder="Select date"
                            />
                        </div>

                        {/* Return */}
                        <div className="lg:col-span-1">
                            <Label htmlFor="return" className="text-gray-700 mb-1 block">
                                Return
                            </Label>
                            <DatePicker
                                className="w-full px-4 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#BC1110]"
                                placeholder="Select date"
                                disabled={!showReturn}
                            />
                        </div>

                        {/* Travelers & Class */}
                        <div className="lg:col-span-1">
                            <Label className="text-gray-700 mb-1 block">Travellers & Class</Label>
                            <TravelersDropdown
                                travelers={travelers}
                                travelClass={travelClass}
                                onUpdate={handleTravelersUpdate}
                            />
                        </div>
                    </div>


                    {/* Special Fares */}
                    <div className="bg-[#BC1110]/10 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-[#BC1110] text-white text-xs px-3 py-1 rounded-full">
                                More Benefits
                            </span>
                            <h3 className="text-gray-900 font-semibold">Special Fares</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Student", subtitle: "Extra Baggage", icon: "👨‍🎓" },
                                { title: "Senior Citizen", subtitle: "Exclusive Discounts", icon: "👴" },
                                { title: "Armed Forces", subtitle: "Exclusive Discounts", icon: "👮‍♂️" },
                                { title: "Doctors & Nurses", subtitle: "Exclusive Discounts", icon: "👨‍⚕️" },
                            ].map((fare) => (
                                <div
                                    key={fare.title}
                                    className="flex items-center gap-3 p-4 rounded-[5px] border border-gray-300 hover:bg-[#BC1110]/10 cursor-pointer transition"
                                >
                                    <input type="checkbox" className="rounded border-gray-300" />
                                    <div className="flex gap-3 items-center">
                                        <span className="text-2xl">{fare.icon}</span>
                                        <div>
                                            <p className="font-medium text-gray-900">{fare.title}</p>
                                            <p className="text-gray-600 text-sm">{fare.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            className="w-full md:w-auto px-8 py-4 bg-[#BC1110] hover:bg-[#BC1110]/90 text-white rounded-full transition-all font-semibold text-base"
                        >
                            SEARCH FLIGHTS
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

