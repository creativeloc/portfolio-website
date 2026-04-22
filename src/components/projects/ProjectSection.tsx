import Header from "../general/Header"
import ProjectCard from "./ProjectCard"

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <ProjectCard
          imagePath="/images/p1.webp"
          title="Modern Dashboard UI"
          description="A responsive admin dashboard with data visualization charts, user management, and real-time analytics. Built with React, Tailwind CSS, and Reacharts."
        />
        <ProjectCard
          imagePath="/images/p2.webp"
          title="Modern Education Website"
          description="An interactive learning platform with course catalogs, student dashboards, and progress tracking. features include video integration and quiz functionality."
        />
        <ProjectCard
          imagePath="/images/p3.webp"
          title="Modern Landing Page"
          description="High-Conversion marketing page with animated components, optimized performance, and SEO best practices. built with Next.js and Framer Motion."
        />
        <ProjectCard
          imagePath="/images/p4.webp"
          title="Modern SAAS Website"
          description="Full-featured software-as-a-service platform with subscription management, user onboarding, and payment integration using Stripe."
        />
      </div>
    </section>
  )
}
