"use client"

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import Link from "next/link"
import { LuSend } from "react-icons/lu"
import { useState } from "react"

const contactInfo = [
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    value: "contact@john.dev",
    link: "mailto:contact@john.dev"
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    value: "+1 (234)567-8500",
    link: "tel:+1234567890"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Location",
    value: "Remote . Global",
    link: "#"
  }
]

export default function ContactSection() {
  const [loading, setLoading] = useState(false)

  const InputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400=true"

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true)
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", "0b792414-3540-414c-82ce-079686655fc8")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    if (data.success) {
      ;(event.target as HTMLFormElement).reset()
    } else {
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-16 lg:py30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-30">
        {/* basic contact info */}
        <div data-aos="fade-right">
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            I&apos;m currently available for Freelance Work and also open to
            Full-time opportunities. Whether you have a project in mind or just
            want to connect, please feel free to reach out.
          </p>

          <div className="space-y-5 mb-12">
            {contactInfo.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg"
                >
                  <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-md text-gray-400">{item.value}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* contact form */}
        <div data-aos="zoom-in">
          <form
            onSubmit={onSubmit}
            className="rounded-lg bg-slate-900 px-4 py-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              className={InputStyles}
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              className={InputStyles}
              required
            />
            <input
              type="text"
              placeholder="Subject of Message"
              className={InputStyles}
              required
            />
            <textarea
              placeholder="Message"
              required
              className={`${InputStyles} resize-none`}
              rows={5}
            />
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white fon-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 "
            >
              {true ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
