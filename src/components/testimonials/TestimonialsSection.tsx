import { FaStar } from "react-icons/fa"
import Header from "../general/Header"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Johnson",
    title: "Product Manager, TechCorp",
    review:
      "Exceptional attention to details and commitment to quality. Highly recommended.",
    rating: 5,
    image: "/images/image1.jpg"
  },
  {
    name: "Sarah Williams",
    title: "CTO, StartUpXYZ",
    review:
      "Project was delivered on time with excellent quality and outstanding communication",
    rating: 5,
    image: "/images/image2.jpg"
  },
  {
    name: "Michael Chen",
    title: "Lead Developer, Digital Solutions",
    review:
      "A true professional who understands bot frontend and backend challenges",
    rating: 4,
    image: "/images/image3.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div>
        <Header title="Testimonials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[80%] mx-auto mt-12">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-4 h-4 ${index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="italic mb-6 text-gray-300">
                  &ldquo;{testimonial.review}&ldquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full">
                    <Image
                      src={testimonial.image}
                      alt="testimonial-pic"
                      className="object-cover rounded-full"
                      fill
                    />
                  </div>
                  <div className="py-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-200">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
