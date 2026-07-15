'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { KPICard } from './KPICard';
import { GradientText } from './GradientText';
import { FileText, Linkedin, Github, Mail } from 'lucide-react';

const KPI_DATA = [
  {
    label: 'Dashboards Built',
    value: 10,
    suffix: '+',
    trend: 25,
    backgroundColor: 'from-blue-light via-blue-light/50',
  },
  {
    label: 'Records Analyzed',
    value: 100,
    suffix: 'K+',
    trend: 12,
    backgroundColor: 'from-green-light via-green-light/50',
  },
  {
    label: 'SQL Queries Created',
    value: 20,
    suffix: '+',
    trend: 18,
    backgroundColor: 'from-blue-light via-blue-light/50',
  },
  {
    label: 'Manual Reporting Reduced',
    value: 60,
    prefix: '',
    suffix: '%',
    trend: 8,
    backgroundColor: 'from-green-light via-green-light/50',
  },
];

export function HeroDashboard() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 overflow-hidden bg-gradient-to-b from-white-bg to-white-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-light/20 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="section-title mb-4">
              Hi, I'm <GradientText>Harsh Pandey</GradientText>
            </h1>
            <p className="section-subtitle mb-6 text-text-secondary">
              Full-Stack Developer & AI Systems Architect
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Building premium, high-performance web, mobile & desktop applications. Specializing in AI Agents, System Architecture, and innovative solutions. Full-Stack Developer with expertise in TypeScript, building the next generation of AI-powered systems.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="/resume.pdf" 
                download="Harsh_Pandey_Resume.pdf"
                className="button-primary inline-flex items-center gap-2"
              >
                <FileText size={20} />
                Resume
              </a>
              <a 
                href="mailto:harsh2003lko@gmail.com"
                className="button-secondary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-lg bg-white-secondary hover:bg-blue-light text-blue-primary transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-lg bg-white-secondary hover:bg-blue-light text-blue-primary transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-lg bg-white-secondary hover:bg-blue-light text-blue-primary transition-all">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-primary to-blue-primary/50 rounded-2xl blur-2xl opacity-20" />
              <div className="relative rounded-2xl border border-border-light overflow-hidden shadow-lg-custom">
                <Image
                  src="/harsh.jpeg"
                  alt="Harsh Pandey"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* KPI Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {KPI_DATA.map((kpi, index) => (
            <KPICard
              key={index}
              {...kpi}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
