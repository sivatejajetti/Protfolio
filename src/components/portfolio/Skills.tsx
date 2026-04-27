import { motion } from "framer-motion";
import { Code, Bot, Palette, Languages, Database, Smartphone, Video } from "lucide-react";

const skills = [
  { name: "Java", level: 55, icon: Languages },
  { name: "C", level: 60, icon: Code },
  { name: "Python", level: 55, icon: Bot },
  { name: "HTML", level: 50, icon: Code },
  { name: "CSS", level: 30, icon: Palette },
  { name: "SQL", level: 30, icon: Database },
  { name: "Android Studio", level: 20, icon: Smartphone },
  { name: "Motion Graphics / Video Editing", level: 80, icon: Video },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-primary text-sm tracking-wider">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="code-font text-sm">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover-glow cursor-default aspect-square"
                >
                  <skill.icon className="w-10 h-10 text-primary" />
                  <span className="code-font text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
