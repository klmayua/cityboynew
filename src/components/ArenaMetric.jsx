export const ArenaMetric = ({ 
  value, 
  label, 
  trend = null,
  trendPositive = true,
  className = '' 
}) => {
  return (
    <div className={className}>
      <div className="font-data text-4xl font-bold text-[#003153]">{value}</div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm text-[#5B6B7A]">{label}</span>
        {trend && (
          <span className={`text-xs font-semibold ${trendPositive ? 'text-[#0E9F6E]' : 'text-red-500'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  )
}