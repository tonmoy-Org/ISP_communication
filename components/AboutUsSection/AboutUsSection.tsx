import React from 'react';
import Image from 'next/image';
import about from '@/public/about/about.jpg';
import { Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const AboutUsSection: React.FC = () => {
    return (
        <Box id="about" sx={{ px: { xs: 0, lg: 10 }, bgcolor: '#F8F9FA', py: 12 }}>
            <Container maxWidth="xl">
                <section className="about-us bg-light">
                    <div className="container mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="lg:text-[2.3rem] text-3xl font-semibold mb-4">
                                About <span className="">ISP COMMUNICATION  Ltd</span>
                            </h2>
                        </div>
                        <p className="text-[17px] text-[#757F95] mb-4">
                            Established in March 2012, ISP COMMUNICATION  Limited is a leading Nationwide Internet Service Provider (ISP) in Bangladesh, licensed by the Bangladesh Telecommunications Regulatory Commission (BTRC).
                        </p>
                        <p className="text-[17px] text-[#757F95] mb-4">
                            With a state-of-the-art redundant backbone infrastructure, 99.9% uptime, 24/7 Network Operations Center (NOC), and cutting-edge infrastructure, ICC delivers reliable, high-speed internet via fiber optic, wireless, and satellite technology.
                        </p>
                        <p className="text-[17px] text-[#757F95] mb-8">
                            Our diverse service portfolio, advanced technology, and multi-channel distribution strategy address key challenges like slow internet, complex setups, and rural connectivity—solidifying ICC as a trusted name in Bangladesh ISP sector.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    Our Mission
                                </h3>
                                <p className="text-[17px] text-[#757F95] mb-6">
                                    Our mission is to become a market leader in the ICT sector by delivering high-quality, cost-effective solutions across Bangladesh through advanced technology and a dedicated team committed to customer satisfaction.
                                </p>

                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    Our Vision
                                </h3>
                                <p className="text-[17px] text-[#757F95] mb-6">
                                    Empowering Bangladesh by connecting people to the digital world through seamless, high-speed internet and value-added services (VAS).
                                </p>

                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    Why Choose ICC?
                                </h3>
                                <ul className="list-none pl-0 space-y-4">
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Future-ready infrastructure.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Expert technical, sales & marketing, and customer support teams.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Nationwide coverage across major cities.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Customer-centric solutions.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon fontSize='medium' sx={{ color: '#757F95', mr: 1 }} />
                                        24/7 support & fully automated billing system.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Highly secured MPLS Network.
                                    </li>
                                    <li className="flex items-center text-[17px] text-[#757F95]">
                                        <CheckCircleIcon sx={{ color: '#757F95', mr: 1 }} />
                                        Multiple Points of Presence (POPs) ensuring stable connectivity.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <Image
                                    className="rounded-lg w-full h-auto"
                                    src={about}
                                    alt="about us"
                                    layout="responsive"
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Box>
    );
};

export default AboutUsSection;
