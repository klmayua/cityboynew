export default function CommandPanel({ children, className = '', title }) {
  return (
    <section
      className={`
        rounded-3xl
        border border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-xl
        hover:border-gold/20
        transition-all duration-300
        ${className}
      `}
    >
      {title && (
        <div className="px-6 py-4 border-b border-white/[0.06]">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </section>
  )
}