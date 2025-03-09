
import React from "react";
import { ButtonCustom } from "@/components/ui/button-custom";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center pt-20 px-6 md:px-12 animate-page-transition">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-6 animate-slide-in" style={{ animationDelay: "0.1s" }}>
          <ButtonCustom variant="work" size="default">
            Open to work
          </ButtonCustom>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-medium mb-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          Imran Khan
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          engineer developer writer
        </p>
        
        <div className="max-w-2xl space-y-4 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg">
            Hi, I am Imran Khan. I am a software engineer with 2+ years of experience.
          </p>
          <p className="text-lg">
            I have worked on a wide range of projects, from small side projects to large-scale enterprise applications.
          </p>
          <p className="text-lg">
            I am passionate about building user-friendly and efficient software that solves real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
