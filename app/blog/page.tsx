import Link from "next/link";
import React from "react";

const Blog = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      return [];
    });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <h1>Blogs</h1>
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
        <div className="w-full mt-8">
          {!posts.length ? (
            <>0 Blogs </>
          ) : (
            posts.map((e: any) => (
              <div
                key={e?.id}
                className="border border-red-200 py-3 px-2 min-h-fit text-gray-300"
              >
                <h1>
                  <span className="text-white font-semibold">UserID :</span>{" "}
                  {e?.userId}
                </h1>
                <p>
                  <span className="text-white font-semibold">ID :</span> {e?.id}
                </p>
                <p>
                  <span className="text-white font-semibold">Title :</span>{" "}
                  {e?.title}
                </p>
                <p>
                  <span className="text-white font-semibold">Body :</span>{" "}
                  {e?.body}
                </p>
                <Link
                  href={`/blog/${e.id}`}
                  className="border border-gray-400 text-white p-2 ml-auto block w-max mt-2"
                >
                  Read More
                </Link>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );

  // return (

  //   <div>
  //     {posts.map((e: any) => (
  //       <div key={e?.id} className="border border-red-200 py-3">
  //         <h1>{e?.userId}</h1>
  //         <p>{e?.id}</p>
  //         <p>{e?.title}</p>
  //         <p>{e?.body}</p>
  //         <Link href={`/blog/${e.id}`} className="border border-amber-500 p-2">
  //           Read More
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Blog;
