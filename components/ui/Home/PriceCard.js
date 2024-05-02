function PriceCard() {
  const datas = [1, 2, 3, 4];
  return (
    <div className="w-full bg-[#ECECEC]">
      <div className="container mx-auto flex flex-col gap-4 px-10 py-[50px] lg:px-0">
        <div className="h-20 w-[200px] border-b-4 border-[#E07B35] font-semibold">
          <h2 className="text-[36px] leading-10">PLAN</h2>
          <h2 className="text-[36px] leading-10">
            {"your visa".toUpperCase()}
          </h2>
        </div>
        <div className="card grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {datas.map((_, index) => (
            <div
              className="col-span-1 flex flex-col items-center hover:shadow-lg"
              key={index}
            >
              <div className="heading w-full rounded-t-lg bg-[url(/landing/heading.png)] py-5 text-center text-white hover:rounded-none">
                <h1 className="text-[18px] font-bold uppercase leading-5">
                  1 months single
                </h1>
                <div className="flex items-center justify-center gap-1 ">
                  <p className="text-2xl font-bold">$16</p>{" "}
                  <div className="flex flex-col items-start">
                    <span className=" leading-1 text-[10px]">00</span>{" "}
                    <span className=" leading-1 text-[10px]">1-3pax</span>{" "}
                  </div>
                </div>
              </div>
              <ul className="flex w-full flex-col items-center rounded-b-md  bg-white py-5 text-2xl text-[#464444]">
                <li>Option Line</li>
                <li>Option Line</li>
                <li>Option Line</li>
                <li>Option Line</li>
                <li>Option Line</li>
                <li className="mt-2">
                  <button className="rounded-lg bg-[#E07B35] p-2 text-white">
                    Customize now!
                  </button>
                </li>
              </ul>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
