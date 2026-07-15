import { Navigation } from '@/components/Navigation';
import { HeroDashboard } from '@/components/HeroDashboard';
import { SkillsSection } from '@/components/SkillsSection';
import { InteractiveAnalyticsDashboard } from '@/components/InteractiveAnalyticsDashboard';
import { TechStackSection } from '@/components/TechStackSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { BusinessImpactSection } from '@/components/BusinessImpactSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-white-bg overflow-hidden">
      {/* Navigation */}
      <div className="relative z-40">
        <Navigation />
      </div>

      {/* Content sections with proper spacing for fixed nav */}
      <div className="relative z-20 pt-16 md:pt-20">
        {/* Hero Dashboard Section */}
        <section id="hero" className="scroll-mt-20">
          <HeroDashboard />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <SkillsSection />
        </section>

        {/* Analytics Dashboard */}
        <section className="scroll-mt-20">
          <InteractiveAnalyticsDashboard />
        </section>

        {/* Tech Stack */}
        <section className="scroll-mt-20">
          <TechStackSection />
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <ProjectsSection />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <ExperienceTimeline />
        </section>

        {/* Business Impact */}
        <section className="scroll-mt-20">
          <BusinessImpactSection />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
