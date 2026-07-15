'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import {
  Database,
  Code,
  BarChart3,
  GitBranch,
  Cpu,
} from 'lucide-react';

interface TechStackItemProps {
  name: string;
  icon: React.ReactNode;
  category: string;
  delay?: number;
}

function TechStackItem({ name, icon, category, delay = 0 }: TechStackItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="
          card-elevated p-6 text-center cursor-pointer
          hover:border-blue-primary transition-all duration-300
          hover:shadow-lg-custom
        "
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-3"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-3 rounded-lg bg-blue-light text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h4 className="font-semibold text-text-primary mb-1 group-hover:text-blue-primary transition-colors">
          {name}
        </h4>
        <p className="text-xs text-text-secondary">{category}</p>
      </div>
    </motion.div>
  );
}

export function TechStackSection() {
  const techStack = [
    { name: 'PostgreSQL', category: 'Database', icon: <Database size={24} /> },
    { name: 'MySQL', category: 'Database', icon: <Database size={24} /> },
    { name: 'SQL Server', category: 'Database', icon: <Database size={24} /> },
    { name: 'Pandas', category: 'Python', icon: <Code size={24} /> },
    { name: 'NumPy', category: 'Python', icon: <Code size={24} /> },
    { name: 'Matplotlib', category: 'Python', icon: <Code size={24} /> },
    { name: 'Power BI', category: 'BI & Analytics', icon: <BarChart3 size={24} /> },
    { name: 'Tableau', category: 'BI & Analytics', icon: <BarChart3 size={24} /> },
    { name: 'Looker', category: 'BI & Analytics', icon: <BarChart3 size={24} /> },
    { name: 'Excel', category: 'Office', icon: <Code size={24} /> },
    { name: 'Git', category: 'Version Control', icon: <GitBranch size={24} /> },
    { name: 'GitHub', category: 'Version Control', icon: <GitBranch size={24} /> },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-white-secondary">
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
            <GradientText>Tech Stack</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {techStack.map((tech, index) => (
            <TechStackItem
              key={index}
              {...tech}
              delay={index * 0.02}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
