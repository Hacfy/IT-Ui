import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "./layoutWrapper/layoutWrapper";
import { metadata } from "./layoutWrapper/metadata";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster />
      </body>
    </html>
  );
}
