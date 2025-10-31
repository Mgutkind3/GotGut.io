import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '💻',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 95 },
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Shell Scripting', level: 90 },
      { name: 'React', level: 80 },
    ]
  },
  {
    title: 'Infrastructure & Tools',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 95 },
      { name: 'OpenShift', level: 95 },
      { name: 'Kubernetes', level: 95 },
      { name: 'Linux/UNIX', level: 95 },
      { name: 'Jenkins', level: 95 },
      { name: 'Kafka Streams', level: 95 },
      { name: 'Elasticsearch', level: 95 },
      { name: 'MySQL', level: 95 }
    ]
  },
  {
    title: 'Leadership & Practices',
    icon: '🏗️',
    skills: [
      { name: 'Agile/Waterfall', level: 95 },
      { name: 'SRE', level: 95 },
      { name: 'Team Leadership', level: 90 },
      { name: 'System Design', level: 90 },
      { name: 'TDD', level: 90 },
      { name: 'CI/CD', level: 95 },
      { name: 'Microservices', level: 95 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Skills & Expertise
            </motion.h2>
            <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <FadeInSection delay={0.4}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Also experienced with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Go', 'C++', 'Scala', 'Swift', 'PHP', 'Terraform', 'Git', 'Postman', 'Maven', 'GraphQL', 'Spark', 'Hadoop', 'RESTful APIs', 'Spring MVC', 'Avro', 'NoSQL', 'JSON/XML', 'HTML/CSS', 'S3', 'RDS', 'EKS', 'ECR', 'JBOSS EAP', 'Wildfly', 'Tomcat', 'FHIR', 'Log4j', 'Insomnia', 'Wireshark', 'Hasura', 'Apache Pig Latin', 'Web Scraping', 'Big Data Architecture', 'Mobile Architecture'].map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-gray-300 rounded-full text-sm hover:border-purple-500/50 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

