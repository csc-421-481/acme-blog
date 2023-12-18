"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";

const InputField = ({ type = "text", ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {type === "password" ? (
        <Input
          {...props}
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff size={18} className="pointer-events-none" />
              ) : (
                <Eye size={18} className="pointer-events-none" />
              )}
            </button>
          }
        />
      ) : (
        <Input type={type} {...props} />
      )}
    </>
  );
};

export default InputField;
