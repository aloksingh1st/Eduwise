import React from "react";
import { Img, Button, Input, Text, Heading } from "./..";

export default function EduviCoursesSubscribe({
  subscribefor = (
    <>
      Subscribe For Get Update
      <br />
      Every New Courses
    </>
  ),
  p20kstudents = "20k+ students daily learn with Educatsy. Subscribe for new courses.",
  subscribe = "Subscribe",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-[50px] bg-black-900_01 max-w-7xl rounded-[20px]">
        <div className="flex flex-row justify-between w-full my-[11px]">
          <div className="flex flex-col items-start justify-start w-[16%] gap-[57px]">
            <Img src="images/img_ellipse_169.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
            <Img
              src="images/img_ellipse_170.png"
              alt="circleimage_one"
              className="h-[60px] w-[60px] ml-[127px] rounded-[50%]"
            />
            <Img
              src="images/img_ellipse_171.png"
              alt="circleimage_two"
              className="h-[60px] w-[60px] ml-[30px] rounded-[50%]"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-3/4">
            <div className="flex flex-col items-center justify-start w-[66%] gap-10">
              <div className="flex flex-col items-center justify-start w-full pb-[3px] gap-[26px]">
                <Heading
                  size="2xl"
                  as="h1"
                  className="!text-white-A700 !font-metropolis text-center !font-bold leading-[55px]"
                >
                  {subscribefor}
                </Heading>
                <Text as="p" className="!text-white-A700_b2 text-center">
                  {p20kstudents}
                </Text>
              </div>
              <div className="flex flex-row justify-center w-full">
                <Input name="email" placeholder="enter your email" className="w-[77%] font-medium" />
                <Button size="3xl" className="rounded-tr-[10px] rounded-br-[10px] font-medium min-w-[138px]">
                  {subscribe}
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-[22%] gap-[57px]">
              <Img
                src="images/img_ellipse_166.png"
                alt="circleimage"
                className="h-[60px] w-[60px] mr-[30px] rounded-[50%]"
              />
              <Img
                src="images/img_ellipse_167.png"
                alt="circleimage"
                className="h-[60px] w-[60px] mr-[127px] rounded-[50%]"
              />
              <Img src="images/img_ellipse_168.png" alt="circleimage" className="h-[60px] w-[60px] rounded-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
