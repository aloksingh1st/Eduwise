import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";

export default function EduviCoursesPricingPage() {
  return (
    <>
      <Helmet>
        <title>Alok's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <Header1 className="flex flex-row justify-center items-center w-full p-[22px] bg-gray-100" />
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-red-50 max-w-7xl rounded-[20px]">
              <Text as="p" className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium">
                Home | Pricing
              </Text>
              <div className="flex flex-row justify-between items-center w-[99%] ml-2.5 gap-[360px]">
                <Heading size="2xl" as="h1" className="w-[31%]">
                  Our Pre-ready
                  <br />
                  Pricing Packages
                </Heading>
                <div className="flex flex-row justify-end w-2/5 pt-1 px-1">
                  <div className="flex flex-row justify-end w-[92%] mr-4">
                    <div className="flex flex-row justify-end w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[205px] w-full relative">
                          <Img
                            src="images/img_vector_deep_purple_50.svg"
                            alt="vector_one"
                            className="justify-center h-[205px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Img
                            src="images/img_vector_green_200.svg"
                            alt="vector_three"
                            className="h-[120px] bottom-0 left-[22%] m-auto absolute"
                          />
                          <div className="flex flex-row justify-start items-start w-[68%] bottom-0 left-[3%] m-auto absolute">
                            <Img
                              src="images/img_group_green_200.svg"
                              alt="image"
                              className="h-[49px] mt-[60px] z-[1]"
                            />
                            <div className="flex flex-row justify-start items-center w-[97%] ml-[-47px]">
                              <Img src="images/img_group_blue_300.svg" alt="image_one" className="h-[34px] z-[1]" />
                              <div className="h-[189px] w-[88%] ml-[-7px] relative">
                                <Img
                                  src="images/img_group_deep_orange_400_189x250.svg"
                                  alt="image_two"
                                  className="justify-center h-[189px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="h-[136px] w-[14%] bottom-0 right-[15%] m-auto absolute">
                                  <div className="flex flex-col items-end justify-start w-full gap-[3px] top-0 right-0 left-0 m-auto absolute">
                                    <div className="h-[17px] w-4 mr-[7px] relative">
                                      <Img
                                        src="images/img_vector_deep_orange_a100.svg"
                                        alt="vector_five"
                                        className="h-3.5 bottom-[1%] left-0 m-auto absolute"
                                      />
                                      <Img
                                        src="images/img_vector_indigo_900.svg"
                                        alt="vector_seven"
                                        className="h-[15px] w-[15px] right-0 top-0 m-auto absolute"
                                      />
                                    </div>
                                    <div className="h-[111px] w-full relative">
                                      <div className="flex flex-row justify-center items-start w-full top-0 right-0 left-0 m-auto absolute">
                                        <Img
                                          src="images/img_vector_orange_a200.svg"
                                          alt="vector_nine"
                                          className="h-[30px] mt-px z-[1]"
                                        />
                                        <div className="flex flex-row justify-center items-start w-4/5 ml-[-9px]">
                                          <div className="h-12 w-[93%] z-[1] relative">
                                            <Img
                                              src="images/img_vector_orange_a200.svg"
                                              alt="vector_eleven"
                                              className="justify-center h-12 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                            />
                                            <div className="h-7 w-[32%] left-0 bottom-0 top-0 m-auto absolute">
                                              <Img
                                                src="images/img_vector_deep_orange_400_01.svg"
                                                alt="vector_thirteen"
                                                className="justify-center h-7 left-0 bottom-0 right-0 top-0 m-auto absolute"
                                              />
                                              <Img
                                                src="images/img_vector_deep_orange_a100_6x4.svg"
                                                alt="vector_fifteen"
                                                className="h-1.5 bottom-[10%] left-[17%] m-auto absolute"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_vector_deep_orange_400_01_24x10.svg"
                                            alt="vector"
                                            className="h-6 ml-[-8px]"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-row justify-end w-[77%] bottom-[1%] right-0 m-auto absolute">
                                        <Img
                                          src="images/img_vector_indigo_800.svg"
                                          alt="vector_nineteen"
                                          className="h-[69px] z-[1]"
                                        />
                                        <Img
                                          src="images/img_vector_indigo_900_69x23.svg"
                                          alt="vector"
                                          className="h-[69px] ml-[-17px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[83%] gap-[104px] bottom-0 right-[2%] m-auto absolute">
                                    <div className="h-[11px] w-2.5 ml-1.5 relative">
                                      <div className="justify-center h-[11px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                        <Img
                                          src="images/img_vector_deep_orange_a100_11x9.svg"
                                          alt="vector"
                                          className="justify-center h-[11px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                        />
                                        <Img
                                          src="images/img_vector_deep_orange_a100_01.svg"
                                          alt="vector"
                                          className="h-[5px] left-[9%] top-[8%] m-auto absolute"
                                        />
                                      </div>
                                      <Img
                                        src="images/img_vector_deep_orange_400_01_4x10.svg"
                                        alt="vector"
                                        className="h-1 bottom-[13%] right-0 left-0 m-auto absolute"
                                      />
                                    </div>
                                    <div className="flex flex-row justify-start gap-px">
                                      <Img src="images/img_vector_indigo_900_6x13.svg" alt="vector" className="h-1.5" />
                                      <Img src="images/img_vector_indigo_900_6x13.svg" alt="vector" className="h-1.5" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[22%] bottom-0 right-[5%] m-auto absolute">
                            <Img src="images/img_group_orange_a200.svg" alt="image_three" className="h-10 ml-10" />
                            <Img src="images/img_group_deep_orange_400.svg" alt="image_four" className="h-[66px]" />
                          </div>
                          <Img
                            src="images/img_group_deep_orange_400_43x57.svg"
                            alt="image_five"
                            className="h-[43px] bottom-[1%] left-[6%] m-auto absolute"
                          />
                        </div>
                        <div className="h-px w-[97%] bg-blue_gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-5 max-w-7xl">
            <Heading size="2xl" as="h2" className="!font-metropolis text-center !font-bold leading-[55px]">
              We create a monthly pricing package
              <br />
              for all standard students
            </Heading>
            <Text as="p" className="text-center !leading-[30px]">
              Basically we create this package for those who are really interested and get benefited from our courses or
              books. <br />
              We want to make a low cost package for them. So that they can purchase any courses with the package they
              buy from us. <br />
              Also will get free books from every packages.
            </Text>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full max-w-7xl">
            <div className="flex flex-row items-center w-full gap-10">
              <div className="flex flex-col items-start justify-start w-[32%] gap-6 p-[30px] bg-white-A700 cursor-pointer rounded-[20px] hover:shadow-sm">
                <div className="flex flex-col items-center justify-start w-full pb-3.5">
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Img src="images/img_group_red_300_01.svg" alt="basic_pack_one" className="h-[50px] w-[50px]" />
                    <Heading size="xl" as="h2">
                      Basic Pack
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="image" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      3 HD video lessons & tutorials
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="1_official_exam" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      1 Official exam
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="image_one" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      100 Practice questions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="image_two" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      1 Month subscriptions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="1_free_book_one" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      1 Free book
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_close_24_outline.svg" alt="image_three" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Practice quizzes & assignments
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_close_24_outline.svg" alt="image_four" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      In depth explanations
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_close_24_outline.svg" alt="image_five" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Personal instructor Assistance
                    </Text>
                  </div>
                </div>
                <Heading size="s" as="h3">
                  $200
                </Heading>
                <Button size="2xl" variant="outline" className="w-full font-medium">
                  Purchase Course
                </Button>
              </div>
              <div className="w-px h-px bg-gray-900_26" />
              <div className="flex flex-col items-start justify-start w-[32%] gap-6 p-[30px] bg-white-A700 shadow-sm cursor-pointer rounded-[20px] hover:shadow-sm">
                <div className="flex flex-col items-start justify-start pb-[15px] gap-3.5">
                  <Img src="images/img_group_red_300_01.svg" alt="image" className="h-[50px] w-[50px]" />
                  <Heading size="xl" as="h4">
                    Standard Pack
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      8 HD video lessons & tutorials
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      2 Official exam
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      200 Practice questions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      1 Month subscriptions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      3 Free books
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Practice quizzes & assignments
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_close_24_outline.svg" alt="closetwentyfour" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      In depth explanations
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_close_24_outline.svg" alt="closetwentyfour" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Personal instructor Assistance
                    </Text>
                  </div>
                </div>
                <Heading size="s" as="h5">
                  $600
                </Heading>
                <Button size="2xl" className="w-full font-medium">
                  Purchase Course
                </Button>
              </div>
              <div className="w-px h-px bg-gray-900_26" />
              <div className="flex flex-col items-start justify-start w-[32%] gap-6 p-[30px] bg-white-A700 cursor-pointer rounded-[20px] hover:shadow-sm">
                <div className="flex flex-col items-start justify-start pb-[15px] gap-3.5">
                  <Img src="images/img_group_red_300_01.svg" alt="image" className="h-[50px] w-[50px]" />
                  <Heading size="xl" as="h6">
                    Premium Pack
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      15 HD video lessons & tutorials
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      3 Official exam
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      300 Practice questions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      1 Month subscriptions
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      5 Free books
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Practice quizzes & assignments
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      In depth explanations
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <Img src="images/img_approve_24_outline.svg" alt="approvetwentyfo" className="h-6 w-6" />
                    <Text as="p" className="!font-medium">
                      Personal instructor Assistance
                    </Text>
                  </div>
                </div>
                <Heading size="s" as="h5">
                  $1200
                </Heading>
                <Button size="2xl" variant="outline" className="w-full font-medium">
                  Purchase Course
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
