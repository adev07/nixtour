import React, { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Gulf from "../../assets/images/gulf-air.png";
import Qatar from "../../assets/svgs/qatar new.svg";
import Singapore from "../../assets/images/Singapore-Airlines.png";
import Swiss from "../../assets/images/Swiss-Air.png";
import Lufthansa from "../../assets/images/Lufthansa.png";
import Airfrance from "../../assets/images/Air-France.png";
import Srilankan from "../../assets/images/sri-lankan.png";
import BritishAir from "../../assets/images/british-air.png";
import AirCanada from "../../assets/images/air-canada.png";
import AeroFloat from "../../assets/images/aeroflot.png";

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

const InternationalAirline: React.FC = () => {
    const airlines: Airline[] = [
        { name: "Aeroflot Air", logo: AeroFloat },
        { name: "Air Canada", logo: AirCanada },
        { name: "British Air", logo: BritishAir },
        { name: "Gulf Air", logo: Gulf },
        { name: "Qatar Air", logo: Qatar },
        { name: "Singapore Airlines", logo: Singapore },
        { name: "Swiss Air", logo: Swiss },
        { name: "Lufthansa", logo: Lufthansa },
        { name: "Air France", logo: Airfrance },
        { name: "Srilankan Airline", logo: Srilankan },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
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
                settings: { slidesToShow: 2 },
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
        <div className="mx-auto py-4 sm:px-3">
            <h2 className="text-2xl font-semibold mb-4">Popular International Airlines</h2>
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
                                    className="w-16 h-16 object-contain mb-4"
                                />
                                <h3 className="text-base font-semibold text-center">{airline.name}</h3>
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

export default InternationalAirline;
