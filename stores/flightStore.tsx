import { create } from "zustand";
import axios from "axios";

interface City {
    id: number;
    name: string;
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
            const response = await axios.post("https://nixtour.com/getCities", {
                prefix,
            });

            set({
                cities: response.data,
                isLoading: false,
                error: null,
            });
        } catch (error: any) {
            set({
                cities: [],
                isLoading: false,
                error: error.message || "An error occurred while fetching cities",
            });
        }
    },
}));
