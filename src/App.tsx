import React, { useState, useEffect } from 'react';
import './index.css';
import { MapPin, Globe, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [activeVenue, setActiveVenue] = useState('marriott');

  useEffect(() => {
    // Animate elements on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('animate-in');
    }

    // Optional parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroBackground = document.querySelector('.hero-background') as HTMLElement;
      if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    // Handle resize for mobile/desktop switch
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Becoming Students Again</h1>
          <p className="hero-quote">In a world accelerated by Machine learning algorithms, how can we use human learning to choose - together, the future we co-create?</p>
          
          <div className="meta-line">April 22 – 24 • Cambridge, Massachusetts</div>
          
          <div className="badge-line">
            <span>75 leaders</span>
            <span className="divider">•</span>
            <span>3 immersive days</span>
            <span className="divider">•</span>
            <span>1 iconic innovation corridor</span>
          </div>
          
          <a href="#register" className="cta-button">Register</a>
        </div>
      </section>
      
      <section id="why-boston" className="why-boston">
        {/* Previous section content */}
      </section>
      
      <section id="theme" className="theme-section">
        {/* Previous section content */}
      </section>
      
      <section id="schedule" className="schedule-section">
        {/* Previous section content */}
      </section>
      
      <section id="labs" className="labs-section">
        {/* Previous section content */}
      </section>

      <section id="venues" className="venues-section">
        {/* Previous section content */}
      </section>

      <section id="budget" className="budget-section">
        {/* Previous section content */}
      </section>

      <section id="activities" className="activities-section">
        <div className="container">
          <h2 className="activities-title">⭐ Signature Activities & Connections</h2>
          <div className="activities-title-underline"></div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon" aria-label="Microphone icon">🎤</div>
              <h4 className="activity-title">Positive Turbulence Talks</h4>
              <div className="activity-divider"></div>
              <p className="activity-description">MIT, Harvard & C10 voices share how AI reshapes purpose-driven innovation.</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon" aria-label="Map icon">🗺</div>
              <h4 className="activity-title">Whiteboard Studios</h4>
              <div className="activity-divider"></div>
              <p className="activity-description">Teams redesign Work & Need 2030 with design-thinking & AI co-pilot tools.</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon" aria-label="Person meditating icon">🧘‍♂️</div>
              <h4 className="activity-title">Aethos Mindfulness Sessions</h4>
              <div className="activity-divider"></div>
              <p className="activity-description">Breathwork & reflective journaling on "thoughts → destiny."</p>
            </div>

            <div className="activity-card">
              <div className="activity-icon" aria-label="Video camera icon">🎥</div>
              <h4 className="activity-title">4K Video Story Lab</h4>
              <div className="activity-divider"></div>
              <p className="activity-description">Spencer & Reece film interviews to fuel AMI's year-round content sprint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;