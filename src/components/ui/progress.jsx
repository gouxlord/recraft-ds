import * as React from "react"
import { cn } from "../../lib/utils"

const Progress = React.forwardRef(({ 
  className, 
  value = 0, 
  max = 100,
  showLabel = false,
  variant = "default",
  size = "default",
  ...props 
}, ref) => {
  const percentage = Math.round((value / max) * 100);
  
  const variantStyles = {
    default: "bg-primary-500",
    success: "bg-success-500",
    warning: "bg-warning-500",
    error: "bg-error-500",
    secondary: "bg-secondary-500"
  };

  const sizeStyles = {
    sm: "h-1",
    default: "h-2",
    lg: "h-3"
  };

  return (
    <div className="w-full">
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-gray-200",
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full transition-all duration-300 ease-in-out rounded-full",
            variantStyles[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-2 flex justify-between text-xs text-gray-600">
          <span>{value}/{max}</span>
          <span>{percentage}%</span>
        </div>
      )}
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }