// FILE: data/harsh-info.ts
// UPDATE THIS FILE WITH YOUR ACTUAL INFORMATION FROM YOUR RESUME

export const harshInfo = {
  // BASIC INFO
  name: "Harsh Pandey",
  title: "Data Analyst & Business Intelligence Specialist",
  phone: "+91 98765 43210", // UPDATE THIS
  email: "harsh@example.com", // UPDATE THIS
  linkedin: "https://linkedin.com/in/harshpandey", // UPDATE THIS
  github: "https://github.com/harshpandey", // UPDATE THIS
  
  // HERO SECTION
  heroDescription: "Transforming raw data into actionable insights. I create comprehensive dashboards and reports that drive business decisions. Experienced with SQL, Python, Power BI, and Tableau.",
  
  // KPI METRICS (update with your actual achievements)
  kpiMetrics: [
    {
      label: "Reports Created",
      value: 150,
      suffix: "+",
      trend: 12,
    },
    {
      label: "Data Queries Optimized",
      value: 300,
      suffix: "+",
      trend: 8,
    },
    {
      label: "Dashboards Built",
      value: 85,
      suffix: "+",
      trend: 15,
    },
    {
      label: "Team Members Trained",
      value: 45,
      prefix: "",
      trend: 5,
    },
  ],

  // SKILLS - UPDATE WITH YOUR ACTUAL SKILLS
  skills: [
    {
      title: "SQL",
      level: "Advanced",
      description: "Advanced query optimization and data manipulation",
    },
    {
      title: "Python",
      level: "Advanced",
      description: "Data processing with Pandas, NumPy, Matplotlib",
    },
    {
      title: "Power BI",
      level: "Advanced",
      description: "Interactive dashboards and business intelligence",
    },
    // ... add more
  ],

  // EXPERIENCE - UPDATE WITH YOUR ACTUAL WORK HISTORY
  experience: [
    {
      company: "Current Company Name",
      role: "Senior Data Analyst",
      duration: "Jan 2023 - Present",
      achievements: [
        "Built X+ dashboards for cross-functional teams",
        "Optimized SQL queries improving performance by X%",
        "Developed ML model for customer insights",
      ],
      technologies: ["SQL", "Power BI", "Python"],
      kpiImprovement: "+35% Decision Speed",
    },
    // ... add more
  ],

  // PROJECTS - UPDATE WITH YOUR ACTUAL PROJECTS
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      impact: "Key impact achieved",
      impactValue: "X% improvement",
      technologies: ["SQL", "Python"],
    },
    // ... add more
  ],

  // SOCIAL LINKS
  socialLinks: {
    linkedin: "https://linkedin.com/in/harshpandey",
    github: "https://github.com/harshpandey",
    email: "harsh@example.com",
  },
};

/**
 * INSTRUCTIONS FOR UPDATING YOUR PORTFOLIO
 * 
 * 1. BASIC INFO
 *    - Update name, phone, email
 *    - Add correct LinkedIn and GitHub URLs
 * 
 * 2. HERO SECTION
 *    - Update heroDescription with your professional summary
 * 
 * 3. KPI METRICS
 *    - Replace with your actual achievements:
 *      - Reports/Dashboards created
 *      - Queries optimized
 *      - Time saved
 *      - Revenue identified
 *      - Etc.
 * 
 * 4. SKILLS
 *    - List your actual technical skills
 *    - Mark as "Advanced" or "Intermediate"
 *    - Add relevant descriptions
 * 
 * 5. WORK EXPERIENCE
 *    - Add your actual company names
 *    - Update job titles and durations
 *    - Add real achievements with metrics
 *    - List technologies you used
 *    - Mention KPI improvements you achieved
 * 
 * 6. PROJECTS
 *    - Add your real data analytics projects
 *    - Include business problems solved
 *    - Mention data sources and sizes
 *    - List key metrics/KPIs tracked
 *    - Add measurable impact achieved
 * 
 * FILES TO UPDATE:
 * - components/HeroDashboard.tsx
 * - components/SkillsSection.tsx
 * - components/ExperienceTimeline.tsx
 * - components/ProjectsSection.tsx
 * - components/ContactSection.tsx
 */
