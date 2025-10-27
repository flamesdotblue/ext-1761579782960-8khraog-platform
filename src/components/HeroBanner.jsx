import React from 'react';
import { Trophy, ArrowRight, Timer } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-6 text-white">
      <div className="relative z-10 grid gap-6 md:grid-cols-2 md:gap-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Crush NEET & JEE with AI-powered mock tests and live rankings
          </h1>
          <p className="mt-3 max-w-prose text-blue-100">
            Practice timed MCQs, get All India Rank, and pinpoint your weak topics with actionable analytics. Built for students, parents, and coaching institutes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm hover:bg-blue-50"
            >
              <Timer className="h-4 w-4" />
              Take Demo Mock Test
            </a>
            <a
              href="#leaderboard"
              className="inline-flex items-center gap-2 rounded-md bg-blue-700/40 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-blue-700/50"
            >
              View Leaderboard
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-blue-100/90">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Timed exams with auto-submit</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-300" /> Percentile & AIR</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" /> Proctoring & audit logs</div>
          </div>
        </div>
        <div className="relative order-first hidden select-none items-center justify-center md:order-last md:flex">
          <div className="relative aspect-square w-full max-w-sm rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-white/10 ring-1 ring-white/10" />
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-3 -right-3 inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-900 shadow">
              <Trophy className="h-3.5 w-3.5" /> Live Contests
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(900px_400px_at_0%_0%,rgba(255,255,255,0.12),transparent)]" />
    </section>
  );
}
