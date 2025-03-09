import { ButtonCustom } from "@/components/ui/button-custom";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center pt-20 px-6 md:px-12 animate-page-transition">
      
      <div className="max-w-4xl mx-auto w-full">
      <div>
        <img src="src/assets/gojo.png"  alt="Hero" className="h-[400px]" />
        </div>
        <div className="mb-6 animate-slide-in flex items-center" style={{ animationDelay: "0.1s" }} onClick={() => window.location.href = "mailto:imrankhanxdev@gmail.com"}>
          <ButtonCustom variant="outline" size="default" className="rounded-2xl border-[#77B254] border-2 flex">
          <span className="mr-2 text-lg text-[#77B254]">&bull;</span><span className="text-lg">Open to work </span>
          </ButtonCustom>
        </div>

        <div className="flex items-center my-2">
        <h1 className="text-3xl md:text-5xl mr-4 font-medium animate-slide-in" style={{ animationDelay: "0.2s" }}>
          Imran Khan
        </h1>
        <div className="flex space-x-4 animate-slide-in" style={{ animationDelay: "0.3s" }}>
        <a
              href="https://github.com/binary-amigo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/imran-khan86/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:imrankhanxdev@gmail.com"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-7 w-7" />
            </a>
        </div>
        </div>  
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
