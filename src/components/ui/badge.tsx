import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "badge-base focus-ring",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary hover:bg-primary/20",
        secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
        success: "bg-status-success-light text-status-success hover:bg-status-success-light/80",
        warning: "bg-status-warning-light text-status-warning hover:bg-status-warning-light/80",
        error: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        outline: "border border-border text-foreground hover:bg-muted",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component for displaying labels, tags, or status indicators
 * 
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning">Pending</Badge>
 * ```
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }