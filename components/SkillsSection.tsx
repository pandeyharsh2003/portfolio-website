'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import {
  Database,
  Code,
  BarChart3,
  TableProperties,
  TrendingUp,
  Brain,
  FileJson,
  GitBranch,
} from 'lucide-react';

interface SkillCardProps {
  title: string;
  level: 'Advanced' | 'Intermediate';
  icon: React.ReactNode;
  description: string;
  delay?: number;
}

function SkillCard({
  title,
  level,
  icon,
  description,
  delay = 0,
}: SkillCardProps) {
  const levelConfig = {
    Advanced: { color: 'bg-green-light', badge: '⭐⭐⭐' },
    Intermediate: { color: 'bg-blue-light', badge: '⭐⭐' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`
          card-elevated relative h-full p-6 cursor-default
          overflow-hidden transition-all duration-300
        `}
      >
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="p-3 rounded-lg bg-blue-light text-blue-primary"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
            <span className={`text-xs font-bold px-2 py-1 rounded-lg ${levelConfig[level].color} text-emerald`}>
              {levelConfig[level].badge}
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>

          {/* Skill bar */}
          <div className="mt-4 h-2 bg-border-light rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-blue-primary to-emerald`}
              initial={{ width: 0 }}
              whileInView={{ width: level === 'Advanced' ? '95%' : '70%' }}
              transition={{ duration: 1, delay: delay + 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const skills: Array<{
    title: string;
    level: 'Advanced' | 'Intermediate';
    icon: React.ReactNode;
    description: string;
  }> = [
    {
      title: 'Python',
      level: 'Advanced',
      icon: <Code size={24} />,
      description: 'Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, NLP',
    },
    {
      title: 'SQL',
      level: 'Advanced',
      icon: <Database size={24} />,
      description: 'MySQL, PostgreSQL, Queries, Joins, Views, Stored Procedures',
    },
    {
      title: 'Power BI',
      level: 'Advanced',
      icon: <BarChart3 size={24} />,
      description: 'Interactive dashboards, KPI reporting, Data storytelling',
    },
    {
      title: 'Excel',
      level: 'Advanced',
      icon: <TableProperties size={24} />,
      description: 'Advanced formulas, Pivot tables, Dashboard design',
    },
    {
      title: 'Data Analysis',
      level: 'Advanced',
      icon: <TrendingUp size={24} />,
      description: 'EDA, Customer Segmentation, Sales Analysis',
    },
    {
      title: 'Machine Learning',
      level: 'Intermediate',
      icon: <Brain size={24} />,
      description: 'Classification, Regression, NLP, Model Evaluation',
    },
    {
      title: 'Data Visualization',
      level: 'Advanced',
      icon: <BarChart3 size={24} />,
      description: 'Dashboard design, KPI tracking, Data storytelling',
    },
    {
      title: 'Streamlit',
      level: 'Intermediate',
      icon: <Code size={24} />,
      description: 'Interactive dashboards, Web applications',
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-white-bg">
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
            Technical <GradientText>Skills</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Expertise in data analytics and business intelligence tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
