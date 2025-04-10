
import { BriefcaseIcon, GraduationCap } from 'lucide-react';

type TimelineItem = {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
  icon?: string;
};

const Experience = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 6,
      date: "2023 – May",
      title: "12th Grade – Non-Medical Science",
      organization: "Kendriya Vidyalaya, Sector 3, Rohini, Delhi",
      description: "Completed high school with a focus on Physics, Chemistry, and Mathematics.",
      type: "education",
      icon: "📘"
    },
    {
      id: 5,
      date: "2023 – Sept",
      title: "Bachelor's in Computer Science Engineering",
      organization: "Bhagwan Parshuram Institute of Technology (BPIT), Delhi – GGSIPU",
      description: "Pursuing B.Tech in Computer Science, currently in the 4th semester. Building strong foundations in programming, web development, and emerging technologies.",
      type: "education",
      icon: "🎓"
    },
    {
      id: 4,
      date: "2024 – Jan",
      title: "UI/UX Designer",
      organization: "Creative Solutions",
      description: "Designed intuitive user interfaces for web and mobile apps, conducted user research, and created wireframes and interactive prototypes using Figma.",
      type: "work",
      icon: "🎨"
    },
    {
      id: 3,
      date: "2024 – March",
      title: "Web Developer",
      organization: "Digital Agency (Startup)",
      description: "Developed responsive and dynamic websites using React and modern JavaScript frameworks. Focused on user-centric features and seamless interactivity.",
      type: "work",
      icon: "💻"
    },
    {
      id: 2,
      date: "2024 – July",
      title: "Frontend Developer",
      organization: "Self-Driven Projects & Freelance",
      description: "Specialized in HTML, CSS, JavaScript, React, and UI/UX principles. Built clean, responsive, and accessible web interfaces.",
      type: "work",
      icon: "🧑‍💻"
    },
    {
      id: 1,
      date: "2025 – Jan – Present",
      title: "Backend Developer / AI & ML Enthusiast",
      organization: "Learning & Building Projects",
      description: "Exploring backend technologies like Python and Node.js. Developing backend and AI/ML-powered applications using the MERN stack and other tools.",
      type: "work",
      icon: "🧠"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4 text-white">My Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and educational background that has shaped my skills and expertise.
          </p>
        </div>
        
        <div className="relative fade-in">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="w-full md:w-[calc(50%-40px)]">
                  <div className="relative p-6 bg-gray-200 text-black rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow custom-card">
                    <div className={`absolute top-6 ${index % 2 === 0 ? 'left-0 -translate-x-full pl-8' : 'right-0 translate-x-full pr-8'} hidden md:block text-right text-cyan-400 font-bold`}>
                      {item.date}
                    </div>
                    <div className="flex items-center mb-3 md:hidden">
                      <span className="text-cyan-500 font-bold">{item.date}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="mr-3 p-2 rounded-full bg-black">
                        {item.icon ? (
                          <span className="text-lg">{item.icon}</span>
                        ) : item.type === 'work' ? (
                          <BriefcaseIcon size={18} className="text-white" />
                        ) : (
                          <GraduationCap size={18} className="text-white" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-600">{item.title}</h3>
                    </div>
                    <p className="text-black font-medium mb-3">{item.organization}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 fade-in">
          <a 
            href="/gallery/resume.pdf" 
            className="inline-block px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
