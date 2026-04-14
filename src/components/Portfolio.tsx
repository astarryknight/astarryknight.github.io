import React, { useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Linkedin, ChevronDown } from 'lucide-react';

import logo_njit from '../assets/logo_njit.webp';
import logo_pppl from '../assets/logo_pppl.png';
import logo_pton from '../assets/logo_pton.png';
import logo_ieee from '../assets/logo_ieee.png';
import tr from '../assets/transparent.png';
import paper from '../assets/paper_lowres.png';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const projects = [
    {
      id: 0,
      title: "SULI Research Intern",
      category: "AI • Research",
      description: "Parallelized Monte Carlo simulation to achieve more than 10x efficiency. Designed an integrated CAD tool using Fusion360's python API to allow for seamless tolerancing and analyses from the original design.",
      tech: ["Python", "Numba", "JSON", "Bash", "CAD"],
      year: "2025",
      type: "research",
      affiliation: "Princeton Plasma Physics Laboratory",
      logo: logo_pppl,
      github: "https://github.com/johndoe/neural-viz",
    },
    {
      id: 1,
      title: "Undergraduate Researcher - Neural Compositionality",
      category: "Neuroscience • AI",
      description: "Worked alongside a PhD student to study neural compositionality. Evaluated the degree of generalization in different RNN architectures through PCA visualizations and statistical analyses. Designed Recurrent Neural Networks (RNNs) to explore compositionality in structurally modulated neuron populations.",
      tech: ["Python", "Pytorch", "Matplotlib", "NumPy", "Linear Algebra"],
      year: "2025",
      type: "research",
      affiliation: "Princeton Neuroscience Institute",
      logo: logo_pton,
    },
    {
      id: 2,
      title: "Undergraduate Researcher - Brain Age Classification",
      category: "AI • Research",
      description: "Worked to create an end-to-end machine learning model for brain age classification to predict presence of neurodegenerative disorders. Developed a Hyperbolic Graph Convolutional Neural Network (HGCN) achieving more than 10% higher accuracy than previous models.",
      tech: ["Python", "Pytorch", "Latex", "Machine Learning", "Graph Theory", "Hyperbolic Space"],
      year: "2025",
      type: "research",
      affiliation: "New Jersey Institute of Technology",
      logo: logo_njit,
      thumbnail: paper,
    },
    {
      id: 3,
      title: "AI/ML Interest Group Lead",
      category: "Code • Education",
      description: "Wrote and reviewed Google Colab notebooks on natural language processing, deep learning, and computer vision. Designing a project-based AI curriculum to explore many regimes of machine learning, such as RAG, agentic AI, and machine learning architectures.",
      tech: ["Python", "Pytorch", "Markdown", "Ruby", "Git"],
      year: "2024-2025",
      type: "leadership",
      affiliation: "NJIT IEEE",
      logo: logo_ieee,
      github: "https://github.com/astarryknight/ai-ml",
      live: "https://astarryknight.github.io/ai-ml/"
    },
    {
      id: 4,
      title: "Notchable",
      category: "Code • Tools",
      description: "A MacOS utility tool that enhances productivity by providing quick access to frequently used features and applications through the notch.",
      tech: ["Swift", "XCode"],
      year: "2024",
      type: "project",
      affiliation: "",
      logo: tr,
      github: "https://github.com/astarryknight/Notchable"
    },
    {
      id: 5,
      title: "MNIST Digit Classifier",
      category: "AI • Code",
      description: "Created a digit classifier using a Convolution Neural Network (CNN) model in PyTorch. Used Pygame to integrate an interactive digit classification window.",
      tech: ["Python", "Pytorch", "Pygame", "CNN"],
      year: "2025",
      type: "project",
      affiliation: "",
      logo: tr,
      github: "https://github.com/astarryknight/CNN_digit_classifier"
    },
    {
      id: 6,
      title: "IdentifAI",
      category: "AI • Code",
      description: "A robust facial recognition system for quick and seamless student identification. Used OpenCV and face_recognition libraries in python to implement a deep learning model for 99.38% accurate facial recognition. Designed a student upload portal using ReactJS, Vite, and Tailwind CSS. Built a python server using flask and implemented MongoDB to store facial embedding and student data.",
      tech: ["OpenCV", "React", "Vite", "TailwindCSS", "Flask", "MongoDB"],
      year: "2025",
      type: "project",
      affiliation: "",
      logo: tr,
      github: "https://github.com/astarryknight/IdentifAI_Recognition"
    },
    {
      id: 7,
      title: "Coptic Wordle",
      category: "Code • Games",
      description: "A Coptic language word puzzle game similar to Wordle. Played in multiple languages to engage communities learning Coptic. Built with ReactJS and Material UI, with local storage for user analytics and progress tracking.",
      tech: ["React", "MaterialUI", "Local Storage", "User Analytics"],
      year: "2023",
      type: "project",
      affiliation: "",
      logo: tr,
      github: "https://github.com/astarryknight/coptic_wordle_react",
      live: "https://astarryknight.github.io/coptic_wordle_react/"
    },
    {
      id: 8,
      title: "Custom Computer Keyboard",
      category: "Code • Hardware",
      description: "Designed and manufactured a custom keyboard PCB and 3D printed keyboard case. Wrote and flashed 2 keyboard firmwares based off of the QMK library.",
      tech: ["PCB Design", "CAD", "C++", "QMK"],
      year: "2023",
      type: "project",
      affiliation: "",
      logo: tr,
      github: "https://github.com/astarryknight/copt37",
    }
  ];

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    projects.forEach(p => {
      p.category.split(' • ').forEach(cat => cats.add(cat.trim()));
    });
    return Array.from(cats);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(p => p.category.includes(selectedCategory));
  }, [selectedCategory, projects]);

  // Aggregate all unique skills
  const uniqueSkills = useMemo(() => {
    const skills = new Set<string>();
    projects.forEach(project => {
      project.tech.forEach(tech => skills.add(tech));
    });
    return Array.from(skills).sort();
  }, [projects]);

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
      <div key={project.id} className="border border-border rounded-lg p-4 md:p-6 hover:border-foreground/30 transition-colors">
        <div className="flex gap-4 mb-4">
          {project.thumbnail && (
            <div className="hidden md:block flex-shrink-0 w-20 h-24">
              <ImageWithFallback
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <h3 className="font-medium text-lg">{project.title}</h3>
              <span className="text-xs text-muted-foreground mt-1 sm:mt-0">{project.year}</span>
            </div>
            <div className="text-sm text-muted-foreground mb-1">{project.category}</div>
            {project.affiliation && (
              <div className="text-xs text-muted-foreground italic">{project.affiliation}</div>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3 w-3" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Live Demo
            </a>
          )}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const ProjectListItem = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const isExpanded = expandedProject === project.id;

    return (
      <div key={project.id} className="border-b border-border pb-6 last:border-b-0">
        <button
          onClick={() => setExpandedProject(isExpanded ? null : project.id)}
          className="w-full text-left flex gap-4 items-start"
        >
          {project.thumbnail && (
            <div className="hidden md:block flex-shrink-0 w-20 h-24">
              <ImageWithFallback
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <h3 className="font-medium text-base hover:text-muted-foreground transition-colors">{project.title}</h3>
              <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{project.year}</span>
            </div>

            <div className="text-sm text-muted-foreground mb-1">{project.category}</div>

            {project.affiliation && (
              <div className="text-xs text-muted-foreground italic mb-2">{project.affiliation}</div>
            )}

            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <ChevronDown
            className={`flex-shrink-0 w-4 h-4 text-muted-foreground mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-muted text-xs rounded text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:px-8 overflow-x-hidden">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="mb-1">Selected Work</h2>
            <p className="text-muted-foreground text-sm">
              Intersection of computational neuroscience, artificial intelligence, and software engineering
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/astarryknight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/john-girgis-nj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Filters and View Mode */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
          >
            Filters {mobileFiltersOpen ? '−' : '+'}
          </button>

          {/* Category Filter - Desktop */}
          <div className="hidden md:flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded transition-colors ${selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle - Desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-xs rounded transition-colors font-medium ${viewMode === 'list'
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-xs rounded transition-colors font-medium ${viewMode === 'grid'
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Category Filter - Mobile */}
        {mobileFiltersOpen && (
          <div className="md:hidden mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setMobileFiltersOpen(false);
                }}
                className={`px-3 py-1 text-sm rounded transition-colors ${selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Count */}
      <div className="text-xs text-muted-foreground mb-6">
        {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
      </div>

      {/* Projects */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-12' : 'space-y-6 mb-12'}>
        {filteredProjects.map((project, index) =>
          viewMode === 'grid' ? (
            <ProjectCard key={project.id} project={project} index={index} />
          ) : (
            <ProjectListItem key={project.id} project={project} index={index} />
          )
        )}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}

      {/* Skills Section */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-muted text-muted-foreground rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-xs text-muted-foreground">
          Copyright John Girgis 2025. Inspired by www.devp.ca.
        </p>
      </div>
    </div>
  );
}
