import Link from "next/link";
import React from "react";

const Services = (props) => {
    console.log(props)
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
      <div className="flex items-center justify-between w-full">
        <h1>Services</h1>
        <div className="flex items-center gap-2 flex-row">
          <Link href="/" className="text-blue-500 underline hover:text-white">
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue-500 underline hover:text-white"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-blue-500 underline hover:text-white"
          >
            Blogs
          </Link>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link
          href={"/services/webDev"}
          className="text-green-500 underline hover:text-white"
        >
          Web Development
        </Link>
        <Link
          href={"/services/androidDev"}
          className="text-green-500 underline hover:text-white"
        >
          Android Development
        </Link>
        <Link
          href={"/services/iosDev"}
          className="text-green-500 underline hover:text-white"
        >
          iOS Development
        </Link>
      </div>
    </main>
    // </div>
  );
};

export default Services;
