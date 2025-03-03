import { useParams } from "react-router-dom";
import { blog } from "../../data/BlogData";
import { Link } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const blogData = blog.find((item) => item.id === parseInt(id));
    const otherBlogs = blog.filter((item) => item.id !== parseInt(id));

    if (!blogData) {
        return <h2 className="text-center text-2xl font-semibold mt-10">Blog bulunamadı!</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <img
                    src={blogData.imageUrl}
                    alt={blogData.title}
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
                        {blogData.title}
                    </h1>
                </div>
            </div>

            <div className="mt-8">
                {blogData.sections.map((section, index) => (
                    <div key={index} className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-primary pl-3">
                            {section.heading}
                        </h2>
                        <p className="text-gray-700 mt-3 leading-relaxed">{section.content}</p>
                    </div>
                ))}
            </div>

            {otherBlogs.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-primary pl-3 mb-6">
                        Bunlar da ilginizi çekebilir:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {otherBlogs.slice(0, 3).map((item) => (
                            <Link key={item.id} to={`/blog/${item.id}`} className="block h-full">
                                <div className="shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mt-2 flex-grow">
                                            {item.sections[0]?.content.slice(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetail;