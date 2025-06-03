import React, { useState, useEffect } from 'react';
import './index.css';
import { MapPin, Globe, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

function App() {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Becoming Students Again</h1>
          <h3 className="hero-subtitle">Innovation-in-Practice at the Heart of Kendall Square</h3>
          
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
      
      {/* Why Boston / Why Now Section */}
      <section id="why-boston" className="why-boston">
        <div className="container">
          <h2 className="section-title">
            <Globe className="title-icon" size={24} />
            Why Boston / Why Now?
          </h2>
          <div className="title-underline"></div>
          
          <div className="two-column-layout">
            <div className="left-column">
              <p className="intro-text">
                Kendall Square has been called "the most innovative square mile on Earth" for good reason. 
                Within a short walk, you'll find the world's densest concentration of biotech, AI research, 
                and startup activity, all anchored by MIT and surrounded by leading companies tackling 
                humanity's biggest challenges.
              </p>
              
              <div className="cluster-table">
                <div className="table-header">
                  <div className="header-cell">Cluster</div>
                  <div className="header-cell">Example Links</div>
                </div>
                
                <div className="table-row">
                  <div className="cell cluster-name">Frontier Research</div>
                  <div className="cell">
                    <a href="https://www.media.mit.edu" target="_blank" rel="noopener noreferrer" aria-label="MIT Media Lab website">MIT Media Lab</a>, 
                    <a href="https://www.ibm.com/watson/mit/" target="_blank" rel="noopener noreferrer" aria-label="IBM-MIT AI Lab website">IBM-MIT AI Lab</a>, 
                    <a href="https://mitmuseum.mit.edu" target="_blank" rel="noopener noreferrer" aria-label="MIT Museum website">MIT Museum</a>
                  </div>
                </div>
                
                <div className="table-row">
                  <div className="cell cluster-name">Applied Ethics & Society</div>
                  <div className="cell">
                    <a href="https://cyber.harvard.edu" target="_blank" rel="noopener noreferrer" aria-label="Harvard Berkman Klein Center website">Berkman Klein Center</a>, 
                    <a href="https://wyss.harvard.edu" target="_blank" rel="noopener noreferrer" aria-label="Wyss Institute website">Wyss Institute</a>
                  </div>
                </div>
                
                <div className="table-row">
                  <div className="cell cluster-name">Industry R&D</div>
                  <div className="cell">
                    <a href="https://www.microsoftnewengland.com" target="_blank" rel="noopener noreferrer" aria-label="Microsoft New England website">Microsoft NERD</a>, 
                    <a href="https://careers.google.com/locations/cambridge/" target="_blank" rel="noopener noreferrer" aria-label="Google Cambridge website">Google</a>, 
                    <a href="https://www.aboutamazon.com" target="_blank" rel="noopener noreferrer" aria-label="Amazon website">Amazon</a>
                  </div>
                </div>
                
                <div className="table-row">
                  <div className="cell cluster-name">Startup Super-Clusters</div>
                  <div className="cell">
                    <a href="https://massrobotics.org" target="_blank" rel="noopener noreferrer" aria-label="MassRobotics website">MassRobotics</a>, 
                    <a href="https://greentownlabs.com" target="_blank" rel="noopener noreferrer" aria-label="Greentown Labs website">Greentown Labs</a>, 
                    <a href="https://cic.com/boston" target="_blank" rel="noopener noreferrer" aria-label="CIC Boston website">CIC</a>
                  </div>
                </div>
                
                <div className="table-row">
                  <div className="cell cluster-name">Community Networks</div>
                  <div className="cell">
                    <a href="https://www.liveaethos.com" target="_blank" rel="noopener noreferrer" aria-label="Aethos website">Aethos</a>, 
                    <a href="https://www.thec10.com" target="_blank" rel="noopener noreferrer" aria-label="The C10 website">The C10</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="right-column">
              <div className="map-container">
                <div className="map-image" id="kendall-map"></div>
                <div className="map-caption">
                  <MapPin size={14} className="map-pin-icon" />
                  All labs ≤15 min walk from our hotel.
                </div>
              </div>
            </div>
          </div>
          
          <div className="pull-quote">
            <blockquote>
              "I honestly feel like we've been dancing around the AI question—now it's time to jump in with both feet."
            </blockquote>
            <div className="quote-attribution">— <strong>Reece, Babson Fellow</strong></div>
          </div>
        </div>
      </section>
      
      {/* Theme 2026 Section */}
      <section id="theme" className="theme-section">
        <div className="container">
          <h2 className="theme-title">𝟮𝟬𝟮𝟲 Theme — Becoming Students Again</h2>
          <div className="theme-title-underline"></div>
          
          <div className="premise-quote">
            <p className="quote-text">
              "Artificial Intelligence ≡ <strong>Derivative Human Intelligence</strong>.
              <br />Thoughts → Words → Actions → Habits → Destiny."
            </p>
            <p className="quote-subtitle">In an accelerated world, we choose—together—the future we co-create.</p>
          </div>
          
          <div className="pillars-row">
            <div className="pillar-card">
              <div className="pillar-icon-circle" aria-label="Interconnected knot representing co-learning">🪢</div>
              <h3 className="pillar-title">Co-Learning Loops</h3>
              <p className="pillar-desc">Everyone teaches & learns</p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon-circle" aria-label="Telescope representing looking toward positive futures">🔭</div>
              <h3 className="pillar-title">Positive Futures Lens</h3>
              <p className="pillar-desc">Design the world we want</p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon-circle" aria-label="Person meditating representing mindfulness">🧘‍♀️</div>
              <h3 className="pillar-title">Mindfulness & Values</h3>
              <p className="pillar-desc">Purpose · Empathy · Equity</p>
            </div>
            
            <div className="pillar-card">
              <div className="pillar-icon-circle" aria-label="Light bulb representing new ideas and beginner's mind">💡</div>
              <h3 className="pillar-title">Beginner's Mind</h3>
              <p className="pillar-desc">Naïve questions → breakthroughs</p>
            </div>
          </div>
          
          <div className="guiding-questions">
            <h4 className="questions-title">Guiding Questions</h4>
            <ol className="questions-list">
              <li>Work Re-Imagined – uniquely human work after AI.</li>
              <li>Redefining Need – tech reshapes basics, who decides?</li>
              <li>Ethics at Velocity – governance for human flourishing.</li>
              <li>Learning to Learn – adaptive rituals every 90 days.</li>
              <li>Creative Collisions – cross-discipline sparks.</li>
              <li>Inner Technologies – resilience & mindfulness practices.</li>
            </ol>
          </div>
        </div>
      </section>
      
      {/* Program-at-a-Glance Schedule Section */}
      <section id="schedule" className="schedule-section">
        <div className="container">
          <h2 className="schedule-title">🗓 Program-at-a-Glance</h2>
          
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Morning</th>
                  <th scope="col">Mid-Day</th>
                  <th scope="col">Afternoon</th>
                  <th scope="col">Evening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="day-cell"><strong>Wed 22 Apr</strong></td>
                  <td></td>
                  <td><em>Optional Pre-Workshop Tours</em></td>
                  <td>Check-in & power-nap</td>
                  <td>Newcomer Circle / Welcome Dinner / Hospitality Suite 🎧</td>
                </tr>
                <tr>
                  <td className="day-cell"><strong>Thu 23 Apr</strong></td>
                  <td>Luxury Breakfast</td>
                  <td>PT Keynote ① + Whiteboard Studios</td>
                  <td>Chef Lunch + BBWI + Mindfulness</td>
                  <td>Dine-Around + Suite & Video Booth</td>
                </tr>
                <tr>
                  <td className="day-cell"><strong>Fri 24 Apr</strong></td>
                  <td>Breakfast</td>
                  <td>PT Keynote ② + Futures Panel</td>
                  <td>Newcomer Fishbowl → Grab-&-Go Lunch</td>
                  <td>Optional Micro-Tours</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="hospitality-note" aria-label="Hospitality Suite note">
            <em>Hospitality Suite open 21:00 – 24:00 nightly – open bar, late-night snacks, spontaneous ideation.</em>
          </div>
          
          <div className="decorative-divider"></div>
        </div>
      </section>
      
      {/* Pre-Workshop Super-Lab Menu Section */}
      <section id="labs" className="labs-section">
        <div className="container">
          <h2 className="labs-title">🔬 Pre-Workshop 'Super-Lab' Menu</h2>
          <div className="labs-title-underline"></div>
          
          <div className="labs-grid" role="list">
            {/* Lab Card 1 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#1</div>
              <h4 className="lab-title">MassRobotics</h4>
              <p className="lab-desc">Drive a cobot & drone-cage demo.</p>
              <div className="lab-footer">
                <span className="lab-location">SEAPORT</span>
                <a 
                  href="https://massrobotics.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open MassRobotics website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 2 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#2</div>
              <h4 className="lab-title">IBM / MIT Watson AI Lab</h4>
              <p className="lab-desc">Hands-on neuro-symbolic AI sandbox.</p>
              <div className="lab-footer">
                <span className="lab-location">KENDALL SQ.</span>
                <a 
                  href="https://www.ibm.com/watson/mit/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open IBM-MIT Watson AI Lab website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 3 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#3</div>
              <h4 className="lab-title">Harvard Wyss Institute</h4>
              <p className="lab-desc">Soft-robotics & organ-on-chip biotech.</p>
              <div className="lab-footer">
                <span className="lab-location">HARVARD SQ.</span>
                <a 
                  href="https://wyss.harvard.edu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Harvard Wyss Institute website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 4 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#4</div>
              <h4 className="lab-title">Greentown Labs</h4>
              <p className="lab-desc">Founder reverse-pitches climatetech.</p>
              <div className="lab-footer">
                <span className="lab-location">SOMERVILLE</span>
                <a 
                  href="https://greentownlabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Greentown Labs website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 5 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#5</div>
              <h4 className="lab-title">MIT Museum MakerHub</h4>
              <p className="lab-desc">Prototype kinetic art with AI co-pilot.</p>
              <div className="lab-footer">
                <span className="lab-location">KENDALL SQ.</span>
                <a 
                  href="https://mitmuseum.mit.edu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open MIT Museum website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 6 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#6</div>
              <h4 className="lab-title">Microsoft Garage @ NERD</h4>
              <p className="lab-desc">Build a no-code AI app in 90 min.</p>
              <div className="lab-footer">
                <span className="lab-location">KENDALL SQ.</span>
                <a 
                  href="https://www.microsoftnewengland.com/garage/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Microsoft Garage @ NERD website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 7 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#7</div>
              <h4 className="lab-title">Affectiva / Smart Eye</h4>
              <p className="lab-desc">Test in-car emotional-AI sensing rigs.</p>
              <div className="lab-footer">
                <span className="lab-location">KENDALL SQ.</span>
                <a 
                  href="https://smarteye.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Smart Eye website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
            
            {/* Lab Card 8 */}
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#8</div>
              <h4 className="lab-title">Babson AI Generator Lab</h4>
              <p className="lab-desc">Zero-to-Idea sprint with students.</p>
              <div className="lab-footer">
                <span className="lab-location">WELLESLEY</span>
                <a 
                  href="https://www.babson.edu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Babson website"
                  className="lab-link"
                >
                  ↗
                </a>
              </div>
            </div>
          </div>
          
          <div className="registration-note">
            <em>Select your top 3 tours during registration — boxed lunch & charter transport included.</em>
          </div>
        </div>
      </section>

      <section id="venues" className="venues-section">
        <div className="container">
          <h2 className="venues-title">🏨 Hotel & Space Short-List</h2>
          <p className="venues-intro">
            All venues are within a 15-minute walk of MIT labs or provide iconic Boston views. 
            Meeting spend estimates include two-day F&B, basic AV, hospitality-suite bar, bus transport, 
            and 30% service/tax; guest rooms are attendee-paid.
          </p>

          {/* Desktop Tabs */}
          <div className="venues-tabs">
            <Tabs.Root className="tabs-root" defaultValue="marriott">
              <Tabs.List className="tab-list" role="tablist">
                <Tabs.Trigger className="tab-trigger" value="marriott">Marriott Cambridge</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="charles">Charles Hotel</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="hyatt">Hyatt Regency</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="courtyard">Courtyard</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="nerd">Microsoft NERD</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="science">Museum of Science</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content className="tab-content" value="marriott">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Boston Marriott Cambridge
                    <a href="https://www.marriott.com/boscb" target="_blank" rel="noopener noreferrer" aria-label="Open Boston Marriott Cambridge website in new tab">
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <p className="venue-info">Walk-time to MIT: 2 min</p>
                <p className="venue-info">12k sq ft / 10 rooms</p>
                <p className="venue-highlight">Seasonal New England buffets</p>
                <p className="venue-price">$48K</p>
                <ul className="venue-pros">
                  <li>Center of Kendall</li>
                  <li>Red Line</li>
                  <li>Waived rental</li>
                </ul>
                <a href="https://www.marriott.com/boscb" className="venue-cta" target="_blank" rel="noopener noreferrer">
                  Visit Website <ExternalLink size={16} />
                </a>
              </Tabs.Content>

              {/* Repeat similar content structure for other venues */}
              {/* Charles Hotel */}
              <Tabs.Content className="tab-content" value="charles">
                {/* Content structure similar to Marriott */}
              </Tabs.Content>

              {/* Continue with other venues... */}
            </Tabs.Root>
          </div>

          {/* Mobile Accordion */}
          <div className="mobile-accordion">
            {/* Accordion implementation will go here */}
          </div>
        </div>
      </section>
      
      {/* Other page sections will go here */}
      <div className="content-placeholder">
        <p>Scroll down to see more content...</p>
      </div>
    </div>
  );
}

export default App;