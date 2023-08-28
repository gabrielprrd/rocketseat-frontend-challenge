import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { ReactNode } from "react";
import NestedLayout from "@/components/NestedLayout";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "A Rocketseat Frontend challenge",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <NestedLayout>{children}</NestedLayout>
      </body>
    </html>
  );
}
