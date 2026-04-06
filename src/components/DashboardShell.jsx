import React from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import TransactionCard from "./TransactionCard";

const cashFlowData = [
  { day: "1", value: 720 },
  { day: "4", value: 860 },
  { day: "7", value: 680 },
  { day: "10", value: 920 },
  { day: "13", value: 1050 },
  { day: "16", value: 980 },
  { day: "19", value: 1140 },
  { day: "22", value: 1240 },
  { day: "25", value: 1170 },
  { day: "28", value: 1330 },
  { day: "30", value: 1420 },
];

const categoryData = [
  { label: "Housing", value: 78, color: "from-emerald-400 to-teal-400" },
  { label: "Transport", value: 46, color: "from-slate-400 to-slate-300" },
  { label: "Food", value: 63, color: "from-cyan-400 to-blue-400" },
  { label: "Utilities", value: 28, color: "from-orange-300 to-amber-300" },
  { label: "Wellness", value: 52, color: "from-fuchsia-400 to-violet-400" },
  { label: "Travel", value: 34, color: "from-indigo-400 to-purple-400" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const DashboardShell = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-8 sm:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">
              Financial Control Center
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              Your Wealth, Simplified.
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400 sm:text-lg">
              A premium dashboard that reduces cognitive load with meaningful data,
              effortless controls, and clear cash-flow visibility.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            aria-label="Quick add a new transaction"
          >
            + Quick Add
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={1}
            aria-label="Current account balance overview"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Current Balance
                </p>
                <p className="mt-4 text-5xl font-semibold text-white">$128,480</p>
                <p className="mt-2 text-sm text-slate-400">
                  Available funds with projected monthly inflow.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/70 px-4 py-3 text-right text-slate-200 shadow-inner shadow-slate-950/20">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Goal</p>
                <p className="mt-2 text-lg font-semibold text-emerald-300">$250k</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Income</p>
                <p className="mt-3 text-3xl font-semibold text-emerald-300">$24,300</p>
                <p className="mt-2 text-sm text-slate-400">This month</p>
              </div>
              <div className="rounded-3xl bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Expenses</p>
                <p className="mt-3 text-3xl font-semibold text-rose-300">$9,860</p>
                <p className="mt-2 text-sm text-slate-400">This month</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={2}
            aria-label="Spending heatmap overview"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Spending Heatmap
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">Focused spending zones</h2>
              </div>
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                30 days
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/5 p-4 text-center text-slate-300"
                  aria-label={`Spending intensity block ${idx + 1}`}
                >
                  <div className="h-12 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-slate-900/20"></div>
                  <p className="mt-3 text-sm">Day {idx * 4 + 1}</p>
                  <p className="mt-1 text-lg font-semibold text-white">${Math.round(400 + idx * 50)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={3}
          aria-label="Cash flow chart visualization"
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Cash Flow
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">30-Day Trend</h2>
            </div>
            <p className="text-sm text-slate-400">
              Real-time trajectory with high-contrast analytics for quick decisions.
            </p>
          </div>

          <div className="h-[320px] rounded-[1.75rem] bg-slate-950/50 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="cashFlowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15, 23, 42, 0.95)",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: 16,
                    color: "#f8fafc",
                  }}
                  labelStyle={{ color: "#cbd5e1" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#34d399"
                  strokeWidth={3}
                  fill="url(#cashFlowGradient)"
                  fillOpacity={1}
                  activeDot={{ r: 5, fill: "#6ee7b7" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          custom={4}
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Budget Categories
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">Smart Categorization</h2>
              </div>
              <span className="rounded-full bg-slate-700/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                6 active
              </span>
            </div>
            <div className="space-y-4">
              {categoryData.map((category) => (
                <div key={category.label} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${category.color} p-3 text-white`}>
                        <span className="sr-only">{category.label} icon</span>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{category.label}</p>
                        <p className="text-xs text-slate-400">Budget usage</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">{category.value}%</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                      style={{ width: `${category.value}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-3xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Latest Activity</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Transaction feed</h2>
              </div>
              <button
                type="button"
                className="rounded-full bg-slate-800/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                aria-label="View all transactions"
              >
                View All
              </button>
            </div>
            <div className="space-y-3">
              <TransactionCard
                title="Salary Deposit"
                description="Monthly income"
                amount="+ $7,500"
                status="Income"
                accent="emerald"
              />
              <TransactionCard
                title="Office Rent"
                description="Workspace lease"
                amount="- $2,160"
                status="Expense"
                accent="coral"
              />
              <TransactionCard
                title="Mobile Plan"
                description="Communication budget"
                amount="- $134"
                status="Expense"
                accent="coral"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default DashboardShell;
