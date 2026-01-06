import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        <h1>Services</h1>
        <div className="flex items-center gap-2 flex-row py-2">
          <Link href="/" className="text-blue-500 underline">
            Home
          </Link>
          <Link href="/about" className="text-blue-500 underline">
            About
          </Link>
          <Link href="/blog" className="text-blue-500 underline">
            Blogs
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Services;
