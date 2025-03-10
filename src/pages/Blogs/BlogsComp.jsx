import { blog } from "../../data/BlogData";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogsComp = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white py-10 pb-14">
      <section data-aos="fade-up-right" data-aos-once="true" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          B2B Dijital Pazarlama Atölyesi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blog.map((item) => (
            <Link data-aos="fade-up-left" data-aos-once="true" key={item.id} to={`/blog/${item.id}`}>
              <BlogCard {...item} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;