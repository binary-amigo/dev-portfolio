
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add a class to the body for page transition
    document.body.classList.add("animate-page-transition");
    
    return () => {
      document.body.classList.remove("animate-page-transition");
    };
  }, []);

  const getBlogContent = () => {
    switch (id) {
      case "1":
        return {
          title: "Blog 1",
          date: "May 1, 2023",
          content: "This is the content of blog post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl."
        };
      case "2":
        return {
          title: "Blog 2",
          date: "June 15, 2023",
          content: "This is the content of blog post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl."
        };
      case "3":
        return {
          title: "Blog 3",
          date: "July 30, 2023",
          content: "This is the content of blog post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl."
        };
      default:
        return {
          title: "Blog Post Not Found",
          date: "",
          content: "The requested blog post could not be found."
        };
    }
  };

  const blog = getBlogContent();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 px-6 md:px-12 animate-page-transition">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm mb-8 hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 animate-slide-in">
              {blog.title}
            </h1>
            
            {blog.date && (
              <p className="text-sm text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: "0.1s" }}>
                {blog.date}
              </p>
            )}
            
            <div className="space-y-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <p>{blog.content}</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  
  if (id) {
    return <BlogPost />;
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add a class to the body for page transition
    document.body.classList.add("animate-page-transition");
    
    return () => {
      document.body.classList.remove("animate-page-transition");
    };
  }, []);

  const blogPosts = [
    { id: "1", title: "Blog 1", date: "May 1, 2023" },
    { id: "2", title: "Blog 2", date: "June 15, 2023" },
    { id: "3", title: "Blog 3", date: "July 30, 2023" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 px-6 md:px-12 animate-page-transition">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-12 animate-slide-in">
            Blog Posts
          </h1>
          
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow animate-slide-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-xl font-medium mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
