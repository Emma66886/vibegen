"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Rocket, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0C0C1E] via-[#1E1E3F] to-[#7B2FF7] text-white font-inter">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-[#7B2FF7] to-[#00FFA3] bg-clip-text text-transparent"
        >
          vibealien
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8"
        >
          Where devs vibe, code, and launch Solana smart contracts across galaxies 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="/launchpad"
            className="px-6 py-3 bg-[#7B2FF7] hover:bg-[#9A4EFF] text-white font-semibold rounded-2xl shadow-lg flex items-center gap-2 transition-all"
          >
            Start Vibing <ArrowRight size={18} />
          </Link>
          <Link
            href="/docs"
            className="px-6 py-3 border border-[#00FFA3] text-[#00FFA3] rounded-2xl font-semibold hover:bg-[#00FFA3] hover:text-black transition-all"
          >
            Docs
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: <Code size={40} />,
            title: "Collaborative Coding",
            text: "Live code Solana programs together in real-time using our futuristic editor.",
          },
          {
            icon: <Rocket size={40} />,
            title: "Instant Deployment",
            text: "Deploy your smart contracts to Solana devnet or mainnet directly from your workspace.",
          },
          {
            icon: <Users size={40} />,
            title: "Community Vibes",
            text: "Connect with other builders, share ideas, and grow in our alien dev community.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#1E1E3F]/50 p-8 rounded-2xl shadow-xl hover:shadow-[#7B2FF7]/40 transition-all border border-[#3A3A5A]/30"
          >
            <div className="mb-4 text-[#00FFA3]">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-400">{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-[#3A3A5A]/30 text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="text-[#00FFA3] font-semibold">vibealien</span>.  
          Built for the Solana galaxy 🪐
        </p>
      </footer>
    </main>
  );
}
