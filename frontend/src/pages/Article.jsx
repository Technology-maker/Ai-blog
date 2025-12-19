// src/pages/AIArticlePage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'

const AIArticlePage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            {/* Gradient background blur */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-sky-500/10 blur-3xl" />
            </div>

            {/* Navbar */}
            <header className="border-b border-white/5 backdrop-blur sticky top-0 z-20 bg-slate-950/70">

                <Header />

            </header>

            {/* Hero section */}
            <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:py-14">
                {/* Left column: article content */}
                <section className="w-full lg:w-2/3">
                    {/* Category + meta */}
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 font-medium text-[11px] text-indigo-300 ring-1 ring-indigo-500/40">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
                            Artificial Intelligence
                        </span>
                        <span>•</span>
                        <span>Dec 19, 2025</span>
                        <span>•</span>
                        <span>8 min read</span>
                    </div>

                    {/* Title block */}
                    <header className="space-y-4">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                            Designing Human‑Centric AI: Building Systems People Actually Trust
                        </h1>
                        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                            Discover a practical framework for crafting AI experiences that
                            feel transparent, reliable, and genuinely helpful—without needing
                            a PhD in machine learning.
                        </p>

                        {/* Author */}
                        <div className="mt-4 flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-sky-400 opacity-80" />
                                <span className="relative flex h-full w-full items-center justify-center text-xs font-semibold text-slate-950">
                                    NK
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-100">
                                    Neural Kumar
                                </p>
                                <p className="text-xs text-slate-400">
                                    Product engineer • AI UX enthusiast
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Hero image / illustration */}
                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-950 shadow-xl shadow-black/40">
                        <div className="relative h-52 w-full overflow-hidden sm:h-64">
                            {/* Animated background grid */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#4f46e5_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_55%)] opacity-70" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,.2)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,.2)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-40" />

                            {/* Floating cards */}
                            <div className="absolute left-6 top-6 flex flex-col gap-3">
                                <div className="animate-[float_6s_ease-in-out_infinite] rounded-xl bg-slate-900/90 px-4 py-3 text-xs shadow-lg shadow-indigo-500/20 backdrop-blur">
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-indigo-300">
                                        Realtime signal
                                    </p>
                                    <p className="mt-1 text-slate-100">
                                        92% users prefer explainable AI feedback.
                                    </p>
                                </div>
                                <div className="animate-[float_7s_ease-in-out_infinite] rounded-xl bg-slate-900/90 px-4 py-3 text-xs shadow-lg shadow-sky-400/20 backdrop-blur">
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                                        Trust index
                                    </p>
                                    <p className="mt-1 text-slate-100">
                                        Confidence score: 0.87 • Risk: low
                                    </p>
                                </div>
                            </div>

                            {/* Glow orb */}
                            <div className="absolute right-6 bottom-6 flex flex-col items-end gap-2">
                                <div className="relative h-16 w-16">
                                    <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-2xl animate-ping" />
                                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-900/90 text-xs font-semibold text-indigo-100 ring-2 ring-indigo-400/60">
                                        <span>AI</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-300">
                                    Aligned, observable, and safe by design.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Article body */}
                    <article className="mt-10 space-y-10 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                        {/* Section 1 */}
                        <section className="group transition-all duration-500">
                            <h2 className="mb-3 text-lg font-semibold tracking-tight text-slate-50">
                                1. Start with real problems
                            </h2>
                            <p>
                                Many AI projects fail because they chase hype instead of solving
                                concrete user pain points. A better approach is to anchor every
                                feature on a specific job your user is trying to get done.
                            </p>
                            <p className="mt-3">
                                Map the user journey first, then identify where intelligence can
                                remove friction: summarising, predicting, prioritising, or
                                generating options. If AI does not clearly reduce time, effort,
                                or uncertainty, it is just noise.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="group transition-all duration-500">
                            <h2 className="mb-3 text-lg font-semibold tracking-tight text-slate-50">
                                2. Make the model legible
                            </h2>
                            <p>
                                Users rarely trust a black box. Simple design patterns like
                                confidence badges, highlighted evidence, and “why this result”
                                tooltips make AI decisions easier to inspect and challenge.
                            </p>
                            <p className="mt-3">
                                Use progressive disclosure: show a clear answer first, then let
                                curious users drill into reasoning, data sources, and
                                alternatives without overwhelming everyone else.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="group transition-all duration-500">
                            <h2 className="mb-3 text-lg font-semibold tracking-tight text-slate-50">
                                3. Design for collaboration, not automation
                            </h2>
                            <p>
                                The strongest AI products treat the model as a teammate, not a
                                replacement. Give people control to edit, override, or reject
                                suggestions quickly, and make their corrections teach the
                                system.
                            </p>
                            <p className="mt-3">
                                When the human stays in the loop, organisations gain both speed
                                and accountability. Interfaces should make it obvious who is
                                responsible for the final decision.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="group transition-all duration-500">
                            <h2 className="mb-3 text-lg font-semibold tracking-tight text-slate-50">
                                4. Ship small, learn fast
                            </h2>
                            <p>
                                Instead of betting on a massive release, ship small AI
                                capabilities behind feature flags and observe how real users
                                behave. Product analytics plus qualitative feedback will reveal
                                where the assistant genuinely helps.
                            </p>
                            <p className="mt-3">
                                Build instrumentation from day one: log prompts, edits, and
                                failure cases in a privacy‑safe way so the team can improve both
                                UX and models continuously.
                            </p>
                        </section>
                    </article>
                </section>

                {/* Right column: sidebar */}
                <aside className="w-full space-y-8 lg:w-1/3">
                    {/* Reading progress / badge */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg shadow-black/40 backdrop-blur">
                        <p className="text-xs font-medium text-slate-300">
                            Reading progress
                        </p>
                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                            <div className="h-full w-1/3 animate-[progress_18s_linear_infinite] bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300" />
                        </div>
                        <p className="mt-2 text-[11px] text-slate-400">
                            Estimated 8 minutes • You are still early in the journey.
                        </p>
                    </div>

                    {/* Key takeaways */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/40 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                            Key takeaways
                        </p>
                        <ul className="mt-3 space-y-2.5 text-xs text-slate-200">
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                <span>Anchor AI features to specific user jobs, not the model.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                <span>Expose confidence, evidence, and alternative paths.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                <span>Keep humans in control of final decisions.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                <span>Instrument everything so the product learns over time.</span>
                            </li>
                        </ul>
                    </div>

                   
                </aside>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 pt-6">
                <Footer />
            </footer>
        </div>
    );
};

export default AIArticlePage;
