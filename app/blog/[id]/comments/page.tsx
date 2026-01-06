import React from "react";

const Comments = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<any>;
}) => {
  const { id } = await params;
  console.log('checking ******** ', await searchParams)

  return <div>Comments for post id : {id}</div>;
};

export default Comments;
