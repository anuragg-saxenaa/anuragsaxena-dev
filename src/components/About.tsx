
import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Building solutions that users love and understand"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Anurag Saxena, a passionate full-stack developer with a love for creating 
              digital experiences that combine functionality with beautiful design. With years of 
              experience in the tech industry, I specialize in building modern web applications 
              using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development has led me to work on diverse projects, from 
              enterprise applications to innovative startups. I believe in writing clean, 
              maintainable code and creating solutions that not only work well but also 
              provide exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow hover-scale"
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
