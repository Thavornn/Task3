import React from "react";
import AboutAuhorComponent from "../_components/AboutAuthorComponent";
import aboutAuthor from "@/data/aboutAuthor";

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col mb-10  gap-10">
        {aboutAuthor?.map((author) => (
          <AboutAuhorComponent key={author?.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default page;
