import PulseCard from './PulseCard'

export default function MetricStrip({ items = [] }) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map((item) => (
        <PulseCard key={item.title} {...item} />
      ))}
    </section>
  )
}