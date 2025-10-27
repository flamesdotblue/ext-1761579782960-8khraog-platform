import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import LeaderboardPreview from './components/LeaderboardPreview.jsx';
import AnalyticsOverview from './components/AnalyticsOverview.jsx';
import FooterCTA from './components/FooterCTA.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <HeaderNav />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroBanner />
        <section aria-labelledby="leaderboard" className="mt-10">
          <h2 id="leaderboard" className="sr-only">Leaderboard preview</h2>
          <LeaderboardPreview />
        </section>
        <section aria-labelledby="analytics" className="mt-10">
          <h2 id="analytics" className="sr-only">Analytics overview</h2>
          <AnalyticsOverview />
        </section>
      </main>
      <FooterCTA />
    </div>
  );
}
