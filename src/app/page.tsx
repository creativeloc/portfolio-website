import HeroSection from "@/components/home/hero/HeroSection"
import ResumeSection from "@/components/resume/ResumeSection"
import ServiceSection from "@/components/home/services/ServiceSection"
import ProjectSection from "@/components/projects/ProjectSection"
import SkillsSection from "@/components/skills/SkillsSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillsSection />
    </>
  )
}
