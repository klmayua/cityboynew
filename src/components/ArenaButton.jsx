export const ArenaButton = ({ 
  children, 
  variant = 'primary', 
  size = 'large', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-200 cursor-pointer inline-flex items-center justify-center'
  
  const variantClasses = {
    primary: 'bg-[#003153] text-white hover:bg-[#004466] hover:shadow-lg',
    gold: 'bg-[#D4AF37] text-[#001B2E] hover:bg-[#F0D060] hover:shadow-xl shadow-[#D4AF37]/20',
    ghost: 'bg-transparent text-white border border-white/30 hover:border-[#D4AF37] hover:text-[#D4AF37]',
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}