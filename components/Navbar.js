"use client";
import { navItem } from "@/data/placeholder";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop >= 30 && scrollTop >= 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHeaderVisible]);
  const currentTime = new Date();
  const vietnamTime = new Date();
  // const vietnamTime = new Date(currentTime.getTime() + 7 * 60 * 60 * 1000);
  const hours = vietnamTime.getHours().toString().padStart(2, "0");
  const minutes = vietnamTime.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  return (
    <div className="sticky top-0 z-10 h-full w-full ">
      {isHeaderVisible && (
        <div className="flex h-[26px] w-full items-center justify-end bg-[#464646] px-[160px]">
          <div className="flex items-center gap-2 text-center text-[12px] text-white">
            <p>{"Vietnam(gmt+7:00)".toUpperCase()}</p>
            <span>
              {hours}:{minutes}
            </span>
            <span>{ampm}</span>
          </div>
        </div>
      )}

      <nav className="sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-white px-40 shadow-md  ">
        <div className="img relative h-20 w-40 flex-shrink-0">
          <Link href="/">
            <Image
              src={"/logo/onlinevisavn_logo-02 1.png"}
              alt=""
              fill={true}
              className=""
            />{" "}
          </Link>
        </div>
        <div className="nav_item hidden md:block">
          <ul className=" flex items-center gap-[10px] px-4 py-7 text-[#E07B35]">
            {navItem.map((data) => (
              <Link
                href={data.url}
                key={data.id}
                className="relative flex items-center gap-[10px] font-medium transition-all hover:text-[#996139]"
              >
                {" "}
                {data.url === pathName && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className="absolute left-[5px] top-[70%] h-[1px] w-full bg-[#E07B35]"
                  />
                )}
                <SVGNAV />
                <li className="line text-[16px] leading-4">{data.title}</li>
              </Link>
            ))}
            <SVGNAV />
            <li className="h-8 w-8">
              <SvgSearch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
const SvgSearch = () => {
  return <Image src="/logo/search.png" alt="" width={30} height={30} />;
};
const SVGNAV = () => {
  return <Image src="/logo/seperator.png" width={1} height={60} alt="" />;
};
export default Navbar;
