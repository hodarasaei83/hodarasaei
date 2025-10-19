export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating 
                digital solutions that bridge the gap between design and functionality. My journey 
                began with a curiosity about how things work on the web, and it has evolved into 
                a career dedicated to building exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React, Next.js, Node.js, and 
                TypeScript. My approach combines technical expertise with creative problem-solving 
                to deliver solutions that are not only functional but also beautiful and intuitive.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Node.js & Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>REST & GraphQL</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Always Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Continuously exploring new technologies and best practices
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
