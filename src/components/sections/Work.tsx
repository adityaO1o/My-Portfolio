
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
};

const Work = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
      image: "/gallery/project-1.jpg",
      imageAlt: "E-commerce website displayed on laptop"
    },
    {
      id: 2,
      title: "Finance Dashboard",
      category: "UI/UX Design",
      description: "Interactive dashboard for financial data visualization with real-time updates.",
      image: "/gallery/project-2.jpg",
      imageAlt: "Financial dashboard with charts and graphs"
    },
    {
      id: 5,
      title: "Travel Blog",
      category: "Content Creation",
      description: "Travel blog with custom CMS and location-based content organization.",
      image: "/gallery/project-5.jpg",
      imageAlt: "Travel blog homepage on laptop"
    },
    {
      id: 6,
      title: "Portfolio Site",
      category: "Web Development",
      description: "Personal portfolio website with custom animations and interactive elements.",
      image: "/gallery/project-6.jpg",
      imageAlt: "Portfolio website displayed on devices"
    },
    {
      id: 7,
      title: "Vidyapeeth Website",
      category: "Web Development",
      description: "An educational platform built using React and Node.js, featuring dynamic, user-friendly pages and efficient front-end architecture.",
      image: "/gallery/vidyapeeth.jpg",
      imageAlt: "Educational platform displayed on laptop"
    },
    {
      id: 8,
      title: "AI-Powered Code Reviewer",
      category: "AI/ML Tool",
      description: "A smart tool that offers real-time coding suggestions, detects bugs, and enhances developer productivity using AI algorithms.",
      image: "/gallery/ai-code-reviewer.jpg",
      imageAlt: "AI code reviewer interface"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">My Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent projects that showcase my skills and expertise across different domains.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                filter === category
                  ? 'bg-white text-black'
                  : 'bg-cyan-400 text-white hover:bg-cyan-500'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-xl overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition-all duration-500 border border-cyan-400 custom-card">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-cyan-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-black">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
