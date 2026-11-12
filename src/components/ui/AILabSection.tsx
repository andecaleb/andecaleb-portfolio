// src/components/ui/AILabSection.tsx
"use client";

export default function AILabSection() {
  return (
    <section id="ai-lab" className="section">
      <div className="mb-16 md:mb-20">
        <div className="eyebrow mb-6">05 — AI LAB</div>
        <h2 className="display text-5xl md:text-7xl font-black max-w-3xl">
          Intelligence
          <br />
          <span className="display-accent">in motion.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Diagram */}
        <div className="card-accent p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] tracking-[0.3em] text-[#00d9ff]/70">LANGGRAPH WORKFLOW</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] animate-pulse" />
              <span className="text-[10px] text-white/40">LIVE</span>
            </div>
          </div>

          <svg viewBox="0 0 100 100" className="w-full aspect-square">
            <defs>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff2d75" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Edges */}
            {[
              [50, 10, 20, 40],
              [50, 10, 80, 40],
              [20, 40, 50, 50],
              [80, 40, 50, 50],
              [50, 50, 20, 75],
              [50, 50, 80, 75],
              [20, 75, 50, 90],
              [80, 75, 50, 90],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#edge)"
                strokeWidth="0.3"
                strokeDasharray="1.5 1.5"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-6" dur="2s" repeatCount="indefinite" />
              </line>
            ))}

            {/* Nodes */}
            {[
              { x: 50, y: 10, label: "Query", c: "#00d9ff" },
              { x: 20, y: 40, label: "Embed", c: "#00d9ff" },
              { x: 80, y: 40, label: "Vectors", c: "#ff2d75" },
              { x: 50, y: 50, label: "LLM", c: "#ffffff" },
              { x: 20, y: 75, label: "Tools", c: "#ff2d75" },
              { x: 80, y: 75, label: "Graph", c: "#00d9ff" },
              { x: 50, y: 90, label: "Output", c: "#ff2d75" },
            ].map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="4" fill={n.c} opacity="0.08" />
                <circle cx={n.x} cy={n.y} r="1.4" fill={n.c}>
                  <animate attributeName="r" values="1.4;2;1.4" dur="2.5s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
                </circle>
                <text x={n.x} y={n.y - 6} textAnchor="middle" fill="rgba(232,234,240,0.7)" fontSize="2.6" fontWeight="500">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Feature list */}
        <div className="space-y-3">
          {[
            {
              title: "LLM Applications & Prompt Engineering",
              desc: "Prompt architectures that produce consistent, reliable outputs across business domains.",
            },
            {
              title: "RAG Pipelines",
              desc: "Connecting models to business data with embeddings, vector search, and retrieval.",
            },
            {
              title: "AI Agents & Agentic Workflows",
              desc: "Multi-step reasoning with tool selection, orchestration, and LangGraph state machines.",
            },
            {
              title: "Evaluation & Integration",
              desc: "Measuring accuracy, precision, recall — then wiring intelligence into real APIs.",
            },
          ].map((item, i) => (
            <div key={i} className="card p-5 group">
              <div className="flex items-start gap-4">
                <span className="text-[10px] tracking-[0.2em] text-[#00d9ff]/70 mt-1 font-mono">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#00d9ff] transition text-sm">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}