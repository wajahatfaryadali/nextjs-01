import React from "react";

const CathAll = async ({ params }: { params: Promise<{ cathAll: any }> }) => {
  const { cathAll } = await params;

  console.log(cathAll);

  return <div>CathAll routes for {cathAll?.join("/")}</div>;
};

export default CathAll;
