
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Application Developer",
      company: "Ford Motors",
      period: "Mar 2022 - Present",
      description: "Leading development of Over The Air vehicle software delivery system using microservices architecture. Implementing CI/CD pipelines and working with cutting-edge automotive technology.",
      achievements: [
        "Developed microservices for vehicle software updates",
        "Implemented security features and log masking utilities",
        "Configured Jenkins for CI/CD pipeline automation",
        "Worked with Kafka, Docker, Kubernetes, and Azure cloud"
      ]
    },
    {
      title: "Senior Developer",
      company: "IA - Income Validation",
      period: "Oct 2021 - Jan 2022",
      description: "Built income validation model application using Apache Camel and microservices. Migrated applications from Azure Kubernetes Service to Rancher Kubernetes engine.",
      achievements: [
        "Implemented EI patterns using Apache Camel",
        "Migrated apps to Kubernetes cluster on Azure",
        "Developed RESTful APIs using Node.js and TypeScript",
        "Created and modified Helm charts for deployment"
      ]
    },
    {
      title: "Lead Developer",
      company: "RBC - EVE Platform",
      period: "Oct 2020 - Oct 2021",
      description: "Architected and developed Electronic Voice Execution platform for rates derivatives trading workflow. Implemented service discovery and distributed configuration using Consul.",
      achievements: [
        "Designed service discovery mechanism with Consul",
        "Implemented encryption/decryption with HashiCorp Vault",
        "Built RFQ services using Spring State Machine",
        "Deployed on Amazon Elastic Kubernetes Service"
      ]
    },
    {
      title: "Sr Lead Developer/Architect",
      company: "IBM/MCCSS - Debt Administration System",
      period: "Aug 2020 - Oct 2020",
      description: "Designed and implemented microservices for automating overpayment and sponsorship debtors system for Ontario government using reactive programming.",
      achievements: [
        "Designed multiple microservices for DEBT flows",
        "Implemented reactive APIs using SpringWebFlux",
        "Built scalable microservices on AWS EKS",
        "Managed by Google Apigee API management"
      ]
    },
    {
      title: "Sr Lead Applications Developer/Architect",
      company: "Scotia - Lean Operations Automation",
      period: "Oct 2017 - Aug 2020",
      description: "Led development of automated credit adjudication process with data ingestion pipelines using Kafka and ElasticSearch. Implemented OAuth2 security and Spring Integration.",
      achievements: [
        "Deployed microservices to PCF on AWS",
        "Built data ingestion pipeline with Kafka and KSQL",
        "Implemented OAuth2 authorization server",
        "Developed Angular 6 components and REST APIs"
      ]
    },
    {
      title: "Sr Native Cloud API Developer",
      company: "RBC - Mid-Tier Simplification",
      period: "Jun 2016 - Oct 2017",
      description: "Built scalable microservice APIs on IBM and Pivotal's Cloud Foundry using Spring Cloud Netflix stack. Developed transaction description enrichment pipeline.",
      achievements: [
        "Built microservices on Cloud Foundry infrastructure",
        "Implemented multi-threaded Java programs",
        "Created transaction enrichment pipeline with Kafka",
        "Architected amortization schedule solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            13+ years of enterprise Java development across major financial institutions and automotive industry
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                <div className="md:ml-16 w-full">
                  <div className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
