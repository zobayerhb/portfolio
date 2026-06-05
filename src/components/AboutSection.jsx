import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import image from "../assets/zobayer.jpg"

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "15+", label: "Happy Clients" },
  { value: "5+", label: "Technologies" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
            About
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-linear-to-br from-muted to-accent/30 flex items-center justify-center overflow-hidden border border-border shadow-xl">
              <img src={image} alt="Zobayer" className="object-contain"/>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-accent border border-border -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm <strong className="text-foreground">Zobayer Hosen</strong>, a passionate Full Stack Developer based in Bangladesh. I specialize in building modern web applications that are both beautiful and performant.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 3 years of hands-on experience, I've worked on everything from simple landing pages to complex enterprise applications. I enjoy every step of the development process — from planning and architecture to design and deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing technical articles to share knowledge with the community.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="text-center border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
