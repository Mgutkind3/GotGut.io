import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Capital One',
    location: 'New York City, NY',
    period: '2024 - Present',
    description: [
      'Partner across business units on a Cyber SRE team, delivering AI-driven solutions to enhance security, automation, and resiliency',
      'Directed the design, development, and deployment of self-healing infrastructure, improving application reliability and reducing operational risk',
      'Led a cost optimization initiative that generated $1.5M in annual savings, driving efficiency and measurable business impact'
    ],
    skills: ['AI/ML', 'SRE', 'AWS', 'Infrastructure', 'Automation', 'Cost Optimization']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Optum, UnitedHealth Group',
    location: 'Basking Ridge, NJ',
    period: '2021 - 2024',
    description: [
      'Led a team of 12 full-time Software Engineers',
      'Orchestrated deployments for APIs, Kafka Streaming components and Batch Jobs',
      'Championed bi-weekly seminars that research and develop modern testing solutions',
      'Designed and built search-based Java Spring Boot APIs, Real-Time Kafka streaming solutions, Multiregional AWS Disaster Recovery, and AWS Data Migration Applications',
      'Helped transition contractors to full-time hires and hosted weekly touchpoints for interns and newly hired individuals',
      'Built creative and innovative automated DevOps solutions'
    ],
    skills: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Team Leadership', 'Mentorship']
  },
  {
    title: 'Software Engineer',
    company: 'Optum, UnitedHealth Group',
    location: 'Basking Ridge, NJ',
    period: '2020 - 2021',
    description: [
      'Search-based API Development, Real-time Kafka streaming, AWS Process Migrations and file ingestion',
      'Designed and implemented Microservice architecture throughout API Ecosystem'
    ],
    skills: ['Java', 'Kafka', 'Microservices', 'AWS', 'API Development']
  },
  {
    title: 'Technology Development Program Associate',
    company: 'Optum, UnitedHealth Group',
    location: 'Basking Ridge, NJ',
    period: '2019 - 2020',
    description: [
      'Built, maintained, and designed CI/CD and automation solutions for Java web services'
    ],
    skills: ['CI/CD', 'DevOps', 'Java', 'Automation']
  },
  {
    title: 'Software Development Intern',
    company: 'Optum, UnitedHealth Group',
    location: 'Basking Ridge, NJ',
    period: 'Summers 2016 - 2018',
    description: [
      'Created real-time Kafka streaming processes to replace batch updating',
      'Built mobile interfaces for application monitoring',
      'Developed Java web services and provided backend support for user interfaces'
    ],
    skills: ['Java', 'Kafka', 'Mobile Development', 'Backend Development']
  },
  {
    title: 'Website Developer',
    company: 'Self Employed',
    location: 'Remote',
    period: '2017 - 2018',
    description: [
      'Provided website solutions for multiple business entities'
    ],
    skills: ['Web Development', 'Client Management', 'Full-Stack']
  },
  {
    title: 'Python Programmer',
    company: 'Washington College',
    location: 'Chestertown, MD',
    period: '2015 - 2016',
    description: [
      'Designed Python algorithms for data standardization',
      'Managed team of 3 Developers',
      'Helped build and troubleshoot large-scale technical solutions for University infrastructure'
    ],
    skills: ['Python', 'Data Processing', 'Team Management', 'IT Support']
  }
];

const education = [
  {
    degree: 'B.A. in Computer Science',
    school: 'Washington College, Chestertown, MD',
    period: 'August 2015 - May 2019',
    description: 'Minors: Information Systems, Business Management'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Experience & Education
            </motion.h2>
            <p className="text-gray-400 text-lg">My professional journey and background</p>
          </div>
        </FadeInSection>

        {/* Experience Timeline */}
        <div className="mb-20">
          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 text-indigo-400">Professional Experience</h3>
          </FadeInSection>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative pl-8 md:pl-12 border-l-2 border-indigo-500/50 hover:border-indigo-500 transition-colors"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-slate-900" />
                  
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                        {exp.location && <p className="text-gray-500 text-sm mt-1">{exp.location}</p>}
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-slate-700/50 px-4 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="text-gray-300 mb-4 leading-relaxed space-y-2 list-disc list-inside">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-10 text-indigo-400">Education</h3>
          </FadeInSection>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-purple-400 font-medium">{edu.school}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-slate-700/50 px-4 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <FadeInSection delay={0.4}>
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
            >
              Download Resume
            </motion.button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

