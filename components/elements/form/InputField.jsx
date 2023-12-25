"use client";

import { useState, forwardRef } from "react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";

const InputField = forwardRef(
  ({ type = "text", children, options, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <>
        {(() => {
          switch (type) {
            case "password":
              return (
                <Input
                  ref={ref}
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
                <Select ref={ref} {...props}>
                  {options.map((each, index) => (
                    <SelectItem key={index} value={each.value}>
                      {each.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            default:
              return <Input ref={ref} type={type} {...props} />;
          }
        })()}
      </>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
