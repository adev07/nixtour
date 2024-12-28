import { create } from "zustand";
import axios from "axios";

interface City {
    CityName: string;
    CountryName: string;
    AirportName: string;
    AirportCode: string;
    CountryCode: string;
    ProvinceCode: string;
    ProvinceName: string;
    IsCity: boolean;
}

interface CitiesStore {
    cities: City[];
    isLoading: boolean;
    error: string | null;
    fetchCities: (prefix: string) => Promise<void>;
}

export const useCitiesStore = create<CitiesStore>((set) => ({
    cities: [],
    isLoading: false,
    error: null,

    fetchCities: async (prefix) => {
        set({ isLoading: true, error: null });

        try {
            const url = `https://fares.nixtour.com/Online3s/Services/MainService.asmx/GetCities?strInputXML=%3CGetCities%3E%3CCompCode%3EKN2182%3C/CompCode%3E%3CPrefix%3E${encodeURIComponent(
                prefix
            )}%3C/Prefix%3E%3CLangCode%3EGB%3C/LangCode%3E%3CProduct%3EAIR%3C/Product%3E%3CCountryCode%3E%3C/CountryCode%3E%3C/GetCities%3E`;

            const response = await axios.get(url, { headers: { "Content-Type": "text/xml" } });

            console.log("Raw response:", response.data);

            // Extract the JSON string from the <string> tag using a regular expression
            const regex = /<string[^>]*>(.*?)<\/string>/s;
            const match = response.data.match(regex);

            if (match && match[1]) {
                // Fix the JSON string format by adding quotes around the keys
                const citiesJsonString = match[1].replace(/([a-zA-Z0-9_]+)(?=\s*:)/g, '"$1"');

                // Parse the fixed JSON string into an actual array of cities
                const cities = JSON.parse(citiesJsonString) || [];
                console.log("Parsed cities data:", cities); // Log the final cities data

                set({
                    cities: cities,
                    isLoading: false,
                    error: null,
                });
            } else {
                console.error("No city data found in the response.");
                set({
                    cities: [],
                    isLoading: false,
                    error: "No city data found in the response.",
                });
            }
        } catch (error: any) {
            console.error("Error during API request or parsing:", error);
            set({
                cities: [],
                isLoading: false,
                error: error?.response?.data?.message || error?.message || "An error occurred while fetching cities",
            });
        }
    },
}));
