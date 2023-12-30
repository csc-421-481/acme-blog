"use client";
import { toast } from "react-toastify";

export default function useHandleImageDraft() {
  const handleImageDraft = (file, imageSetter) => {
    const reader = new FileReader();
    const maxFileSizeInBytes = 10485760;

    if (file[0]) {
      const fileSize = file[0].size; // in bytes
      console.log(fileSize);
      if (fileSize > maxFileSizeInBytes) {
        toast.error("File size exceeds the maximum allowed size (10 MB).");
        // Clear the file input to prevent submission
        // input.value = "";
        return;
      }

      reader?.readAsDataURL(file[0]);
    }

    reader.onloadend = () => imageSetter(reader.result);
  };

  return handleImageDraft;
}
