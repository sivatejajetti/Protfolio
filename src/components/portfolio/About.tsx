import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex problems into simple solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Always exploring new technologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with teams",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-primary text-sm tracking-wider">
            &lt;about /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Picture (Temporarily Hidden)
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative aspect-[4/5] w-full max-w-[300px] rounded-[2rem] border-2 border-primary/50 overflow-hidden glow-effect">
              <img
                src="/teja.png"
                alt="Teja Jetti"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          */}

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >

            <div className="glass-card rounded-2xl p-8 hover-glow">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hey there! I'm a passionate BTech 2nd year Computer Science student with the specialization
                in AI with a love for building things that live on the internet. I enjoy
                creating everything from small websites to full-stack applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in tech started with curiosity about how websites work,
                which led me to explore web development, and now I'm diving deep into
                full-stack development and exploring the world of AI.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {traits.map((trait, index) => (
                  <div
                    key={trait.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <trait.icon className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm">{trait.title}</h3>
                      <p className="text-xs text-muted-foreground">{trait.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
