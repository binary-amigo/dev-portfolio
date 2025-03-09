
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add a class to the body for page transition
    document.body.classList.add("animate-page-transition");
    
    return () => {
      document.body.classList.remove("animate-page-transition");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BlogSection />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
