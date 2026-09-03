import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katia Lounas — AI & Data Engineer",
  description:
    "Portfolio of Katia Lounas, AI & Data Engineer based in Paris. LLM pipelines, model evaluation, prompt engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
