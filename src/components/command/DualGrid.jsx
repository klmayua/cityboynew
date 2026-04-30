export default function DualGrid({ left, right, className = '' }) {
  return (
    <section className={`grid lg:grid-cols-2 gap-6 ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </section>
  )
}