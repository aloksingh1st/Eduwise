import React, { useCallback, useEffect, useState } from "react";
import { Img, Text } from "./..";
import axios from "axios";



export default function Header1({ ...props }) {
  const [multiDropdownVisible, setMultiDropdownVisible] = useState(false);
  const [doubleDropdownVisible, setDoubleDropdownVisible] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (
        multiDropdownVisible &&
        !document
          .getElementById("multiLevelDropdownButton")
          .contains(event.target)
      ) {
        setMultiDropdownVisible(false);
      }
      if (
        doubleDropdownVisible &&
        !document.getElementById("doubleDropdownButton").contains(event.target)
      ) {
        setDoubleDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [multiDropdownVisible, doubleDropdownVisible]);

  const toggleMultiDropdown = () => {
    setMultiDropdownVisible(!multiDropdownVisible);
    // Close double dropdown if open
    if (doubleDropdownVisible) {
      setDoubleDropdownVisible(false);
    }
  };

  const toggleDoubleDropdown = () => {
    setDoubleDropdownVisible(!doubleDropdownVisible);
  };

  const BEARER_TOKEN = accessToken;

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  const handleLogout = async () => {
    // Make the POST request
    await axios
      .post("http://localhost:8000/api/v1/users/logout", axiosConfig)
      .then((response) => {
        console.log("Response:", response.data);
        alert("User logged out");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  };

  return (
    <header {...props}>
      <Img
        src="images/img_logo.svg"
        alt="logo_one"
        className="h-[30px] ml-[58px]"
      />
      <div className="flex flex-row justify-start items-center w-[53%] ml-[54px] gap-6">
        <a href="/shop">
          <Text as="p" className="!text-gray-900 !font-medium">
            Shop
          </Text>
        </a>
        <div className="flex flex-row justify-start items-center w-[22%] gap-0.5">
          <a href="/shop?search=kindergarten">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For Kindergarten
            </Text>
          </a>
          {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-6 w-6" /> */}
        </div>
        <div className="flex flex-row justify-start items-center w-[21%] gap-0.5 py-[3px]">
          <a href="/shop?search=highschool">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For High School
            </Text>
          </a>
        </div>
        <div className="flex flex-row justify-start items-center w-[16%] gap-0.5 py-[3px]">
          <a href="/shop?search=college">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              For College
            </Text>
          </a>
        </div>
        <div className="flex flex-row justify-start items-center w-[13%] gap-0.5 py-[3px]">
          <a href="/allcourses">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              Courses
            </Text>
          </a>
        </div>

        <a href="/allmentors">
          <Text as="p" className="!text-gray-900 !font-medium">
            Mentors
          </Text>
        </a>
      </div>
      <div className="flex flex-row justify-between w-1/5 ml-[54px] mr-[58px]">
        <div className="flex flex-row justify-start items-center gap-2.5">
          <a href="/cart">
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              Cart (0)
            </Text>
          </a>
          <Img
            src="images/img_shopping_bag_24.svg"
            alt="shoppingbagtwen"
            className="h-[30px] w-[30px]"
          />
        </div>

        <div>
          <div
            className="flex flex-row justify-start items-center pl-[3px] gap-2.5"
            onClick={toggleMultiDropdown}
          >
            <Text as="p" className="!text-gray-900 text-right !font-medium">
              {userData ? userData.fullName : "My Account"}
            </Text>
            <Img
              src="images/img_profile_24_outline.svg"
              alt="profiletwentyfo"
              className="h-[30px] w-[30px]"
            />
          </div>

          <div className="absolute">
            {/* Multi Dropdown menu */}
            {multiDropdownVisible && (
              <div
                id="multi-dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="multiLevelDropdownButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      id="doubleDropdownButton"
                      className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={toggleDoubleDropdown}
                      type="button"
                    >
                      Dropdown
                      <svg
                        className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </button>
                    {/* Double Dropdown menu */}
                    {doubleDropdownVisible && (
                      <div
                        id="doubleDropdown"
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
