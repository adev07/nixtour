import React from "react";
import Slider, { Settings } from "react-slick";
import { Button } from "../ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ahamdabad from "../../assets/images/ahmedabad.jpg";
import Amritsar from "../../assets/images/amritsar.jpg";
import Banglore from "../../assets/images/bengalore.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Destination {
    title: string;
    price: string;
    image: string;
}

interface ArrowProps {
    className?: string;
    onClick?: () => void;
    arrowType: "prev" | "next";
}

const CustomArrow: React.FC<ArrowProps> = ({ onClick, arrowType }) => (
    <button
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${arrowType === "prev" ? "left-[-30px]" : "right-[-30px]"
            } bg-white text-black rounded-full shadow-md hover:shadow-lg focus:outline-none p-3 hover:bg-black`}
        onClick={onClick}
        aria-label={arrowType === "prev" ? "Previous Slide" : "Next Slide"}
    >
        {arrowType === "prev" ? <ChevronLeft className="text-black hover:text-white" /> : <ChevronRight className="text-black hover:text-white" />}
    </button>
);

const TravelCarousel: React.FC = () => {

    const destinations: Destination[] = [
        { title: "Ahmedabad", price: "₹ 20,904", image: Ahamdabad },
        { title: "Amritsar", price: "₹ 20,904", image: Amritsar },
        { title: "Bangalore", price: "₹ 20,904", image: Banglore },
        { title: "Ahmedabad", price: "₹ 20,904", image: Ahamdabad },
        { title: "Amritsar", price: "₹ 20,904", image: Amritsar },
        { title: "Bangalore", price: "₹ 20,904", image: Banglore },
    ];

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomArrow arrowType="prev" />,
        nextArrow: <CustomArrow arrowType="next" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="mx-auto py-4 px-3">
            <div className="flex justify-end mb-4">
                <Button
                    variant="outline"
                    className="border-[2px] border-black rounded-[6px] font-semibold hover:bg-gray-100 hover:text-white transition-all"
                >
                    See more
                </Button>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Fly Direct and Fast:</h2>
            <p className="text-gray-600 mb-4">Nonstop Options to Top Travel Spots</p>
            <Slider {...settings}>
                {destinations.map((destination, index) => (
                    <div key={index} className="px-2">
                        <div className="rounded-[5px] overflow-hidden shadow-lg">
                            <img
                                src={destination.image}
                                alt={destination.title}
                                className="w-full h-[300px] object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-semibold">{destination.title}</h3>
                            <p className="text-base">{destination.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TravelCarousel;
