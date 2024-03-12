import React from "react";
import { Input, Img, Text } from "./..";
import { IoMdMailOpen } from "react-icons/io";

export default function SignUpInputfield({ type="", email = "Email", name, placeholder, suffix="", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[12%]">
        <div className="flex flex-row justify-start w-full">
          <Text as="p" className="!text-gray-900 !font-medium">
            {email}
          </Text>
        </div>
      </div>
      <Input
        name={name}
        placeholder={placeholder}
        color="white_A700"
        size="xs"
        prefix={<IoMdMailOpen />}
        suffix={suffix}
        type={type}
        className="w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid"
      />
    </div>
  );
}
