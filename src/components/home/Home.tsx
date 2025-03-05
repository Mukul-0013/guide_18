import {Link} from "react-router-dom"

// import { About } from "../about/About"

function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="bg-white py-16 md:py-24 lg:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering <span className="text-accent">Young Adults</span> for a Safe Start
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Welcome to SafeStart, your comprehensive guide to navigating adulthood with confidence. We provide
                essential information and resources on personal safety and legal awareness, helping you make informed
                decisions and avoid common pitfalls.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Young adults learning"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About SafeStart Section */}
      <section id="about-safestart" className="bg-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="About SafeStart"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Young Adults for a Brighter Future</h2>
              <p className="text-lg text-gray-600 mb-8">
                At SafeStart, we are dedicated to equipping young adults with essential knowledge about personal safety
                and legal awareness. Our mission is to foster independence and responsibility as they navigate
                adulthood.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h1>100%</h1>
                  <p className="text-gray-600">
                    We have successfully empowered over 100 young adults through our resources and support.
                  </p>
                </div>
                <div>
                <h1>50</h1>
                  <p className="text-gray-600">
                    Our platform offers a variety of resources tailored to meet the needs of young adults.
                  </p>
                </div>
                <div>
                <h1>10</h1>
                  <p className="text-gray-600">
                    Our team consists of 10 dedicated experts committed to providing accurate information.
                  </p>
                </div>
                <div>
                <h1>5</h1>
                  <p className="text-gray-600">
                    We uphold 5 core values: Empowerment, Safety, Education, Support, and Community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section id="key-topics" className="bg-bg-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Explore <em>Key Topics</em> to Navigate Adulthood with Confidence and Independence
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
            SafeStart provides essential knowledge and resources to help young adults navigate various aspects of life.
            Our platform focuses on personal safety, legal awareness, and financial literacy, empowering you to make
            informed decisions and avoid common pitfalls.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-3">Safety</h4>
              <p className="text-gray-600">
                Learn practical tips to stay safe in various situations, both online and offline.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-3">Legal</h4>
              <p className="text-gray-600">
                Understand your rights and responsibilities to avoid legal issues and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Safety Tips Section */}
      <section id="personal-safety-tips" className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Essential <em>Safety Tips</em> for Young Adults to Stay Safe and Informed
          </h2>
          <p className="text-lg mb-12 max-w-3xl">
            Your safety is our priority. Here are some essential tips to help you stay safe in various situations.
            Remember, being informed and proactive is key to preventing potential harm. Stay vigilant and protect
            yourself.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-3">Online</h4>
              <p>Protect your personal information and be wary of online scams and phishing attempts.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-3">Physical</h4>
              <p>Be aware of your surroundings and avoid walking alone in poorly lit areas at night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Awareness Guide Section */}
      <section id="legal-awareness-guide" className="bg-accent text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Legal Awareness"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understand Your <em>Rights</em> and <em>Responsibilities</em>
              </h2>
              <p className="text-lg mb-8">
                Navigating the legal landscape can be daunting, but with SafeStart, you'll gain the knowledge and
                confidence to make informed decisions. We break down complex legal concepts into easy-to-understand
                information, helping you avoid common legal pitfalls and protect your rights.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                  <span>Contracts: Learn the basics of contract law and how to avoid disputes.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                  <span>
                    Consumer Rights: Understand your rights as a consumer and how to protect yourself from fraud.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                  <span>Legal Resources: Access a curated list of legal resources and support services.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Literacy Section */}
      <section id="financial-literacy-basics" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h5 className="text-accent font-medium mb-2">Money Matters</h5>
              <h3 className="text-3xl font-bold mb-6">Understanding Your Finances</h3>
              <p className="text-lg text-gray-600 mb-8">
                Financial literacy is the cornerstone of a secure future. Learn how to budget effectively, save wisely,
                and understand credit. Empower yourself with the knowledge to make informed financial decisions and
                avoid common pitfalls. Start building your financial foundation today!
              </p>
              <Link
                to="/resources"
                className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition"
              >
                Learn
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Financial Literacy"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources CTA Section */}
      <section
        id="resources-and-support"
        className="py-16 md:py-24 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl ml-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Resources</h2>
            <p className="text-lg text-white/90 mb-8">
              Discover a variety of articles, videos, and contact information designed to support your journey into
              adulthood. Empower yourself with knowledge today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/resources"
                className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition text-center"
              >
                Access Resources
              </Link>
              <Link
                to="/about-us"
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition text-center"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}

    </main>
  )
}

export default Home

// Previous code:
// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Header/Navigation */}
//       <header className="sticky top-0 z-50 bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <Link to="/" className="flex items-center">
//             image
//           </Link>
//           <nav className="hidden md:flex space-x-6">
//             <Link to="/about-us" className="text-gray-700 hover:text-accent">
//               About Us
//             </Link>
//             <Link to="/personal-safety" className="text-gray-700 hover:text-accent">
//               Personal Safety
//             </Link>
//             <Link to="/legal-awareness" className="text-gray-700 hover:text-accent">
//               Legal Awareness
//             </Link>
//             <Link to="/resources" className="text-gray-700 hover:text-accent">
//               Resources
//             </Link>
//           </nav>
//           <div className="hidden md:flex space-x-4">
//             <Link to="/" className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition">
//               Get Started
//             </Link>
//             <Link
//               to="/about-us"
//               className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition"
//             >
//               Learn More
//             </Link>
//           </div>
//           <button className="md:hidden text-gray-700">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="hero" className="bg-white py-16 md:py-24 lg:min-h-[90vh] flex items-center">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//                 Empowering <span className="text-accent">Young Adults</span> for a Safe Start
//               </h1>
//               <p className="text-lg text-gray-600 mb-8">
//                 Welcome to SafeStart, your comprehensive guide to navigating adulthood with confidence. We provide
//                 essential information and resources on personal safety and legal awareness, helping you make informed
//                 decisions and avoid common pitfalls.
//               </p>
              
//             </div>
//             <div className="md:w-1/2">
//               image
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About SafeStart Section */}
//       <section id="about-safestart" className="bg-bg-light py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               image
//             </div>
//             <div className="md:w-1/2 md:pl-10">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Young Adults for a Brighter Future</h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 At SafeStart, we are dedicated to equipping young adults with essential knowledge about personal safety
//                 and legal awareness. Our mission is to foster independence and responsibility as they navigate
//                 adulthood.
//               </p>

//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h1>100%</h1>
//                   <p className="text-gray-600">
//                     We have successfully empowered over 100 young adults through our resources and support.
//                   </p>
                  
//                 </div>
//                 <div>
//                 <h1>50</h1>
//                   <p className="text-gray-600">
//                     Our platform offers a variety of resources tailored to meet the needs of young adults.
//                   </p>
//                 </div>
//                 <div>
//                 <h1>10</h1>
//                   <p className="text-gray-600">
//                     Our team consists of 10 dedicated experts committed to providing accurate information.
//                   </p>
//                 </div>
//                 <div>
//                 <h1>20</h1>
//                   <p className="text-gray-600">
//                     We uphold 5 core values: Empowerment, Safety, Education, Support, and Community.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Topics Section */}
//       <section id="key-topics" className="bg-bg-light py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
//             Explore <em>Key Topics</em> to Navigate Adulthood with Confidence and Independence
//           </h2>
//           <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
//             SafeStart provides essential knowledge and resources to help young adults navigate various aspects of life.
//             Our platform focuses on personal safety, legal awareness, and financial literacy, empowering you to make
//             informed decisions and avoid common pitfalls.
//           </p>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h4 className="text-2xl font-bold mb-3">Safety</h4>
//               <p className="text-gray-600">
//                 Learn practical tips to stay safe in various situations, both online and offline.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h4 className="text-2xl font-bold mb-3">Legal</h4>
//               <p className="text-gray-600">
//                 Understand your rights and responsibilities to avoid legal issues and make informed decisions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Personal Safety Tips Section */}
//       <section id="personal-safety-tips" className="bg-accent text-white py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Essential <em>Safety Tips</em> for Young Adults to Stay Safe and Informed
//           </h2>
//           <p className="text-lg mb-12 max-w-3xl">
//             Your safety is our priority. Here are some essential tips to help you stay safe in various situations.
//             Remember, being informed and proactive is key to preventing potential harm. Stay vigilant and protect
//             yourself.
//           </p>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
//               <h4 className="text-2xl font-bold mb-3">Online</h4>
//               <p>Protect your personal information and be wary of online scams and phishing attempts.</p>
//             </div>
//             <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
//               <h4 className="text-2xl font-bold mb-3">Physical</h4>
//               <p>Be aware of your surroundings and avoid walking alone in poorly lit areas at night.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Legal Awareness Guide Section */}
//       <section id="legal-awareness-guide" className="bg-accent text-white py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-10 md:mb-0">
//               image
//             </div>
//             <div className="md:w-1/2 md:pl-10">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Understand Your <em>Rights</em> and <em>Responsibilities</em>
//               </h2>
//               <p className="text-lg mb-8">
//                 Navigating the legal landscape can be daunting, but with SafeStart, you'll gain the knowledge and
//                 confidence to make informed decisions. We break down complex legal concepts into easy-to-understand
//                 information, helping you avoid common legal pitfalls and protect your rights.
//               </p>

//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                     />
//                   </svg>
//                   <span>Contracts: Learn the basics of contract law and how to avoid disputes.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                     />
//                   </svg>
//                   <span>
//                     Consumer Rights: Understand your rights as a consumer and how to protect yourself from fraud.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                     />
//                   </svg>
//                   <span>Legal Resources: Access a curated list of legal resources and support services.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Financial Literacy Section */}
//       <section id="financial-literacy-basics" className="bg-white py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center mb-12">
//             <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
//               <h5 className="text-accent font-medium mb-2">Money Matters</h5>
//               <h3 className="text-3xl font-bold mb-6">Understanding Your Finances</h3>
//               <p className="text-lg text-gray-600 mb-8">
//                 Financial literacy is the cornerstone of a secure future. Learn how to budget effectively, save wisely,
//                 and understand credit. Empower yourself with the knowledge to make informed financial decisions and
//                 avoid common pitfalls. Start building your financial foundation today!
//               </p>
//               <Link
//                 to="/resources"
//                 className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition"
//               >
//                 Learn
//               </Link>
//             </div>
//             <div className="md:w-1/2">
//               image
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resources CTA Section */}
//       <section
//         id="resources-and-support"
//         className="py-16 md:py-24 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-2xl ml-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore Our Resources</h2>
//             <p className="text-lg text-white/90 mb-8">
//               Discover a variety of articles, videos, and contact information designed to support your journey into
//               adulthood. Empower yourself with knowledge today!
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/resources"
//                 className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition text-center"
//               >
//                 Access Resources
//               </Link>
//               <Link
//                 to="/about-us"
//                 className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition text-center"
//               >
//                 Get Support
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </main>
//   )
// }

