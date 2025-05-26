import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "./layoutWrapper/layoutWrapper";
import { metadata } from "./layoutWrapper/metadata";
import { Toaster } from "sonner";
import StoreProvider from "./  StoreProvider";

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
        <StoreProvider>
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
