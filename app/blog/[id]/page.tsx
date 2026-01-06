import Link from "next/link";
import React, { use } from "react";

const BlogDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  //   const post =  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .catch((error) => {
  //       console.log(error);
  //       return {};
  //     });

  const post = use(
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        return {};
      })
  );

  console.log("single: ", post);
  return (
    <div>
      <h1>Post Detail - {id}</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <div className="flex items-center gap-3">
        <Link href="/blog" className="text-blue-500 underline hover:text-white">
          Back to Blogs
        </Link>

        <Link
          href={{
            pathname: `/blog/${id}/comments`,
            query: {
              ref: "blogDetails",
              userID: "11122112",
              email: "testing email",
            },
          }}
          className="text-blue-500 underline hover:text-white"
        >
          Read Comments
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
