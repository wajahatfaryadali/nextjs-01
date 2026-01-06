import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Services Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center flex-col bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        {children}
      </div>
    </div>
  );
}
