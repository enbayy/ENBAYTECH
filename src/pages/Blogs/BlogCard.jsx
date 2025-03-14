import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ id, imageUrl, title, description }) => {
  return (
    <Link to={`/blog/${id}`} className="group block">
      <div className="dark:text-white">
        <div className="overflow-hidden rounded-tl-3xl">
          <img
            src={imageUrl}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 rounded-tl-3xl"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-[#F8FAFC] dark:bg-[#0F172A] -translate-y-16 rounded-tl-3xl rounded-br-3xl group relative">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-500 text-sm">{description}</p>
          <div className="flex justify-end pr-4 text-gray-500">
            <FaArrowRight className="group-hover:text-[#E76F51] dark:group-hover:text-[#E9C46A] group-hover:translate-x-2 duration-300" />
          </div>
          <span className="absolute left-0 bottom-0 w-0 h-[6px] bg-[#E76F51] dark:bg-[#E9C46A] transition-all duration-300 group-hover:w-full"></span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;