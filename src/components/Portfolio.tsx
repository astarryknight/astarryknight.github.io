import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

import logo_njit from '../assets/logo_njit.webp';
import logo_pppl from '../assets/logo_pppl.png';
import logo_pton from '../assets/logo_pton.png';
import logo_ieee from '../assets/logo_ieee.png';
import tr from '../assets/transparent.png';
import paper from '../assets/paper_lowres.png';

export default function Portfolio() {
  const projects = [
    {
      title: "SULI Research Intern",
      category: "AI",
      description: "Parallelized Monte Carlo simulation to achieve more than 10x efficiency. Designed an integrated CAD tool using Fusion360’s python API to allow for seamless tolerancing and analyses from the original design.",
      tech: ["Python", "Numba", "JSON", "Bash", "CAD"],
      year: "2025",
      type: "research",
      affiliation: "Princeton Plasma Physics Laboratory",
      logo: logo_pppl,
      // thumbnail: "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTgwMzEzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/johndoe/neural-viz",
      //paper: "https://arxiv.org/pdf/2509.01234",
    },
    {
      title: "Undergraduate Researcher",
      category: "Neuroscience • Code • AI",
      description: "Worked alongside a PhD student to study neural compositionality. Evaluated the degree of generalization in different RNN architectures through PCA visualizations and statistical analyses. Designed Recurrent Neural Networks (RNNs) to explore compositionality in structurally modulated neuron populations.",
      tech: ["Python", "Pytorch", "Matplotlib", "NumPy", "Linear Algebra"],
      year: "2025",
      type: "research",
      // affiliation: "Princeton Neuroscience Institute, Princeton University",
      logo: logo_pton,
      // thumbnail: "https://images.unsplash.com/photo-1623357247199-b5e97b20acb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwc2NpZW50aWZpY3xlbnwxfHx8fDE3NTgwNjY2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      //paper: "https://doi.org/10.1016/j.neuropsychologia.2024.example"
    },
    {
      title: "Undergraduate Researcher",
      category: "AI • Code",
      description: "Worked to create an end-to-end machine learning model for brain age classification to predict presence of neurodegenerative disorders. Developed a Hyperbolic Graph Convolutional Neural Network (HGCN) achieving more than 10% higher accuracy than previous models.",
      tech: ["Python", "Pytorch", "Latex", "Machine Learning", "Graph Theory", "Hyperbolic Space"],
      year: "2025",
      type: "research",
      affiliation: "New Jersey Institute of Technology",
      logo: logo_njit,
      thumbnail: paper,
      //github: "https://github.com/johndoe/attention-interpreter",
      //live: "https://attention-viz.netlify.app"
    },
    {
      title: "AI/ML Interest Group Lead",
      category: "Code • AI",
      description: "Wrote and reviewed Google Colab notebooks on natural language processing, deep learning, and computer vision. Designing a project-based AI curriculum to explore many regimes of machine learning, such as RAG, agentic AI, and machine learning architectures.",
      tech: ["Python", "Pytorch", "Markdown", "Ruby", "Git"],
      year: "2024-2025",
      type: "project",
      affiliation: "NJIT IEEE",
      logo: logo_ieee,
      // thumbnail: "https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBicmFpbiUyMG5ldXJvc2NpZW5jZXxlbnwxfHx8fDE3NTgwNjY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/ai-ml",
      live: "https://astarryknight.github.io/ai-ml/"
    },
    {
      title: "Notchable",
      category: "Code",
      description: "A MacOS utility tool that enhances productivity by providing quick access to frequently used features and applications through the notch.",
      tech: ["Swift", "XCode"],
      year: "2024",
      type: "project",
      // affiliation: "DeepMind",
      logo: tr,
      // thumbnail: "https://images.unsplash.com/photo-1643888685885-366ca3a7e7c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB0b29sfGVufDF8fHx8MTc1ODA2NjY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/Notchable"
    },
    {
      title: "MNIST Digit Classifier",
      category: "AI • Code",
      description: "Created a digit classifier using a Convolution Neural Network (CNN) model in PyTorch. Used Pygame to integrate an interactive digit classification window.",
      tech: ["Python", "Pytorch", "Pygame", "CNN"],
      year: "2025",
      type: "project",
      // affiliation: "Meta Reality Labs",
      logo: tr,
      // thumbnail: "https://images.unsplash.com/photo-1732704573802-8ec393009148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGNvbXB1dGVyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODA1MjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/CNN_digit_classifier"
    },
    {
      title: "IdentifAI",
      category: "AI • Code",
      description: "A robust facial recognition system for quick and seamless student identification. Used OpenCV and face_recognition libraries in python to implement a deep learning model for 99.38% accurate facial recognition. Designed a student upload portal using ReactJS, Vite, and Tailwind CSS. Built a python server using flask and implemented MongoDB to store facial embedding and student data that is used by the facial recognition program.",
      tech: ["OpenCV", "React", "Vite", "TailwindCSS", "Flask", "MongoDB"],
      year: "2025",
      type: "project",
      // affiliation: "Meta Reality Labs",
      logo: tr,
      // thumbnail: "https://images.unsplash.com/photo-1732704573802-8ec393009148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGNvbXB1dGVyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODA1MjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/IdentifAI_Recognition"
    },
    {
      title: "Coptic Wordle",
      category: "Code",
      description: "A robust facial recognition system for quick and seamless student identification. Used OpenCV and face_recognition libraries in python to implement a deep learning model for 99.38% accurate facial recognition. Designed a student upload portal using ReactJS, Vite, and Tailwind CSS. Built a python server using flask and implemented MongoDB to store facial embedding and student data that is used by the facial recognition program.",
      tech: ["React", "MaterialUI", "Local Storage", "User Analytics"],
      year: "2023",
      type: "project",
      // affiliation: "Meta Reality Labs",
      logo: tr,
      // thumbnail: "https://images.unsplash.com/photo-1732704573802-8ec393009148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGNvbXB1dGVyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODA1MjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/coptic_wordle_react",
      live: "https://astarryknight.github.io/coptic_wordle_react/"
    },
    {
      title: "Custom Computer Keyboard",
      category: "Code",
      description: "Designed and manufactured a custom keyboard PCB and 3D printed keyboard case. Wrote and flashed 2 keyboard firmwares based off of the QMK library.",
      tech: ["PCB Design", "CAD", "C++", "QMK"],
      year: "2023",
      type: "project",
      // affiliation: "Meta Reality Labs",
      logo: tr,
      // thumbnail: "https://images.unsplash.com/photo-1732704573802-8ec393009148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGNvbXB1dGVyJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODA1MjE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/astarryknight/copt37",
      //live: "https://astarryknight.github.io/coptic_wordle_react/"
    }
  ];

  // Aggregate all unique skills
  const allSkills = projects.flatMap(project => project.tech);
  const uniqueSkills = [...new Set(allSkills)].sort();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 md:px-8 overflow-x-hidden">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2>Selected Work</h2>
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
        <p className="text-muted-foreground">
          Intersection of computational neuroscience, artificial intelligence, and software engineering
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-border pb-8 last:border-b-0 relative">
            <div className="flex gap-4 w-full min-w-0">
              {/* Thumbnail - hidden on mobile */}
              {
                project.thumbnail && (
                  <div className="hidden md:block flex-shrink-0 w-24 h-32">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                )
              }

              {/* Content */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 w-full">
                  <h3 className="font-medium">{project.title}</h3>
                  <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{project.year}</span>
                </div>

                <div className="text-sm text-muted-foreground mb-1">
                  {project.category}
                </div>

                <div className="text-xs text-muted-foreground mb-3 italic">
                  {project.affiliation}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mb-4 w-full">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper} ho
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Paper
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Logo cube in bottom right - hidden on mobile */}
            <div className="hidden md:block absolute bottom-2 right-2">
              <div className="w-12 h-12 rounded-lg">
                <ImageWithFallback
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-full h-full object-contain rounded" style={{ filter: "grayscale(1)" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Copyright John Girgis 2025. Inspired by www.devp.ca.
        </p>
      </div>
    </div>
  );
}