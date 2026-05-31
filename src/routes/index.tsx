import { createFileRoute } from '@tanstack/react-router'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-blue-200">Welcome to My Website!</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#beyond" className="hover:text-blue-200 transition">Beyond the Card</a>
            <a href="#schedule" className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-blue-50 transition">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Hero / Intro */}
      <section id="about" className="py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
            <img 
              src="https://i.postimg.cc/wB88KdSf/christian-jpg.jpg" 
              alt="Christian Burris" 
              className="w-full h-full object-cover shadow-inner"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900">Nice to Meet You!</h2>
            <div className="space-y-6 text-lg text-blue-800 leading-relaxed text-left md:text-left">
              <p>
                My Name is <span className="font-bold text-blue-900">Christian Burris</span>.
                I am a licensed local agent who serves families throughout Louisiana with affordable coverage through Security Plan Life Insurance Company.
              </p>
              
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">About Me</h3>
                <p>
                  Most likely like you, I was born and raised in Shreveport, Louisiana! I graduated as a Salutatorian from Booker T. Washington High School. I also attended Southern University at Shreveport and LSUS!
                </p>
              </div>

              <p>
                Before pursuing my career in insurance, I spent two years working with a local nonprofit organization focused on environmental and community improvement because giving back to my community has always been my passion!
              </p>

              <p>
                Today, I proudly work as an Executive Assistant and Insurance Agent with Security Plan Life Insurance Company.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section - 50% smaller for a compact, punchy look */}
        <div className="max-w-xl mx-auto mt-10 px-4">
          <div className="bg-blue-900 text-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-blue-400 text-center">
            <p className="font-bold text-lg mb-4 underline decoration-blue-400 underline-offset-4">My mission is simple:</p>
            <ul className="space-y-2 mb-6 inline-block text-left text-blue-50 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Educate people.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Protect loved ones.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✔</span> Help people prepare for the unexpected.
              </li>
            </ul>
            <div className="mt-1 pt-4 border-t border-blue-800/50">
               <p className="text-xl md:text-2xl font-black italic text-blue-100 tracking-tight">Are you secure?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Business Card - Expanded Sections */}
      <section id="beyond" className="py-20 px-4 bg-white text-blue-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Beyond the Business Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Do You Already Have Life Insurance?</h3>
              <p className="text-xl font-semibold text-blue-700 mb-4">That’s Great!</p>
              <p className="mb-6 text-blue-800 leading-relaxed">
                You can never have too much protection! Especially if your coverage is only through your job!
              </p>
              <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600">
                <p className="font-bold text-blue-900 mb-3">Many people don’t realize until I speak with them:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">!</span>
                    <p className="text-blue-800">Job insurance may end when you leave your job!</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">!</span>
                    <p className="text-blue-800">Coverage through work is most times limited!</p>
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-blue-900 font-bold italic">
                Getting affordable personal coverage guarantees protection that stays with you forever.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What is Security Plan Life Insurance Company?</h3>
              <p className="mb-6 text-blue-800 leading-relaxed font-semibold">
                Security Plan has been a trusted company throughout Southern states like Louisiana, Mississippi, and Arkansas, while also having an international presence in regions like Latin America and Taiwan.
              </p>
              <div className="bg-blue-900 text-white p-5 rounded-xl border-l-4 border-blue-400 mb-6">
                <p className="font-bold text-lg mb-2 tracking-wide uppercase text-blue-200">The Security Plan Difference:</p>
                <p className="text-white leading-relaxed">
                  Unlike many companies, Security Plan <span className="underline decoration-blue-400 font-black">does NOT DISCRIMINATE</span>.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <span className="text-blue-600 text-xl leading-none">✔</span>
                  </div>
                  <p className="text-blue-800 font-medium">No medical exam required in most cases</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <span className="text-blue-600 text-xl leading-none">✔</span>
                  </div>
                  <p className="text-blue-800 font-medium">No higher rates for weight or common health concerns</p>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Affordable Protection</h3>
              <p className="mb-6 text-blue-800 leading-relaxed">
                Plans are designed to fit a variety of family budgets. Security Plan is known for its commitment to accessibility, ensuring that every family has a path to protection.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                  <p className="text-blue-900 font-bold mb-2">We specialize in serving:</p>
                  <ul className="grid grid-cols-1 gap-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span> Low-to-middle income families
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span> Older adults
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">•</span> Individuals who may not qualify for traditional policies
                    </li>
                  </ul>
                </div>
                
                <p className="text-blue-700 italic text-sm text-center px-4">
                  "While we specialize in accessibility, we also offer larger coverage options for those who desire them."
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Where Do I Come In?</h3>
              <p className="mb-6 text-blue-800 leading-relaxed font-semibold">
                I offer a <span className="text-blue-600 font-bold uppercase tracking-tight">100% free review</span> of your previous policy to ensure your protection is optimized.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 mb-8">
                <p className="text-blue-900 font-bold mb-4 text-center sm:text-left">My goal is to make sure you are not:</p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-6 sm:gap-4 px-2">
                  <div className="flex items-center gap-3 text-red-600 font-semibold italic text-base">
                    <span className="bg-red-50 w-8 h-8 rounded-full flex items-center justify-center not-italic">✕</span> 
                    <span>Overpaying</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600 font-semibold italic text-base">
                    <span className="bg-red-50 w-8 h-8 rounded-full flex items-center justify-center not-italic">✕</span> 
                    <span>Unnecessarily paying</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-600 font-semibold italic text-base">
                    <span className="bg-red-50 w-8 h-8 rounded-full flex items-center justify-center not-italic">✕</span> 
                    <span>Uninsured</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-blue-800 leading-relaxed">
                  If you are unsatisfied with your current policy, I will help you transition to a brand new, affordable policy with Security Plan.
                </p>
                <div className="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-blue-200 text-xs uppercase font-bold tracking-widest leading-none mb-1">Quick Process</span>
                    <span className="font-bold text-lg leading-none">10-15 Minute Application</span>
                  </div>
                  <div className="bg-blue-800 p-2 rounded-lg text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-blue-700 font-bold text-center italic">
                  "I will be there to guide you through every step!"
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Peace of Mind for Families</h3>
              <p className="mb-6 text-blue-800 leading-relaxed font-semibold">
                I am here to help you ensure that your loved ones are taken care of when it matters most.
              </p>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 mb-6">
                <p className="font-bold text-blue-900 mb-4 uppercase tracking-wide text-sm">I will help you cover:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Funeral expenses",
                    "Burial costs",
                    "Household bills",
                    "Travel expenses for loved ones",
                    "Time away from work during emergencies"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✔</span>
                      <p className="text-blue-800 text-sm md:text-base font-medium">{benefit}</p>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-black italic">+</span>
                    <p className="text-blue-900 font-bold italic underline decoration-blue-400 underline-offset-4">And More!</p>
                  </li>
                </ul>
              </div>
              
              <p className="text-center text-blue-700 italic text-sm mt-4">
                Life is unpredictable. Let's make sure your family's future is solid.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">What About Your Kids?</h3>
              <p className="mb-6 text-blue-800 leading-relaxed font-semibold text-lg italic underline decoration-blue-200">
                It's never too early to start protecting their future.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 mb-6">
                <p className="text-blue-800 leading-relaxed">
                  Many parents and grandparents choose coverage for children while rates are <span className="font-bold text-blue-900 underline decoration-blue-300">lower while they are younger</span>. This ensures that protection begins early and stays with them.
                </p>
              </div>

              <div className="bg-blue-900 text-white p-4 rounded-xl flex items-center gap-4">
                <div className="bg-blue-800 p-3 rounded-lg text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-blue-300">Special Provision</p>
                  <p className="font-bold text-lg leading-tight">Child Rider Option</p>
                </div>
              </div>

              <p className="text-center text-blue-700 italic text-sm mt-6">
                Guarantee their coverage stays the same for life.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Why My Coverage Matters</h3>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 mb-6 shadow-sm">
                <p className="text-blue-900 font-extrabold text-xl mb-3 tracking-tight">Financial Protection at ANY Age</p>
                <p className="text-blue-800 leading-relaxed">
                  A policy between <span className="text-blue-600 font-bold">$10,000–$15,000</span> will help protect your family from unexpected financial pressure during one of life’s hardest moments.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md">1</div>
                  <p className="text-blue-800 text-sm md:text-base">
                    <span className="font-bold text-blue-900">Preserve Benefits:</span> Additional coverage helps protect your existing policies, preventing loved ones from having to dip into savings.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md">2</div>
                  <p className="text-blue-800 text-sm md:text-base">
                    <span className="font-bold text-blue-900">Build Early:</span> Encourage your child to start an affordable policy now, allowing them to build coverage that fits their budget early.
                  </p>
                </div>
              </div>

              <p className="text-center text-blue-700 italic text-sm mt-8 font-medium">
                Make sure the benefits stay exactly where you intended them to be.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">A Simple Perspective 💭</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Column 1: The Norm */}
                <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm">
                  <p className="text-blue-900 font-bold mb-4 text-sm uppercase tracking-wider text-center">Typical Budgets:</p>
                  <ul className="space-y-3">
                    {[
                      "Cell phone bills",
                      "Streaming services",
                      "Eating out",
                      "Coffee runs",
                      "Online shopping"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-blue-800 text-sm">
                        <span className="text-blue-300">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: The Comparison */}
                <div className="bg-blue-900 text-white p-5 rounded-xl shadow-lg transform rotate-1">
                  <p className="text-blue-200 font-bold mb-4 text-sm uppercase tracking-wider text-center">Cost Comparison:</p>
                  <p className="text-xs text-blue-300 mb-3 text-center italic">Protecting your family can cost less than:</p>
                  <ul className="space-y-3">
                    {[
                      "A fast-food meal",
                      "A few coffees each week",
                      "One monthly subscription"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-white text-sm font-medium">
                        <span className="text-blue-400">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center bg-white p-4 rounded-xl border-t-4 border-blue-600 shadow-sm">
                <p className="text-blue-900 font-bold text-lg leading-snug">
                  It’s not about spending more money. 
                </p>
                <p className="text-blue-600 font-black uppercase text-xl mt-1 tracking-tighter">
                  It’s about protecting what matters most.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner">?</span>
                Questions Worth Asking Yourself
              </h3>
              
              <div className="space-y-6">
                {[
                  "Would my family be financially okay if something unexpected happened?",
                  "Do I currently have protection outside of my job?",
                  "Would my loved ones struggle with funeral expenses?",
                  "Are my children or family members protected?"
                ].map((question, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-200 hover:border-blue-500 transition-colors">
                    <p className="text-blue-900 font-medium leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-center text-blue-700 italic font-semibold mt-8 animate-pulse">
                If any of these make you pause, let's talk.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl border-b-8 border-blue-400 transform transition hover:scale-[1.02] duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-blue-400 text-3xl">🤝</span>
                Now, I Want to Hear About You!
              </h3>
              
              <div className="space-y-6">
                <p className="text-blue-100 text-lg leading-relaxed">
                  Life insurance may be more affordable than you think. 
                </p>
                
                <div className="bg-blue-800/50 p-6 rounded-xl border border-blue-700">
                   <p className="text-white font-medium leading-relaxed">
                    If you would love to know more information or how much coverage would cost you, don’t hesitate to <span className="text-blue-300 font-bold">text, call, or book a free in-person appointment!</span>
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-blue-200 italic font-semibold">
                    Thank you so much in advance.
                  </p>
                  <p className="mt-2 font-bold text-xl">— Christian Burris</p>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a href="#schedule" className="bg-white text-blue-900 px-6 py-3 rounded-full font-black uppercase tracking-wider hover:bg-blue-50 transition shadow-lg text-sm">
                  Claim Your Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Scheduling */}
      <section id="schedule" className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Buttons */}
            <div className="flex flex-col justify-center gap-6">
              <h3 className="text-2xl font-semibold mb-2">Contact Christian</h3>
              <p className="text-blue-100 mb-6">Have a quick question? Feel free to reach out directly via call or email.</p>
              
              <a href="tel:+13184014040" className="flex items-center justify-center gap-3 bg-white text-blue-900 py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </a>
              
              <a href="mailto:christianburris11@gmail.com" className="flex items-center justify-center gap-3 bg-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-600 border border-blue-500 transition shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>

            {/* Booking Widget */}
            <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-2xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12 px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Christian Burris - Licensed Insurance Agent</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Disclosures</a>
        </div>
      </footer>
    </div>
  )
}

function BookingForm() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '' })
  
  const createBooking = useMutation(api.bookings.create)

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i) // Start from today
    return d
  })

  const times = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", 
    "06:00 PM", "07:00 PM"
  ]

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return
    
    // Simple timestamp calculation
    const [time, period] = selectedTime.split(' ')
    let [hours, minutes] = time.split(':').map(Number)
    if (period === 'PM' && hours !== 12) hours += 12
    if (period === 'AM' && hours === 12) hours = 0
    
    const startTime = new Date(selectedDate)
    startTime.setHours(hours, minutes, 0, 0)

    await createBooking({
      name: formData.name,
      email: formData.email,
      startTime: startTime.getTime()
    })
    
    setStep(3)
  }

  if (step === 3) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Consultation Scheduled!</h3>
        <p className="text-blue-700 mb-6">Check your email for the confirmation and calendar invite. Christian looks forward to meeting you.</p>
        <button onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); }} className="text-blue-600 font-semibold hover:underline">Schedule another?</button>
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-center">Schedule Free Consultation</h3>
      
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 text-center">Select a Date</p>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDate(d)}
                  className={`p-2 rounded-lg text-center transition ${
                    selectedDate?.toDateString() === d.toDateString() 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  <div className="text-xs font-medium uppercase">{d.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="text-lg font-bold">{d.getDate()}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div className="animate-in fade-in slide-in-from-top-2">
              <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 text-center">Select a Time</p>
              <div className="grid grid-cols-2 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                      selectedTime === t 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            disabled={!selectedDate || !selectedTime}
            onClick={() => setStep(2)}
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition mt-4"
          >
            Next Step
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleBooking} className="space-y-4 animate-in fade-in slide-in-from-right-4">
          <button onClick={() => setStep(1)} className="text-blue-500 text-sm font-medium mb-2 flex items-center gap-1 hover:underline">
            ← Back to date selection
          </button>
          
          <div className="bg-blue-50 p-3 rounded-lg mb-4 text-sm">
            <p className="text-blue-800"><strong>Consultation:</strong> {selectedDate?.toLocaleDateString()} at {selectedTime}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Your Full Name</label>
            <input
              required
              className="w-full border-blue-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
            <input
              required
              type="email"
              className="w-full border-blue-200 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg mt-2"
          >
            Confirm Booking
          </button>
          <p className="text-xs text-blue-400 text-center">Christian will send you a meeting invite shortly after.</p>
        </form>
      )}
    </div>
  )
}
