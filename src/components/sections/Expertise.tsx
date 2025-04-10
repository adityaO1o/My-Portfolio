
import { Code, PenTool, Lightbulb, BarChart } from 'lucide-react';

const ExpertiseCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-gray-200 text-black rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border hover:border-primary/20 custom-card">
      <div className="h-14 w-14 bg-black rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

const Expertise = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  return (
    <section id="expertise" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4 text-white">My Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With expertise in both design and development, I create cohesive digital experiences from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in">
          <ExpertiseCard
            icon={Code}
            title="Web Development"
            description="Building responsive, performant websites and web applications using modern technologies and best practices."
          />
          <ExpertiseCard
            icon={PenTool}
            title="UI/UX Design"
            description="Creating intuitive and visually appealing user interfaces that provide exceptional user experiences."
          />
          <ExpertiseCard
            icon={Lightbulb}
            title="Creative Solutions"
            description="Solving complex problems with creative approaches and innovative thinking."
          />
          <ExpertiseCard
            icon={BarChart}
            title="Digital Strategy"
            description="Developing comprehensive digital strategies that align with business goals and user needs."
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills & Technologies</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-400 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">My Approach</h3>
            <p className="text-gray-300">
            I’m a creative and detail-oriented developer with a strong foundation in front-end and back-end technologies including HTML, CSS, JavaScript, React, Node.js, MongoDB, and AI/ML tools. I combine technical proficiency with a user-centric design approach to build digital solutions that are not only functionally powerful but also visually engaging and intuitive.
            </p>
            <p className="text-gray-300">
            My collaborative workflow ensures clients stay involved from concept to launch, resulting in products that truly align with their vision. Whether it's a dynamic single-page application, a scalable e-commerce platform, or an intelligent AI-driven tool, I bring precision, innovation, and a deep commitment to quality to every project.
            </p>
            <a 
               href="#contact" 
               className="inline-block px-6 py-3 bg-cyan-400 text-gray-300 rounded-md hover:bg-cyan-500 transition-colors font-bold"
             >
               Let's Work Together
             </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
