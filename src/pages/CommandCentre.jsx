import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Activity, MapPin, TrendingUp, Users, AlertCircle, ShieldCheck } from 'lucide-react';
import { ArenaCard } from '../components/ArenaCard';
import { ArenaMetric } from '../components/ArenaMetric';
// Removed CSS import

// Mock Data
const sentimentData = [
  { time: '08:00', positive: 65, neutral: 20, negative: 15 },
  { time: '10:00', positive: 72, neutral: 18, negative: 10 },
  { time: '12:00', positive: 68, neutral: 22, negative: 10 },
  { time: '14:00', positive: 75, neutral: 15, negative: 10 },
  { time: '16:00', positive: 82, neutral: 10, negative: 8 },
  { time: '18:00', positive: 88, neutral: 8, negative: 4 },
  { time: '20:00', positive: 89, neutral: 8, negative: 3 },
];

const chapterData = [
  { name: 'Lagos', score: 98, active: 12400 },
  { name: 'Kano', score: 95, active: 11200 },
  { name: 'Rivers', score: 88, active: 8900 },
  { name: 'Enugu', score: 85, active: 7600 },
  { name: 'FCT', score: 82, active: 6500 },
];

const donationData = [
  { day: 'Mon', amount: 12 },
  { day: 'Tue', amount: 19 },
  { day: 'Wed', amount: 15 },
  { day: 'Thu', amount: 25 },
  { day: 'Fri', amount: 22 },
  { day: 'Sat', amount: 35 },
  { day: 'Sun', amount: 45 },
];

export const CommandCentre = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="command-centre">
      <div className="cc-header">
        <div className="container cc-header-container">
          <div className="cc-title-block">
            <Activity className="text-gold pulse-icon" size={28} />
            <h1>Command Centre</h1>
            <ArenaBadge variant="elite">EXECUTIVE ACCESS</ArenaBadge>
          </div>
          <div className="cc-nav">
            <button className={`cc-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
            <button className={`cc-tab ${activeTab === 'intelligence' ? 'active' : ''}`} onClick={() => setActiveTab('intelligence')}>Intelligence</button>
            <button className={`cc-tab ${activeTab === 'operations' ? 'active' : ''}`} onClick={() => setActiveTab('operations')}>Operations</button>
          </div>
        </div>
      </div>

      <div className="container cc-main">
        {/* KPI Row */}
        <div className="grid md:grid-cols-4 gap-4 cc-kpi-row">
          <ArenaCard variant="premium" className="kpi-card">
            <Users size={20} className="kpi-icon text-gold" />
            <ArenaMetric value="1.2M" label="Total Members" trend="+12k this week" />
          </ArenaCard>
          <ArenaCard variant="premium" className="kpi-card">
            <TrendingUp size={20} className="kpi-icon text-green" />
            <ArenaMetric value="₦4.5B" label="Impact Funds" trend="+₦120M today" />
          </ArenaCard>
          <ArenaCard variant="premium" className="kpi-card">
            <MapPin size={20} className="kpi-icon text-white" />
            <ArenaMetric value="36/36" label="States Active" trend="100% Coverage" />
          </ArenaCard>
          <ArenaCard variant="premium" className="kpi-card">
            <ShieldCheck size={20} className="kpi-icon text-gold" />
            <ArenaMetric value="98%" label="Trust Score" trend="Stable" />
          </ArenaCard>
        </div>

        {/* Dashboard Grid */}
        <div className="cc-dashboard-grid">
          {/* Main Chart Area */}
          <ArenaCard variant="base" className="cc-chart-card">
            <div className="card-header">
              <h3>National Sentiment Pulse</h3>
              <span className="live-indicator">
                <span className="stat-dot"></span> Live
              </span>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={sentimentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-signal-green)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-signal-green)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#5B6B7A' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#5B6B7A' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="positive" stroke="var(--color-signal-green)" strokeWidth={3} fillOpacity={1} fill="url(#colorPositive)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </ArenaCard>

          {/* Secondary Data Blocks */}
          <div className="cc-sidebar">
            <ArenaCard variant="base" className="cc-side-card">
              <div className="card-header">
                <h3>Chapter League</h3>
              </div>
              <div className="chapter-list">
                {chapterData.map((chapter, i) => (
                  <div key={i} className="chapter-row">
                    <span className="chapter-rank text-gold">#{i + 1}</span>
                    <span className="chapter-name">{chapter.name}</span>
                    <div className="chapter-score-bar">
                      <div className="score-fill bg-prussian-blue" style={{ width: `${chapter.score}%` }}></div>
                    </div>
                    <span className="chapter-score">{chapter.score}</span>
                  </div>
                ))}
              </div>
            </ArenaCard>

            <ArenaCard variant="base" className="cc-side-card">
              <div className="card-header">
                <h3>Donation Velocity</h3>
              </div>
              <div className="chart-container-small">
                <ResponsiveContainer width="100%" height={150}>
                  <BarChart data={donationData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#5B6B7A' }} />
                    <Tooltip cursor={{ fill: 'rgba(212, 175, 55, 0.1)' }} />
                    <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                      {donationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === donationData.length - 1 ? 'var(--color-prestige-gold)' : 'var(--color-prussian-blue)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ArenaCard>
          </div>
        </div>

        {/* Action Log / Alerts */}
        <ArenaCard variant="base" className="cc-alerts-card mt-6">
          <div className="card-header">
            <h3>Operational Intelligence</h3>
          </div>
          <div className="alerts-list">
            <div className="alert-item">
              <AlertCircle size={18} className="text-gold" />
              <div className="alert-content">
                <strong>High Velocity in South-West</strong>
                <p>Volunteer signups surged by 45% in the last 2 hours following the clean water campaign launch.</p>
              </div>
              <span className="alert-time">10m ago</span>
            </div>
            <div className="alert-item">
              <ShieldCheck size={18} className="text-green" />
              <div className="alert-content">
                <strong>Fund Milestone Verified</strong>
                <p>The ₦50M target for EduTech hubs has been reached and funds deployed to project escrow.</p>
              </div>
              <span className="alert-time">1h ago</span>
            </div>
          </div>
        </ArenaCard>
      </div>
    </div>
  );
};
