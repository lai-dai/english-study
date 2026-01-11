import { cn } from "@/lib/utils"
import React from "react"

export function P({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <h1
      className={cn("leading-7 not-first:mt-6", className)}
      {...props}
    />
  )
}
