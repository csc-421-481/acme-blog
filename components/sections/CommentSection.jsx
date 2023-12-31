"use client";
import { createComment } from "@/app/api/requests/posts";
import useGetComments from "@/features/hooks/swr-requests/useGetComments";
import { Avatar, Button, Card, CardBody, Link } from "@nextui-org/react";
import Cookies from "js-cookie";
import moment from "moment";
import { XCircle } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "../elements/form/InputField";

const CommentSection = ({ postId }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { comments, mutateComments } = useGetComments(postId);
  const submitComment = async (formData) => {
    try {
      const res = await createComment({
        ...formData,
        post: postId,
        user: Cookies.get("userId"),
      });
      reset();
      mutateComments();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <h3 className="text-2xl font-bold text-center mt-[7rem]">
        Comments({comments?.length})
      </h3>
      <Card className="my-8 w-full max-h-[300px] p-0 bg-background mx-auto lg:w-3/5 overflow-y-auto border-1 border-foreground-500">
        <div className="p-2 md:p-6 flex flex-col gap-6">
          {comments?.length > 0 ? (
            comments?.map((comment, index) => (
              <Card className="w-full" key={index}>
                <CardBody className="flex-row gap-3 md:gap-6">
                  <Link href={`/authors/${comment?.user?.id}`}>
                    <Avatar src={comment?.user?.profileImage} size="lg" />
                  </Link>
                  <div className="space-y-2">
                    <div className="space-3">
                      <Link
                        href={`/authors/${comment?.user?.id}`}
                        className="font-semibold"
                      >
                        {comment?.user?.firstName} {comment?.user?.lastName}
                      </Link>

                      <p className="text-foreground-500 text-xs">
                        {comment?.user?.matricNumber}
                      </p>
                      <p className="text-foreground-500 text-xs">
                        {moment(comment?.createdAt).format(
                          "DD MMMM, YYYY [at] h:mm A"
                        )}
                      </p>
                    </div>
                    <p className="text-sm">{comment?.content}</p>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            <div className="flex flex-col gap-3 items-center col-span-3 text-danger">
              <XCircle size={50} />
              <p>No Comments yet.</p>
            </div>
          )}
        </div>
      </Card>
      {Cookies.get("userId") ? (
        <form
          className="my-8 w-full lg:w-3/5 xl:w-2/5 block mx-auto space-y-4"
          onSubmit={handleSubmit(submitComment)}
        >
          <p className="text-foreground-500">Leave a comment </p>
          <div className="flex flex-col gap-6">
            <InputField
              type="textarea"
              label="Comment"
              isRequired
              {...register("content", { required: "Please provide a comment" })}
              errorMessage={errors.content?.message}
              isInvalid={!!errors.content?.message}
              fullWidth
              size="lg"
            />
            <Button
              color="primary"
              type="submit"
              fullWidth
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 text-center my-6">
          <p>You have to be logged in to leave a comment</p>
          <Button
            as={Link}
            href={`/login?callback=/archive/${postId}`}
            color="primary"
          >
            Login
          </Button>
        </div>
      )}
    </>
  );
};
export default CommentSection;
