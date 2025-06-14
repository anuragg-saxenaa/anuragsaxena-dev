
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Terminal-style header */}
          <div className="flex items-center justify-center mb-8">
            <Terminal className="text-primary mr-3" size={24} />
            <span className="code-font text-muted-foreground">anuragsaxena.dev</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 code-font">
            <span className="text-primary">{'>'}</span> Anurag Saxena
          </h1>
          <div className="code-font text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="text-muted-foreground">// 13+ Years of Enterprise Java Development Expertise</span>
            <br />
            <span className="text-primary">class</span> <span className="text-foreground">Developer</span> {'{'}
            <br />
            <span className="ml-4 text-muted-foreground">// Areas of Expertise</span>
            <br />
            <span className="ml-4"><span className="text-primary">List</span>{'<'}<span className="text-primary">String</span>{'>'} <span className="text-foreground">expertise</span> = <span className="text-primary">Arrays</span>.<span className="text-foreground">asList</span>(</span>
            <br />
            <span className="ml-8 text-green-400">"Microservices"</span>,
            <br />
            <span className="ml-8 text-green-400">"Cloud Native"</span>,
            <br />
            <span className="ml-8 text-green-400">"Spring Boot"</span>
            <br />
            <span className="ml-4">);</span>
            <br />
            {'}'}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 hover-scale intellij-glow code-font">
              <a href="#projects" className="flex items-center">
                <span className="text-primary mr-2">{'>'}</span> View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-scale code-font border-primary/30 hover:border-primary">
              <a href="#contact" className="flex items-center">
                <span className="text-primary mr-2">{'>'}</span> Contact Me
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anuragsaxena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-lg hover:bg-muted/30"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/anuragsaxena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-lg hover:bg-muted/30"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:anuragg.saxenaa@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-scale p-3 rounded-lg hover:bg-muted/30"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
