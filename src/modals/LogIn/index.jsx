import React, { useState } from "react";
import {
  Text,
  Button,
  Input,
  Img,
  Heading,
  Slider,
} from "../../components/index";
import SignUpInputfield from "../../components/SignUpInputfield";
import { default as ModalProvider } from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn({ isOpen, ...props }) {
  const navigate = useNavigate();
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const body = {
    email: email,
    username: username,
    password: password,
  };

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return navigate("/");
  }

  const handleLogin = async () => {

    try {
      const user = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        body
      );
      const accessToken = user.data.data.accessToken;
      const userData = {
        name: user.data.data.user.username,
        fullName: user.data.data.user.fullName,
        avatar: user.data.data.user.avatar,
        email: user.data.data.user.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1052px]"
    >
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full px-14 py-[71px] bg-white-A700 rounded-[15px]">
          <div className="flex flex-row justify-center w-[97%]">
            <div className="flex flex-row justify-center w-full p-2">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-center justify-start w-2/5 gap-[25px]">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 1 },
                        1050: { items: 3 },
                      }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="w-full"
                      items={[...Array(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Heading
                            size="2xl"
                            as="h1"
                            className="mx-2.5 !text-black-900_02 !font-metropolis"
                          >
                            Welcome to
                            <br />
                            Educatsy Online
                            <br />
                            Learning Platform
                          </Heading>
                        </React.Fragment>
                      ))}
                    />
                    <div className="flex justify-center w-9 h-2.5" />
                  </div>
                  <div className="h-[641px] w-px bg-gradient" />
                  <div className="flex flex-col items-center justify-start w-[42%]">
                    <Button
                      color="white_A700"
                      leftIcon={
                        <Img
                          src="images/img_googleplus_1_1.svg"
                          alt="google-plus (1) 1"
                        />
                      }
                      className="w-full gap-[23px] !text-gray-700_01 border-gray-300 border border-solid rounded-[10px]"
                    >
                      Sign in with google
                    </Button>
                    <div className="flex flex-row justify-center items-center w-full mt-5 gap-[11px] p-[3px]">
                      <div className="h-px w-[6%] ml-[55px] bg-gray-700_01" />
                      <a href="#" className="mt-[3px]">
                        <Text as="p" className="text-center">
                          Or sign in with your email
                        </Text>
                      </a>
                      <div className="h-px w-[6%] mr-[55px] bg-gray-700_01" />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full mt-5 gap-5">
                      <SignUpInputfield
                        className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]"
                        name="email"
                        placeholder="user@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />

                      <SignUpInputfield
                        className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]"
                        name="username"
                        placeholder="username"
                        value={username}
                        email="Username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]">
                        <SignUpInputfield
                          className="flex flex-col items-start justify-start w-full pt-[5px] gap-[9px]"
                          type="password"
                          name="password"
                          placeholder="*********"
                          value={password}
                          email="password"
                          suffix={
                            <Img src="images/img_eye_1_1.svg" alt="eye (1) 1" />
                          }
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />

                        {/* <Text as="p" className="!text-gray-900 !font-medium">
                          Password
                        </Text>
                        <Input
                          color="white_A700"
                          size="xs"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          placeholder="*************"
                          prefix={
                            <Img
                              src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                              alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                            />
                          }
                          suffix={
                            <Img src="images/img_eye_1_1.svg" alt="eye (1) 1" />
                          }
                          className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
                        /> */}
                      </div>
                    </div>
                    <Button
                      onClick={handleLogin}
                      className="w-full mt-[30px] font-medium rounded-[10px]"
                    >
                      Sign In
                    </Button>
                    <div className="flex flex-row justify-between items-center w-full mt-6 py-[3px]">
                      <a href="#">
                        <Text as="p">Forgot Password?</Text>
                      </a>
                    </div>
                    <div className="flex flex-row justify-start w-[66%] mt-6 gap-1 py-[3px]">
                      <a href="#" className="my-px">
                        <Text as="p" className="!font-medium">
                          Don’t have an account?
                        </Text>
                      </a>
                      <a href="/register">
                        <Text as="p" className="!text-red-300_01 !font-medium">
                          Sign Up
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
