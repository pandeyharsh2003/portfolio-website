'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  trend?: number;
  delay?: number;
  backgroundColor?: string;
}

export function KPICard({
  label,
  value,
  suffix = '',
  prefix = '',
  trend,
  delay = 0,
  backgroundColor = 'from-blue-light via-blue-light/50',
}: KPICardProps) {
  const isPositive = trend ? trend >= 0 : true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`kpi-card bg-gradient-to-br ${backgroundColor} to-white`}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-text-secondary text-sm font-medium">{label}</span>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
            isPositive ? 'bg-green-light text-emerald' : 'bg-red-100 text-red-600'
          }`}>
            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}
            {Math.abs(trend)}%
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="font-bold text-3xl md:text-4xl text-gradient">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </div>
      </div>

      <div className="mt-6 h-1 w-full bg-border-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 2.5, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-primary to-emerald"
        />
      </div>
    </motion.div>
  );
}
