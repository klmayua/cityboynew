import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'No data', text = 'Nothing available yet' }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/[0.1] bg-white/[0.02] p-10 text-center">
      <Inbox className="w-8 h-8 mx-auto text-white/[0.3] mb-4" />
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-sm text-white/[0.45]">{text}</p>
    </div>
  )
}