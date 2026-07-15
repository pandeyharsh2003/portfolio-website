'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  FileText,
} from 'lucide-react';

const contactMethods = [
  {
    icon: <Mail size={28} />,
    label: 'Email',
    value: 'harsh2003lko@gmail.com',
    href: 'mailto:harsh2003lko@gmail.com',
    color: 'from-blue-light to-blue-light/50',
  },
  {
    icon: <Phone size={28} />,
    label: 'Phone',
    value: '+91 06393509526',
    href: 'tel:+916393509526',
    color: 'from-green-light to-green-light/50',
  },
  {
    icon: <Linkedin size={28} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Pandeyharsh05',
    href: 'https://linkedin.com/in/Pandeyharsh05',
    color: 'from-blue-light to-blue-light/50',
  },
  {
    icon: <Github size={28} />,
    label: 'GitHub',
    value: 'github.com/pandeyharsh2003',
    href: 'https://github.com/pandeyharsh2003',
    color: 'from-blue-light to-blue-light/50',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-white-bg to-white-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-light/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Get in <GradientText>Touch</GradientText>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('mailto') || method.href.startsWith('tel') ? undefined : '_blank'}
              rel={method.href.startsWith('mailto') || method.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`card-elevated p-8 text-center group bg-gradient-to-br ${method.color} to-white`}
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  className="p-4 rounded-lg bg-white border border-border-light text-blue-primary group-hover:shadow-medium transition-all"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {method.icon}
                </motion.div>
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-2">{method.label}</h3>
              <p className="text-text-secondary hover:text-blue-primary transition-colors font-medium">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            Want to see my full experience and projects?
          </p>
          <a
            href="/resume.pdf"
            download="Harsh_Pandey_Resume.pdf"
            className="button-primary inline-flex items-center gap-2 text-lg"
          >
            <FileText size={24} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
