import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {useData} from "@/hooks/use-data";

interface BlogCardProps {
  title: string;
  index: number;
  link: string;
}

const BlogCard = ({ title, index, link }: BlogCardProps) => {
  return (
    <Link 
      to={link}
      className={cn(
        "block py-4 border-t border-gray-200 group relative",
        "hover:bg-gray-50/50 transition-colors duration-300 animate-slide-in"
      )}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

const BlogSection = () => {
  const blogData = useData();
  const blogPosts = blogData?.blog || [];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-slide-in">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Blogs</h2>
        </div>
        
         {blogPosts.length > 0 ? ( <div className="border-b border-gray-200">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              link={post.link}
              index={index}
            />
          ))}
        </div>) : (
          <p className="text-gray-500">Coming Soon</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
