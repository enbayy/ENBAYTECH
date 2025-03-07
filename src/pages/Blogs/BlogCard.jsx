import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ id, imageUrl, title, description }) => {
  return (
    <Link to={`/blog/${id}`} className="group block">
      <div className="dark:text-white">
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 rounded-tl-3xl"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950 -translate-y-16 rounded-tl-3xl rounded-br-3xl">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-500 text-sm">{description}</p>
          <div className="flex justify-end pr-4 text-gray-500">
            <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;