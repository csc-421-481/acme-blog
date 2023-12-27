"use client";

import InputField from "@/components/elements/form/InputField";
import Image from "next/image";
import { Card, Button } from "@nextui-org/react";
import TextEditor from "@/components/elements/form/TextEditor";
import { Camera } from "react-feather";
import { useEffect, useState } from "react";
import useHandleImageDraft from "@/features/hooks/useHandleImageDraft";
import { useForm, Controller } from "react-hook-form";
import { createPost } from "@/app/api/requests/posts";
import { useRouter } from "next/navigation";
import useGetUser from "@/features/hooks/swr-requests/useGetUser";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import useGetCategories from "@/features/hooks/swr-requests/useGetCategories";

const CreateBlogPostForm = () => {
  const router = useRouter();
  const handleImageDraft = useHandleImageDraft();
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const { userData, mutateUser } = useGetUser(Cookies.get("userId"));
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { categories } = useGetCategories();
  // console.log(categories);
  // useEffect(() => {
  //   const subscribe = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => {
  //     subscribe.unsubscribe();
  //   };
  // }, [watch]);

  const submitData = async (formData) => {
    console.log(formData);
    console.log({ ...formData, category: Number(formData.category) });
    try {
      const { data } = await createPost({
        ...formData,
        category: Number(formData.category),
        user: userData.id,
      });
      toast.success("Post created updated successfully");
      router.push("/profile");
      mutateUser();
    } catch (error) {
      console.error(error);
      const errorResponse = error?.response?.data;
      if (errorResponse) {
        let message = "";
        for (const key in errorResponse) {
          message += Array.isArray(errorResponse[key])
            ? errorResponse[key][0] + "\n"
            : errorResponse[key] + "\n";
        }
        toast.error(message);
      } else {
        toast.error("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <>
      <form className="my-12" onSubmit={handleSubmit(submitData)} noValidate>
        <h1 className="text-2xl text-center mb-10">Create New Blog Post</h1>
        <div className="flex flex-col  sm:grid sm:grid-cols-2 gap-6 mb-6">
          <InputField
            type="text"
            label="Title"
            isRequired
            {...register("title", {
              required: "Title is required",
            })}
            isInvalid={!!errors.title}
            errorMessage={errors.title?.message}
          />

          <InputField
            type="select"
            label="Category"
            isRequired
            options={
              categories
                ? categories.map((category, index) => ({
                    value: category.id,
                    label: category.name,
                  }))
                : []
            }
            {...register("category", {
              required: "Category is required",
            })}
            isInvalid={!!errors.category}
            errorMessage={errors.category?.message}
          />
          <label htmlFor="input" className="col-span-2 space-y-3">
            <span className="block">Cover Image</span>
            {errors.coverImage && (
              <p className="text-danger">{errors.coverImage?.message}</p>
            )}
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
            <input
              type="file"
              className="hidden"
              id="input"
              accept=".svg, .png, .jpg"
              {...register("coverImage", {
                required: "CoverImage is required",
              })}
              onChange={(e) => {
                handleImageDraft(e.target.files, setCoverImageUrl);
              }}
            />
          </label>

          <div className="col-span-2">
            <Controller
              name="content"
              control={control}
              rules={{ required: "Blog post content is required" }}
              render={(field) => (
                <TextEditor
                  value={field.value}
                  onChange={(value) => setValue("content", value)}
                />
              )}
            />
            {errors.content && (
              <p className="text-danger">{errors.content?.message}</p>
            )}
          </div>
          <div className="col-span-2 flex justify-end">
            <Button
              className="w-full sm:w-1/2 md:w-1/5"
              isLoading={isSubmitting}
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
export default CreateBlogPostForm;
