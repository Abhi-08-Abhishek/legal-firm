import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Legalize — Thoughtful Counsel. Confident Decisions.",
  description:
    "Legalize is a client-centered law firm in Toronto offering business & corporate law, family law, estate planning, real estate, civil litigation, and criminal defense. Clear advice for life's complex moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
