import React from 'react';
import { ArenaButton } from '../components/ArenaButton';
import { ArenaMetric } from '../components/ArenaMetric';
import { ArenaCard } from '../components/ArenaCard';
import { ArrowRight, PlayCircle, Users, Target, Shield } from 'lucide-react';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Arena */}
      <section className="hero-arena">
        <div className="hero-bg-gradient"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-reveal">LIVE: National Mobilization Network</div>
            <h1 className="hero-title animate-reveal" style={{ animationDelay: '100ms' }}>
              Organize Hope.<br/>Build Nigeria.
            </h1>
            <p className="hero-subcopy animate-reveal" style={{ animationDelay: '200ms' }}>
              The digital command centre for positive civic participation. 
              Track impact, join the movement, and help shape the national narrative.
            </p>
            <div className="hero-actions animate-reveal" style={{ animationDelay: '300ms' }}>
              <ArenaButton variant="primary" size="large">
                Join The Arena <ArrowRight size={18} />
              </ArenaButton>
              <ArenaButton variant="ghost" size="large">
                <PlayCircle size={18} /> Watch Vision
              </ArenaButton>
            </div>
            
            <div className="hero-live-stats animate-reveal" style={{ animationDelay: '400ms' }}>
              <div className="stat-item">
                <span className="stat-dot"></span>
                <span>24,592 Volunteers Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-dot dot-gold"></span>
                <span>₦45.2M Raised Today</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual animate-reveal" style={{ animationDelay: '200ms' }}>
            <div className="visual-composition">
              <div className="visual-card-main glass-panel">
                <div className="pulse-ring"></div>
                <Users size={32} color="var(--color-prestige-gold)" />
                <h3>National Pulse</h3>
                <ArenaMetric value="89%" label="Positive Sentiment" trend="+4%" />
              </div>
              
              <div className="visual-card-sub top-right glass-panel">
                <Target size={24} color="var(--color-signal-green)" />
                <p>Projects Funded</p>
                <strong>142</strong>
              </div>
              
              <div className="visual-card-sub bottom-left glass-panel">
                <Shield size={24} color="var(--color-white)" />
                <p>Trust Score</p>
                <strong>A+</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Ribbon */}
      <div className="momentum-ribbon">
        <div className="ticker-track">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="ticker-content">
              <span>★ ₦1.2B TOTAL IMPACT FUND</span>
              <span>• 36 STATES ACTIVE</span>
              <span>• 124,000 VOLUNTEERS</span>
              <span>• 45 CAMPAIGNS LIVE</span>
              <span>★ 8,500 DIASPORA MEMBERS</span>
              <span>• 12 PROJECTS COMPLETED THIS WEEK</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Nigeria Block */}
      <section className="project-nigeria-block">
        <div className="container">
          <div className="pn-header">
            <h2>Project Nigeria</h2>
            <p>Real stories of impact, transparently tracked.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ArenaCard interactive variant="base" className="pn-card">
              <div className="pn-img-placeholder bg-deep-slate">
                <span>Kano Solar Initiative</span>
              </div>
              <div className="pn-card-content">
                <div className="pn-meta text-green">100% Funded • Live</div>
                <h3>Powering 50 Schools</h3>
                <p>Clean energy deployment completed ahead of schedule by local chapters.</p>
              </div>
            </ArenaCard>
            
            <ArenaCard interactive variant="base" className="pn-card">
              <div className="pn-img-placeholder bg-prussian-blue">
                <span>Lagos Tech Hubs</span>
              </div>
              <div className="pn-card-content">
                <div className="pn-meta text-gold">85% Funded • Active</div>
                <h3>Youth Coding Centers</h3>
                <p>Equipping 5,000 youths with modern development skills.</p>
              </div>
            </ArenaCard>

            <ArenaCard interactive variant="premium" className="pn-card">
              <div className="pn-card-content h-full flex-col justify-center">
                <h3>Sponsor a Project</h3>
                <p>Direct impact. Full transparency. Quarterly reports.</p>
                <ArenaButton variant="gold" className="mt-4">View Opportunities</ArenaButton>
              </div>
            </ArenaCard>
          </div>
        </div>
      </section>

      {/* Join Arena CTA */}
      <section className="join-cta-block bg-prussian-blue text-white">
        <div className="container join-cta-container">
          <div className="join-content">
            <h2>Ready to build?</h2>
            <p>Join the movement in under 60 seconds.</p>
          </div>
          <div className="join-action">
            <ArenaButton variant="gold" size="large">Join The Arena</ArenaButton>
          </div>
        </div>
      </section>
    </div>
  );
};