import React from "react";

const Books = async ({ params }: { params: Promise<{ books: any }> }) => {
  const { books } = await params;

  console.log("boooks******** ", books);
  return <div>Books</div>;
};

export default Books;
