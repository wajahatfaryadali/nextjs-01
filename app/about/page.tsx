import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <h1>About</h1>
          <div className="flex items-center gap-2 flex-row">
            <Link href="/" className="text-blue-500 underline hover:text-white">
              Home
            </Link>
            <Link href="/services" className="text-blue-500 underline hover:text-white">
              Services
            </Link>
            <Link href="/blog" className="text-blue-500 underline hover:text-white">
              Blogs
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
