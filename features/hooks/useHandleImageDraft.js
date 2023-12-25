export default function useHandleImageDraft() {
  const handleImageDraft = (file, imageSetter) => {
    const reader = new FileReader();

    if (file[0]) {
      reader?.readAsDataURL(file[0]);
    }
    reader.onloadend = () => imageSetter(reader.result);
  };

  return handleImageDraft;
}
