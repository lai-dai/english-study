import { cn } from "@/lib/utils"
import React from "react"

export function Small({ className, ...props }: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    />
  )
}
