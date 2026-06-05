import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Remote",
    period: "Jan 2023 – Present",
    type: "Full-time",
    description: "Lead development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency BD",
    location: "Dhaka, Bangladesh",
    period: "Jun 2021 – Dec 2022",
    type: "Full-time",
    description: "Developed and maintained multiple client projects ranging from e-commerce platforms to CMS systems. Improved performance metrics by 40%.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Startup Ventures",
    location: "Dhaka, Bangladesh",
    period: "Jan 2021 – May 2021",
    type: "Contract",
    description: "Built responsive UIs and integrated REST APIs for a SaaS dashboard product. Collaborated closely with design and backend teams.",
    technologies: ["React", "TypeScript", "CSS Modules"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-4 md:left-6 top-4 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm" />

                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">{exp.type}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
