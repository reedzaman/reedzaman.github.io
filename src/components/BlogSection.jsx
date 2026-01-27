import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock Data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Backends with Go",
      summary: "Exploring the benefits of Go for high-concurrency backend systems and microservices architecture.",
      date: "Oct 12, 2024",
      platform: "Medium",
      link: "#",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-state-500/80 hover:text-slate-600 transition-colors">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Clean Architecture in React",
      summary: "A guide to organizing your React projects for long-term maintainability and easier testing.",
      date: "Sep 28, 2024",
      platform: "LinkedIn",
      link: "#",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-500/80 hover:text-blue-700 transition-colors">
             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Optimizing SQL Queries",
      summary: "Practical tips for analyzing execution plans and indexing to speed up your database queries.",
      date: "Aug 15, 2024",
      platform: "Dev.to",
      link: "#",
       icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-500/80 hover:text-slate-800 transition-colors">
            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .64-.07.84-.24s.3-.52.3-1.06c0-.53-.1-.9-.3-1.07zm3.34 3.46c-.13.56-.42.9-.83 1.05-.2.06-.58.1-1.12.1h-1.6v-4.8h1.6c.52 0 .86.04 1.02.12.33.16.51.53.58 1.12.05.47.05 1.84 0 2.41zM20 15v4H4v-4H3v5h18v-5h-1zM20 5v4H4V5H3v5h18V5h-1zM6.9 8.44c.48.24.8.7.94 1.34s.1.84.1 3.51c0 2.24 0 2.92-.06 3.12a2.27 2.27 0 01-1.03 1.48c-.28.17-.67.29-1.3.37l-.46.06H3.5v-7.8h1.63c1.07 0 1.44.03 1.77.16zM13.2 13.9c.14.73.07 1.47-.2 2.05-.2.43-.54.83-1.04 1.17-.3.2-.82.35-1.5.4l-.56.05H8.34v-4.8h1.56c1.1 0 1.54.08 1.94.35.33.22.51.57.57 1.08.02.16.05.25.04.28.2.14.47.16.7.07.28.4.38.83.27 1.25-.07.31-.22.61-.41.87-.2.27-.47.46-.77.58v.02c.3-.13.55-.32.73-.6-.17.27-.42.48-.73.6l-.01.02zM15 15h3v-2h-3v2zm0-4h3V9h-3v2z"/>
        </svg>
       )
    },
     {
      id: 4,
      title: "Authentication Flows Explained",
      summary: "Breakdown of JWT vs Session based authentication and when to use which.",
      date: "July 20, 2024",
      platform: "Medium",
       link: "#",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-slate-500/80 hover:text-slate-600 transition-colors">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      )
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCarouselPosition = () => {
      const isMobile = window.innerWidth < 768;
      // On mobile, card is w-full (container width). On desktop, w-96 (384px).
      const cardWidth = isMobile ? carouselRef.current.children[0].offsetWidth : 384; 
      const gap = 32; // gap-8
      
      gsap.to(carouselRef.current, {
        x: -(currentIndex * (cardWidth + gap)),
        duration: 0.5,
        ease: "power2.out"
      });
    };

    updateCarouselPosition();
    window.addEventListener('resize', updateCarouselPosition);

    return () => window.removeEventListener('resize', updateCarouselPosition);
  }, [currentIndex]);

  useEffect(() => {
    // Animation for the section entry
       const el = sectionRef.current;
       const ctx = gsap.context(() => {
         gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // slightly earlier
              toggleActions: "play none none reverse"
            }
          }
        );
       }, sectionRef); // Scope to section

       return () => ctx.revert();
  }, []);


  return (
    <section 
      id="blog" 
      className="section-padding bg-background-light"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
            <div>
                 <h2 
                    ref={headingRef}
                    className="text-2xl md:text-3xl font-bold text-primary-navy mb-4 tracking-tight"
                >
                    Recent Writings
                </h2>
                <p className="text-sm text-text-secondary max-w-lg">
                    Thoughts on software engineering, architecture, and the tech industry.
                </p>
            </div>
           
            {/* Controls */}
            <div className="hidden md:flex gap-3">
                <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-gray-200 hover:border-accent-orange text-text-secondary hover:text-accent-orange transition-all active:scale-95"
                    aria-label="Previous post"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-gray-200 hover:border-accent-orange text-text-secondary hover:text-accent-orange transition-all active:scale-95"
                    aria-label="Next post"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden -mx-4 px-4">  
             <div 
                ref={carouselRef}
                className="flex gap-8 w-full"
             >
                {blogPosts.map((post) => (
                    <div 
                        key={post.id}
                        className="flex-shrink-0 w-full md:w-96 bg-white border border-gray-200 rounded-saas p-6 hover:shadow-card transition-all duration-200 group h-full flex flex-col"
                    >
                        <div className="flex justify-between items-start mb-4">
                             <div className="text-xs font-semibold text-accent-orange bg-orange-50 px-2 py-1 rounded">
                                {post.date}
                             </div>
                             {/* Platform Icon with "fading grayish blue" style */}
                             <div className="text-slate-400 group-hover:text-slate-600 transition-colors duration-300">
                                {post.icon}
                             </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-primary-navy mb-3 group-hover:text-accent-orange transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        
                        <p className="text-sm text-text-secondary mb-6 leading-relaxed line-clamp-3 flex-grow">
                            {post.summary}
                        </p>
                        
                        <a 
                            href={post.link}
                            className="inline-flex items-center text-sm font-semibold text-primary-navy group-hover:text-accent-orange transition-colors mt-auto"
                        >
                            Read Article
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                ))}
             </div>
        </div>
        
         {/* Mobile Controls (Visible only on small screens) */}
         <div className="flex md:hidden justify-center gap-4 mt-8">
            <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm active:scale-95"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-white border border-gray-200 shadow-sm active:scale-95"
            >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
         </div>

      </div>
    </section>
  );
};

export default BlogSection;
