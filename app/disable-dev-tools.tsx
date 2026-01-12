"use client"

import React from "react"

import { isFunction, isObject } from "@/lib/is"

export const DisableDevTools = () => {
  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS) {
      disableReactDevTools()
    }
  }, [])

  return null // không render gì cả
}

function disableReactDevTools() {
  if (!(typeof window !== "undefined" && window.document)) return
  // Ensure the React Developer Tools global hook exists
  const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__

  if (!isObject(hook)) return

  // Replace all global hook properties with a no-op function or a null value

  for (const prop in hook) {
    if (prop === "renderers") {
      // prevents console error when dev tools try to iterate of renderers
      hook[prop] = new Map()
      continue
    }

    hook[prop] = isFunction(hook[prop]) ? Function.prototype : null
  }
}
