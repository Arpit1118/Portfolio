import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, CloudDrizzle, Leaf, PlaneIcon, AwardIcon, LucideHome, FolderCheckIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "Plant Disease Prediction",
      description: "Implemented a robust Convolutional Neural Network (CNN) to automate the identification and classification of distinct plant diseases from leaf imagery.",
      icon: Leaf,
      tech: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      gradient: "from-orange-400 to-red-500",
      demo: "https://github.com/Arpit1118/Plant_Disease_Prediction-CNN-/blob/main/Plant_Disease_Classification_with_CNN.ipynb",
      github: "https://github.com/Arpit1118/Plant_Disease_Prediction-CNN-/blob/main/Plant_Disease_Classification_with_CNN.ipynb"
    },
    {
      title: "Rainfall Prediction",
      description: "A machine learning model that analyzes historical weather patterns to accurately predict rainfall, helping in better resource management.",
      icon: CloudDrizzle,
      tech: ["Python", "Scikit-Learn", "Pandas", "Random Forest"],
      gradient: "from-blue-400 to-purple-500",
      demo: "https://github.com/Arpit1118/Rainfall-Prediction/blob/main/Rainfall_Prediction.ipynb",
      github: "https://github.com/Arpit1118/Rainfall-Prediction/blob/main/Rainfall_Prediction.ipynb"
    },
    {
      title: "Flight Price Prediction",
      description: "An intelligent pricing tool that uses regression analysis to estimate flight costs, allowing users to find the best time to book travel.",
      icon: PlaneIcon,
      tech: ["Python","Scikit-Learn", "Seaborn", "Random Forest Regressor"],
      gradient: "from-green-400 to-blue-500",
      demo: "https://github.com/Arpit1118/Flight_Price_Prediction/blob/main/Flight_Price_Prediction.ipynb",
      github: "https://github.com/Arpit1118/Flight_Price_Prediction/blob/main/Flight_Price_Prediction.ipynb"
    },
    {
      title: "Olympics Data Analysis",
      description: "A comprehensive data exploration project that uncovers historical trends and performance insights from over 120 years of Olympic Games data.",
      icon: AwardIcon,
      tech: ["Python", "Pandas", "Matplotlib", "Exploratory Data Analysis"],
      gradient: "from-purple-400 to-red-500",
      demo: "https://github.com/Arpit1118/Olympics-Data-Analysis/blob/master/Olympics%20Data%20Analysis.ipynb",
      github: "https://github.com/Arpit1118/Olympics-Data-Analysis/blob/master/Olympics%20Data%20Analysis.ipynb"
    },
    {
      title: "Home Price Prediction",
      description: "A data-driven real estate tool that predicts property values based on location and features to support informed buying and selling decisions.",
      icon: LucideHome,
      tech: ["Python", "Linear Regression", "NumPy", "Pandas"],
      gradient: "from-green-400 to-red-500",
      demo: "https://github.com/Arpit1118/Home-Precise-Prediction/blob/main/Model/Home%20Price%20Prediction.ipynb",
      github: "https://github.com/Arpit1118/Home-Precise-Prediction/blob/main/Model/Home%20Price%20Prediction.ipynb"
    },
    {
      title: "Explore More",
      description: "Explore my full collection of projects showcasing SQL, Power BI, Tableau, and Python, featuring data analysis scripts, dashboards, and visualizations.",
      icon: FolderCheckIcon,
      tech: ["SQL", "Power BI", "Tableau", "Python"],
      gradient: "from-orange-400 to-purple-500",
      demo: "https://github.com/Arpit1118?tab=repositories",
      github: "https://github.com/Arpit1118?tab=repositories"
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore projects that transform data into insights and build intelligent solutions using Python, SQL, Power BI, and AI/ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                          <ExternalLink size={16} />
                        </Button>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                          <Github size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}