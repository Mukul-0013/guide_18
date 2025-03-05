function PersonalSafety() {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Personal Safety</h1>
  
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Online Safety</h2>
              <p className="text-gray-700 mb-4">
                In today's digital world, protecting yourself online is just as important as physical safety. Here are
                some essential tips to stay safe online:
              </p>
  
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li className="mb-2">Use strong, unique passwords for different accounts</li>
                <li className="mb-2">Enable two-factor authentication when available</li>
                <li className="mb-2">Be cautious about sharing personal information online</li>
                <li className="mb-2">Learn to recognize phishing attempts and scams</li>
                <li className="mb-2">Regularly update your devices and applications</li>
                <li>Think before clicking on links or downloading attachments</li>
              </ul>
  
              <p className="text-gray-700">
                Remember, once information is shared online, it can be difficult to completely remove it. Always think
                carefully before posting personal details or photos.
              </p>
            </div>
  
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Physical Safety</h2>
              <p className="text-gray-700 mb-4">
                Your physical safety is paramount. Here are some tips to help you stay safe in various situations:
              </p>
  
              <h3 className="text-xl font-semibold mb-2">At Home</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li className="mb-2">Keep doors and windows locked, even when you're home</li>
                <li className="mb-2">Don't hide spare keys in obvious places</li>
                <li className="mb-2">Install good lighting around entrances</li>
                <li>Consider a security system or camera</li>
              </ul>
  
              <h3 className="text-xl font-semibold mb-2">In Public</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li className="mb-2">Stay aware of your surroundings</li>
                <li className="mb-2">Avoid walking alone at night in poorly lit areas</li>
                <li className="mb-2">Keep valuables out of sight</li>
                <li className="mb-2">Let someone know where you're going and when you expect to return</li>
                <li>Trust your instincts - if something feels wrong, remove yourself from the situation</li>
              </ul>
  
              <h3 className="text-xl font-semibold mb-2">Transportation</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Keep your vehicle well-maintained</li>
                <li className="mb-2">Lock your doors while driving</li>
                <li className="mb-2">Have emergency supplies in your car</li>
                <li>Verify the identity of rideshare drivers before getting in</li>
              </ul>
            </div>
  
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Emergency Preparedness</h2>
              <p className="text-gray-700 mb-4">
                Being prepared for emergencies can make a significant difference in your safety and well-being:
              </p>
  
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li className="mb-2">Keep emergency contact numbers readily available</li>
                <li className="mb-2">Know basic first aid and CPR</li>
                <li className="mb-2">
                  Have an emergency kit with essentials like water, non-perishable food, flashlight, and first aid
                  supplies
                </li>
                <li className="mb-2">Create an emergency plan for different scenarios</li>
                <li>Stay informed about potential emergencies in your area</li>
              </ul>
  
              <p className="text-gray-700 font-semibold">Remember: In case of emergency, call 911 immediately.</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
  
  export default PersonalSafety
  
  