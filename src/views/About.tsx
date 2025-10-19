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
              I am a passionate and dedicated Frontend Developer with one year of focused training in modern web technologies. My journey began with mastering JavaScript and React, and has since expanded to include TypeScript and Next.js. What truly excites me is creating intuitive user interfaces that solve real problems - whether it is building responsive layouts, implementing clean logic, or collaborating with team members to bring designs to life. I thrive on turning complex challenges into elegant solutions and believe in writing clean, maintainable code that makes a difference.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Having worked on practical projects including restaurant management systems and admin panels, I have developed a strong foundation in component-based architecture and API integration. Now Iam ready to take the next step in my career journey: contributing to a professional team where I can apply my skills, learn from experienced developers, and help build products that users love. Iam particularly drawn to environments that value collaboration, continuous learning, and creating meaningful impact through technology.
              </p>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Technical Skills</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>HTML5 & CSS3</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Professional Strengths</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Quick Learning & Adaptation</li>
                    <li>Problem-Solving Mindset</li>
                    <li>Attention to Detail</li>
                    <li>Passion for Clean Code</li>
                    <li>Collaborative Team Player</li>
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
