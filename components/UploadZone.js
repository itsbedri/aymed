"use client";

import { useState, useRef } from "react";

export default function UploadZone() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragIn(e) {
    handleDrag(e);
    setDragging(true);
  }

  function handleDragOut(e) {
    handleDrag(e);
    setDragging(false);
  }

  function handleDrop(e) {
    handleDrag(e);
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped?.type === "application/pdf") {
      setFile(dropped);
    }
  }

  function handleChange(e) {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  }

  return (
    <div className="w-full max-w-md">
      {/* Drop zone */}
      <div
        onDragEnter={handleDragIn}
        onDragOver={handleDragIn}
        onDragLeave={handleDragOut}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          group relative cursor-pointer rounded-2xl border-2 border-dashed
          transition-all duration-200 px-6 py-12 text-center
          ${
            dragging
              ? "border-medical bg-teal-50/60 scale-[1.02]"
              : file
              ? "border-medical/40 bg-teal-50/30"
              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
          }
        `}
      >
        {/* Upload icon */}
        <div
          className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
            file ? "bg-teal-100 text-medical" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
          }`}
        >
          {file ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          )}
        </div>

        {file ? (
          <>
            <p className="text-sm font-medium text-slate-700">{file.name}</p>
            <p className="mt-1 text-xs text-slate-400">
              {(file.size / 1024 / 1024).toFixed(1)} MB — Click to replace
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-slate-600">
              Drag & drop your PDF here
            </p>
            <p className="mt-1 text-xs text-slate-400">
              or <span className="text-medical font-medium">browse files</span>
            </p>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {/* Generate button */}
      {file && (
        <button
          className="mt-4 w-full rounded-xl bg-medical py-3 text-sm font-semibold text-white shadow-sm
                     transition-all hover:bg-medical-dark hover:shadow-md active:scale-[0.98]"
        >
          Generate Questions
        </button>
      )}
    </div>
  );
}