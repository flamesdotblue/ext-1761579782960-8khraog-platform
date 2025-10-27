import React from 'react';
import { Rocket, ShieldCheck, User } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 backdrop-blur bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">RankUp</span>
          <span className="ml-2 hidden rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 md:inline-flex">NEET • JEE</span>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#demo" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 md:inline">Demo Test</a>
          <a href="#leaderboard" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 md:inline">Leaderboard</a>
          <a href="#analytics" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 md:inline">Analytics</a>
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Sign in
          </button>
          <button className="hidden items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-flex">
            <User className="h-4 w-4" />
            Create account
          </button>
        </nav>
      </div>
    </header>
  );
}
