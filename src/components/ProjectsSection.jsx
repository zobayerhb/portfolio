import { motion } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart, and payment integration. Features real-time inventory updates.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Chat Interface",
    description: "A sleek chat interface for AI models with streaming responses, conversation history, and multi-model support.",
    tags: ["React", "Python", "FastAPI", "WebSocket"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Portfolio Analytics",
    description: "Real-time analytics dashboard for tracking portfolio performance with interactive charts.",
    tags: ["React", "Recharts", "Node.js"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with MDX support, full-text search, and SEO optimization.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "DevOps Dashboard",
    description: "Infrastructure monitoring dashboard with metrics, logs, and deployment pipeline visibility.",
    tags: ["React", "Docker", "Prometheus"],
    github: "#",
    demo: "#",
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
            Portfolio
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-border group">
                  {/* Card visual header */}
                  <div className="h-40 bg-gradient-to-br from-muted to-accent/30 rounded-t-xl relative overflow-hidden flex items-center justify-center">
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="text-xs">Featured</Badge>
                      </div>
                    )}
                    <span className="text-5xl font-black text-foreground/10 select-none">
                      {project.title.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1.5 flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Code2 className="size-3.5" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="gap-1.5 flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
