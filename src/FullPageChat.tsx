import { useEffect, useRef } from 'react'
import type { BotProps } from 'criai-chat-embed'

type Props = BotProps & {
  style?: React.CSSProperties
  className?: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'criai-fullchatbot': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { class?: string }
    }
  }
}

type FullPageChatElement = HTMLElement & Props

export const FullPageChat = ({ style, className, ...assignableProps }: Props) => {
  const ref = useRef<FullPageChatElement | null>(null)

  useEffect(() => {
    ;(async () => {
      await import('criai-chat-embed/dist/web')
    })()
  }, [])

  useEffect(() => {
    if (!ref.current) return
    Object.assign(ref.current, assignableProps)
  }, [assignableProps])

  return <criai-fullchatbot ref={ref} style={style} class={className} />
}
