import React from "react";

const Books = async ({ params }: { params: Promise<{ books: any }> }) => {
  const { books } = await params;

  console.log("boooks******** ", books);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="flex min-h-screen w-full flex-col max-w-3xl items-center pt-32 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>Books Page</h1>
          <p>
            this is for <b>cath all segments </b>route for books you can use
            whatever
          </p>
          <p>it will cath all routes after books/</p>
          you want after books/ in url new route : {books && books.join("/")}
        </div>
      </section>
    </div>
  );
};

export default Books;
