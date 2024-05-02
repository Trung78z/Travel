import Image from "next/image";
const datas = [1, 2, 3, 4];
export default function Lastupdate() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto flex flex-col gap-4 px-10 py-[50px] lg:px-0">
        <div className=" w-[max-content] border-b-4 border-[#E07B35]">
          <h2 className="text-[36px] ">{"latest news".toUpperCase()}</h2>
        </div>
        <div className="card grid grid-cols-1 gap-4 md:grid-cols-2   lg:grid-cols-4">
          {datas.map((_, index) => (
            <div
              className="col-span-1 flex flex-col items-center hover:rounded-none hover:shadow-xl"
              key={index}
            >
              <div className="heading relative h-[170px] w-full rounded-t-md ">
                <Image
                  src="/landing/main-header.png"
                  alt=""
                  fill={true}
                  className="rounded-t-md object-cover hover:rounded-none "
                />
              </div>
              <ul className="flex w-full flex-col items-center justify-center gap-4 rounded-b-md bg-[#efefef] px-4 py-5 text-[#464444]">
                <li className="font-medium">
                  Focused on helping our clients to build a successful business
                </li>
                <li className="text-sm">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </li>
              </ul>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
