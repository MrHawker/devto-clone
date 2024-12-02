import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// import {Roboto, Noto_Sans} from '@next/font/google'
// const roboto = Roboto({
//     subsets: ["latin"],
//     weight: ['400','700']
// })
// const notosans = Noto_Sans({
//     subsets: ["latin"],
//     weight: ['400','700']
// })

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Dev",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
