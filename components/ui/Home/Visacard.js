import TabVisa from "./Tab";

function VisaCard() {
  return (
    <div className="w-full bg-white">
      <div className=" container mx-auto flex flex-col flex-wrap items-start gap-2 px-2 py-8 font-semibold lg:flex-nowrap lg:gap-8 lg:px-0 lg:py-[50px]">
        <div className="h-20 w-[max-content] border-b-4 border-[#E07B35]">
          <h2 className="text-[36px] leading-10">
            {"customize your".toUpperCase()}
          </h2>
          <h2 className="text-[36px] leading-10">VISA OPTION</h2>
        </div>
        <div className=" w-full ">
          <TabVisa />
        </div>
      </div>
    </div>
  );
}

export default VisaCard;
