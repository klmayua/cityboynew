export default function ScenarioLauncher(){
  return (
    <section className="rounded-3xl border border-cyan-300/10 bg-cyan-300/[0.03] p-6 backdrop-blur-xl">
      <h3 className="text-white text-xl font-semibold mb-3">
        Scenario Launcher
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <button className="rounded-2xl bg-white/5 p-5 text-left text-white hover:bg-white/10">
          Election Push
        </button>

        <button className="rounded-2xl bg-white/5 p-5 text-left text-white hover:bg-white/10">
          Capital Raise
        </button>

        <button className="rounded-2xl bg-white/5 p-5 text-left text-white hover:bg-white/10">
          Narrative Surge
        </button>
      </div>
    </section>
  )
}