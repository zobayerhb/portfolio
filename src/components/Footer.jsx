import { motion } from "framer-motion"
import { Code2, Layers, AtSign, Heart } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-muted/50 border-t border-border py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              ZH
            </div>
            <span className="font-bold text-foreground">Zobayer Hosen</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="size-3.5 text-destructive fill-destructive" /> using React & Tailwind CSS
          </p>

          <div className="flex gap-3">
            {[
              { icon: Code2, href: "https://github.com", label: "GitHub" },
              { icon: Layers, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: AtSign, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-background hover:bg-accent transition-colors"
              >
                <Icon className="size-3.5 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Zobayer Hosen. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
