
import React from 'react';
import { Code2, Database, Cloud, Wrench, TestTube, Puzzle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Java Technologies",
      icon: Code2,
      skills: [
        { name: "Java 8/11", level: 95 },
        { name: "Spring Boot", level: 95 },
        { name: "Spring Framework", level: 90 },
        { name: "Hibernate", level: 90 },
        { name: "Microservices", level: 92 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 88 },
        { name: "Azure", level: 85 },
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Jenkins CI/CD", level: 90 }
      ]
    },
    {
      title: "Data & Messaging",
      icon: Database,
      skills: [
        { name: "Apache Kafka", level: 90 },
        { name: "ElasticSearch", level: 85 },
        { name: "Oracle", level: 92 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 85 }
      ]
    },
    {
      title: "Frontend & APIs",
      icon: Wrench,
      skills: [
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "SOAP Web Services", level: 90 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Testing & Tools",
      icon: TestTube,
      skills: [
        { name: "JUnit", level: 90 },
        { name: "Mockito", level: 88 },
        { name: "Maven", level: 90 },
        { name: "IntelliJ IDEA", level: 92 },
        { name: "Git", level: 85 }
      ]
    },
    {
      title: "Enterprise Integration",
      icon: Puzzle,
      skills: [
        { name: "Spring Integration", level: 90 },
        { name: "Apache Camel", level: 85 },
        { name: "Spring Cloud", level: 88 },
        { name: "Spring Security", level: 85 },
        { name: "JMS", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            <span className="text-primary">{'>'}</span> Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto code-font">
            <span className="text-primary">//</span> 13+ years of enterprise Java development, cloud technologies, and microservices architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg hover:shadow-primary/10 transition-all hover-scale hover:border-primary/30">
              <div className="flex items-center mb-6">
                <category.icon className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold code-font">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium code-font text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary code-font">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
