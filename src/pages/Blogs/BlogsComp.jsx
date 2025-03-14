import { blog } from "../../data/BlogData";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const BlogsComp = () => {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] dark:text-white py-10 pb-14">
      <section className="container">
        <h1
          data-aos="fade-up-left"
          data-aos-once="true"
          className="my-8 border-l-8 border-[#E76F51]/50 dark:border-[#E9C46A]/50 py-2 pl-2 text-3xl font-semibold text-[#E76F51] dark:text-[#E9C46A]"
        >
          B2B Dijital Pazarlama Atölyesi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blog.map((item) => (
            <Link
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="1000"
              key={item.id}
              to={`/blog/${item.id}`}
              className="block bg-transparent text-[#0F172A] dark:text-[#E9C46A] rounded-xl p-4 transition duration-300 hover:scale-[1.02]"
            >
              <BlogCard {...item} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;