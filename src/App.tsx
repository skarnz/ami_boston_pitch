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
        <div className="container">
          <h2 className="budget-title">💰 Registration & Host Budget Frame</h2>
          
          <div className="budget-overview">
            <p className="budget-info">
              <strong>Fees:</strong> $1,295 attendee · $150 pre-workshop | 
              <strong>Head-count:</strong> 60 paid + 10 comp | 
              <strong>Income:</strong> ≈ $64,750 | 
              <strong>F&B target:</strong> 60–65% | 
              <strong>AV & Misc:</strong> 15–20% | 
              <strong>Room block:</strong> 45 rooms × 3 nights @ $250 | 
              <strong>Space rental:</strong> typically comped via F&B
            </p>
          </div>

          <div className="budget-table-container">
            <table className="budget-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Pax</th>
                  <th>Hotel</th>
                  <th>Meeting Spend</th>
                  <th>F&B % Income</th>
                  <th>Buffer $</th>
                  <th>Buffer Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lean</td>
                  <td className="text-right">50</td>
                  <td>Courtyard</td>
                  <td className="text-right">$34.3K</td>
                  <td className="text-right">57%</td>
                  <td className="text-right">+$30.7K</td>
                  <td>
                    <span className="buffer-tag healthy" aria-label="Healthy buffer">
                      Healthy
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Target</td>
                  <td className="text-right">60</td>
                  <td>Marriott</td>
                  <td className="text-right">$44.3K</td>
                  <td className="text-right">62%</td>
                  <td className="text-right">+$20.7K</td>
                  <td>
                    <span className="buffer-tag healthy" aria-label="Healthy buffer">
                      Healthy
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Stretch</td>
                  <td className="text-right">75</td>
                  <td>Hyatt</td>
                  <td className="text-right">$58.8K</td>
                  <td className="text-right">64%</td>
                  <td className="text-right">+$6.2K</td>
                  <td>
                    <span className="buffer-tag tight" aria-label="Tight buffer">
                      Tight
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="budget-footnote">
            Meeting spend includes F&B, basic AV, hospitality-suite bar, transport, 30% service/tax. Lodging is attendee-paid.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;