import { Metadata } from "next";
import Header_06 from "@/components/shared/header_06";
import Footer_06 from "@/components/shared/footer_06";

export const metadata: Metadata = {
  title: 'tku_06',
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header_06 />
        <main className="flex-1 wrapper">
            {children}
        </main>
      </div>
    );
  }
  