import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { ArrowLeftRight, Bed, Briefcase, Umbrella } from 'lucide-react'

export function FlightSearch() {
    const [showAdvanced, setShowAdvanced] = useState(false)

    return (
        <div className="mx-auto p-6">
            <h1 className="text-[28px] mb-4 font-medium">
                Millions of budget-friendly flights, all in one search.
            </h1>

            <div className="border rounded-lg p-6 shadow-md">
                <div className="grid grid-cols-4 mb-8 border-b">
                    <button className="flex items-center justify-center gap-2 py-3 text-[#8B0000] border-b-2 border-[#8B0000]">
                        <span className="text-lg">✈</span>
                        Flight
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3">
                        <span className="text-lg text-[#8b0000]"><Bed /></span>
                        Hotel
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3">
                        <span className="text-lg text-[#8b0000]"><Umbrella /></span>
                        Holiday
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3">
                        <span className="text-lg text-[#8b0000]"><Briefcase /></span>
                        Insurance
                    </button>
                </div>

                <div className="flex justify-between mb-6">
                    <Button variant="outline" className="rounded-full px-8 border-[1px] border-[#777]">
                        Multi City
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" className="rounded-full px-8 border-[1px] border-[#777]">
                            Group Booking
                        </Button>
                        <span className="text-xs text-[#a30f0d] font-semibold">* For more than 9 passengers</span>
                    </div>
                </div>

                <div className="grid gap-4">
                    <div className="grid grid-cols-3 gap-4 items-center justify-center">
                        <div className="flex gap-2 col-span-2">
                            <div className="flex-1 relative">
                                <Input
                                    type="text"
                                    placeholder="Departure Airport"
                                    className="h-14 rounded-[20px] border-[1px] border-[#777]"
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="mt-1 bg-[#f5f5f5] hover:bg-[#e5e5e5] rounded-full p-6"
                            >
                                <ArrowLeftRight className="h-6 w-6" />
                            </Button>
                            <div className="flex-1">
                                <Input
                                    type="text"
                                    placeholder="Arrival Airport"
                                    className="h-14 rounded-[20px] border-[1px] border-[#777]"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Input
                                type="date"
                                className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]"
                                value="2023-12-23"
                            />
                            <Input
                                type="date"
                                className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]"
                                placeholder="Return Date"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 items-center justify-center gap-4 mb-4">
                        <div className="flex gap-4 col-span-2">
                            <Select defaultValue="1">
                                <SelectTrigger className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]">
                                    <SelectValue placeholder="1 Adult" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1 Adult</SelectItem>
                                    <SelectItem value="2">2 Adults</SelectItem>
                                    <SelectItem value="3">3 Adults</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="economy">
                                <SelectTrigger className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]">
                                    <SelectValue placeholder="Economy" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="economy">Economy</SelectItem>
                                    <SelectItem value="business">Business</SelectItem>
                                    <SelectItem value="first">First Class</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            className="w-full h-14 rounded-[20px] bg-[#8B0000] hover:bg-[#660000] text-white"
                        >
                            Search Flights
                        </Button>
                    </div>



                </div>

                <div>
                    <Button
                        variant="link"
                        className="text-[#8B0000] p-0 text-base"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                    >
                        Advanced Search {showAdvanced ? "▲" : " ▼"}
                    </Button>

                    {showAdvanced && (
                        <div className="mt-4 space-y-4">
                            <div className="grid grid-cols-3">
                                <div className="flex gap-4 col-span-2">
                                    <Select defaultValue="inr">
                                        <SelectTrigger className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]">
                                            <SelectValue placeholder="Currency - Indian Rupees (INR)" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="inr">Indian Rupees (INR)</SelectItem>
                                            <SelectItem value="usd">US Dollar (USD)</SelectItem>
                                            <SelectItem value="eur">Euro (EUR)</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Input
                                        type="text"
                                        placeholder="Type airline name or code..."
                                        className="flex-1 h-14 rounded-[20px] border-[1px] border-[#777]"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-8">
                                <label className="flex items-center gap-2">
                                    <Checkbox />
                                    <span>Direct Flights</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <Checkbox />
                                    <span>Student Fare</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <Checkbox />
                                    <span>My dates are flexible (+/- 3 days)</span>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

