import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import image from "../assets/zobayer.jpg";

const socialLinks = [
  { icon: Code2, href: "https://github.com/zobayerhb", label: "GitHub" },
  {
    icon: Layers,
    href: "https://linkedin.com/in/zobayerhosen",
    label: "LinkedIn",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16 md:pt-20"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="text-sm px-4 py-1.5 rounded-full border-primary/30 text-primary bg-primary/5"
              >
                Available for work
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
                Zobayer <span className="text-primary">Hosen</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-semibold text-foreground/80"
            >
              I am a{" "}
              <span className="text-primary relative">
                Full Stack Developer
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                />
              </span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Passionate about building modern, interactive, and beautiful web
              applications. I love solving complex problems and sharing my
              knowledge with others.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button
                size="lg"
                className="rounded-full gap-2 px-6 shadow-md"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 px-6"
              >
                Download Resume
                <Download className="size-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background hover:bg-accent hover:border-primary/40 transition-colors shadow-sm"
                >
                  <Icon className="size-4 text-muted-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative flex items-center justify-center w-75 h-75 sm:w-95 sm:h-95 lg:w-110 lg:h-110">
              {/* Outer spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "transparent",
                  border: "2px dashed",
                  borderColor: "hsl(var(--primary) / 0.4)",
                }}
              />

              {/* Middle spinning dashed ring (reverse) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                  inset: "16px",
                  background: "transparent",
                  border: "2px dashed",
                  borderColor: "hsl(var(--primary) / 0.3)",
                  borderStyle: "dashed",
                }}
              />

              {/* Inner spinning ring with segments */}
              <motion.svg
                className="absolute"
                style={{ inset: "32px" }}
                viewBox="0 0 200 200"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="40 20"
                  className="text-primary/50"
                />
              </motion.svg>

              {/* Profile image circle */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-55 h-55 sm:w-65 sm:h-65 lg:w-75 lg:h-75 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-muted"
              >
                {/* Placeholder gradient profile */}
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-muted to-accent">
                  <img src={image} alt="" className="object-cover" />
                </div>
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -left-4 top-1/4 bg-background border border-border rounded-xl px-3 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-foreground">React</p>
                <p className="text-xs text-muted-foreground">Frontend</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-background border border-border rounded-xl px-3 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-foreground">Node.js</p>
                <p className="text-xs text-muted-foreground">Backend</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-4 py-1.5 shadow-lg"
              >
                <p className="text-xs font-bold whitespace-nowrap">
                  Full Stack Dev
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
