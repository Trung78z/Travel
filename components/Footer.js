import Image from "next/image";

function Footer() {
  return (
    <div className="h-full w-full bg-[#252525]">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-10 py-[50px] md:grid-cols-6 lg:grid-cols-11 lg:px-0">
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <Mysocial />
        </div>{" "}
        <div className="flex flex-col gap-10  md:col-span-3 lg:col-span-3">
          <div className="flex flex-col items-start">
            <h1 className="text-primary text-2xl font-semibold ">
              Extra Services
            </h1>
            <ul className="mt-2 flex flex-col gap-2 text-sm font-light text-white">
              <li>Airport Fast-Track Services</li>
              <li>Package Visa Services</li>
              <li>Car Pick-up Service</li>
              <li>Hotel Booking Service</li>
              <li>Visa Extension or renewal</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-primary text-2xl font-semibold ">
              Useful Infomation
            </h1>
            <ul className="mt-2 flex flex-col gap-2 text-sm font-light text-white">
              <li>Payment Guidelines</li>
              <li>Make Payment</li>
              <li>Vietnam Embassy</li>
              <li>Check Status</li>
              <li>Question & Answer</li>
            </ul>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-10 md:col-span-3 lg:col-span-3">
          <div className="flex flex-col items-start">
            <h1 className="text-primary text-2xl font-semibold ">
              Check Requirements
            </h1>
            <ul className="mt-2 flex flex-col gap-2 text-sm font-light text-white">
              <li>Vietnam Visa for</li>
              <li>Vietnam Visa for American</li>
              <li>Vietnam Visa for Australion</li>
              <li>Vietnam Visa for Bristish</li>
              <li>Vietnam Visa for Other Citizens</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-primary text-2xl font-semibold ">Services</h1>
            <ul className="mt-2 flex flex-col gap-2 text-sm font-light text-white">
              <li>Support Center</li>
              <li>Universal Term of Services</li>
              <li>Legal Agreements</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>{" "}
        <div className="flex flex-col justify-between gap-10 md:col-span-3 lg:col-span-3">
          <div>
            <h1 className="text-primary text-2xl font-semibold ">
              Subscribe for our newsletters
            </h1>
            <div className="flex items-center">
              <input
                type="email"
                id="text"
                name="text"
                placeholder="Enter your email here!"
                className="h-10  rounded-l-md border border-gray bg-transparent p-1 pl-2"
              />
              <button className="h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M0 0H26C28.2091 0 30 1.79086 30 4V26C30 28.2091 28.2091 30 26 30H0V0Z"
                    fill="#C98942"
                  />
                  <path
                    d="M21.7722 9.2253C22.0759 9.52571 22.0759 10.0128 21.7722 10.3132L13.2166 18.7747C12.9129 19.0751 12.4204 19.0751 12.1167 18.7747L8.22781 14.9285C7.92406 14.6281 7.92406 14.1411 8.22781 13.8407C8.53155 13.5403 9.02401 13.5403 9.32775 13.8407L12.6667 17.1429L20.6723 9.2253C20.976 8.9249 21.4685 8.9249 21.7722 9.2253Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
          <div className=" flex items-center gap-4">
            <div className="relative h-8 w-12">
              <Image src="/footer/a-discover.png" alt="" fill={true}></Image>
            </div>{" "}
            <div className="relative h-8 w-12">
              <Image src="/footer/a-mastercard.png" alt="" fill={true}></Image>
            </div>{" "}
            <div className="relative h-8 w-12">
              <Image src="/footer/a-paypal.png" alt="" fill={true}></Image>
            </div>{" "}
            <div className="relative h-8 w-12">
              <Image src="/footer/a-visa.png" alt="" fill={true}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function Mysocial() {
  return (
    <div className="flex flex-col items-start gap-10">
      <div className="relative flex h-20 w-40 items-center self-stretch">
        <Image src="/logo/onlinevisavn_logo-023.png" alt="" fill={true}></Image>
      </div>
      <div className=" text-sm font-light text-white">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </p>
      </div>
      <div className="socials flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM17.3162 9.67458H15.2119C14.9625 9.67458 14.6854 10.0027 14.6854 10.4387V11.9583H17.3177L16.9196 14.1254H14.6854V20.631H12.2019V14.1254H9.94875V11.9583H12.2019V10.6837C12.2019 8.855 13.4706 7.36896 15.2119 7.36896H17.3162V9.67458Z"
            fill="#C8C8C8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM19.6948 11.4683C19.7006 11.5879 19.7021 11.7075 19.7021 11.8242C19.7021 15.47 16.9298 19.6715 11.8577 19.6715C10.3002 19.6715 8.85062 19.2165 7.63146 18.4319C7.84583 18.4581 8.06604 18.4683 8.28917 18.4683C9.58125 18.4683 10.7698 18.0294 11.7133 17.2885C10.5073 17.2652 9.48937 16.469 9.13792 15.3752C9.30562 15.4058 9.47771 15.4233 9.65562 15.4233C9.90646 15.4233 10.1515 15.3898 10.3819 15.3271C9.12042 15.0733 8.16958 13.9592 8.16958 12.6233V12.5898C8.54146 12.7954 8.96729 12.9208 9.41937 12.9354C8.67854 12.4396 8.19292 11.5967 8.19292 10.6385C8.19292 10.134 8.32854 9.65854 8.56625 9.25167C9.92687 10.92 11.9569 12.0167 14.2494 12.1348C14.2012 11.9321 14.1779 11.7221 14.1779 11.5048C14.1779 9.98375 15.4117 8.74708 16.9356 8.74708C17.7275 8.74708 18.445 9.0825 18.9481 9.61917C19.5767 9.49375 20.1658 9.26625 20.6981 8.94979C20.4925 9.59292 20.0565 10.134 19.4862 10.4767C20.0448 10.4081 20.5756 10.2608 21.07 10.0406C20.701 10.5933 20.2329 11.0804 19.6948 11.4683Z"
            fill="#C8C8C8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM13.1935 20.0098C12.3142 20.4371 11.3677 20.4823 11.0017 20.4823C10.9317 20.4823 10.8923 20.4823 10.8923 20.4823C10.8923 20.4823 10.8587 20.4823 10.8135 20.4823C10.2419 20.4823 7.39667 20.351 7.39667 17.7596C7.39667 15.2133 10.4956 15.0135 11.445 15.0135H11.4698C10.9215 14.2815 11.0352 13.5435 11.0352 13.5435C10.9871 13.5465 10.9171 13.5494 10.831 13.5494C10.4737 13.5494 9.78396 13.4925 9.19187 13.1104C8.46562 12.6438 8.09812 11.849 8.09812 10.7494C8.09812 7.64167 11.4917 7.51625 11.5252 7.51333H14.9144V7.58771C14.9144 7.96687 14.2333 8.04125 13.7696 8.10396C13.6121 8.12729 13.2956 8.15792 13.2067 8.20312C14.0656 8.6625 14.2042 9.38292 14.2042 10.4562C14.2042 11.6783 13.7258 12.3244 13.2183 12.7779C12.9033 13.0594 12.6569 13.2796 12.6569 13.5756C12.6569 13.8658 12.9952 14.1619 13.389 14.5075C14.0321 15.0748 14.9144 15.8463 14.9144 17.1485C14.9144 18.4946 14.3354 19.4571 13.1935 20.0098ZM20.5625 14H18.375V16.1875H16.9167V14H14.7292V12.5417H16.9167V10.3542H18.375V12.5417H20.5625V14ZM11.4085 15.6771C11.3327 15.6771 11.2569 15.68 11.1796 15.6858C10.5321 15.734 9.93417 15.976 9.5025 16.3698C9.07375 16.7577 8.855 17.2477 8.88562 17.7421C8.95125 18.779 10.064 19.3856 11.4158 19.2894C12.7458 19.1931 13.6325 18.426 13.5683 17.3892C13.5071 16.415 12.6598 15.6771 11.4085 15.6771ZM12.6831 10.0406C12.3302 8.80104 11.7615 8.43354 10.8777 8.43354C10.7829 8.43354 10.6867 8.44812 10.5948 8.47292C10.2112 8.58229 9.90646 8.90167 9.73729 9.37708C9.56375 9.85833 9.55354 10.36 9.70229 10.9317C9.97208 11.954 10.6983 12.6948 11.4304 12.6948C11.5267 12.6948 11.6229 12.6831 11.7133 12.6554C12.514 12.4308 13.0156 11.2087 12.6831 10.0406Z"
            fill="#C8C8C8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM10.5729 19.8027H7.73792V10.6794H10.5729V19.8027ZM9.13792 9.55937C8.2425 9.55937 7.66354 8.925 7.66354 8.14042C7.66354 7.33979 8.26 6.72437 9.17437 6.72437C10.0887 6.72437 10.6487 7.33979 10.6662 8.14042C10.6662 8.925 10.0887 9.55937 9.13792 9.55937ZM20.9271 19.8027H18.0921V14.7467C18.0921 13.5698 17.6808 12.7706 16.6556 12.7706C15.8725 12.7706 15.4073 13.3117 15.2017 13.8323C15.1258 14.0175 15.1069 14.28 15.1069 14.541V19.8012H12.2704V13.5888C12.2704 12.4498 12.234 11.4975 12.196 10.6779H14.6592L14.789 11.9452H14.8458C15.2192 11.3502 16.1335 10.4723 17.6633 10.4723C19.5285 10.4723 20.9271 11.7221 20.9271 14.4083V19.8027Z"
            fill="#C8C8C8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M14 0C6.26792 0 0 6.26792 0 14C0 21.7321 6.26792 28 14 28C21.7321 28 28 21.7321 28 14C28 6.26792 21.7321 0 14 0ZM14.9581 17.3177C14.0598 17.2492 13.6835 16.8044 12.9806 16.3785C12.5942 18.4071 12.1217 20.3525 10.7217 21.369C10.2885 18.3006 11.3546 15.9994 11.8504 13.5538C11.006 12.1319 11.951 9.27208 13.7331 9.975C15.925 10.8442 11.8344 15.2615 14.5804 15.8142C17.4475 16.3888 18.6185 10.8383 16.8408 9.03583C14.2712 6.42979 9.36396 8.97604 9.96771 12.7065C10.1135 13.6179 11.0571 13.895 10.344 15.1535C8.70042 14.789 8.20896 13.4925 8.27312 11.7644C8.37375 8.93521 10.815 6.95333 13.2621 6.68062C16.3581 6.33646 19.2631 7.81667 19.6656 10.7304C20.1162 14.0175 18.2671 17.5744 14.9581 17.3177Z"
            fill="#C8C8C8"
          />
        </svg>
      </div>
    </div>
  );
}
