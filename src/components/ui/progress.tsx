import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  showLabel?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ 
  className, 
  value = 0, 
  max = 100,
  showLabel = false,
  variant = "default",
  size = "default",
  ...props 
}, ref) => {
  const percentage = Math.round((value / max) * 100);
  
  const variantStyles: Record<NonNullable<ProgressProps['variant']>, string> = {
    default: "bg-primary",
    success: "bg-status-success",
    warning: "bg-status-warning",
    error: "bg-destructive",
    secondary: "bg-secondary"
  };

  const sizeStyles: Record<NonNullable<ProgressProps['size']>, string> = {
    sm: "h-1",
    default: "h-2",
    lg: "h-3"
  };

  return (
    <div className="w-full">
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-muted",
          sizeStyles[size],
          className
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
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
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{value}/{max}</span>
          <span>{percentage}%</span>
        </div>
      )}
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }