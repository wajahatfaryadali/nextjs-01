import Link from "next/link";
import React from "react";

const Blog = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      return [];
    });

  console.log("postspostspostsposts ", posts);

  return (
    <div>
      {posts.map((e: any) => (
        <div key={e?.id} className="border border-red-200 py-3">
          <h1>{e?.userId}</h1>
          <p>{e?.id}</p>
          <p>{e?.title}</p>
          <p>{e?.body}</p>
          <Link href={`/blog/${e.id}`} className="border border-amber-500 p-2">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
