"use client";

import { useState, forwardRef } from "react";
import { Select, SelectItem, Input, Textarea } from "@nextui-org/react";
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
                  {...props}
                  ref={ref}
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
            case "textarea":
              return <Textarea {...props} ref={ref} />;
            case "select":
              return (
                <Select {...props} ref={ref}>
                  {options.map((each, index) => (
                    <SelectItem key={each.value} value={each.value}>
                      {each.label}
                    </SelectItem>
                  ))}
                </Select>
              );
            default:
              return <Input type={type} {...props} ref={ref} />;
          }
        })()}
      </>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
