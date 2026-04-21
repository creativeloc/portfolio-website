import { LuAudioWaveform, LuBookOpen, LuGraduationCap } from "react-icons/lu"
import Header from "../general/Header"
import ResumeCard from "../ResumeCard"

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
              icon={LuAudioWaveform}
              major="Academic Achievements"
              description="BS in Chemical Engineering | Penn State University with a Minor in Mathematics, software engineering principles, and web technologies."
              date="June, 1983 - Sept, 1987"
            />
          </div>
        </div>
        {/* work experience section */}
      </div>
    </section>
  )
}
