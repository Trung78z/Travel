function Header() {
  return (
    <div className="  flex h-52 max-w-full items-center bg-[url(/landing/main-header.png)] bg-cover  bg-no-repeat px-10   text-white md:h-[400px] md:px-24 lg:h-[550px] lg:px-32 xl:px-40">
      <div className=" left-0 flex max-w-[400px] flex-1 shrink-0 flex-col items-start ">
        <p className="border-b-2 border-[#E07B35] ">VISA ONLINE</p>
        <h1 className="text-[20px] font-bold md:text-[32px]  lg:text-[50px]">
          {"fast & simple easy visa to vietnam".toUpperCase()}
        </h1>
        <hr />
        <p className="pr-40 text-[12px] font-normal leading-6 lg:text-[16px]">
          Apply with us now with 4 simple steps
        </p>
      </div>
    </div>
  );
}

export default Header;
