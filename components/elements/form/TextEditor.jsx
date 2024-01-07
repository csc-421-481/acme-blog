"use client";

import { useState } from "react";
import { Skeleton } from "@nextui-org/react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = ({ value, onChange }) => {
  const [editorLoading, setEditorLoading] = useState(true);
  return (
    <div className="relative min-h-[200px]">
      {editorLoading && (
        <Skeleton className="h-full rounded-lg w-full absolute top-0 left-0 z-20" />
      )}
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
        init={{
          plugins: "code link image",

          toolbar:
            "undo redo | formatselect | bold italic underline strikethrough | numlist bullist | link image alignleft aligncenter alignright |code ",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("Sorry this feature is currently not supported")
            ),
          setup: (editor) => {
            editor.on("init", (e) => {
              setEditorLoading(false);
            });
          },
        }}
        value={value}
        onEditorChange={(newValue, editor) => {
          onChange(newValue);
        }}
      />
    </div>
  );
};
export default TextEditor;
