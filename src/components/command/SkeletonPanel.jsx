export default function SkeletonPanel() {
  return (
    <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 animate-pulse">
      <div className="h-5 w-40 bg-white/[0.1] rounded mb-6" />
      <div className="space-y-4">
        <div className="h-4 bg-white/[0.1] rounded" />
        <div className="h-4 bg-white/[0.1] rounded w-4/5" />
        <div className="h-40 bg-white/[0.1] rounded-2xl" />
      </div>
    </div>
  )
}