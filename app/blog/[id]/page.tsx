import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
      return {};
    });

  console.log("single: ", post);
  return (
    <div>
      <h1>Post Detail - {id}</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default page;
