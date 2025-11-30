import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X,
  Youtube,
  Code
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'News', id: 'news' },
    { name: 'Publications', id: 'publications' },
    { name: 'Teaching', id: 'teaching' },
    { name: 'Service', id: 'service' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div 
              className="text-lg font-bold tracking-tight cursor-pointer hover:text-blue-700 transition-colors"
              onClick={() => scrollToSection('home')}
            >
              Yu (Brooke) Zhao
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-700' 
                      : 'text-stone-600 hover:text-blue-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-blue-700 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-stone-600 hover:text-blue-700 hover:bg-stone-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero / About Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Profile Column */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-stone-100 shadow-md ring-4 ring-white">
              <img 
                src="https://zy0531.github.io/website/assets/img/jpg/Yu%20Zhao-Picture.png" 
                alt="Yu Zhao"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src=''; 
                  e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-stone-100 text-stone-300"><svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                }}
              />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-stone-900">Yu (Brooke) Zhao</h1>
              <p className="text-stone-700 font-medium text-sm">Assistant Professor</p>
              <p className="text-stone-500 text-sm">Software Engineering & Game Development</p>
              <p className="text-stone-500 text-sm">Kennesaw State University</p>
            </div>

            <div className="flex flex-col space-y-2 w-full text-sm">
              <a href="mailto:yzhao20@kennesaw.edu" className="flex items-center text-stone-600 hover:text-blue-700 transition-colors">
                <span className="mr-2">📧</span> Email
              </a>
              <a href="https://scholar.google.com/citations?user=siFy0G4AAAAJ" className="flex items-center text-stone-600 hover:text-blue-700 transition-colors">
                <span className="mr-2">🎓</span> Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/yu-zhao-2b4a7a161/" className="flex items-center text-stone-600 hover:text-blue-700 transition-colors">
                <span className="mr-2">💼</span> LinkedIn
              </a>
            </div>
          </div>

          {/* Bio Column */}
          <div className="md:col-span-8 lg:col-span-9 space-y-6">
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-200 pb-2 mb-4">About Me</h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-stone-900">Dr. Yu (Brooke) Zhao</span> is an Assistant Professor in the Department of Software Engineering & Game Development at Kennesaw State University. Her research explores the intersection of Virtual & Augmented Reality (VR/AR), Human-Computer Interaction (HCI), and Perception & Cognition.
                </p>
                <p>
                  Dr. Zhao received her Ph.D. in Computer Science from Vanderbilt University in 2025, where she was advised by <a href="https://scholar.google.com/citations?user=hI4XguUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">Dr. Bobby Bodenheimer</a>. Her research has been published in top-tier venues including the <span className="italic">IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR)</span>, <span className="italic">IEEE International Symposium on Mixed and Augmented Reality (ISMAR)</span>, <span className="italic">IEEE Transactions on Visualization and Computer Graphics (TVCG)</span>, <span className="italic">ACM Symposium on Applied Perception (SAP)</span>, and <span className="italic">ACM Computing Surveys</span>. She has served on the International Program Committee for major international conferences such as IEEE VR and IEEE ISMAR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">News</h2>
          <div className="space-y-4 text-sm md:text-base">
            {[
              { date: "Oct, 2025", content: "Paper \"How Spatial Ability Affects Response to Gaze-Adaptive Cueing in Mixed Reality Spatial Navigation\" accepted to IEEE ISMAR 2025!" },
              { date: "Sep, 2025", content: "Served as International Program Committee Member for IEEEVR 2026." },
              { date: "Sep, 2025", content: "Paper \"A Systematic Review of the Use of Augmented Reality in Pedestrian Navigation\" accepted to ACM Computing Surveys." },
              { date: "Aug, 2025", content: "Joined Kennesaw State University as an Assistant Professor in Software Engineering & Game Development. 📍 Marietta, GA, USA" },
              { date: "Jan, 2025", content: "Served as International Program Committee Member for ISMAR 2025." },
              { date: "Oct, 2024", content: "Gave invited talk at Auburn University 📍 Auburn, AL, USA" },
              { date: "May, 2024", content: "Volunteered at AWE USA 2024. 📍 Long Beach, CA, USA" },
              { date: "Mar, 2024", content: "Gave invited talk at IEEE VR Workshop on Locomotion and Wayfinding 📍 Orlando, FL, USA" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start group">
                <span className="font-bold text-stone-900 w-28 flex-shrink-0 mb-1 sm:mb-0">[{item.date}]</span>
                <span className="text-stone-700 leading-snug">{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-12 bg-stone-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Selected Publications</h2>
          
          <div className="space-y-6">
            {[
              {
                title: "How Spatial Ability Affects Response to Gaze-Adaptive Cueing in Mixed Reality Spatial Navigation",
                authors: "Zhao, Yu, Bobby Bodenheimer",
                venue: "2025 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)",
                year: "2025",
                links: [
                  { label: "PDF", url: "https://www.researchgate.net/publication/397516161_How_Spatial_Ability_Affects_Response_to_Gaze-Adaptive_Cueing_in_Mixed_Reality_Spatial_Navigation#" },
                  { label: "Video", url: "https://www.youtube.com/watch?v=gs08RcS6Hdo" }
                ]
              },
              {
                title: "A Systematic Review of the Use of Augmented Reality in Pedestrian Navigation",
                authors: "Zhao, Yu, Gagnon Holly, Jeanine Stefanucci, Sarah H Creem-Regehr, Bobby Bodenheimer",
                venue: "ACM Computing Surveys",
                year: "2025",
                links: [
                  { label: "PDF", url: "https://dl.acm.org/doi/full/10.1145/3770917" }
                ]
              },
              {
                title: "Does Teleporting Length Affect Spatial Awareness?",
                authors: "Qinchen Yao, Yu Zhao, Sarah H Creem-Regehr, Jeanine K Stefanucci, Bobby Bodenheimer",
                venue: "2023 IEEE ISMAR-Adjunct",
                year: "2023",
                links: [
                  { label: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/10322146" }
                ]
              },
              {
                title: "Evaluating Threat Cues for the Enhancement of Safety in Virtual Navigation",
                authors: "Ashley M Buzard, Jordan A Davidson, Emily E Tighe, Yu Zhao, Bobby Bodenheimer, Sarah H Creem-Regehr, Jeanine K Stefanucci",
                venue: "2023 IEEE ISMAR-Adjunct",
                year: "2023",
                links: [
                  { label: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/10322264" },
                  { label: "Video", url: "https://drive.google.com/file/d/1NWbLvZZl7gM2sHkbK-Big7T4Fx13pWQA/view?usp=sharing" },
                  { label: "Code", url: "https://github.com/zy0531/ThreatDemo" }
                ]
              },
              {
                title: "Evaluating Augmented Reality Landmark Cues and Frame of Reference Displays with Virtual Reality",
                authors: "Zhao, Yu, Jeanine Stefanucci, Sarah Creem-Regehr, Bobby Bodenheimer",
                venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
                year: "2023",
                links: [
                  { label: "PDF", url: "https://ieeexplore.ieee.org/abstract/document/10049687" },
                  { label: "Video", url: "https://youtu.be/7ZHdnCXOA_4?si=B_76PBNFWwsM2Is2" },
                  { label: "Code", url: "https://github.com/zy0531/AR-Navi-VR-Simulation-in-Varjo" }
                ]
              },
              {
                title: "The perception of affordances in mobile augmented reality",
                authors: "Zhao, Yu, Jeanine Stefanucci, Sarah H Creem-Regehr, Bobby Bodenheimer",
                venue: "ACM Symposium on Applied Perception (SAP)",
                year: "2021",
                links: [
                  { label: "PDF", url: "https://dl.acm.org/doi/10.1145/3474451.3476239" }
                ]
              },
              {
                title: "Remote Mobile Augmented Reality for Spatial Cognition",
                authors: "Yu Zhao, Soumyajit Chakraborty, Jeanine Stefanucci, Sarah H Creem-Regehr, Bobby Bodenheimer",
                venue: "CHI Conference on Human Factors in Computing Systems - Remote XR Workshop",
                year: "2021",
                links: [
                   { label: "PDF", url: "https://www.researchgate.net/profile/Yu_Zhao213/publication/359875988_Remote_Mobile_Augmented_Reality_for_Spatial_Cognition/links/62545a17cf60536e2354f294/Remote-Mobile-Augmented-Reality-for-Spatial-Cognition.pdf" }
                ]
              },
              {
                title: "Gap affordance judgments in mixed reality: testing the role of display weight and field of view",
                authors: "Holly Gagnon, Yu Zhao, Matthew Richardson, Grant Pointon, Jeanine Stefanucci, Sarah Creem-Regehr, Bobby Bodenheimer",
                venue: "Frontiers in Virtual Reality",
                year: "2021",
                links: [
                   { label: "PDF", url: "https://www.frontiersin.org/articles/10.3389/frvir.2021.654656/full" },
                   { label: "Code", url: "https://github.com/zy0531/StepOverGap_FOV" }
                ]
              }
            ].map((pub, idx) => (
              <div key={idx} className="group">
                <div className="text-base font-bold text-stone-900">
                  {pub.title}
                </div>
                <div className="text-stone-700 text-sm mt-1">
                  {pub.authors.replace("Zhao, Yu", "Zhao, Yu (Brooke)")} 
                </div>
                <div className="text-stone-600 text-sm italic mt-0.5">
                  {pub.venue}, {pub.year}
                </div>
                {/* Action Links */}
                {pub.links.length > 0 && (
                  <div className="flex gap-3 mt-1.5 text-xs font-medium">
                    {pub.links.map((link, linkIdx) => (
                      <a 
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wide flex items-center"
                      >
                         {link.label === 'Video' ? <Youtube size={12} className="mr-1" /> : 
                          link.label === 'Code' ? <Code size={12} className="mr-1" /> : null}
                         [{link.label}]
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching & Mentorship */}
      <section id="teaching" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Teaching</h2>
            <ul className="space-y-3 list-none">
                <li className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-bold text-stone-900 w-32 flex-shrink-0">Fall 2025</span>
                  <span className="text-stone-700">3D Modeling and Animation @ Kennesaw State University</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-bold text-stone-900 w-32 flex-shrink-0">Fall 2025</span>
                  <span className="text-stone-700">Game Design and Development @ Kennesaw State University</span>
                </li>
            </ul>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-12 bg-white pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">Professional Service</h2>
            
            <div className="mb-8">
              <h3 className="font-bold text-stone-900 mb-3 text-lg">Committee Member</h3>
              <ul className="list-disc list-inside text-stone-700 text-sm space-y-1 ml-2">
                <li>International Program Committee Member, IEEE VR (2026)</li>
                <li>International Program Committee Member, IEEE ISMAR (2025)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-stone-900 mb-3 text-lg">Reviewer</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-700 text-sm ml-2">
                <li>IEEE Transactions on Visualization and Computer Graphics (TVCG)</li>
                <li>International Journal of Human-Computer Interaction (IJHCI)</li>
                <li>Frontiers in Virtual Reality</li>
                <li>IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR)</li>
                <li>IEEE International Symposium on Mixed and Augmented Reality (ISMAR)</li>
                <li>ACM Conference on Human Factors in Computing Systems (CHI)</li>
                <li>ACM International Conference on Automotive User Interfaces and Interactive Vehicular Applications (AutomotiveUI)</li>
                <li>ACM Symposium on Spatial User Interaction (SUI)</li>
                <li>ACM Symposium on Virtual Reality Software and Technology (VRST)</li>
              </ul>
            </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-stone-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-400 text-sm">
          &copy; {new Date().getFullYear()} Yu Zhao.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;