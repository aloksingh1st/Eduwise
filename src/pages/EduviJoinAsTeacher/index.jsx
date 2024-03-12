import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function EduviJoinAsTeacherPage() {
  return (
    <>
      <Helmet>
        <title>Alok's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header className="flex justify-center items-center w-full p-[22px] bg-gray-100" />
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-yellow-100 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium">
              Home | Become An Instructor
            </Text>
            <div className="flex flex-row justify-center items-center w-[99%] ml-2.5 gap-[546px]">
              <Heading size="2xl" as="h1" className="w-[31%]">
                Join Educatsy as
                <br />a Mentor
              </Heading>
              <div className="flex flex-row justify-center w-[26%]">
                <div className="flex flex-row justify-center w-full mb-1">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[201px] w-full relative">
                      <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img src="images/img_vector_amber_200.svg" alt="vector_one" className="h-[200px] z-[1]" />
                        <div className="flex flex-row justify-start items-center w-[49%] mt-[-43px] ml-[18px]">
                          <div className="flex flex-row justify-start items-center w-[99%]">
                            <Img src="images/img_group_blue_gray_900_02.svg" alt="image" className="h-11" />
                            <Img
                              src="images/img_vector_deep_orange_300_01.svg"
                              alt="vector_three"
                              className="h-[13px] ml-[-1px]"
                            />
                          </div>
                          <Img
                            src="images/img_vector_gray_400_01_5x16.svg"
                            alt="vector_five"
                            className="h-[5px] ml-[-13px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[30%] right-[26%] top-[15%] m-auto absolute">
                        <div className="flex flex-col items-start justify-start ml-[21px] z-[1]">
                          <Img src="images/img_vector_gray_800_01.svg" alt="vector_seven" className="h-[23px] z-[1]" />
                          <Img
                            src="images/img_vector_gray_800_01_14x6.svg"
                            alt="vector_nine"
                            className="h-3.5 mt-[-11px]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-full mt-[-13px]">
                          <div className="flex flex-col items-end justify-start w-[48%] ml-[21px] z-[1]">
                            <div className="flex flex-row justify-end items-start h-11 w-[43px]">
                              <div className="flex flex-col items-start justify-start w-[56%] mt-3.5 pb-2">
                                <div className="flex flex-row justify-start items-start gap-[11px]">
                                  <Img
                                    src="images/img_vector_deep_orange_300_01_9x3.svg"
                                    alt="vector_eleven"
                                    className="h-[9px] mt-px"
                                  />
                                  <Img
                                    src="images/img_vector_gray_50_3x9.svg"
                                    alt="vector_thirteen"
                                    className="h-[3px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_gray_50_1x2.svg"
                                  alt="vector_fifteen"
                                  className="h-px w-0.5 mt-[-9px] ml-0.5"
                                />
                              </div>
                              <div className="h-11 w-[94%] ml-[-22px] relative">
                                <Img
                                  src="images/img_vector_deep_orange_300_01_44x40.svg"
                                  alt="vector"
                                  className="justify-center h-11 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-col items-start justify-start w-3/4 h-max left-[7%] bottom-0 top-0 m-auto absolute">
                                  <Img
                                    src="images/img_vector_gray_800_01_2x7.svg"
                                    alt="vector_nineteen"
                                    className="h-0.5 ml-0.5 z-[1]"
                                  />
                                  <div className="flex flex-row justify-start items-start w-full gap-[15px]">
                                    <div className="flex flex-col items-end justify-start h-[9px] w-[9px] pb-0.5">
                                      <Img
                                        src="images/img_vector_gray_50.svg"
                                        alt="vector"
                                        className="h-[9px] w-[9px]"
                                      />
                                      <Img
                                        src="images/img_vector_red_400.svg"
                                        alt="vector"
                                        className="h-px w-px mt-[-3px] mr-[3px]"
                                      />
                                    </div>
                                    <Img src="images/img_vector_gray_800.svg" alt="vector" className="h-0.5 mt-px" />
                                  </div>
                                  <div className="flex flex-row justify-start items-center mt-[7px] ml-1 gap-[7px]">
                                    <Img src="images/img_vector_red_400.svg" alt="vector" className="h-px w-px" />
                                    <Img
                                      src="images/img_vector_red_400_3x3.svg"
                                      alt="vector"
                                      className="h-[3px] w-[3px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_vector_gray_500_01.svg"
                              alt="vector"
                              className="h-[35px] mt-[-5px] mr-3.5"
                            />
                          </div>
                          <div className="flex flex-row justify-start items-start w-full mt-[-42px]">
                            <Img
                              src="images/img_xmlid_56.svg"
                              alt="xmlidfiftysix"
                              className="h-[30px] mt-[18px] z-[1]"
                            />
                            <div className="flex flex-col items-center justify-start w-[63%] ml-[-7px]">
                              <div className="flex flex-row justify-center items-start w-[18%]">
                                <Img
                                  src="images/img_vector_gray_400_01.svg"
                                  alt="vector"
                                  className="h-1.5 w-[7px] mt-[7px] z-[1]"
                                />
                                <Img
                                  src="images/img_vector_gray_500_01_46x9.svg"
                                  alt="vector"
                                  className="h-[46px] ml-[-6px]"
                                />
                              </div>
                              <div className="h-[41px] w-full mt-[-12px] relative">
                                <Img
                                  src="images/img_vector_red_100.svg"
                                  alt="vector"
                                  className="justify-center h-[41px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-col items-start justify-start w-[29%] gap-1.5 left-0 top-[9%] m-auto absolute">
                                  <Img src="images/img_vector_gray_400_4x8.svg" alt="vector" className="h-1 ml-2" />
                                  <Img
                                    src="images/img_vector_gray_400.svg"
                                    alt="vector_fortyone"
                                    className="h-3 w-[13px]"
                                  />
                                </div>
                                <div className="flex flex-row justify-start items-center w-[4%] gap-px bottom-[15%] right-[10%] m-auto absolute">
                                  <Img
                                    src="images/img_vector_black_900_02_2x1.svg"
                                    alt="vector"
                                    className="h-0.5 w-px"
                                  />
                                  <Img
                                    src="images/img_vector_black_900_02_3x1.svg"
                                    alt="vector"
                                    className="h-[3px] mb-px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-start w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="flex flex-col items-end justify-start w-[98%] z-[1]">
                          <div className="flex flex-col items-end justify-start w-full z-[1]">
                            <div className="flex flex-col items-end justify-start w-full z-[1]">
                              <div className="flex flex-col items-end justify-start w-full z-[1]">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Img
                                    src="images/img_group_gray_600.svg"
                                    alt="image_one"
                                    className="h-9 ml-[84px] z-[1]"
                                  />
                                  <div className="flex flex-row justify-start items-start w-full mt-[-8px]">
                                    <div className="flex flex-row justify-start items-center w-[97%] z-[1]">
                                      <Img
                                        src="images/img_group_blue_300_59x79.svg"
                                        alt="image_two"
                                        className="h-[59px]"
                                      />
                                      <Img
                                        src="images/img_group_blue_gray_900_02_94x228.svg"
                                        alt="image_three"
                                        className="h-[94px] ml-[-39px]"
                                      />
                                    </div>
                                    <div className="flex flex-col items-end justify-start w-1/5 mt-[3px] ml-[-44px] gap-1">
                                      <Img
                                        src="images/img_vector_white_a700_1x51.svg"
                                        alt="vector"
                                        className="h-px mr-px"
                                      />
                                      <Img src="images/img_vector_white_a700_1x51.svg" alt="vector" className="h-px" />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_vector_gray_400_37x9.svg"
                                  alt="vector_fiftyone"
                                  className="h-[37px] mt-[-25px] mr-14"
                                />
                              </div>
                              <div className="flex flex-row justify-center items-center w-[2%] mr-[91px]">
                                <Img
                                  src="images/img_vector_gray_500_01_13x5.svg"
                                  alt="vector"
                                  className="h-[13px] mb-px z-[1]"
                                />
                                <Img
                                  src="images/img_vector_gray_500_01_10x1.svg"
                                  alt="vector"
                                  className="h-2.5 ml-[-1px]"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row justify-end items-start w-[14%] mt-[-24px] mr-[26px]">
                              <div className="flex flex-row justify-end w-[66%] mt-1 z-[1]">
                                <div className="flex flex-row justify-start items-start w-full">
                                  <div className="h-[9px] w-full relative">
                                    <Img
                                      src="images/img_vector_black_900_02.svg"
                                      alt="vector"
                                      className="justify-center h-[9px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Img
                                      src="images/img_vector_gray_400_01_3x4.svg"
                                      alt="vector"
                                      className="h-[3px] w-1 left-[2%] top-[24%] m-auto absolute"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_vector_gray_400_01_3x4.svg"
                                    alt="vector_sixtyone"
                                    className="h-0.5 w-0.5 ml-[-23px]"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-end justify-start h-[34px] w-[35px] ml-[-22px] gap-[3px]">
                                <div className="flex flex-row justify-start items-center w-[69%] gap-[11px]">
                                  <Img
                                    src="images/img_vector_gray_400_01_5x2.svg"
                                    alt="vector"
                                    className="h-[5px] mt-px"
                                  />
                                  <Img src="images/img_vector_black_900_02_4x9.svg" alt="vector" className="h-1" />
                                </div>
                                <div className="flex flex-row justify-end items-start w-full">
                                  <div className="h-5 w-[5px] mt-[3px] z-[1] bg-black-900_02" />
                                  <div className="h-4 w-px mt-[3px] ml-[-1px] bg-black-900_02" />
                                  <Img
                                    src="images/img_vector_black_900_02_6x6.svg"
                                    alt="vector"
                                    className="h-1.5 w-1.5 ml-[23px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-end items-center w-[65%] mt-[-98px] mr-[25px]">
                            <div className="flex flex-row justify-end items-start w-[99%] z-[1]">
                              <div className="flex flex-row justify-end items-center w-[61%]">
                                <Img src="images/img_group_red_300.svg" alt="image_four" className="h-[138px]" />
                                <div className="h-[108px] w-[35%] ml-[-30px] relative">
                                  <Img
                                    src="images/img_vector_red_100_108x37.svg"
                                    alt="vector"
                                    className="justify-center h-[108px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_vector_gray_400_01_11x5.svg"
                                    alt="vector"
                                    className="h-[11px] bottom-[33%] left-[21%] m-auto absolute"
                                  />
                                </div>
                              </div>
                              <div className="h-[67px] w-[42%] mt-2 ml-[-4px] relative">
                                <Img
                                  src="images/img_vector_red_100_67x73.svg"
                                  alt="vector"
                                  className="justify-center h-[67px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-row justify-end items-end w-[9%] bottom-[8%] right-[8%] m-auto absolute">
                                  <Img
                                    src="images/img_vector_gray_400_01_6x2.svg"
                                    alt="vector"
                                    className="h-1.5 mb-1.5 z-[1]"
                                  />
                                  <Img
                                    src="images/img_vector_black_900_02_3x1.svg"
                                    alt="vector"
                                    className="h-[5px] mb-px"
                                  />
                                  <Img
                                    src="images/img_vector_black_900_02_6x1.svg"
                                    alt="vector"
                                    className="h-1.5 ml-px"
                                  />
                                  <Img
                                    src="images/img_vector_gray_400_01_3x4.svg"
                                    alt="vector"
                                    className="h-2.5 mb-2"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_gray_400_01_11x5.svg"
                                  alt="vector"
                                  className="h-px left-[7%] top-[24%] m-auto absolute"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row justify-end items-center w-[41%] ml-[-69px]">
                              <Img src="images/img_vector_blue_gray_100.svg" alt="vector" className="h-[17px] z-[1]" />
                              <div className="h-[92px] w-[89%] ml-[-3px] relative">
                                <Img
                                  src="images/img_vector_blue_gray_900_02.svg"
                                  alt="vector"
                                  className="justify-center h-[92px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-col items-start justify-start w-[29%] gap-px bottom-[35%] right-[32%] m-auto absolute">
                                  <div className="flex flex-row justify-between items-center w-full">
                                    <Img
                                      src="images/img_vector_black_900_02_4x9.svg"
                                      alt="vector"
                                      className="h-1 w-[5px]"
                                    />
                                    <Img
                                      src="images/img_vector_black_900_02_4x9.svg"
                                      alt="vector"
                                      className="h-0.5 w-px"
                                    />
                                    <Img
                                      src="images/img_vector_black_900_02_2x1.svg"
                                      alt="vector"
                                      className="h-[3px]"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_vector_black_900_02_5x5.svg"
                                    alt="vector"
                                    className="h-[5px] w-[5px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector_deep_orange_400.svg"
                          alt="vector"
                          className="h-[52px] mt-2.5 ml-[-65px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[1%] gap-px top-[27%] right-0 left-0 m-auto absolute">
                        <Img src="images/img_vector_gray_800_01_1x2.svg" alt="vector" className="h-px w-0.5 ml-px" />
                        <Img src="images/img_vector_gray_800_01_1x2.svg" alt="vector" className="h-px w-px ml-px" />
                        <Img src="images/img_vector_gray_800_01_2x7.svg" alt="vector" className="h-px w-px" />
                      </div>
                      <Img
                        src="images/img_vector_gray_800_01_24x16.svg"
                        alt="vector"
                        className="h-6 right-[37%] top-[21%] m-auto absolute"
                      />
                      <Img
                        src="images/img_vector_gray_400_01_5x16.svg"
                        alt="vector"
                        className="h-[3px] w-[3px] right-[24%] bottom-0 top-0 m-auto absolute"
                      />
                      <div className="flex flex-row justify-center items-center h-[3px] w-[3px] right-[40%] top-[29%] m-auto absolute">
                        <Img src="images/img_vector_red_400.svg" alt="vector" className="h-[3px] w-[3px]" />
                        <Img src="images/img_vector_red_400_1x1.svg" alt="vector" className="h-px w-px ml-[-1px]" />
                      </div>
                      <div className="flex flex-col items-end justify-start w-[4%] bottom-[37%] right-[32%] m-auto absolute">
                        <div className="h-[25px] w-[3px] mr-0.5 bg-gray-400_01" />
                        <Img src="images/img_vector_gray_400_01_3x4.svg" alt="vector" className="h-[5px] mt-[-1px]" />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[13%] gap-[5px] right-[14%] top-[12%] m-auto absolute">
                        <Img src="images/img_vector_white_a700_1x36.svg" alt="vector" className="h-px" />
                        <Img src="images/img_vector_white_a700_1x34.svg" alt="vector" className="h-px ml-0.5" />
                      </div>
                      <Img
                        src="images/img_vector_white_a700.svg"
                        alt="vector"
                        className="h-3 right-[7%] top-[10%] m-auto absolute"
                      />
                      <Img
                        src="images/img_vector_white_a700_4x4.svg"
                        alt="vector"
                        className="h-1 w-1 right-[9%] top-[12%] m-auto absolute"
                      />
                    </div>
                    <Img src="images/img_group_black_900_02.svg" alt="image_five" className="h-px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-center w-full max-w-7xl">
            <div className="flex flex-row justify-center">
              <Img src="images/img_image_521x510.png" alt="image_seven" className="w-[88%] object-cover" />
            </div>
            <div className="flex flex-col items-start justify-start w-[46%] gap-[30px]">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
                <Heading size="xl" as="h2">
                  Apply As Instructor
                </Heading>
                <Text as="p" className="!leading-[30px]">
                  Teaching is a vital and admirable career. As such, it comes with quite a bit of responsibility, both
                  in practice and in preparation with many skills required to be a teacher. The following steps provide
                  a general breakdown of the requirements for teachers:
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-5">
                <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-[33%] pt-1.5 gap-[13px]">
                    <Text as="p" className="!text-red-300_01 !font-medium">
                      Instructor Requirements
                    </Text>
                    <div className="h-px w-full bg-red-300_01 shadow-lg" />
                  </div>
                  <Text as="p" className="mt-[5px] !font-medium">
                    Instructor Rules
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px]">
                    <div className="h-2.5 w-2.5 bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      An undergraduate degree
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px]">
                    <div className="h-2.5 w-2.5 bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Participate in supervised teaching
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px]">
                    <div className="h-2.5 w-2.5 bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      State teaching license
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 py-[3px]">
                    <div className="h-2.5 w-2.5 bg-red-300_01 rounded-[50%]" />
                    <Text as="p" className="mt-[3px] !text-gray-900">
                      Pursue graduate studies
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="font-medium min-w-[143px] rounded-[10px]">Apply Now</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full max-w-7xl">
            <div className="flex flex-col items-center justify-start w-[83%] pt-[5px] gap-16">
              <Heading size="2xl" as="h2" className="!font-metropolis text-center !font-bold">
                How to apply to join as instructor
              </Heading>
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-center w-full p-2 bg-white-A700 shadow-md rounded-[20px]">
                  <div className="flex flex-row justify-center w-full mt-[7px]">
                    <div className="flex flex-row justify-center w-full bg-white-A700">
                      <Img src="images/img_bg.png" alt="bg_three" className="w-full object-cover rounded-[20px]" />
                    </div>
                  </div>
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
