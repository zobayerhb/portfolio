
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
