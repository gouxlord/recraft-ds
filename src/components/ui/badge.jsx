import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-700 hover:bg-primary-200",
        secondary: "bg-secondary-100 text-secondary-700 hover:bg-secondary-200",
        success: "bg-success-50 text-success-700 hover:bg-success-100",
        warning: "bg-warning-50 text-warning-700 hover:bg-warning-100",
        error: "bg-error-50 text-error-700 hover:bg-error-100",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }