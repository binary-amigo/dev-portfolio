import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useData } from "@/hooks/use-data";

interface WorkCardProps {
  title: string;
  index: number;
  link: string;
  className?: string;
}

const WorkCard = ({ title, index, link }: WorkCardProps) => {
  return (
    <Link 
      to={link}
      target="_blank"
      className="inline-block py-4 border-gray-200 relative transition-colors duration-300"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <h3 className="text-lg font-medium underline">{title}</h3>
    </Link>
  );
};

const PreviousWork = () => {
  const previousWorkData = useData();
  const previousWork = previousWorkData?.previousWork || [];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-slide-in">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Previous Work</h2>
        </div>
        
        <div className="border-gray-200 flex flex-col gap-4">
          {previousWork.map((post, index) => (
            <WorkCard 
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

export default PreviousWork;
