import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Foooter/Footer";
import CustomerCare from "@/components/Chat/Chat";


export const metadata: Metadata = {
  title: "ISP COMMUNICATION  :: A Broadband Company",
  description: "ISP COMMUNICATION  is a broadband company in Bangladesh. We provide high-speed internet service for home and corporate users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Navbar />
        {children}
        <Footer />
        <CustomerCare />
      </body>
    </html>
  );
}
