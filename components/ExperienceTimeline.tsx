'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { TrendingUp } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  kpiImprovement: string;
  index: number;
}

function ExperienceItem({
  company,
  role,
  duration,
  achievements,
  technologies,
  kpiImprovement,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 md:mb-16"
    >
      {/* Content */}
      <div className="flex-1">
        <div className="card-elevated p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-blue-primary mb-1">{role}</h3>
            <p className="text-lg font-semibold text-text-primary mb-1">{company}</p>
            <p className="text-sm text-text-secondary">{duration}</p>
          </div>

          {/* KPI Improvement Badge */}
          <div className="mb-4 inline-flex items-center gap-2 bg-green-light text-emerald px-3 py-2 rounded-lg">
            <TrendingUp size={16} />
            <span className="text-sm font-semibold">{kpiImprovement}</span>
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
              Key Achievements
            </p>
            <ul className="space-y-2">
              {achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-text-secondary flex items-start gap-2"
                >
                  <span className="text-emerald mt-1">→</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-light text-blue-primary text-xs font-medium px-2 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const experiences = [
    {
      company: 'SocialMoon',
      role: 'Data Analyst Intern',
      duration: 'Feb 2026 - Present',
      achievements: [
        'Analyzed performance data across 6+ digital platforms',
        'Developed 10+ automated Excel/Power BI dashboards reducing manual reporting by 60%',
        'Cleaned, transformed, and consolidated 50K+ records using Python and Excel',
        'Generated actionable insights improving engagement performance by 25%+',
      ],
      technologies: ['Python', 'Power BI', 'Excel', 'Data Analysis'],
      kpiImprovement: '+25% Engagement Performance',
    },
    {
      company: 'Academic Projects',
      role: 'Data Analytics & ML Projects',
      duration: 'Jan 2024 - Dec 2025',
      achievements: [
        'Built end-to-end analytics pipelines processing 100K+ transaction records',
        'Developed AI resume screener reducing screening time by 80%',
        'Created 20+ SQL queries for sales and customer analysis',
        'Designed interactive Power BI dashboards with 15+ KPIs',
      ],
      technologies: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'NLP'],
      kpiImprovement: '+70% Automation',
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-white-bg to-white-secondary">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Professional <GradientText>Experience</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Focused on delivering data-driven insights and analytics excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Experience items */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
