import HeroSection from "@/components/home/hero/HeroSection"
import ResumeSection from "@/components/resume/ResumeSection"
import ServiceSection from "@/components/home/services/ServiceSection"
import ProjectSection from "@/components/projects/ProjectSection"
import SkillsSection from "@/components/skills/SkillsSection"
import TestimonialsSection from "@/components/testimonials/TestimonialsSection"
import ContactSection from "@/components/contact/ContactSection"
import AnimationLayout from "../../layouts/AnimationLayout"

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </AnimationLayout>
  )
}
