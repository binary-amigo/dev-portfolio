
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import PreviousWork from "@/components/PreviousWork";

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
      <main className="flex-1">
        <Hero />
        <PreviousWork />
        <BlogSection />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
