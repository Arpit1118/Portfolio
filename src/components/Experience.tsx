import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, TrendingUp, BarChart3 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Master Thesis",
      company: "Friedrich Alexander University",
      period: "Sep 2025 - March 2026",
      description: "Built and optimized LLM pipelines for structured math problem solving, boosting accuracy with RL and evolutionary strategies, and improving data generation, evaluation, and training efficiency.",
      icon: GraduationCap,
      skills: ["Python", "Reinforcement Learning (RL)", "Evolutionary Strategies (ES)", "Data Pipeline Automation", "Model Evaluation", "GPU Optimization"]
    },
    {
      title: "Working Student Data Analytics and Governance",
      company: "Duagon",
      period: "Feb 2024 - July 2025",
      description: "Enhanced data accuracy and reporting reliability by cleaning datasets, defining KPIs, building Power BI dashboards, optimizing SQL queries, and developing Python ML models for predictive insights.",
      icon: BarChart3,
      skills: ["Python", "SQL", "Power BI", "Machine Learning", "Data Cleaning", "KPI Tracking", "Data Visualization"]
    },
    {
      title: "Data Analyst",
      company: "Augmented Systems LLP",
      period: "Jan 2022 - Sep 2022",
      description: "Developed and maintained Power BI reports, dashboards, and KPI scorecards with DAX and SQL, ensuring data accuracy, performance, and actionable business insights.",
      icon: TrendingUp,
      skills: ["Power BI", "SQL", "Tableau", "Data Modeling", "Data Visualization", "Data Accuracy Verification", "Agile/Scrum Collaboration"]
    },
    {
      title: "Project Intern",
      company: "Infolabz",
      period: "Feb 2021 - Jul 2021",
      description: "Built Python data pipelines to clean, transform, and analyze COVID-19 API data, performing EDA, visualizations, SQL-style Pandas queries, and delivering actionable reports.",
      icon: Briefcase,
      skills: ["Python", "Pandas", "Matplotlib", "Data Cleaning", "Data Transformation", "Time-Series Analysis", "Exploratory Data Analysis (EDA)"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            My Data Science & AI Journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
