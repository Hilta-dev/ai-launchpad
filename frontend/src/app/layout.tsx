import type { Metadata } from "next";
import "./globals.css";

//page title part
export const metadata: Metadata = {
  title: "AI Launchpad",
  description: "Build, deploy and manage AI agents with NVIDIA on Nebius",
};

//layout part
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}