import { useState, useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DatePicker } from "antd";
import { TravelersDropdown } from "../travellers-dropdown/travellers-dropdown";
import { Calendar, User, PlaneTakeoff, PlaneLanding, Plane, ArrowLeftRight } from 'lucide-react';
import type { Travelers, TravelClass } from "../../../types/booking";
import { useNavigate } from "react-router-dom";
import { useCitiesStore } from "../../../stores/flightStore";
import dayjs from "dayjs";
import { v4 as uuidv4 } from 'uuid';


export default function FlightBooking() {
    const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
    const [returnDate, setReturnDate] = useState<dayjs.Dayjs | null>(null);
    const [showReturn, setShowReturn] = useState(false);
    const [fromCity, setFromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [travelers, setTravelers] = useState<Travelers>({
        adults: 1,
        children: 0,
        infants: 0,
    });
    const [travelClass, setTravelClass] = useState<TravelClass>("Economy");
    const [onwardDate, setOnwardDate] = useState<dayjs.Dayjs | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputFocus, setInputFocus] = useState<"from" | "to" | null>(null);
    const navigate = useNavigate();

    const { cities, fetchCities, isLoading } = useCitiesStore();

    console.log("Cities:", fromCity, toCity);

    const handleTravelersUpdate = (newTravelers: Travelers, newClass: TravelClass) => {
        setTravelers(newTravelers);
        setTravelClass(newClass);
    };

    const swapCities = () => {
        const temp = fromCity;
        setFromCity(toCity);
        setToCity(temp);
    };

    // Debouncing function
    const debounce = (func: (...args: any[]) => void, delay: number) => {
        let timer: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleCityInput = useCallback(
        debounce((prefix: string) => {
            if (prefix.trim().length > 2) {
                fetchCities(prefix);
                setShowSuggestions(true);
            } else {
                setShowSuggestions(false);
            }
        }, 300),
        []
    );

    const handleSearchFlights = () => {
        const fromAirportCode = fromCity.match(/\(([^)]+)\)/)?.[1] || "";
        const toAirportCode = toCity.match(/\(([^)]+)\)/)?.[1] || "";

        const url = new URL("https://fares.nixtour.com/Metabook/Home/Landing");
        const params: { [key: string]: string } = {
            CompanyId: "KN2182",
            LanguageCode: "GB",
            FlightMode: "I",
            JourneyType: tripType === "round-trip" ? "R" : "O",
            websiteId: "13671",
            ClientId: "",
            SalesChannel: "Online-DC",
            AgentName: "",
            SearchType: "Flight",
            CabinClass: travelClass === "Economy" ? "3" : travelClass === "Business" ? "2" : travelClass === "First Class" ? "1" : "4",
            Dep: fromAirportCode,
            Arr: toAirportCode,
            DepDt: onwardDate ? onwardDate.format("DD-MMM-YYYY") : "",
            RetDt: returnDate ? returnDate.format("DD-MMM-YYYY") : "",
            Adt: travelers.adults.toString(),
            Chd: travelers.children.toString(),
            Inf: travelers.infants.toString(),
            cl: travelClass === "Economy" ? "3" : travelClass === "Business" ? "2" : travelClass === "First Class" ? "1" : "4",
            DirectFlight: "False",
            IntAirline: "",
            DepCity: fromCity,
            ArrCity: toCity,
            LCCRTChkBox: "",
            DepDate: onwardDate ? onwardDate.format("DD-MMM-YYYY") : "",
            RetDate: returnDate ? returnDate.format("DD-MMM-YYYY") : "",
            Airline: "",
            Flexi: "False",
            comp_currency: "INR",
            uid: uuidv4(),
            DepCountryCode: "IN",
            ArrCountryCode: "IN",
            IsLogin: "false",
            BranchId: "2214"
        };

        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key as keyof typeof params] as string)
        );

        console.log("Final URL:", url.toString());
        window.location.href = url.toString();
    };


    return (
        <div className="p-4">
            <div className="max-w-6xl mx-auto rounded-2xl backdrop-blur-xl bg-white/30 p-6 shadow-xl border border-white/30">
                <form className="space-y-8"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearchFlights();
                    }}
                >
                    {/* Trip Type Selection */}
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                            <RadioGroup
                                defaultValue="one-way"
                                onValueChange={(value) => {
                                    setTripType(value as "one-way" | "round-trip");
                                    setShowReturn(value === "round-trip");
                                    if (value !== "round-trip") {
                                        setReturnDate(null);
                                    }
                                }}
                                className="flex gap-6"
                            >
                                {["one-way", "round-trip"].map((type) => (
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
                                onClick={() => navigate("/group-booking", { replace: true })}
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
                                onChange={(e) => {
                                    setFromCity(e.target.value);
                                    handleCityInput(e.target.value);
                                }}
                                onFocus={() => setInputFocus("from")}
                                placeholder="Enter city or airport code"
                                className="mt-2 w-full px-4 py-4 rounded-[12px] border border-gray-300 focus:outline-none"
                            />
                            {showSuggestions && inputFocus === "from" && (
                                <ul className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-md mt-2 max-h-60 overflow-auto w-auto">
                                    {isLoading ? (
                                        <li className="p-2 text-center">Loading...</li>
                                    ) : cities.length > 0 ? (
                                        cities.map((city) => (
                                            <li
                                                key={uuidv4()}
                                                onClick={() => {
                                                    setFromCity(`${city.CityName}, ${city.CountryName} - ${city.AirportName} (${city.AirportCode})`);
                                                    setShowSuggestions(false);
                                                }}
                                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {city.CityName}, {city.CountryName} - {city.AirportName} ({city.AirportCode})
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-center">No results found</li>
                                    )}
                                </ul>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={swapCities}
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors 
                                ${showReturn ? "sm:mt-[-99px] mt-[-156px]" : "sm:mt-[-40px] mt-[-98px]"}`}
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
                                onChange={(e) => {
                                    setToCity(e.target.value);
                                    handleCityInput(e.target.value);
                                }}
                                onFocus={() => setInputFocus("to")}
                                placeholder="Enter city or airport code"
                                className="mt-2 w-full px-4 py-4 rounded-[12px] border border-gray-300 focus:outline-none"
                            />
                            {showSuggestions && inputFocus === "to" && (
                                <ul className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-md mt-2 max-h-60 overflow-auto w-auto">
                                    {isLoading ? (
                                        <li className="p-2 text-center">Loading...</li>
                                    ) : cities.length > 0 ? (
                                        cities.map((city) => (
                                            <li
                                                key={uuidv4()}
                                                onClick={() => {
                                                    setToCity(`${city.CityName}, ${city.CountryName} - ${city.AirportName} (${city.AirportCode})`);
                                                    setShowSuggestions(false);
                                                }}
                                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {city.CityName}, {city.CountryName} - {city.AirportName} ({city.AirportCode})
                                            </li>
                                        ))
                                    ) : (
                                        <li className="p-2 text-center">No results found</li>
                                    )}
                                </ul>
                            )}
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
                                disabledDate={(current) => {
                                    return current && current.isBefore(dayjs().startOf("day"));
                                }}
                                onChange={(date) => setOnwardDate(date)}
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
                                    disabledDate={(current) => {
                                        return (
                                            current &&
                                            (current.isBefore(onwardDate?.startOf("day") || dayjs().startOf("day")))
                                        );
                                    }}
                                    onChange={(date) => setReturnDate(date)}
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

