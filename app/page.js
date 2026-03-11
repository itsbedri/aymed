import UploadZone from "../components/UploadZone";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-medical"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
        AyMed
      </h1>
      <p className="text-sm text-slate-500 mb-10 text-center max-w-sm leading-relaxed">
        Drop your lecture PDF and get AI-generated practice questions in seconds.
        Study smarter, not harder.
      </p>

      {/* Upload */}
      <UploadZone />

      {/* Footer hint */}
      <p className="mt-12 text-xs text-slate-400">
        Supports PDF files up to 20 MB
      </p>
    </main>
  );
}