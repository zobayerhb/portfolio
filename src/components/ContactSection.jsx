  import { motion } from "framer-motion"
  import { Mail, MapPin, Phone, Code2, Layers, AtSign, Send } from "lucide-react"
  import { Card, CardContent } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Label } from "@/components/ui/label"
  
  const contactInfo = [
    { icon: Mail, label: "Email", value: "zobayer@example.com", href: "mailto:zobayer@example.com" },
    { icon: MapPin, label: "Location", value: "Bangladesh", href: "#" },
    { icon: Phone, label: "Phone", value: "+880 1XXX-XXXXXX", href: "tel:+880" },
  ]
  
  const socialLinks = [
    { icon: Code2, label: "GitHub", href: "https://github.com" },
    { icon: Layers, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: AtSign, label: "Twitter", href: "https://twitter.com" },
  ]
  
  export function ContactSection() {
    return (
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Contact Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions. Feel free to reach out!
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
  
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3 font-medium">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={label}
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-accent hover:border-primary/40 transition-colors"
                    >
                      <Icon className="size-4 text-muted-foreground" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
  
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="border-border shadow-sm">
                <CardContent className="p-6 sm:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[140px] resize-none"
                    />
                  </div>
                  <Button className="w-full gap-2" size="lg">
                    <Send className="size-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
