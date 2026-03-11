import "./globals.css";

export const metadata = {
  title: "AyMed — AI Quiz Generator for Med Students",
  description: "Upload your medical PDFs and generate study questions instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}