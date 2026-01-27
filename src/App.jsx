import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reedImage from './img/reed.png';
import BlogSection from './components/BlogSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Refs for animations
  const heroNameRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroLocationRef = useRef(null);
  const heroTaglineRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const sectionRefs = useRef([]);
  const headingRefs = useRef([]);
  const projectRefs = useRef([]);
  
  useEffect(() => {
    // Check if mobile device and reduced motion preference
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shouldAnimate = !isMobile && !prefersReducedMotion;
    
    // Small delay to ensure DOM is ready
    const initAnimations = () => {
      // Hero animations - only on desktop and if motion is allowed
      if (shouldAnimate && heroNameRef.current) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        // Animate hero name with split text effect
        const name = heroNameRef.current;
        const words = name.textContent.split(' ');
        name.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ');
        const wordSpans = name.querySelectorAll('span');
        
        gsap.set(wordSpans, { opacity: 0, y: 30 });
        tl.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1
        });
        
        // Animate title
        if (heroTitleRef.current) {
          gsap.set(heroTitleRef.current, { opacity: 0, y: 20 });
          tl.to(heroTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6
          }, '-=0.3');
        }
        
        // Animate location
        if (heroLocationRef.current) {
          gsap.set(heroLocationRef.current, { opacity: 0, y: 20 });
          tl.to(heroLocationRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6
          }, '-=0.4');
        }
        
        // Animate tagline
        if (heroTaglineRef.current) {
          gsap.set(heroTaglineRef.current, { opacity: 0, y: 20 });
          tl.to(heroTaglineRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8
          }, '-=0.3');
        }
        
        // Animate buttons
        if (heroButtonsRef.current && heroButtonsRef.current.children.length > 0) {
          const buttons = Array.from(heroButtonsRef.current.children);
          buttons.forEach(btn => gsap.set(btn, { opacity: 0, y: 20 }));
          tl.to(buttons, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1
          }, '-=0.4');
        }
      }
      
      // Section scroll animations
      sectionRefs.current.forEach((section) => {
        if (section) {
          if (shouldAnimate) {
            gsap.fromTo(section,
              { opacity: 0, y: isMobile ? 30 : 60 },
              {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.5 : 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                  markers: false
                }
              }
            );
          } else {
            // Ensure visibility if animations disabled
            gsap.set(section, { opacity: 1, y: 0 });
          }
        }
      });
      
      // Heading animations with subtle fade-in effect
      headingRefs.current.forEach((heading) => {
        if (heading) {
          if (shouldAnimate) {
            gsap.fromTo(heading,
              { opacity: 0, y: 15 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: heading,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          } else {
            // Ensure headings are visible if animations disabled
            gsap.set(heading, { opacity: 1, y: 0 });
          }
        }
      });
      
      // Project card animations
      projectRefs.current.forEach((project, index) => {
        if (project) {
          if (shouldAnimate) {
            gsap.fromTo(project,
              { opacity: 0, y: isMobile ? 20 : 40 },
              {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.5 : 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: project,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                },
                delay: index * 0.1
              }
            );
          } else {
            // Ensure visibility if animations disabled
            gsap.set(project, { opacity: 1, y: 0 });
          }
        }
      });
    };
    
    // Initialize animations after a small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Placeholder for resume download
    console.log('Download resume');
  };

  const handleContact = () => {
    scrollToSection('contact');
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-soft z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold cursor-pointer text-primary-navy tracking-tight">
            <span className="text-sm text-slate-900">REED</span><span className="text-sm text-slate-500">ZAMAN</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-primary-navy"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-left text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-left text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-left text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-text-secondary hover:text-primary-navy text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
            <div className="max-w-3xl mb-8 md:mb-0">
              <h1 
                ref={heroNameRef}
                className="text-4xl md:text-5xl font-bold text-primary-navy mb-4 leading-tight tracking-tight"
              >
                Reed Zaman
              </h1>
              <p 
                ref={heroTitleRef}
                className="text-lg md:text-xl text-text-secondary mb-2 font-medium"
              >
                Software Engineer | Backend & Full-Stack
              </p>
              <p 
                ref={heroLocationRef}
                className="text-sm text-text-secondary mb-12"
              >
                Dhaka, Bangladesh
              </p>
              <p 
                ref={heroTaglineRef}
                className="text-base md:text-lg text-primary-navy mb-10 leading-relaxed max-w-2xl"
              >
                I build reliable software systems with a focus on clean architecture and long-term maintainability.
              </p>
              <div 
                ref={heroButtonsRef}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-accent-orange text-white text-sm font-semibold rounded-saas hover:bg-opacity-90 transition-all duration-200 shadow-soft"
                >
                  View Projects
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="px-8 py-3 border-2 border-primary-navy text-primary-navy text-sm font-semibold rounded-saas hover:bg-primary-navy hover:text-white transition-all duration-200"
                >
                  Download Resume
                </button>
                <button
                  onClick={handleContact}
                  className="px-8 py-3 border-2 border-primary-navy text-primary-navy text-sm font-semibold rounded-saas hover:bg-primary-navy hover:text-white transition-all duration-200"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 md:w-80 lg:w-96">
              <img 
                src={reedImage} 
                alt="Reed Zaman"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="section-padding bg-background-light"
        ref={el => sectionRefs.current[0] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[0] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-10 tracking-tight"
          >
            About
          </h2>
          <div className="max-w-3xl">
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              I started coding at the age of 14, and that early curiosity has shaped my entire career. 
              After recently completing my Bachelor of Science in Computer Science & Engineering, 
              I've built a strong foundation through years of practice and professional experience.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              Currently working as a Junior Software Engineer II, I enjoy building robust backend systems 
              and scalable solutions. I value clean code, structure, and long-term thinking—principles 
              that guide every project I work on.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              My approach to software development is methodical and focused on maintainability. 
              I believe that well-architected systems stand the test of time and serve their purpose 
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="section-padding bg-white"
        ref={el => sectionRefs.current[1] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[1] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-12 tracking-tight"
          >
            Experience
          </h2>
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-primary-navy">
                    BroTecs Technologies Ltd.
                  </h3>
                  <p className="text-sm text-text-secondary">Dhaka, Bangladesh • On-site</p>
                </div>
              </div>
            </div>

            {/* Role 1 */}
            <div className="mb-10 pl-6 border-l-2 border-primary-navy">
              <div className="mb-4">
                <h4 className="text-base font-semibold text-primary-navy mb-1">
                  Junior Software Engineer II
                </h4>
                <p className="text-xs text-text-secondary mb-4">
                  March 2025 – Present
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="mb-10 pl-6 border-l-2 border-primary-navy">
              <div className="mb-4">
                <h4 className="text-base font-semibold text-primary-navy mb-1">
                  Junior Software Engineer
                </h4>
                <p className="text-xs text-text-secondary mb-4">
                  March 2024 – March 2025
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="mb-10 pl-6 border-l-2 border-primary-navy">
              <div className="mb-4">
                <h4 className="text-base font-semibold text-primary-navy mb-1">
                  Software Engineer Intern
                </h4>
                <p className="text-xs text-text-secondary mb-4">
                  September 2023 – March 2024
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mt-8">
              <h4 className="text-base font-semibold text-primary-navy mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Analyzed project requirements and system scope</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Designed and implemented server-side APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Implemented routing mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Worked on frontend development to ensure usability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Designed and developed database schemas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-accent-orange">•</span>
                  <span>Built a training certification system that certifies trainees, issues digital certificates, and validates existing certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="section-padding bg-background-light"
        ref={el => sectionRefs.current[2] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[2] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-12 tracking-tight"
          >
            Skills
          </h2>
          
          {/* Quotation */}
          <p className="text-sm text-text-secondary italic mb-16 max-w-3xl leading-relaxed">
            <span className="text-3xl text-slate-500">❝</span> Things are put here because they belong here — not because the space needs to be filled
          </p>
          
          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Engineering */}
            <div className="bg-background-light p-8 rounded-saas border border-gray-200">
              <h3 className="text-lg font-semibold text-primary-navy mb-3 tracking-tight">
                Backend Engineering
              </h3>
              <p className="text-sm text-text-secondary italic mb-6 leading-relaxed">
                Clarity, security, and long-term maintainability.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="text-xs text-text-secondary leading-relaxed">
                  • RESTful API design with clear contracts
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Authentication & authorization flows
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Database schemas that scale with real use
                </li>
              </ul>
              <p className="text-xs text-text-secondary/70 leading-relaxed mt-auto">
                Go · PostgreSQL · MySQL
              </p>
            </div>
            
            {/* Delivery & Tooling */}
            <div className="bg-background-light p-8 rounded-saas border border-gray-200 flex flex-col">
              <h3 className="text-lg font-semibold text-primary-navy mb-3 tracking-tight">
                Delivery & Tooling
              </h3>
              <p className="text-sm text-text-secondary italic mb-6 leading-relaxed">
                Build once. Run the same everywhere.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Containerized development environments
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Version control with intention
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Basic CI/CD pipelines
                </li>
              </ul>
              <p className="text-xs text-text-secondary/70 leading-relaxed mt-auto">
                Docker · Git · GitHub · CI/CD
              </p>
            </div>

            {/* Frontend Interfaces */}
            <div className="bg-background-light p-8 rounded-saas border border-gray-200 flex flex-col">
              <h3 className="text-lg font-semibold text-primary-navy mb-3 tracking-tight">
                Frontend Interfaces
              </h3>
              <p className="text-sm text-text-secondary italic mb-6 leading-relaxed">
                Clean UI that stays out of the way.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Component-based interfaces with React
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Utility-first styling for consistency
                </li>
                <li className="text-xs text-text-secondary leading-relaxed">
                  • Accessible, responsive layouts
                </li>
              </ul>
              <p className="text-xs text-text-secondary/70 leading-relaxed mt-auto">
                React · Tailwind CSS · HTML · CSS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="section-padding bg-white"
        ref={el => sectionRefs.current[3] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[3] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-12 tracking-tight"
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div 
              ref={el => projectRefs.current[0] = el}
              className="bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                Training Certification Platform
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Full-stack system with API-driven architecture for digital certificate generation and validation.
              </p>
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-medium">Tech Stack:</p>
                <p className="text-xs text-text-secondary">
                  React, Node.js, PostgreSQL, REST API
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-orange hover:text-opacity-80 text-xs font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div 
              ref={el => projectRefs.current[1] = el}
              className="bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                E-commerce Backend API
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                RESTful API with JWT authentication and role-based access control for e-commerce operations.
              </p>
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-medium">Tech Stack:</p>
                <p className="text-xs text-text-secondary">
                  Go, PostgreSQL, JWT, REST API
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-orange hover:text-opacity-80 text-xs font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 3 */}
            <div 
              ref={el => projectRefs.current[2] = el}
              className="bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                Task Management System
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Full-featured task management application with CRUD operations, user authentication, and clean architecture.
              </p>
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-medium">Tech Stack:</p>
                <p className="text-xs text-text-secondary">
                  React, Node.js, MySQL, REST API
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-orange hover:text-opacity-80 text-xs font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            </div>
            {/* Project 3 */}
            <div 
              ref={el => projectRefs.current[2] = el}
              className="bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                Task Management System
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Full-featured task management application with CRUD operations, user authentication, and clean architecture.
              </p>
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-medium">Tech Stack:</p>
                <p className="text-xs text-text-secondary">
                  React, Node.js, MySQL, REST API
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-orange hover:text-opacity-80 text-xs font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            </div>
            {/* Project 3 */}
            <div 
              ref={el => projectRefs.current[2] = el}
              className="bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-primary-navy mb-3">
                Task Management System
              </h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Full-featured task management application with CRUD operations, user authentication, and clean architecture.
              </p>
              <div className="mb-4">
                <p className="text-xs text-text-secondary mb-2 font-medium">Tech Stack:</p>
                <p className="text-xs text-text-secondary">
                  React, Node.js, MySQL, REST API
                </p>
              </div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent-orange hover:text-opacity-80 text-xs font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Education Section */}
      <section 
        id="education" 
        className="section-padding bg-white"
        ref={el => sectionRefs.current[4] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[4] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-12 tracking-tight"
          >
            Education
          </h2>
          <div className="max-w-3xl">
            <div className="mb-6 bg-background-light p-6 rounded-saas border border-gray-200">
              <h3 className="text-lg font-semibold text-primary-navy mb-2">
                Stamford University Bangladesh
              </h3>
              <p className="text-base text-text-secondary mb-1">
                Bachelor of Science in Computer Science & Engineering
              </p>
              <p className="text-sm text-text-secondary mb-4">
                2019 – 2023
              </p>
              <p className="text-sm text-text-secondary">
                Activities: Stamford University Computing Society
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="section-padding bg-background-light"
        ref={el => sectionRefs.current[5] = el}
      >
        <div className="container-custom">
          <h2 
            ref={el => headingRefs.current[5] = el}
            className="text-2xl md:text-3xl font-bold text-primary-navy mb-12 tracking-tight"
          >
            Contact
          </h2>
          <div className="max-w-2xl">
            <p className="text-base text-text-secondary mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about software engineering.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:reed.zaman@example.com"
                className="block text-text-secondary hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                reed.zaman@example.com
              </a>
              <a
                href="https://github.com/reedzaman"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                github.com/reedzaman
              </a>
              <a
                href="https://linkedin.com/in/reedzaman"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-secondary hover:text-accent-orange transition-colors duration-200 font-medium"
              >
                linkedin.com/in/reedzaman
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2">
        <div className="container-custom">
          <p className="text-left text-text-secondary text-sm">
            © Reed Zaman — Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

