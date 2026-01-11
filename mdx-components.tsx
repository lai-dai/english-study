import type { MDXComponents } from "mdx/types"
import { H1 } from "./components/ui/typography/h1"
import { H2 } from "./components/ui/typography/h2"
import { H3 } from "./components/ui/typography/h3"
import { H4 } from "./components/ui/typography/h4"
import { P } from "./components/ui/typography/p"
import { Ul } from "./components/ui/typography/ul"
import { Blockquote } from "./components/ui/typography/blockquote"
import { InlineCode } from "./components/ui/typography/inline-code"
import { Small } from "./components/ui/typography/small"

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: Ul,
  blockquote: Blockquote,
  code: InlineCode,
  small: Small,
}

export function useMDXComponents(): MDXComponents {
  return components
}
