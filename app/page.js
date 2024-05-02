import Header from "@/components/ui/Home/Header";
import Hero from "@/components/ui/Home/Hero";
import Lastupdate from "@/components/ui/Home/Lastupdate";
import PriceCard from "@/components/ui/Home/PriceCard";
import VisaCard from "@/components/ui/Home/Visacard";
import Wallper from "@/components/ui/Home/Wallper";
import { CircularProgress } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <Header />
        <Hero />
        <PriceCard />
        <VisaCard />
        <Wallper />
        <Lastupdate />
      </div>
    </div>
  );
}
// <div className="flex items-center justify-center">
//   {/* <CircularProgress /> */}
// </div>;
