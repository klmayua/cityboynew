import React from 'react';
import { ArenaButton } from '../components/ArenaButton';
import { ArenaCard } from '../components/ArenaCard';
import { PlayCircle, Share2, Heart, ArrowRight } from 'lucide-react';
import './ProjectNigeria.css';

const projects = [
  { id: 1, title: 'The Kano Solar Initiative', category: 'Energy', status: 'Completed', imageStyle: 'bg-prussian-blue', height: 'large' },
  { id: 2, title: 'Lagos Tech Hubs', category: 'Education', status: 'Active', imageStyle: 'bg-deep-slate', height: 'medium' },
  { id: 3, title: 'Rivers Clean Water', category: 'Infrastructure', status: 'Funding', imageStyle: 'bg-prussian-blue-light', height: 'small' },
  { id: 4, title: 'Enugu Agritech', category: 'Agriculture', status: 'Active', imageStyle: 'bg-muted-steel', height: 'large' },
  { id: 5, title: 'Kaduna Healthcare', category: 'Health', status: 'Completed', imageStyle: 'bg-prussian-blue', height: 'medium' },
  { id: 6, title: 'Oyo Youth Mentorship', category: 'Community', status: 'Funding', imageStyle: 'bg-deep-slate', height: 'small' },
];

export const ProjectNigeria = () => {
  return (
    <div className="project-nigeria">
      <header className="pn-hero">
        <div className="container pn-hero-container">
          <div className="pn-hero-content animate-reveal">
            <h1>Project Nigeria</h1>
            <p className="pn-hero-subcopy">
              We don't just tell stories. We build them. Witness the active transformation of our communities, verified by the people who live there.
            </p>
            <div className="pn-hero-actions">
              <ArenaButton variant="primary">Submit a Story</ArenaButton>
              <ArenaButton variant="ghost">View Documentary <PlayCircle size={18} /></ArenaButton>
            </div>
          </div>
        </div>
      </header>

      <section className="pn-featured">
        <div className="container">
          <ArenaCard variant="base" className="featured-story-card">
            <div className="featured-visual">
              <div className="visual-overlay">
                <PlayCircle size={64} className="play-icon text-white" />
              </div>
            </div>
            <div className="featured-content">
              <span className="featured-category text-gold">Featured Documentary</span>
              <h2>Rebuilding the North: A Story of Resilience</h2>
              <p>How 5,000 volunteers came together to rebuild schools across three states in just 90 days. A testament to the power of organized hope.</p>
              <div className="featured-actions">
                <ArenaButton variant="ghost" size="small">Watch Now</ArenaButton>
                <div className="social-actions">
                  <button className="icon-btn"><Heart size={20} /></button>
                  <button className="icon-btn"><Share2 size={20} /></button>
                </div>
              </div>
            </div>
          </ArenaCard>
        </div>
      </section>

      <section className="pn-masonry-section bg-soft-ivory">
        <div className="container">
          <div className="masonry-header">
            <h2>The Impact Grid</h2>
            <div className="masonry-filters">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Education</button>
              <button className="filter-btn">Infrastructure</button>
              <button className="filter-btn">Health</button>
            </div>
          </div>

          <div className="masonry-grid">
            {projects.map((project) => (
              <div key={project.id} className={`masonry-item height-${project.height}`}>
                <ArenaCard interactive variant="base" className="masonry-card">
                  <div className={`masonry-img ${project.imageStyle}`}>
                    <span className="status-tag">{project.status}</span>
                  </div>
                  <div className="masonry-content">
                    <span className="masonry-category text-gold">{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className="masonry-footer">
                      <span className="read-more">Read Story <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </ArenaCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
