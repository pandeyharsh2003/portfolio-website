'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  impactValue: string;
  technologies: string[];
  chartData?: Array<{ name: string; value: number }>;
  delay?: number;
}

function ProjectCard({
  title,
  description,
  impact,
  impactValue,
  technologies,
  chartData = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 60 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 80 },
  ],
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="card-elevated overflow-hidden transition-all duration-300 h-full flex flex-col">
        {/* Chart Header */}
        <div className="relative h-48 bg-gradient-to-br from-white-secondary to-white-bg overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
              <Bar dataKey="value" fill="rgba(0, 102, 204, 0.2)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary text-sm mb-4">{description}</p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white-secondary rounded-lg p-3 border border-border-light">
              <p className="text-xs text-text-secondary mb-1">Impact</p>
              <p className="font-semibold text-blue-primary text-sm">{impactValue}</p>
            </div>
            <div className="bg-white-secondary rounded-lg p-3 border border-border-light">
              <p className="text-xs text-text-secondary mb-1">Result</p>
              <p className="font-semibold text-emerald text-sm">{impact}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6 flex-1">
            <p className="text-xs font-semibold text-text-secondary mb-2">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-light text-blue-primary text-xs font-medium px-2 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border-light">
            <button className="flex-1 button-secondary text-sm justify-center inline-flex items-center gap-2">
              <Github size={16} />
              Code
            </button>
            <button className="flex-1 button-primary text-sm justify-center inline-flex items-center gap-2">
              <ExternalLink size={16} />
              Demo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: 'Indian E-Commerce Sales Analytics',
      description: 'End-to-end sales analytics pipeline with 100K+ transaction records',
      impact: 'Revenue & customer insights',
      impactValue: '100K+ records',
      technologies: ['Python', 'SQL', 'Power BI', 'Pandas'],
    },
    {
      title: 'AI Resume Screener',
      description: 'AI-powered resume screening with NLP and machine learning',
      impact: '80% time saved',
      impactValue: '500+ resumes',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Streamlit'],
    },
    {
      title: 'E-Commerce Sales & Customer Dashboard',
      description: 'Multi-page interactive Power BI dashboard with customer behavior',
      impact: 'Customer segmentation',
      impactValue: 'Kaggle dataset',
      technologies: ['Python', 'SQL', 'Power BI'],
    },
    {
      title: 'SocialMoon Analytics Pipeline',
      description: 'Automated reporting dashboards for 6+ digital platforms',
      impact: '60% effort reduction',
      impactValue: '10+ dashboards',
      technologies: ['Python', 'Power BI', 'Excel'],
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-white-bg">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Featured <GradientText>Projects</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real-world analytics projects with measurable business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
