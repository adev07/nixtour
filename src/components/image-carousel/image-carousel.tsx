import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

interface Image {
    src: string;
    alt: string;
}

interface ImageCarouselProps {
    images: Image[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="w-full max-w-[1350px]">
            {images.map((image, index) => (
                <div key={index} className="flex items-center justify-center">
                    <img
                        className="object-contain max-w-full w-full"
                        src={image.src}
                        alt={image.alt}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;
