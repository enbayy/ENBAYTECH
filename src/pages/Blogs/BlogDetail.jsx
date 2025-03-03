import { useParams } from "react-router-dom";
import { blog } from "../../data/BlogData";

const BlogDetail = () => {
    const { id } = useParams();
    const blogData = blog.find((item) => item.id === parseInt(id));

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
        </div>
    );
};

export default BlogDetail;