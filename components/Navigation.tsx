'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/95 border-b border-border-light shadow-soft"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-primary to-emerald flex items-center justify-center font-bold text-white">
            HP
          </div>
          <span className="font-bold text-text-primary hidden sm:inline">Harsh Pandey</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-text-secondary hover:text-blue-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="Harsh_Pandey_Resume.pdf"
            className="button-secondary text-sm inline-flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white-secondary rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} className="text-text-primary" /> : <Menu size={24} className="text-text-primary" />}
        </button>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-border-light md:hidden overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-text-secondary hover:text-blue-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Harsh_Pandey_Resume.pdf"
              className="button-primary w-full text-center inline-flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
