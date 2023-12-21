"use client";

import { useState } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";

const InputField = ({ type = "text", children, options, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      {(() => {
        switch (type) {
          case "password":
            return (
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
            );
          case "select":
            return (
              <Select {...props}>
                {options.map((each, index) => (
                  <SelectItem key={index} value={each.value}>
                    {each.label}
                  </SelectItem>
                ))}
              </Select>
            );
          default:
            return <Input type={type} {...props} />;
        }
      })()}
    </>
  );
};

export default InputField;
