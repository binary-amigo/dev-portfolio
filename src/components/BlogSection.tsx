
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const blogPosts = [
    { title: "Blog 1", link: "/blog/1" },
    { title: "Blog 2", link: "/blog/2" },
    { title: "Blog 3", link: "/blog/3" },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-slide-in">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Latest Blog Posts</h2>
        </div>
        
        <div className="border-b border-gray-200">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              link={post.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
