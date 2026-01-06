import Link from "next/link";

const Services = () => {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div>
      <div className="w-full">
        <h1>Services</h1>
        <div className="flex items-center gap-2 flex-row">
          this is nested route
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
    </div>
    // </div>
  );
};

export default Services;
