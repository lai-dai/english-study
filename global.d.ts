
interface ReactDevToolsHook {
  renderers?: Map<unknown, unknown>
  [key: string]: unknown
}

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: ReactDevToolsHook
  }
}

export {}
