import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col items-center justify-center text-sm w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition-all 
        ${isDragActive
          ? "bg-secondary border-foreground/70"
          : "bg-background hover:bg-secondary/50 hover:border-muted-foreground/70"
        }`}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="text-foreground font-medium">Drop files here...</p>
        ) : (
          <>
            <p className="text-muted-foreground font-medium">
              Drag & drop files here, or click to select files
            </p>
            <p className="text-sm text-muted-foreground/50">
              Only images are allowed (e.g. .jpg, .png, .jpeg, .webp)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
