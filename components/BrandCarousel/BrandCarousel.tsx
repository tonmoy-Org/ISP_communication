"use client";

import { Container, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const BrandCarousel = () => {
    const brands = [
        { id: 1, logo: "/brands/1.png", alt: "Brand 1" },
        { id: 2, logo: "/brands/2.png", alt: "Brand 2" },
        { id: 3, logo: "/brands/3.png", alt: "Brand 3" },
        { id: 4, logo: "/brands/4.png", alt: "Brand 4" },
        { id: 5, logo: "/brands/5.png", alt: "Brand 5" },
        { id: 6, logo: "/brands/6.png", alt: "Brand 6" },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 0, lg: 7 }
            }}
        >
            <Container maxWidth="xl">
                <h2 className="lg:text-[2.3rem] text-3xl font-semibold mb-4 text-center">
                    <span className=""> Collaborating with Industry Leaders</span>
                </h2>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                    itemClass="carousel-item"
                    swipeable
                    draggable
                    arrows={false}
                >
                    {brands.map((brand) => (
                        <Box
                            key={brand.id}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "block",
                                    position: "relative",
                                    filter: "grayscale(100%)",
                                    opacity: 0.7,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        filter: "grayscale(0%)",
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Image
                                    src={brand.logo}
                                    alt={brand.alt}
                                    width={220}
                                    height={120}
                                />
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
};

export default BrandCarousel;
