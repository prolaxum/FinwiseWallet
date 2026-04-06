import React from "react";
import { motion } from "framer-motion";

const statusStyles = {
  emerald: {
    ring: "ring-2 ring-emerald-300/30",
    bg: "bg-emerald-400/15 text-emerald-300",
  },
  coral: {
    ring: "ring-2 ring-rose-300/30",
    bg: "bg-rose-400/15 text-rose-300",
  },
};

const TransactionCard = ({ title, description, amount, status, accent }) => {
  const style = statusStyles[accent] || statusStyles.emerald;

  return (
    <motion.article
      className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      role="group"
      aria-label={`${title} transaction card`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${style.bg} ${style.ring}`}>
          {status}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-3 py-2 text-slate-200 shadow-inner shadow-slate-950/10">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 text-white">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
              <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm text-slate-400">Amount</p>
            <p className="text-lg font-semibold text-white">{amount}</p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-2xl bg-slate-800/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          aria-label={`Edit ${title} transaction`}
        >
          Manage
        </button>
      </div>
    </motion.article>
  );
};

export default TransactionCard;
