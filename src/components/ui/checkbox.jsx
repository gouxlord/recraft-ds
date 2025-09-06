import * as React from "react"
import { Check } from "@phosphor-icons/react"
import { cn } from "../../lib/utils"

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      ref={ref}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded-md border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500",
        "transition-colors",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      {checked && (
        <Check 
          size={14} 
          weight="bold" 
          className="text-white mx-auto"
        />
      )}
    </button>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }