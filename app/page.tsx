export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calibrate Coding Interview<br />
          <span className="text-[#58a6ff]">Question Difficulty</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste any coding problem and instantly get AI-calibrated difficulty ratings, realistic time estimates, and candidate success rate predictions — broken down by experience level.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $17/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-24">
        {[
          { icon: "📊", title: "Difficulty Rating", desc: "Instant 1–10 difficulty score with detailed reasoning" },
          { icon: "⏱️", title: "Time Estimates", desc: "Realistic solve-time ranges per candidate level" },
          { icon: "🎯", title: "Success Rates", desc: "Predicted pass rates for junior, mid, and senior devs" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited question analyses",
              "Difficulty ratings with AI reasoning",
              "Time estimates by experience level",
              "Success rate predictions",
              "Export reports as PDF",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Calibrating Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of coding questions can I analyze?",
              a: "Any text-based coding problem — algorithms, data structures, system design prompts, SQL queries, or take-home assignments. Just paste the problem text."
            },
            {
              q: "How accurate are the difficulty ratings?",
              a: "Our AI is trained on thousands of real interview questions and calibrated against actual candidate performance data, giving you reliable, data-backed estimates."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Interview Calibrator. All rights reserved.
      </footer>
    </main>
  )
}
