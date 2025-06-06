import { useState, useEffect } from 'react';
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
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <img src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/AMI%20logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvQU1JIGxvZ28ucG5nIiwiaWF0IjoxNzQ5MjI2NzIzLCJleHAiOjE3ODA3NjI3MjN9.sW3rRJFnH6RTPGdNAA29GwnMflACZV8qDcGXEfWjENA" alt="AMI: An Innovation Learning Community" className="header-logo" />
          </div>
        </div>
      </header>
      
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
      
      <div className="section-divider orange-to-white"></div>
      
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
              <div className="enhanced-map-container">
                <div className="map-wrapper" id="kendall-map-wrapper">
                  <img 
                    src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/kendallsqstaticmap2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3Mva2VuZGFsbHNxc3RhdGljbWFwMi5wbmciLCJpYXQiOjE3NDkyMjY4MzgsImV4cCI6MTc4MDc2MjgzOH0.b1azqPig1xIJet_Ks809JBVk-JlWLpxi3AKJ17j9ZDU" 
                    alt="Kendall Square Map" 
                    className="enhanced-map-image" 
                    id="kendall-map"
                    onClick={() => {
                      const img = document.getElementById('kendall-map') as HTMLImageElement;
                      const wrapper = document.getElementById('kendall-map-wrapper') as HTMLElement;
                      if (img && wrapper) {
                        const isZoomed = img.classList.contains('zoomed');
                        if (isZoomed) {
                          img.classList.remove('zoomed');
                          wrapper.classList.remove('zoomed');
                        } else {
                          img.classList.add('zoomed');
                          wrapper.classList.add('zoomed');
                        }
                      }
                    }}
                  />
                </div>
                <div className="map-caption">
                  <MapPin size={14} className="map-pin-icon" />
                  All labs ≤15 min walk from our hotel. <em>(Click to zoom)</em>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pull-quote">
            <blockquote>
              "I honestly feel like we've been dancing around the AI question—now it's time to jump in with both feet."
            </blockquote>
            <div className="quote-attribution">— <strong>Michael Robinson, AMI Fellow</strong></div>
          </div>
        </div>
      </section>
      
      <section id="theme" className="theme-section">
        <div className="container">
          <h2 className="theme-title">𝟮𝟬𝟮𝟲 Theme — Becoming Students Again</h2>
          <div className="theme-title-underline"></div>
          
          <div className="premise-quote">
            <p className="quote-text">In a world accelerated by Machine learning algorithms, how can we use human learning to choose - together, the future we co-create?</p>
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
          
          <div className="inter-generational-loom">
            <h4 className="loom-title">Inter-Generational Loom</h4>
            <p className="loom-description">
              <strong>Students ↔ Seasoned Innovators</strong> — The most powerful learning happens when fresh perspectives meet deep experience. 
              Our <em>Peer-Mentor Rings</em> breakout sessions pair newcomers with veterans in rotating micro-conversations that spark breakthrough insights.
            </p>
          </div>
          
      <div className="section-divider blue-to-white-smooth"></div>
      
      <div className="guiding-questions">
        <div className="questions-container">
          <h3 className="questions-title">Guiding Questions for Boston 2026</h3>
          <div className="questions-title-underline"></div>
          <ol className="questions-list">
            <li>How do we capture uniquely human context and experience in the age of AI? How do we define creativity and uniqueness?</li>
            <li>Energy abundance & redefined need – If limitless energy & digital labor are at hand, who decides what still counts as 'need' & 'work'?</li>
            <li>Ethics at velocity – Governance for human flourishing.</li>
            <li>90-day re-learning sprints – Learning how to learn all over again, and how to do it often.</li>
            <li>How do we adapt our resilience and mindfulness practices when 83% of public LLM use is for companionship, self-help, and therapy? What are the ethical questions? Biases?</li>
          </ol>
        </div>
      </div>
        </div>
      </section>
      
      <div className="section-divider white-to-blue"></div>
      
      <section className="virtual-onramp">
        <div className="container">
          <h2 className="section-title">
            <Globe className="title-icon" size={24} />
            🎯 Virtual On-Ramp
          </h2>
          <div className="title-underline"></div>
          
          <div className="onramp-venue-style">
            <div className="venue-header">
              <h3 className="venue-title">
                "4 Augmented Leadership Skills for 2026"
                <a 
                  href="https://www.aminnovation.org/meetings/amivirtualgathering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Register for virtual session"
                >
                  <ExternalLink size={20} />
                </a>
              </h3>
            </div>
            <p className="venue-info">Date: 12 Jun 2025</p>
            <p className="venue-info webinar-format">Interactive Webinar</p>
            <img src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/bob.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvYm9iLnBuZyIsImlhdCI6MTc0OTIyNjgyMSwiZXhwIjoxNzgwNzYyODIxfQ.5ZaOTEZorScQ933KOti895VN4CQLquwPTkmwvjgkq-A" alt="Bob Johansson" className="speaker-photo" />
            <p className="venue-highlight">Bob Johansson — Institute for the Future (IFTF)</p>
            <p className="venue-price">Free Preview Session</p>
            <ul className="venue-pros">
              <li>Exclusive AMI Boston 2026 preview</li>
              <li>Interactive Q&A with Bob Johansson</li>
              <li>Replay available March 2026</li>
              <li>Perfect preparation for the main event</li>
            </ul>
            <a 
              href="https://www.aminnovation.org/meetings/amivirtualgathering/"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-cta"
              aria-label="Register for Virtual On-Ramp session"
            >
              Register for Virtual Session <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
      
      <section className="activities-section">
        <div className="container">
          <h2 className="activities-title">What to Expect</h2>
          <p className="activities-intro">
            AMI gatherings blend immersive experiences with collaborative learning, offering a variety of activities to spark innovation and build community.
          </p>
          
          <ul className="activities-list">
            <li>
              <strong>Optional Pre-Meeting Workshop</strong> – An afternoon deep-dive workshop before the main event (for those who arrive early), focusing on local innovation and hands-on learning experiences.
            </li>
            <li>
              <strong>Networking Receptions & Hospitality</strong> – Welcome Reception on Wednesday evening to introduce attendees, plus after-hours Hospitality Suite gatherings each night for informal networking and spontaneous ideation.
            </li>
            <li>
              <strong>Positive Turbulence Speaker Sessions</strong> – Interactive sessions featuring keynote innovators, where local and visiting thought leaders share insights with Q&A and group discussion.
            </li>
            <li>
              <strong>Site Visits & Off-site Learning</strong> – Hands-on visits to Boston's innovation labs and research centers, providing direct access to cutting-edge work in AI, robotics, and biotech.
            </li>
            <li>
              <strong>Small-Group Dinners & Newcomer Fishbowl</strong> – Organized small-group dinners to connect with peers, and a 'Newcomer Fishbowl' session to welcome first-time attendees and share reflections.
            </li>
            <li>
              <strong>Peer-Mentor Rings</strong> – Our signature Inter-Generational Loom breakout sessions pairing newcomers with veterans in rotating micro-conversations.
            </li>
          </ul>
        </div>
      </section>
      
      <div className="section-divider blue-to-white"></div>
      
      <section className="speaker-highlights">
        <div className="container">
          <h2 className="speakers-title">Featured Speakers</h2>
          
          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-image-placeholder">
                <div className="placeholder-icon">👥</div>
              </div>
              <p className="speaker-title">Babson Work Futures Research</p>
              <p className="speaker-topic"><em>Professor & Student Researcher Pair</em></p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image-placeholder">
                <div className="placeholder-icon">👤</div>
              </div>
              <p className="speaker-title">Energy Systems Expert</p>
              <p className="speaker-topic"><em>Energy Abundance & Redefined Need</em></p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image-placeholder">
                <div className="placeholder-icon">👤</div>
              </div>
              <p className="speaker-title">Criminal Justice & AI Ethics</p>
              <p className="speaker-topic"><em>Algorithmic Justice & Bias Prevention</em></p>
            </div>
            
            <div className="speaker-card">
              <div className="speaker-image-placeholder">
                <div className="placeholder-icon">👤</div>
              </div>
              <p className="speaker-title">Economy & Ethics Specialist</p>
              <p className="speaker-topic"><em>MIT Research & Policy Analysis</em></p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider white-to-blue"></div>
      
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
                  <td>Chef Lunch + BBWI + Algorithmic Justice Sandbox + Mindfulness</td>
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
      
      <div className="section-divider blue-to-white"></div>
      
      <section id="labs" className="labs-section">
        <div className="container">
          <h2 className="labs-title">🔬 Pre-Workshop 'Super-Lab' Menu</h2>
          <div className="labs-title-underline"></div>
          
          <div className="labs-grid" role="list">
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
            
            <div className="lab-card" role="listitem">
              <div className="lab-badge">#8</div>
              <h4 className="lab-title">Babson AI Generator Lab</h4>
              <p className="lab-desc">Zero-to-Idea sprint with students.</p>
              <div className="lab-footer">
                <span className="lab-location">WELLESLEY</span>
                <a 
                  href="https://www.babson.edu/thegenerator/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Open Babson Generator website"
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

      <section id="activities" className="activities-section">
        <div className="container">
          <h2 className="section-title">
            ⭐ Signature Activities & Connections
          </h2>
          <div className="title-underline"></div>
          
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
              <p className="activity-description">Teams redesign <em>Work & Need 2030</em> with design-thinking & AI co-pilot tools.</p>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon" aria-label="Meditation icon">🧘‍♂️</div>
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

      <div className="section-divider blue-to-white"></div>

      <section id="venues" className="venues-section">
        <div className="container">
          <h2 className="venues-title">🏨 Hotel & Space Short-List</h2>
          <p className="venues-intro">
            All venues are within a 15-minute walk of MIT labs or provide iconic Boston views. 
            Meeting spend estimates include two-day F&B, basic AV, hospitality-suite bar, bus transport, 
            and 30% service/tax; guest rooms are attendee-paid.
          </p>

          {isMobile ? (
            <div className="mobile-accordion">
              {[
                {
                  id: 'marriott',
                  name: 'Boston Marriott Cambridge',
                  distance: 'Walk-time to MIT: 2 min',
                  space: '12k sq ft / 10 rms',
                  food: 'Seasonal New England buffets',
                  price: '$48K',
                  roomRate: '$239-$289',
                  negotiation: 'Negotiations start Jul 2025',
                  roomBlock: '45 rooms × 3 nights',
                  pros: ['Center of Kendall', 'Red Line', 'Waived rental'],
                  url: 'https://www.marriott.com/boscb',
                  image: 'https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/boston%20marriot%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvYm9zdG9uIG1hcnJpb3QgY2FtYnJpZGdlLnBuZyIsImlhdCI6MTc0OTIyODM1NCwiZXhwIjoxNzgwNzY0MzU0fQ.y4CjrSyRVkHKlNdmIiqbyoqWBpxsaNPKqM_oT_eMwkU'
                },
                {
                  id: 'charles',
                  name: 'The Charles Hotel',
                  distance: '10 min taxi',
                  space: '18k sq ft / 18 rms',
                  food: 'Farm-to-table menus',
                  price: '$59K',
                  roomRate: '$239-$289',
                  negotiation: 'Negotiations start Jul 2025',
                  roomBlock: '45 rooms × 3 nights',
                  pros: ['Harvard Sq. vibe', 'Jazz bar', 'Spacious suites'],
                  url: 'https://www.charleshotel.com',
                  image: 'https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/charles%20hotel%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvY2hhcmxlcyBob3RlbCBjYW1icmlkZ2UucG5nIiwiaWF0IjoxNzQ5MjI4MzA5LCJleHAiOjE3ODA3NjQzMDl9.ioHA2ak__oSUUOt6e6zhFnVHly7v89oQ2TFjbYxvfBM'
                },
                {
                  id: 'hyatt',
                  name: 'Hyatt Regency Boston/Cambridge',
                  distance: '10 min walk via bridge',
                  space: '25k sq ft ballroom',
                  food: 'River-view dining',
                  price: '$65K',
                  roomRate: '$239-$289',
                  negotiation: 'Negotiations start Jul 2025',
                  roomBlock: '45 rooms × 3 nights',
                  pros: ['Skyline ballroom', 'Largest capacity'],
                  url: 'https://www.hyatt.com/en-US/hotel/massachusetts/hyatt-regency-boston-cambridge/bosrc',
                  image: 'https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/hyattregency.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaHlhdHRyZWdlbmN5LnBuZyIsImlhdCI6MTc0OTIyODg0MCwiZXhwIjoxNzgwNzY0ODQwfQ.PIn0JnPM6KwMpehPr0B53cJ9muOTTYQvRqHgV6xTS8M'
                },
                {
                  id: 'courtyard',
                  name: 'Courtyard Marriott Cambridge',
                  distance: '15 min walk',
                  space: '6.7k sq ft',
                  food: 'Lean pricing',
                  price: '$41K',
                  roomRate: '$239-$289',
                  negotiation: 'Negotiations start Jul 2025',
                  roomBlock: '45 rooms × 3 nights',
                  pros: ['Biggest budget buffer', 'Marriott points'],
                  url: 'https://www.marriott.com/boscy',
                  image: 'https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/courtyard%20marriot%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvY291cnR5YXJkIG1hcnJpb3QgY2FtYnJpZGdlLnBuZyIsImlhdCI6MTc0OTIyOTE3OCwiZXhwIjoxNzgwNzY1MTc4fQ.zSijiHiLNm53newAL0h1FOme-C4yK9sBbDtm26fCUwQ'
                },
                {
                  id: 'nerd',
                  name: 'Microsoft NERD Center',
                  distance: 'onsite',
                  space: '180-seat forum + 5 pods',
                  food: 'Bring-in catering',
                  price: '$22K',
                  roomRate: 'Partner hotels',
                  negotiation: '',
                  roomBlock: '',
                  pros: ['Space free', 'Tech vibe'],
                  url: 'https://www.microsoftnewengland.com'
                },
                {
                  id: 'science',
                  name: 'Museum of Science',
                  distance: '12 min taxi',
                  space: '270° glass space',
                  food: 'In-house catering',
                  price: '$55K',
                  roomRate: 'Partner hotels',
                  negotiation: '',
                  roomBlock: '',
                  pros: ['Iconic view', 'Pairs with AI exhibits'],
                  url: 'https://www.mos.org'
                }
              ].map((venue) => (
                <div 
                  key={venue.id} 
                  className="accordion-item"
                  role="tabpanel"
                  aria-expanded={activeVenue === venue.id}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => setActiveVenue(activeVenue === venue.id ? '' : venue.id)}
                    aria-controls={`content-${venue.id}`}
                    aria-expanded={activeVenue === venue.id}
                  >
                    {venue.name}
                    {activeVenue === venue.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  {activeVenue === venue.id && (
                    <div 
                      id={`content-${venue.id}`}
                      className="accordion-content"
                    >
                      <div className="venue-content-layout">
                        <div className="venue-details">
                          <p className="venue-info">{venue.distance}</p>
                          <p className="venue-info">{venue.space}</p>
                          <p className="venue-highlight">{venue.food}</p>
                          <p className="venue-price">{venue.price}</p>
                          <p className="venue-room-rate"><strong>Room Rate: {venue.roomRate}</strong></p>
                          <p className="venue-negotiation"><em>{venue.negotiation}</em></p>
                          <p className="venue-block">{venue.roomBlock}</p>
                          <ul className="venue-pros">
                            {venue.pros.map((pro, index) => (
                              <li key={index}>{pro}</li>
                            ))}
                          </ul>
                          <a 
                            href={venue.url}
                            className="venue-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${venue.name} website in new tab`}
                          >
                            Visit Website <ExternalLink size={16} />
                          </a>
                        </div>
                        {venue.image && (
                          <div className="venue-image-container">
                            <img 
                              src={venue.image} 
                              alt={`${venue.name} exterior`} 
                              className="venue-image"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Tabs.Root className="tabs-root" defaultValue="marriott">
              <Tabs.List className="tab-list" role="tablist">
                <Tabs.Trigger className="tab-trigger" value="marriott">Marriott Cambridge</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="charles">Charles Hotel</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="hyatt">Hyatt Regency</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="courtyard">Courtyard</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="nerd">Microsoft NERD</Tabs.Trigger>
                <Tabs.Trigger className="tab-trigger" value="science">Museum of Science</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content className="tab-content" value="marriott" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Boston Marriott Cambridge
                    <a 
                      href="https://www.marriott.com/boscb"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Boston Marriott Cambridge website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <div className="venue-content-layout">
                  <div className="venue-details">
                    <p className="venue-info">Walk-time to MIT: 2 min</p>
                    <p className="venue-info">12k sq ft / 10 rms</p>
                    <p className="venue-highlight">Seasonal New England buffets</p>
                    <p className="venue-price">$48K</p>
                    <p className="venue-room-rate"><strong>Room Rate: $239-$289</strong></p>
                    <p className="venue-negotiation"><em>Negotiations start Jul 2025</em></p>
                    <p className="venue-block">Room block: 45 rooms × 3 nights</p>
                    <ul className="venue-pros">
                      <li>Center of Kendall</li>
                      <li>Red Line</li>
                      <li>Waived rental</li>
                    </ul>
                    <a 
                      href="https://www.marriott.com/boscb"
                      className="venue-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Boston Marriott Cambridge website in new tab"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="venue-image-container">
                    <img 
                      src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/boston%20marriot%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvYm9zdG9uIG1hcnJpb3QgY2FtYnJpZGdlLnBuZyIsImlhdCI6MTc0OTIyODM1NCwiZXhwIjoxNzgwNzY0MzU0fQ.y4CjrSyRVkHKlNdmIiqbyoqWBpxsaNPKqM_oT_eMwkU" 
                      alt="Boston Marriott Cambridge exterior" 
                      className="venue-image"
                    />
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content className="tab-content" value="charles" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    The Charles Hotel
                    <a 
                      href="https://www.charleshotel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open The Charles Hotel website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <div className="venue-content-layout">
                  <div className="venue-details">
                    <p className="venue-info">10 min taxi</p>
                    <p className="venue-info">18k sq ft / 18 rms</p>
                    <p className="venue-highlight">Farm-to-table menus</p>
                    <p className="venue-price">$59K</p>
                    <p className="venue-room-rate"><strong>Room Rate: $239-$289</strong></p>
                    <p className="venue-negotiation"><em>Negotiations start Jul 2025</em></p>
                    <p className="venue-block">Room block: 45 rooms × 3 nights</p>
                    <ul className="venue-pros">
                      <li>Harvard Sq. vibe</li>
                      <li>Jazz bar</li>
                      <li>Spacious suites</li>
                    </ul>
                    <a 
                      href="https://www.charleshotel.com"
                      className="venue-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open The Charles Hotel website in new tab"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="venue-image-container">
                    <img 
                      src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/charles%20hotel%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvY2hhcmxlcyBob3RlbCBjYW1icmlkZ2UucG5nIiwiaWF0IjoxNzQ5MjI4MzA5LCJleHAiOjE3ODA3NjQzMDl9.ioHA2ak__oSUUOt6e6zhFnVHly7v89oQ2TFjbYxvfBM" 
                      alt="The Charles Hotel exterior" 
                      className="venue-image"
                    />
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content className="tab-content" value="hyatt" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Hyatt Regency Boston/Cambridge
                    <a 
                      href="https://www.hyatt.com/en-US/hotel/massachusetts/hyatt-regency-boston-cambridge/bosrc"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Hyatt Regency Boston/Cambridge website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <div className="venue-content-layout">
                  <div className="venue-details">
                    <p className="venue-info">10 min walk via bridge</p>
                    <p className="venue-info">25k sq ft ballroom</p>
                    <p className="venue-highlight">River-view dining</p>
                    <p className="venue-price">$65K</p>
                    <p className="venue-room-rate"><strong>Room Rate: $239-$289</strong></p>
                    <p className="venue-negotiation"><em>Negotiations start Jul 2025</em></p>
                    <p className="venue-block">Room block: 45 rooms × 3 nights</p>
                    <ul className="venue-pros">
                      <li>Skyline ballroom</li>
                      <li>Largest capacity</li>
                    </ul>
                    <a 
                      href="https://www.hyatt.com/en-US/hotel/massachusetts/hyatt-regency-boston-cambridge/bosrc"
                      className="venue-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Hyatt Regency Boston/Cambridge website in new tab"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="venue-image-container">
                    <img 
                      src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/hyattregency.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvaHlhdHRyZWdlbmN5LnBuZyIsImlhdCI6MTc0OTIyODg0MCwiZXhwIjoxNzgwNzY0ODQwfQ.PIn0JnPM6KwMpehPr0B53cJ9muOTTYQvRqHgV6xTS8M" 
                      alt="Hyatt Regency Boston/Cambridge exterior" 
                      className="venue-image"
                    />
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content className="tab-content" value="courtyard" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Courtyard Marriott Cambridge
                    <a 
                      href="https://www.marriott.com/boscy"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Courtyard Marriott Cambridge website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <div className="venue-content-layout">
                  <div className="venue-details">
                    <p className="venue-info">15 min walk</p>
                    <p className="venue-info">6.7k sq ft</p>
                    <p className="venue-highlight">Lean pricing</p>
                    <p className="venue-price">$41K</p>
                    <p className="venue-room-rate"><strong>Room Rate: $239-$289</strong></p>
                    <p className="venue-negotiation"><em>Negotiations start Jul 2025</em></p>
                    <p className="venue-block">Room block: 45 rooms × 3 nights</p>
                    <ul className="venue-pros">
                      <li>Biggest budget buffer</li>
                      <li>Marriott points</li>
                    </ul>
                    <a 
                      href="https://www.marriott.com/boscy"
                      className="venue-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Courtyard Marriott Cambridge website in new tab"
                    >
                      Visit Website <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="venue-image-container">
                    <img 
                      src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/courtyard%20marriot%20cambridge.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvY291cnR5YXJkIG1hcnJpb3QgY2FtYnJpZGdlLnBuZyIsImlhdCI6MTc0OTIyOTE3OCwiZXhwIjoxNzgwNzY1MTc4fQ.zSijiHiLNm53newAL0h1FOme-C4yK9sBbDtm26fCUwQ" 
                      alt="Courtyard Marriott Cambridge exterior" 
                      className="venue-image"
                    />
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content className="tab-content" value="nerd" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Microsoft NERD Center
                    <a 
                      href="https://www.microsoftnewengland.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Microsoft NERD Center website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <p className="venue-info">onsite</p>
                <p className="venue-info">180-seat forum + 5 pods</p>
                <p className="venue-highlight">Bring-in catering</p>
                <p className="venue-price">$22K</p>
                <ul className="venue-pros">
                  <li>Space free</li>
                  <li>Tech vibe</li>
                </ul>
                <a 
                  href="https://www.microsoftnewengland.com"
                  className="venue-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Microsoft NERD Center website in new tab"
                >
                  Visit Website <ExternalLink size={16} />
                </a>
              </Tabs.Content>

              <Tabs.Content className="tab-content" value="science" role="tabpanel">
                <div className="venue-header">
                  <h3 className="venue-title">
                    Museum of Science - Skyline Room
                    <a 
                      href="https://www.mos.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Museum of Science website in new tab"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </h3>
                </div>
                <p className="venue-info">12 min taxi</p>
                <p className="venue-info">270° glass space</p>
                <p className="venue-highlight">In-house catering</p>
                <p className="venue-price">$55K</p>
                <ul className="venue-pros">
                  <li>Iconic view</li>
                  <li>Pairs with AI exhibits</li>
                </ul>
                <a 
                  href="https://www.mos.org"
                  className="venue-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Museum of Science website in new tab"
                >
                  Visit Website <ExternalLink size={16} />
                </a>
              </Tabs.Content>
            </Tabs.Root>
          )}
        </div>
      </section>

      <div className="section-divider white-to-blue"></div>
      
      <section id="budget" className="budget-section">
        <div className="container">
          <h2 className="section-title">💰 Registration & Host Budget Frame</h2>
          
          <p className="intro-text">
            <em>Fees:</em> <strong>$1,295</strong> attendee · <strong>$150</strong> pre-workshop  |  <em>Head-count:</em> <strong>60 paid + 10 comp</strong>  |  <em>Income:</em> <strong>≈ $64,750</strong>  |  <em>F&B target:</em> <strong>60–65%</strong>  |  <em>AV & Misc:</em> <strong>15–20%</strong>  |  <em>Space rental:</em> typically <strong>comped</strong> via F&B.
          </p>
          
          <div className="room-rates-highlight">
            <h3 className="room-rates-title">🏨 Room Rates</h3>
            <p className="room-rates-info">45 rooms × 3 nights @ <strong>$239-$289 per night</strong></p>
            <p className="room-rates-note">All venues negotiated for July 2025 • Attendee-paid lodging</p>
          </div>
          
          <div className="schedule-table-container">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th scope="col">Scenario</th>
                  <th scope="col">PAX</th>
                  <th scope="col">Hotel</th>
                  <th scope="col">Meeting Spend</th>
                  <th scope="col">F&B % Income</th>
                  <th scope="col">AV/Misc Buffer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="day-cell"><strong>Lean</strong></td>
                  <td>50</td>
                  <td>Courtyard</td>
                  <td><strong>$34.3K</strong></td>
                  <td>57% ✅</td>
                  <td><span className="buffer-healthy" aria-label="Healthy buffer">$10K+</span></td>
                </tr>
                <tr>
                  <td className="day-cell"><strong>Target</strong></td>
                  <td>60</td>
                  <td>Marriott</td>
                  <td><strong>$44.3K</strong></td>
                  <td>62% ✅</td>
                  <td><span className="buffer-healthy" aria-label="Healthy buffer">$9–10K</span></td>
                </tr>
                <tr>
                  <td className="day-cell"><strong>Stretch</strong></td>
                  <td>75</td>
                  <td>Hyatt</td>
                  <td><strong>$58.8K</strong></td>
                  <td>64% ✅</td>
                  <td><span className="buffer-tight" aria-label="Tight buffer">~$6K</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="budget-footnote">
            <em>Meeting spend includes F&B, basic AV, hospitality-suite bar, transport, 30% service/tax.</em>
          </p>
        </div>
      </section>

      <div className="section-divider white-to-blue"></div>
      
      <div className="section-divider blue-to-white-smooth"></div>
      
      <section id="cta" className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Co-Design the Future?</h2>
          <p className="cta-subtitle">
            Join 75 innovators for three days of action, mindfulness and Positive Turbulence in Cambridge.
          </p>
          <a href="#register" className="cta-button" aria-label="Pre-register for AMI Boston 2026">
            Pre-Register Now →
          </a>
        </div>
      </section>

      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <img src="https://eoccruuzlqionthguigm.supabase.co/storage/v1/object/sign/photos/AMI%20logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmZkYmRkNC1jZTViLTRjZTEtODNiZi1kZWMwNTIyNjNhZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvQU1JIGxvZ28ucG5nIiwiaWF0IjoxNzQ5MjI2NzIzLCJleHAiOjE3ODA3NjI3MjN9.sW3rRJFnH6RTPGdNAA29GwnMflACZV8qDcGXEfWjENA" alt="AMI logo" className="footer-logo" />
              <div className="footer-org">Association for Managers of Innovation</div>
              <div className="footer-address">P.O. Box 123 · Greensboro, NC · USA</div>
              <div className="footer-copyright">© 2025 AMI — All Rights Reserved</div>
            </div>
            <div className="footer-right">
              <div className="footer-links">
                <a href="#" aria-label="Privacy policy">Privacy</a>
                <span> · </span>
                <a href="#" aria-label="Code of conduct">Code of Conduct</a>
                <span> · </span>
                <a href="mailto:info@innovationmanagers.org" aria-label="Contact AMI">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;