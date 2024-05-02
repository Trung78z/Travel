import Image from "next/image";

function Hero() {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-wrap  justify-center gap-5 bg-white px-10 md:flex-nowrap lg:px-0">
      <div className="max-w-[835px]">
        <h2 className="text-[13px] font-bold text-[#464646]">
          Welcome! Thanks for chosing Onlinevisavn.com/org!
        </h2>
        <div className="text-justify text-[13px] font-normal text-[#464646]">
          {" "}
          <p>
            Please understand that the website is not govermental but
            commercial. By cooperating with Vietnam Immigration Department,
            Onlinevisavn team provides visitors who travel to Vietnam by
            airplane with a very simple and convenient VOA (Visa On Arrival) and
            other services.
          </p>
          <p>
            Confidently, we are the most trusted site doing Vietnam immigration
            processes thank to our experience and very good relationship with
            the Immigration Department, convenience, budget saving, fastest
            online service, useful tips or guidance which help you a lots orient
            your trip in Vietnam.
          </p>
        </div>
      </div>
      <div className="flex shrink-0 flex-col">
        <Image src="/landing/contact.png" alt="" width={265} height={123} />
        <div className=" relative rounded-t-lg bg-[#E2862B] py-2 text-center">
          <span className="absolute left-5 top-1/2  h-4 w-4 -translate-y-1/2 rounded-full bg-green"></span>
          <p className="text-[13px]">OnlineVisaVN Support Team</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
