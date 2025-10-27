import React, { useMemo, useState } from 'react';
import { Crown, Download } from 'lucide-react';

const sampleRows = [
  { id: 1, name: 'Aarav S.', state: 'MH', batch: 'JEE Main 2025', score: 196, percentile: 99.12 },
  { id: 2, name: 'Isha K.', state: 'KA', batch: 'NEET 2025', score: 690, percentile: 98.91 },
  { id: 3, name: 'Rohan P.', state: 'DL', batch: 'JEE Adv 2025', score: 167, percentile: 97.42 },
  { id: 4, name: 'You', state: 'MH', batch: 'NEET 2025', score: 610, percentile: 95.31, me: true },
];

export default function LeaderboardPreview() {
  const [scope, setScope] = useState('All India');
  const [range, setRange] = useState('Weekly');

  const rows = useMemo(() => sampleRows, []);

  function exportCSV() {
    const header = ['Rank','Name','State','Batch','Score','Percentile'];
    const body = rows.map((r, i) => [i + 1, r.name, r.state, r.batch, r.score, r.percentile]);
    const csv = [header, ...body].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rankup-leaderboard.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div id="leaderboard" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Leaderboard</h3>
          <p className="text-sm text-slate-500">Live percentile and All India Rank. Demo data shown.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex overflow-hidden rounded-md border border-slate-200">
            {['All India','My State','My Batch'].map((s) => (
              <button
                key={s}
                onClick={() => setScope(s)}
                className={`${scope===s? 'bg-blue-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'} px-3 py-1.5 text-xs font-medium`}
              >{s}</button>
            ))}
          </div>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
          >
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Custom</option>
          </select>
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            title="Export CSV"
          >
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Rank</th>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Student</th>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">State</th>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Batch</th>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Score</th>
              <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600">Percentile</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((r, i) => (
              <tr key={r.id} className={`${r.me ? 'bg-blue-50/60' : ''}`}>
                <td className="whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-800">{i + 1}</td>
                <td className="px-3 py-2 text-sm text-slate-800">
                  <div className="flex items-center gap-2">
                    {i === 0 ? (
                      <span className="inline-flex items-center justify-center rounded-full bg-amber-100 p-1 text-amber-700"><Crown className="h-4 w-4" /></span>
                    ) : (
                      <span className="inline-block h-2 w-2 rounded-full bg-slate-300" />
                    )}
                    {r.name}
                    {r.me && (
                      <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700">You</span>
                    )}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-600">{r.state}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-600">{r.batch}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-900">{r.score}</td>
                <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-emerald-700">{r.percentile}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-right text-xs text-slate-500">
        Public Top 10 shown. Full leaderboard unlocks with RankUp Plus.
      </div>
    </div>
  );
}
