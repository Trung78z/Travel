"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { CheckDelete, SvgTab } from "@/data/svg";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabVisa() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let [categories] = useState([
    {
      id: 1,
      title: "Visa option",
      reviews: " Review & edit your information",
    },
    {
      id: 2,
      title: "Applicant Details",
      reviews: " Review & edit your information",
    },
    {
      id: 3,
      title: "Review and Payments",
      reviews: " Review & edit your information",
    },
  ]);

  return (
    <div className="w-full rounded-md bg-white px-2 py-4 sm:px-0">
      <Tab.Group
        selectedIndex={selectedIndex}
        onChange={(e) => {
          setSelectedIndex(e);
        }}
        vertical
      >
        <Tab.List className=" flex flex-wrap justify-between space-x-1 rounded-xl p-1 lg:flex-nowrap">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg p-5 py-2.5 text-sm font-medium leading-5",
                  "ring-offset-blue-400 ring-white/60 ring-offset-2 focus:outline-none focus:ring-2",
                  selected
                    ? "text-blue-700 text-primary border-primary bg-[#f5f5f5] shadow"
                    : "text-blue-100 hover:bg-[#e7e4e4] ",
                )
              }
            >
              <div className="flex items-center justify-start gap-4 lg:gap-2">
                <div className=" flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full border-2 border-dashed">
                  <h1 className="text-2xl font-bold">{category.id}</h1>
                </div>
                <div className="flex flex-col items-start text-start">
                  <h2 className=" text-xl font-semibold">{category.title}</h2>
                  <p className="text-sm font-normal text-[#8d8c8c]">
                    {category.reviews}
                  </p>
                </div>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className="relative mt-10 flex flex-col rounded-xl border-gray-dark shadow-xl">
              <div className="absolute left-0 top-0 hidden -translate-y-7 translate-x-40 lg:block">
                <SvgTab />
              </div>
              <div className="px-4 py-4 lg:px-10">
                <h1 className="py-4 uppercase">visa option</h1>
                <hr className="text-primary h-2 text-2xl" />
                <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="NumberofApplicants"
                        className="text-sm font-medium"
                      >
                        Number of Applicants
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="NumberofApplicants"
                          required
                          placeholder="Only 1 applicant"
                          className="w-full rounded-l-md border p-2 text-xs"
                        />
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Purposeofvisit"
                        className="text-sm font-medium"
                      >
                        Purpose of visit
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="Purposeofvisit"
                          required
                          placeholder="Tourist & Visit Family"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="TypeofVisa"
                        className="text-sm font-medium"
                      >
                        Type of Visa
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="TypeofVisa"
                          required
                          placeholder="1 - 3 month single/ multiple"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor=" ProcessingTime"
                        className="text-sm font-medium"
                      >
                        Processing Time
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id=" ProcessingTime"
                          required
                          placeholder="Select the processing time"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="relative mt-10 flex flex-col rounded-xl border-gray-dark shadow-xl">
              <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-7  lg:block">
                <SvgTab />
              </div>
              <div className="px-4 py-4 lg:px-10">
                <h1 className="py-4 uppercase">customer profiles</h1>
                <hr className="text-primary h-2 text-2xl" />
                <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Contactname"
                        className="text-sm font-medium"
                      >
                        Contact name
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="Contactname"
                          required
                          placeholder="Enter your contact name"
                          className="w-full rounded-l-md border p-2 text-xs"
                        />
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle
                              cx="7.99994"
                              cy="4.23529"
                              r="4.23529"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 9.88232C3.58172 9.88232 0 11.7785 0 14.1176V16H16V14.1176C16 11.7785 12.4183 9.88232 8 9.88232Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="PersonalEmail"
                        className="text-sm font-medium"
                      >
                        Personal Email
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="email"
                          id="PersonalEmail"
                          required
                          placeholder="Enter your personal email"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 4.22524V2.95188L16 2.95189V2.23999H0V2.95188L7.47442 9.4653C7.77564 9.7278 8.22436 9.7278 8.52558 9.4653L16 2.95189V4.22526L11.6683 7.99999L16 11.7747V13.0481L10.9377 8.63667L9.15628 10.1891C8.49358 10.7666 7.50642 10.7665 6.84372 10.1891L5.0623 8.63667L0 13.0481V13.76H16V13.0481L16 13.0481V11.7747L16 11.7747V4.22526L16 4.22524ZM0 4.22524V11.7747L4.33168 7.99999L0 4.22524Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Contactnumber"
                        className="text-sm font-medium"
                      >
                        Contact number
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="tel"
                          id="Contactnumber"
                          required
                          placeholder="Enter your contact number"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M15.8069 13.3026C16.0644 13.0451 16.0644 12.6237 15.8069 12.3662L13.9341 10.4935C13.1616 9.72093 11.8974 9.72093 11.1249 10.4935L9.36917 12.2492C8.29232 11.6405 7.21546 10.7978 6.20884 9.79116C5.20222 8.78454 4.35947 7.70768 3.75081 6.63083L5.50655 4.8751C6.27907 4.10257 6.27907 2.83844 5.50655 2.06592L3.63376 0.193131C3.37625 -0.064377 2.95488 -0.064377 2.69737 0.193131L0.941631 1.94887C-0.509778 3.40028 -0.22886 6.16264 1.40983 8.97182C2.01848 10.0487 2.86124 11.1255 3.86786 12.1321C4.87448 13.1388 5.95133 13.9815 7.02819 14.5902C9.83736 16.2289 12.5997 16.5098 14.0511 15.0584L15.8069 13.3026Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor=" ConfirmEmail"
                        className="text-sm font-medium"
                      >
                        Confirm Email
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="email"
                          id=" ConfirmEmail"
                          required
                          placeholder="Enter the email that you want to receive confirmation"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M15.8069 13.3026C16.0644 13.0451 16.0644 12.6237 15.8069 12.3662L13.9341 10.4935C13.1616 9.72093 11.8974 9.72093 11.1249 10.4935L9.36917 12.2492C8.29232 11.6405 7.21546 10.7978 6.20884 9.79116C5.20222 8.78454 4.35947 7.70768 3.75081 6.63083L5.50655 4.8751C6.27907 4.10257 6.27907 2.83844 5.50655 2.06592L3.63376 0.193131C3.37625 -0.064377 2.95488 -0.064377 2.69737 0.193131L0.941631 1.94887C-0.509778 3.40028 -0.22886 6.16264 1.40983 8.97182C2.01848 10.0487 2.86124 11.1255 3.86786 12.1321C4.87448 13.1388 5.95133 13.9815 7.02819 14.5902C9.83736 16.2289 12.5997 16.5098 14.0511 15.0584L15.8069 13.3026Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 lg:px-10">
                <h1 className="py-4 uppercase">Tourism informations</h1>
                <hr className="text-primary h-2 text-2xl" />
                <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="AirportFast-Track" />
                      <label
                        htmlFor="AirportFast-Track"
                        className="text-sm font-medium"
                      >
                        Airport Fast-Track
                      </label>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      {" "}
                      <label
                        htmlFor="ArrivalAirport"
                        className="text-sm font-medium"
                      >
                        Arrival Airport
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="Contactname"
                          required
                          placeholder="Enter the arrival airport number"
                          className="w-full rounded-l-md border p-2 text-xs"
                        />
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_27_613)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.3536 0.633757C14.1208 0.309347 12.8085 0.664126 11.9072 1.5655L9.40405 4.06863C9.33931 4.05035 9.27096 4.0381 9.1993 4.0327L2.51075 3.52926C1.95014 3.48706 1.39899 3.69146 1.00146 4.089C0.663348 4.42711 0.799257 5.00282 1.25287 5.15403L6.55222 6.92048L4.34058 9.13211C4.06866 9.40404 3.84647 9.71337 3.67768 10.0466C3.60986 10.0376 3.53903 10.0353 3.46558 10.0404L2.33618 10.1192C1.87924 10.1511 1.44921 10.347 1.12531 10.6709C0.763122 11.0331 0.958552 11.6531 1.46297 11.7421L3.31341 12.0686C3.3327 12.2393 3.3644 12.4096 3.40885 12.5785C3.57772 12.623 3.74809 12.6547 3.91869 12.674L4.24524 14.5244C4.33425 15.0288 4.95423 15.2242 5.31641 14.862C5.64031 14.5381 5.83624 14.1081 5.86812 13.6512L5.94692 12.5218C5.95204 12.4483 5.94969 12.3775 5.9407 12.3097C6.27398 12.1409 6.58333 11.9187 6.85527 11.6468L9.06692 9.43516L10.8334 14.7346C10.9846 15.1882 11.5603 15.3241 11.8984 14.986C12.296 14.5884 12.5004 14.0373 12.4582 13.4767L11.9547 6.78814C11.9493 6.71644 11.9371 6.64806 11.9188 6.58329L14.4219 4.08018C15.3232 3.17881 15.678 1.86652 15.3536 0.633757Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_27_613">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="FlightDetails" />
                      <label
                        htmlFor="FlightDetails"
                        className="text-sm font-medium"
                      >
                        Flight Details
                      </label>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="AirportTransfer" />
                      <label
                        htmlFor="AirportTransfer"
                        className="text-sm font-medium"
                      >
                        Airport Transfer
                      </label>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Tripduration"
                        className="text-sm font-medium"
                      >
                        Trip duration
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="date"
                          id="Tripduration"
                          required
                          placeholder="Enter your contact number"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.99992 0H9.99992V1.33333H5.99992V0ZM7.33325 2H8.66659V2.69958C9.7282 2.80499 10.7166 3.15943 11.5724 3.70367L12.6094 2.66667L13.5522 3.60948L12.6274 4.53428C13.8846 5.7468 14.6666 7.44875 14.6666 9.33333C14.6666 13.0152 11.6818 16 7.99992 16C4.31802 16 1.33325 13.0152 1.33325 9.33333C1.33325 5.87643 3.96437 3.03407 7.33325 2.69958V2ZM7.99992 14.6667C10.9454 14.6667 13.3333 12.2789 13.3333 9.33333C13.3333 6.38781 10.9454 4 7.99992 4C5.0544 4 2.66659 6.38781 2.66659 9.33333C2.66659 12.2789 5.0544 14.6667 7.99992 14.6667ZM5.91784 7.82352C5.54936 7.38805 5.23423 6.91013 4.97912 6.39992C4.95113 6.34394 5.01051 6.28455 5.06649 6.31254C5.57671 6.56765 6.05463 6.88279 6.49009 7.25126L7.70823 8.282C8.18586 8.09657 8.7488 8.19664 9.13436 8.5822C9.65506 9.1029 9.65506 9.94712 9.13436 10.4678C8.61366 10.9885 7.76944 10.9885 7.24874 10.4678C6.86317 10.0822 6.76311 9.51929 6.94856 9.04165L5.91784 7.82352Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="TransferDetails" />
                      <label
                        htmlFor="TransferDetails"
                        className="text-sm font-medium"
                      >
                        Transfer Details
                      </label>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="px-4 py-4 lg:px-10">
                <h1 className="py-4 uppercase">applicant details</h1>
                <hr className="text-primary h-2 text-2xl" />
                <div className="min-w-full overflow-x-auto py-10 lg:overflow-hidden">
                  <table className="w-full table-auto ">
                    <thead className="w-full">
                      <tr>
                        <th className="text-start text-sm font-medium">
                          Applicant’s Details
                        </th>
                        <th className="text-start text-sm font-medium">
                          Gender
                        </th>
                        <th className="text-start text-sm font-medium">
                          Date of birth
                        </th>
                        <th className="text-start text-sm font-medium">
                          Nationality
                        </th>
                        <th className="text-start text-sm font-medium">
                          Passport Number
                        </th>
                        <th className="text-start text-sm font-medium">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start text-sm font-normal">
                          Nguyễn Văn A
                        </td>
                        <td className="w-32 text-start text-sm font-normal">
                          Male
                        </td>
                        <td className="text-start text-sm font-normal">
                          20/02/1920
                        </td>
                        <td className="text-start text-sm font-normal">Mars</td>
                        <td className="text-start text-sm font-normal">
                          19001009
                        </td>
                        <td className="text-start text-sm font-normal">
                          <button>
                            <CheckDelete />
                          </button>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="text-start text-sm font-normal">
                          Nguyễn Văn A
                        </td>
                        <td className="text-start text-sm font-normal">Male</td>
                        <td className="text-start text-sm font-normal">
                          20/02/1920
                        </td>
                        <td className="text-start text-sm font-normal">Mars</td>
                        <td className="text-start text-sm font-normal">
                          19001009
                        </td>
                        <td className="text-start text-sm font-normal">
                          <button>
                            <CheckDelete />
                          </button>
                        </td>
                      </tr>{" "}
                      <tr className="space-x-20">
                        <td>
                          <div>
                            <TextField
                              label="Applicant’s Fullname"
                              id="outlined-size-small"
                              size="small"
                            />
                          </div>
                        </td>
                        <td>
                          <FormControl size="small" className=" w-[70%] px-4">
                            <InputLabel id="demo-simple-select-label">
                              Female
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Female"
                            >
                              <MenuItem value={10}>Male</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                            </Select>
                          </FormControl>
                        </td>
                        <td>
                          <div className="flex max-w-40 text-sm font-medium text-gray">
                            <input
                              type="date"
                              id="Tripduration"
                              required
                              className="w-full rounded-l-md border  p-2 text-xs"
                            />{" "}
                            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-r-md ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.99992 0H9.99992V1.33333H5.99992V0ZM7.33325 2H8.66659V2.69958C9.7282 2.80499 10.7166 3.15943 11.5724 3.70367L12.6094 2.66667L13.5522 3.60948L12.6274 4.53428C13.8846 5.7468 14.6666 7.44875 14.6666 9.33333C14.6666 13.0152 11.6818 16 7.99992 16C4.31802 16 1.33325 13.0152 1.33325 9.33333C1.33325 5.87643 3.96437 3.03407 7.33325 2.69958V2ZM7.99992 14.6667C10.9454 14.6667 13.3333 12.2789 13.3333 9.33333C13.3333 6.38781 10.9454 4 7.99992 4C5.0544 4 2.66659 6.38781 2.66659 9.33333C2.66659 12.2789 5.0544 14.6667 7.99992 14.6667ZM5.91784 7.82352C5.54936 7.38805 5.23423 6.91013 4.97912 6.39992C4.95113 6.34394 5.01051 6.28455 5.06649 6.31254C5.57671 6.56765 6.05463 6.88279 6.49009 7.25126L7.70823 8.282C8.18586 8.09657 8.7488 8.19664 9.13436 8.5822C9.65506 9.1029 9.65506 9.94712 9.13436 10.4678C8.61366 10.9885 7.76944 10.9885 7.24874 10.4678C6.86317 10.0822 6.76311 9.51929 6.94856 9.04165L5.91784 7.82352Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex max-w-40">
                            <input
                              type="text"
                              id="Country"
                              required
                              className="w-full rounded-l-md border  p-2 text-xs"
                              placeholder="Country"
                            />{" "}
                            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-r-md ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M1.41187 2.82349H14.5883L8.0001 12.7058L1.41187 2.82349Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="flex max-w-40">
                            <input
                              type="text"
                              id="PassportNumber"
                              required
                              className="w-full rounded-l-md border  p-2 text-xs"
                              placeholder="Passport Number"
                            />{" "}
                            <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-r-md ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M1.41187 2.82349H14.5883L8.0001 12.7058L1.41187 2.82349Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="AirportFast-Track" />
                      <label
                        htmlFor="AirportFast-Track"
                        className="text-sm font-medium"
                      >
                        Airport Fast-Track
                      </label>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      {" "}
                      <label
                        htmlFor="ArrivalAirport"
                        className="text-sm font-medium"
                      >
                        Arrival Airport
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="Contactname"
                          required
                          placeholder="Enter the arrival airport number"
                          className="w-full rounded-l-md border p-2 text-xs"
                        />
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_27_613)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.3536 0.633757C14.1208 0.309347 12.8085 0.664126 11.9072 1.5655L9.40405 4.06863C9.33931 4.05035 9.27096 4.0381 9.1993 4.0327L2.51075 3.52926C1.95014 3.48706 1.39899 3.69146 1.00146 4.089C0.663348 4.42711 0.799257 5.00282 1.25287 5.15403L6.55222 6.92048L4.34058 9.13211C4.06866 9.40404 3.84647 9.71337 3.67768 10.0466C3.60986 10.0376 3.53903 10.0353 3.46558 10.0404L2.33618 10.1192C1.87924 10.1511 1.44921 10.347 1.12531 10.6709C0.763122 11.0331 0.958552 11.6531 1.46297 11.7421L3.31341 12.0686C3.3327 12.2393 3.3644 12.4096 3.40885 12.5785C3.57772 12.623 3.74809 12.6547 3.91869 12.674L4.24524 14.5244C4.33425 15.0288 4.95423 15.2242 5.31641 14.862C5.64031 14.5381 5.83624 14.1081 5.86812 13.6512L5.94692 12.5218C5.95204 12.4483 5.94969 12.3775 5.9407 12.3097C6.27398 12.1409 6.58333 11.9187 6.85527 11.6468L9.06692 9.43516L10.8334 14.7346C10.9846 15.1882 11.5603 15.3241 11.8984 14.986C12.296 14.5884 12.5004 14.0373 12.4582 13.4767L11.9547 6.78814C11.9493 6.71644 11.9371 6.64806 11.9188 6.58329L14.4219 4.08018C15.3232 3.17881 15.678 1.86652 15.3536 0.633757Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_27_613">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="FlightDetails" />
                      <label
                        htmlFor="FlightDetails"
                        className="text-sm font-medium"
                      >
                        Flight Details
                      </label>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="AirportTransfer" />
                      <label
                        htmlFor="AirportTransfer"
                        className="text-sm font-medium"
                      >
                        Airport Transfer
                      </label>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Tripduration"
                        className="text-sm font-medium"
                      >
                        Trip duration
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="date"
                          id="Tripduration"
                          required
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.99992 0H9.99992V1.33333H5.99992V0ZM7.33325 2H8.66659V2.69958C9.7282 2.80499 10.7166 3.15943 11.5724 3.70367L12.6094 2.66667L13.5522 3.60948L12.6274 4.53428C13.8846 5.7468 14.6666 7.44875 14.6666 9.33333C14.6666 13.0152 11.6818 16 7.99992 16C4.31802 16 1.33325 13.0152 1.33325 9.33333C1.33325 5.87643 3.96437 3.03407 7.33325 2.69958V2ZM7.99992 14.6667C10.9454 14.6667 13.3333 12.2789 13.3333 9.33333C13.3333 6.38781 10.9454 4 7.99992 4C5.0544 4 2.66659 6.38781 2.66659 9.33333C2.66659 12.2789 5.0544 14.6667 7.99992 14.6667ZM5.91784 7.82352C5.54936 7.38805 5.23423 6.91013 4.97912 6.39992C4.95113 6.34394 5.01051 6.28455 5.06649 6.31254C5.57671 6.56765 6.05463 6.88279 6.49009 7.25126L7.70823 8.282C8.18586 8.09657 8.7488 8.19664 9.13436 8.5822C9.65506 9.1029 9.65506 9.94712 9.13436 10.4678C8.61366 10.9885 7.76944 10.9885 7.24874 10.4678C6.86317 10.0822 6.76311 9.51929 6.94856 9.04165L5.91784 7.82352Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="TransferDetails" />
                      <label
                        htmlFor="TransferDetails"
                        className="text-sm font-medium"
                      >
                        Transfer Details
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="relative mt-10 flex flex-col rounded-xl border-gray-dark shadow-xl">
              <div className="absolute left-0 top-0 hidden -translate-y-7 translate-x-40 lg:block">
                <SvgTab />
              </div>
              <div className="px-4 py-4 lg:px-10">
                <h1 className="py-4 uppercase">visa option</h1>
                <hr className="text-primary h-2 text-2xl" />
                <div className="grid grid-cols-1 gap-10  lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="NumberofApplicants"
                        className="text-sm font-medium"
                      >
                        Number of Applicants
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="NumberofApplicants"
                          required
                          placeholder="Only 1 applicant"
                          className="w-full rounded-l-md border p-2 text-xs"
                        />
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="Purposeofvisit"
                        className="text-sm font-medium"
                      >
                        Purpose of visit
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="Purposeofvisit"
                          required
                          placeholder="Tourist & Visit Family"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor="TypeofVisa"
                        className="text-sm font-medium"
                      >
                        Type of Visa
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id="TypeofVisa"
                          required
                          placeholder="1 - 3 month single/ multiple"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col justify-center gap-2">
                      <label
                        htmlFor=" ProcessingTime"
                        className="text-sm font-medium"
                      >
                        Processing Time
                      </label>{" "}
                      <div className="flex items-center">
                        <input
                          type="number"
                          id=" ProcessingTime"
                          required
                          placeholder="Select the processing time"
                          className="w-full rounded-l-md border  p-2 text-xs"
                        />{" "}
                        <div className="bg-primary flex h-full w-10 items-center justify-center rounded-r-md ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M1.41174 2.82349H14.5882L7.99998 12.7058L1.41174 2.82349Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
