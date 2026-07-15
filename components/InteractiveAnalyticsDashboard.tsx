'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Calendar, Filter, Download } from 'lucide-react';

const lineChartData = [
  { month: 'Jan', revenue: 4000, users: 2400 },
  { month: 'Feb', revenue: 3000, users: 1398 },
  { month: 'Mar', revenue: 2000, users: 9800 },
  { month: 'Apr', revenue: 2780, users: 3908 },
  { month: 'May', revenue: 1890, users: 4800 },
  { month: 'Jun', revenue: 2390, users: 3800 },
  { month: 'Jul', revenue: 3490, users: 4300 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#0066cc', '#10b981', '#f59e0b', '#ef4444'];

const barChartData = [
  { name: 'Q1', sales: 4000 },
  { name: 'Q2', sales: 3000 },
  { name: 'Q3', sales: 2000 },
  { name: 'Q4', sales: 2780 },
];

export function InteractiveAnalyticsDashboard() {
  const [dateRange, setDateRange] = useState('7d');

  const chartVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
          className="mb-12"
        >
          <h2 className="section-title mb-4">
            <GradientText>Analytics Dashboard</GradientText>
          </h2>
          <p className="section-subtitle">
            Data visualization and insights
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="card-elevated mb-8 p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="flex gap-2 flex-wrap">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <button
                key={period}
                onClick={() => setDateRange(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  dateRange === period
                    ? 'bg-blue-primary text-white shadow-medium'
                    : 'bg-white-secondary text-text-secondary hover:bg-border-light'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white-secondary hover:bg-border-light text-text-secondary transition-all">
              <Calendar size={18} />
              <span className="hidden sm:inline">Date</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white-secondary hover:bg-border-light text-text-secondary transition-all">
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-light hover:bg-blue-primary/10 text-blue-primary transition-all">
              <Download size={18} />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Line Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card-elevated p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
                <XAxis stroke="rgba(0, 0, 0, 0.3)" />
                <YAxis stroke="rgba(0, 0, 0, 0.3)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0066cc"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Market Share</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#0066cc"
                  dataKey="value"
                  isAnimationActive
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Area Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-text-primary">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
                <XAxis stroke="rgba(0, 0, 0, 0.3)" />
                <YAxis stroke="rgba(0, 0, 0, 0.3)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                  isAnimationActive
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            variants={chartVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-elevated p-6"
          >
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Quarterly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
                <XAxis stroke="rgba(0, 0, 0, 0.3)" />
                <YAxis stroke="rgba(0, 0, 0, 0.3)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="sales" fill="#0066cc" isAnimationActive />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
