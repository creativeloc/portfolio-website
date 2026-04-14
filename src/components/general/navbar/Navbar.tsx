import Link from "next/link"
import Logo from "./Logo"
import LinkButton from "../LinkButton"
import { LuDownload } from "react-icons/lu"

const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" }
]

export default function Navbar() {
  return (
    <nav className="h-18 fixed z-50 w-full">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* logo */}
        <Logo />

        {/* nav-links */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                  href={link.url}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* Download Button */}
        <div className="hidden lg:block">
          <LinkButton
            href="/documents/cv.pdf"
            text="Download CV"
            download
            icon={LuDownload}
            iconPosition="left"
          />
        </div>
      </div>
    </nav>
  )
}
