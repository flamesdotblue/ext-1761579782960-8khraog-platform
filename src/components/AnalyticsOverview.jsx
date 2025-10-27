import React from 'react';
import { BarChart3 } from 'lucide-react';

function StatCard({ title, value, delta, bar = 70, color = 'bg-emerald-500' }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <BarChart3 className="h-4 w-4 text-slate-400" />
      </div>
      <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>
      {delta && (
        <div className={`mt-1 text-xs font-medium ${delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta > 0 ? `+${delta}%` : `${delta}%`} this week</div>
      )}
      <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${bar}%` }} />
      </div>
    </div>
  );
}

export default function AnalyticsOverview() {
  return (
    <div id="analytics" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Accuracy" value="82%" delta={4.2} bar={82} color="bg-emerald-500" />
      <StatCard title="Tests Taken" value="12" delta={8.0} bar={60} color="bg-blue-500" />
      <StatCard title="Avg. Time/Q" value="54s" delta={-3.0} bar={54} color="bg-amber-500" />
      <StatCard title="Weak Topics Improved" value="5" delta={12.0} bar={50} color="bg-indigo-500" />
    </div>
  );
}
