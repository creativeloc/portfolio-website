import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer
} from "react-icons/lu"
import Header from "../general/Header"
import ResumeCard from "../testimonials/ResumeCard"
import { RiNextjsFill } from "react-icons/ri"

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              major="Chemical Eng,/Math"
              description="BS in Chemical Engineering | Penn State University with a Minor in Mathematics, software engineering principles, and web technologies."
              date="June, 1983 - Sept, 1987"
            />
            <ResumeCard
              icon={LuBookOpen}
              major="Relevant Coursework"
              description="Web Development, Database Systems, Data Structures & Algorithms, Software Engineering, Computer networks, Operating Systems, Cloud Computing "
              date="June, 1983 - Sept, 1987"
            />
            <ResumeCard
              icon={LuAward}
              major="Academic Achievements"
              description="BS in Chemical Engineering | Penn State University with a Minor in Mathematics, software engineering principles, and web technologies."
              date="June, 1983 - Sept, 1987"
            />
          </div>
        </div>
        {/* work experience section */}
        <div>
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              major="FrontEnd Developer"
              description="Crafting responsive, accessible interfaces with modern frameworks like React & Nex.js. Focus on performance, UX, and pixel-perfect implementation."
            />
            <ResumeCard
              icon={LuServer}
              major="BackEnd Developer"
              description="Building Scalable APIs, databases, and server infrastructure. Experienced with Node.js, Express, MongoDM, Cloud Services, and microservices architecture."
            />
            <ResumeCard
              icon={LuPackage}
              major="FullStack Developer"
              description="Front-to-end web application development. Bridging FrontEnd interfaces with backend systems for cohesive, and full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
