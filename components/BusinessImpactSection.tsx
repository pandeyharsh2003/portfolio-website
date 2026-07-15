'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { BarChart3, Database, Brain, Zap, TrendingUp, Clock } from 'lucide-react';

interface ImpactKPIProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  description: string;
  delay?: number;
}

function ImpactKPI({
  icon,
  label,
  value,
  suffix,
  description,
  delay = 0,
}: ImpactKPIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="card-elevated p-8 hover:shadow-lg-custom transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="p-4 rounded-lg bg-blue-light text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all">
          {icon}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-gradient font-bold text-3xl md:text-4xl">
            {value}
            {suffix}
          </span>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2">{label}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-border-light rounded-full overflow-hidden mt-4">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-primary to-emerald"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 2, delay: delay + 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

export function BusinessImpactSection() {
  const impactMetrics = [
    {
      icon: <BarChart3 size={28} />,
      label: 'Dashboards Built',
      value: 10,
      suffix: '+',
      description: 'Automated Excel and Power BI dashboards reducing manual effort',
    },
    {
      icon: <Database size={28} />,
      label: 'Records Processed',
      value: 100,
      suffix: 'K+',
      description: 'Data cleaning and transformation across multiple sources',
    },
    {
      icon: <Brain size={28} />,
      label: 'SQL Queries Created',
      value: 20,
      suffix: '+',
      description: 'Complex queries for sales and customer analysis',
    },
    {
      icon: <Zap size={28} />,
      label: 'Manual Effort Reduced',
      value: 60,
      suffix: '%',
      description: 'Automated reporting pipelines and dashboard solutions',
    },
    {
      icon: <TrendingUp size={28} />,
      label: 'Engagement Improved',
      value: 25,
      suffix: '+%',
      description: 'Data-driven insights improving campaign performance',
    },
    {
      icon: <Clock size={28} />,
      label: 'Screening Time Saved',
      value: 80,
      suffix: '%',
      description: 'AI-powered resume screening automation',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-white-bg">
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
            <GradientText>Impact & Results</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Quantifiable results across data analytics projects
          </p>
        </motion.div>

        {/* Impact KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMetrics.map((metric, index) => (
            <ImpactKPI
              key={index}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
