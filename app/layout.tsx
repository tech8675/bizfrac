import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BizFrac — Own a Fraction of a Real Business",
  description:
    "Invest in cash-flowing Main Street businesses starting at $100. Or sell a stake in yours — without a broker.",
  metadataBase: new URL("https://bizfrac.com"),
  openGraph: {
    title: "BizFrac — Own a Fraction of a Real Business",
    description:
      "Invest in cash-flowing Main Street businesses starting at $100. Or sell a stake in yours — without a broker.",
    url: "https://bizfrac.com",
    siteName: "BizFrac",
    type: "website",
  },
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
