import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold text-slate-900">Upgrade to RankUp Plus</h3>
          <p className="mt-1 text-sm text-slate-600">
            Unlock full analytics, All India Rank, institute leaderboards, and downloadable reports. Start at ₹99/month.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700"><Star className="h-3.5 w-3.5" /> Advanced breakdowns</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700"><ShieldCheck className="h-3.5 w-3.5" /> Proctoring insights</span>
          </div>
        </div>
        <div className="flex items-center md:justify-end">
          <a
            href="#upgrade"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Get RankUp Plus
          </a>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RankUp. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-800">Privacy</a>
            <a href="#terms" className="hover:text-slate-800">Terms</a>
            <a href="#contact" className="hover:text-slate-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
