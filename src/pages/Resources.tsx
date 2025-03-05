function Resources() {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
  
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Helpful Organizations</h2>
              <p className="text-gray-700 mb-6">
                These organizations provide valuable support and information for young adults:
              </p>
  
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">National Safety Council</h3>
                  <p className="text-gray-600 mb-2">Resources on personal safety and accident prevention.</p>
                  <a
                    href="https://www.nsc.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
  
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Consumer Financial Protection Bureau</h3>
                  <p className="text-gray-600 mb-2">Information on financial literacy and consumer rights.</p>
                  <a
                    href="https://www.consumerfinance.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
  
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Legal Aid Society</h3>
                  <p className="text-gray-600 mb-2">Free legal assistance for those who qualify.</p>
                  <a
                    href="https://www.legalaidnetwork.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
  
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">National Alliance on Mental Health</h3>
                  <p className="text-gray-600 mb-2">Mental health resources and support.</p>
                  <a
                    href="https://www.nami.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Educational Materials</h2>
              <p className="text-gray-700 mb-6">Expand your knowledge with these educational resources:</p>
  
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-semibold mb-1">Personal Safety Guide</h3>
                  <p className="text-gray-600 mb-2">A comprehensive guide to staying safe in various situations.</p>
                  <a href="#" className="text-accent hover:underline">
                    Download PDF
                  </a>
                </div>
  
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-semibold mb-1">Understanding Your Legal Rights</h3>
                  <p className="text-gray-600 mb-2">An overview of basic legal rights every young adult should know.</p>
                  <a href="#" className="text-accent hover:underline">
                    Download PDF
                  </a>
                </div>
  
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-semibold mb-1">Financial Literacy Basics</h3>
                  <p className="text-gray-600 mb-2">Learn the fundamentals of managing your finances effectively.</p>
                  <a href="#" className="text-accent hover:underline">
                    Download PDF
                  </a>
                </div>
  
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="text-xl font-semibold mb-1">Emergency Preparedness Checklist</h3>
                  <p className="text-gray-600 mb-2">A checklist to help you prepare for various emergencies.</p>
                  <a href="#" className="text-accent hover:underline">
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">Need more help? Here are some important contact numbers:</p>
  
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-accent text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Emergency Services</h3>
                    <p className="text-gray-600">911</p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-accent text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">National Suicide Prevention Lifeline</h3>
                    <p className="text-gray-600">1-800-273-8255</p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-accent text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Poison Control Center</h3>
                    <p className="text-gray-600">1-800-222-1222</p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <div className="bg-accent text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">SafeStart Support</h3>
                    <p className="text-gray-600">info@safestart.org</p>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
  
  export default Resources
  
  