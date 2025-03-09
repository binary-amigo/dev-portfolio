
import { useData } from "@/hooks/use-data";

interface SkillProps {
  name: string;
  index: number;
}

const Skill = ({ name, index }: SkillProps) => {
  return (
    <div 
  className="cursor-pointer bg-black text-white px-4 py-2 rounded-full text-sm inline-flex items-center justify-center transition-all hover:bg-transparent hover:text-black hover:border-black hover:scale-105 animate-slide-in border border-transparent"
  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
>
  {name}
</div>

  );
};

const Skills = () => {
  const skills = useData()?.skills || [];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-slide-in">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">Skills</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
