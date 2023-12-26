"use client";

import InputField from "@/components/elements/form/InputField";
import Image from "next/image";
import { Card, Button } from "@nextui-org/react";
import TextEditor from "@/components/elements/form/TextEditor";
import { Camera } from "react-feather";
import { useState } from "react";
import useHandleImageDraft from "@/features/hooks/useHandleImageDraft";

const CreateBlogPostForm = () => {
  const handleImageDraft = useHandleImageDraft();
  const [coverImageUrl, setCoverImageUrl] = useState("");
  return (
    <>
      <form action="" className="my-12">
        <h1 className="text-2xl text-center mb-10">Create New Blog Post</h1>
        <div className="flex flex-col  sm:grid sm:grid-cols-2 gap-6 mb-6">
          <InputField type="text" label="Title" />

          <InputField
            type="select"
            label="Category"
            options={[
              { value: "Health", label: "Health" },
              { value: "Lifestyle", label: "Lifestyle" },
              { value: "Tech", label: "Tech" },
            ]}
          />
          <label htmlFor="input" className="col-span-2 space-y-3">
            <span className="block">Cover Image</span>
            <div className="w-full h-[400px] grid place-items-center relative bg-default-100 rounded-lg overflow-hidden">
              <Camera className="z-50" size={30} />
              <Image
                src={
                  coverImageUrl ||
                  "https://img.freepik.com/free-vector/abstract-colorful-geometric-isometric-background_8829-2711.jpg?w=740&t=st=1703123745~exp=1703124345~hmac=b47478d5f1e6d4d4edd5666daa0c6dfe32a56bb45ee73d5e071f8ed7fc6b4987"
                }
                alt="Cover Image"
                width={800}
                height={400}
                className="w-full absolute top-0 h-full object-cover"
              />
            </div>
            <InputField
              type="file"
              className="hidden"
              id="input"
              accept=".svg, .png, .jpg"
              onChange={(e) => {
                handleImageDraft(e.target.files, setCoverImageUrl);
              }}
            />
          </label>

          <div className="col-span-2">
            <TextEditor />
          </div>
          <div />
          <Button color="primary" className="col-span-1">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default CreateBlogPostForm;
