export const ArenaCard = ({ 
  children, 
  variant = 'base', 
  interactive = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl overflow-hidden transition-all duration-300'
  
  const variantClasses = {
    base: 'bg-white shadow-lg border border-gray-100',
    premium: 'bg-gradient-to-br from-[#D4AF37]/20 to-[#003153]/20 border border-[#D4AF37]/30',
  }

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${interactive ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}