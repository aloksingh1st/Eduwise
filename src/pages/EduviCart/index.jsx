import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, RatingBar, Text, Img } from "../../components";
import EduviCoursesDetailsMaincard from "../../components/EduviCoursesDetailsMaincard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function EduviCoursesDetailsPage() {
  const { id } = useParams();
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const getBookById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/cart/getall`
        );
        setCarts(response.data.data);
      } catch (error) {
        alert("Error fetching book:", error);
      }
    };

    const getTotalPrice = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/cart/totalPrice"
        );
        setTotalPrice(response.data.totalPrice);
      } catch (e) {
        alert(e.message);
      }
    };

    getTotalPrice();
    getBookById();
  }, [id]);

  const [showvar, setShowvar] = useState(false);

  const handleReq = () => {
    setShowvar(true);
    console.log("JHASkf");

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY":
          "bb865e6c6b4fd565d4ff604b7cea8f2bbdc01be7f9ca20f4050b5b1962161a95###1",
      },
      body: JSON.stringify({
        request:
          "ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVCIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxNzgiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlENDAzIiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL3dlYmhvb2suc2l0ZS9yZWRpcmVjdC11cmwiLAogICJyZWRpcmVjdE1vZGUiOiAiUE9TVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0=",
      }),
    };

    fetch("apis/pg-sandbox/pg/v1/pay", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        window.location.href =
          response.data.instrumentResponse.redirectInfo.url;
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>Proxy's Application2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full p-[22px] bg-gray-100" />
          <div className="flex flex-row justify-between items-start w-full p-6 bg-gray-200_01 max-w-7xl rounded-[20px]">
            <div className="flex flex-col items-start justify-start w-[63%] ml-[5px] gap-[29px]">
              <Text
                as="p"
                className="!text-black-900_02 tracking-[0.48px] !font-medium"
              >
                Home | Cart
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-start justify-center w-full gap-12 max-w-10xl">
            <div className="w-full gap-10 grid-cols-[-1] grid min-h-[auto]">
              {carts.map((cartItem) => {
                return (
                  <EduviCoursesDetailsMaincard
                    thethree={cartItem.title}
                    price={cartItem.price}
                    className="flex flex-row justify-center w-full gap-6 p-[15px] bg-white-A700 shadow-xs cursor-pointer rounded-[10px] hover:shadow-xs"
                    productId={cartItem.productId}
                  />
                );
              })}
            </div>

            <div>
              <div className="flex flex-row justify-center items-center w-[89%] gap-[15px]">
                <div className="flex flex-row items-center justify-centre w-[67%] gap-3">
                  <div className="flex">
                    <Heading size="md" as="h1">
                      Total
                    </Heading>

                    <Heading
                      size="md"
                      as="h2"
                      className="flex !text-deep_orange-400 ml-5 w-[173px]"
                    >
                      ₹ {totalPrice}
                    </Heading>
                  </div>
                  <Button
                    size="lg"
                    className="text-center rounded-md"
                    onClick={handleReq}
                  >
                    <Heading
                      size="md"
                      as="h2"
                      className="text-center text-white flex w-[173px]"
                    >
                      Checkout
                      <BsFillCartCheckFill />
                    </Heading>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
