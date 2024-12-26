import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Uzbekistan from "../../assets/images/Uzbekistan-Airways.jpg";
import AeroFloat from "../../assets/images/Aeroflot.jpg";
import emirates from "../../assets/images/Emirates-Airlines.jpg";
import AirIndia from "../../assets/images/Air-India.jpg";
import Indigo from "../../assets/images/Indigo-Airlines.jpg";
import etihad from "../../assets/images/Etihad-Airways.jpg";
import SingaporeAirlines from "../../assets/images/Singapore-Airlines.jpg";
import malaysia from "../../assets/images/Malaysia-Airlines.jpg";
import oman from "../../assets/images/Oman-Air.jpg";
import QuatarAirways from "../../assets/images/Qatar-Airways.jpg";
import Srilankan from "../../assets/images/srilankan airlines logo.png";

interface Airline {
    name: string;
    logo: string;
}

interface ArrowProps {
    onClick?: () => void;
    arrowType: "prev" | "next";
    isVisible: boolean;
}

const CustomArrow: React.FC<ArrowProps> = ({ onClick, arrowType, isVisible }) => {
    if (!isVisible) return null;
    return (
        <button
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${arrowType === "prev" ? "left-[-20px]" : "right-[-20px]"
                } bg-white text-black rounded-full shadow-md hover:shadow-lg focus:outline-none p-3`}
            onClick={onClick}
            aria-label={arrowType === "prev" ? "Previous Slide" : "Next Slide"}
        >
            {arrowType === "prev" ? <ChevronLeft className="text-black" /> : <ChevronRight className="text-black" />}
        </button>
    );
};

const GroupBookingFlights: React.FC = () => {
    const airlines: Airline[] = [
        { name: "Aeroflot Group Booking", logo: AeroFloat },
        { name: "Uzbekistan Airways Group Booking", logo: Uzbekistan },
        { name: "Emirates Airlines Group Booking", logo: emirates },
        { name: "Air India Group Booking", logo: AirIndia },
        { name: "Indigo Airlines Group Booking", logo: Indigo },
        { name: "Etihad Airways Group Booking", logo: etihad },
        { name: "Singapore Airlines Group Booking", logo: SingaporeAirlines },
        { name: "Malaysia Airlines Group Booking", logo: malaysia },
        { name: "Oman Air Group Booking", logo: oman },
        { name: "Qatar Airways Group Booking", logo: QuatarAirways },
        { name: "Srilankan Airlines Group Booking", logo: Srilankan },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="mx-auto py-4 px-3">
            <h2 className="text-2xl font-semibold mb-4">Popular Airlines Group Bookings</h2>
            <div className="relative">
                <CustomArrow
                    arrowType="prev"
                    isVisible={currentSlide > 0}
                    onClick={handlePrevClick}
                />
                <Slider ref={sliderRef} {...settings}>
                    {airlines.map((airline, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white rounded-[5px] shadow-md border flex flex-col items-center py-4">
                                <img
                                    src={airline.logo}
                                    alt={airline.name}
                                    className="w-full h-16 object-contain mb-4"
                                />
                                <h3 className="text-sm font-semibold text-center">{airline.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
                <CustomArrow
                    arrowType="next"
                    isVisible={currentSlide < airlines.length - 7}
                    onClick={handleNextClick}
                />
            </div>
        </div>
    );
};

export default GroupBookingFlights;
