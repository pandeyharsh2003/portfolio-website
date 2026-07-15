'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/Pandeyharsh05',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/pandeyharsh2003',
      label: 'GitHub',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:harsh2003lko@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-border-light bg-white-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-primary to-emerald flex items-center justify-center font-bold text-white text-lg">
                HP
              </div>
              <div>
                <h3 className="font-bold text-text-primary">Harsh Pandey</h3>
                <p className="text-xs text-text-secondary">Data Analyst</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Transforming data into actionable insights and building intelligent analytics solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-blue-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-white-secondary text-text-secondary hover:text-blue-primary hover:bg-blue-light transition-all border border-border-light"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-light mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center text-sm text-text-secondary"
        >
          <p>
            © {currentYear} Harsh Pandey. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
