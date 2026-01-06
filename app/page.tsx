import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        <h1>Home Page</h1>
        <Link href="/about" className="text-blue-500 underline">
          About
        </Link>
        <Link href="/services" className="text-blue-500 underline">
          Services
        </Link>
        <Link href="/blog" className="text-blue-500 underline">
          Blogs
        </Link>
      </main>
    </div>
  );
}
