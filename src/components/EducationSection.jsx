import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    period: "2018 – 2022",
    grade: "CGPA: 3.75 / 4.00",
    description: "Studied core computer science fundamentals including algorithms, data structures, operating systems, and database management. Final year project on distributed systems.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    location: "Dhaka, Bangladesh",
    period: "2016 – 2018",
    grade: "GPA: 5.00 / 5.00",
    description: "Science group with focus on Mathematics, Physics, and Chemistry. Achieved perfect GPA in board examinations.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School & College",
    location: "Dhaka, Bangladesh",
    period: "2014 – 2016",
    grade: "GPA: 5.00 / 5.00",
    description: "Completed secondary education with distinction. Active member of the programming club.",
  },
]

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
  { name: "Meta React Developer", issuer: "Meta (Facebook)", year: "2022" },
  { name: "Full Stack Development", issuer: "freeCodeCamp", year: "2021" },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
            Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              Academic Education
            </h3>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {educationList.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-16 md:pl-20"
                  >
                    <div className="absolute left-4 md:left-6 top-3.5 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm" />

                    <div className="bg-muted/40 border border-border rounded-2xl p-5 hover:shadow-sm transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold text-foreground text-base leading-snug">{edu.degree}</h4>
                        <Badge variant="outline" className="text-xs shrink-0 text-primary border-primary/30">
                          {edu.grade}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="size-3" />{edu.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="size-3" />{edu.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="text-primary">🏆</span>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="bg-muted/40 border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0 text-lg">
                      📜
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{cert.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">{cert.year}</Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
