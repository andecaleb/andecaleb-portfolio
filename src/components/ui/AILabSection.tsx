// src/components/ui/AILabSection.tsx
"use client";

const nodes = [
  { label: "User Query", x: 50, y: 10, color: "#00e5ff" },
  { label: "Embeddings", x: 20, y: 40, color: "#00e5ff" },
  { label: "Vector Store", x: 80, y: 40, color: "#ff2d75" },
  { label: "LLM", x: 50, y: 50, color: "#00e5ff" },
  { label: "Tools / APIs", x: 20, y: 75, color: "#ff2d75" },
  { label: "LangGraph", x: 80, y: 75, color: "#00e5ff" },
  { label: "Response", x: 50, y: 95, color: "#ff2d75" },
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
];

export default function AILabSection() {
  return (
    <section id="ai-lab" className="relative min-h-screen py-40 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-[10px] tracking-[0.5em] text-cyan-400/60 mb-6">// 05 — AI LAB</p>
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
          INTELLIGENCE<br />IN MOTION
        </h2>
        <p className="text-white/50 max-w-2xl mb-16 text-sm md:text-base leading-relaxed">
          Building LLM applications, RAG pipelines, and agentic workflows with LangChain and
          LangGraph. The work is about connecting intelligence to real business data, APIs,
          and enterprise systems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="text-[10px] tracking-[0.3em] text-cyan-400/60 mb-4">
              LANGGRAPH WORKFLOW
            </div>
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {edges.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={nodes[a].x}
                    y1={nodes[a].y}
                    x2={nodes[b].x}
                    y2={nodes[b].y}
                    stroke="rgba(0, 229, 255, 0.25)"
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-4"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                ))}
                {nodes.map((n, i) => (
                  <g key={i}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="3"
                      fill={n.color}
                      opacity="0.15"
                    />
                    <circle cx={n.x} cy={n.y} r="1.2" fill={n.color}>
                      <animate
                        attributeName="r"
                        values="1.2;1.8;1.2"
                        dur="2s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x={n.x}
                      y={n.y - 5}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="2.2"
                      fontFamily="monospace"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "LLM Applications & Prompt Engineering",
                desc: "Designing prompt architectures that produce consistent, reliable outputs across business domains.",
              },
              {
                title: "RAG (Retrieval-Augmented Generation)",
                desc: "Connecting models to business data with embeddings, vector search, and retrieval pipelines.",
              },
              {
                title: "AI Agents & Agentic Workflows",
                desc: "Decomposing tasks, selecting tools, and orchestrating multi-step reasoning with LangGraph.",
              },
              {
                title: "Model Evaluation & Integration",
                desc: "Measuring accuracy, precision, and recall — then wiring intelligence into real APIs and systems.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-xl p-5 hover:border-cyan-400/40 transition group"
              >
                <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-300 transition text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}