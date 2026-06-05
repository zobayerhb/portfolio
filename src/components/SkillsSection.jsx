import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiGithub,
  SiDocker,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { VscSymbolRuler, VscDebugStepOver } from "react-icons/vsc"

const skills = [
  { id: "react", name: "React", icon: SiReact, color: "#61DAFB" },
  { id: "ts", name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: "tw", name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { id: "next", name: "Next.js", icon: SiNextdotjs },
  { id: "node", name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { id: "express", name: "Express.js", icon: SiExpress, color: "#999999" },
  { id: "py", name: "Python", icon: SiPython, color: "#3776AB" },
  { id: "rest", name: "REST APIs", icon: VscSymbolRuler, color: "#E8A87C" },
  { id: "pg", name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { id: "mongo", name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: "redis", name: "Redis", icon: SiRedis, color: "#FF4438" },
  { id: "supa", name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { id: "git", name: "Git & GitHub", icon: SiGithub },
  { id: "docker", name: "Docker", icon: SiDocker, color: "#2496ED" },
  { id: "cicd", name: "CI/CD", icon: VscDebugStepOver, color: "#A074C4" },
  { id: "aws", name: "AWS", icon: FaAws, color: "#FF9900" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
            My Skills
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from back-end to design.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5 sm:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: i * 0.05 },
                  y: {
                    duration: 2.5 + i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-background/50 hover:bg-background border border-transparent hover:border-border/60 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                  <Icon
                    className="size-6 sm:size-7"
                    style={{ color: skill.color }}
                  />
                  {/* Subtle glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                {/* Name */}
                <span className="text-xs sm:text-sm font-medium text-foreground/80 text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
