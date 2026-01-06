import Link from "next/link";
import React from "react";

const ServicesLink = () => {
  return (
    <div className="w-full py-4">
      <Link
        href="/services"
        className="text-green-500 underline hover:text-white"
      >
        Services
      </Link>
    </div>
  );
};

export default ServicesLink;
