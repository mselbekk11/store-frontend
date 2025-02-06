"use client"

import { TextScramble } from "./text-scramble"
import { useEffect, useState } from "react"
import { TextScrambleGold } from "./text-scramble-gold"

export function TextScrambleBasicOne({ text }: { text: string }) {
  const [trigger, setTrigger] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false)
      // Small delay to ensure the animation can restart
      setTimeout(() => setTrigger(true), 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <TextScrambleGold
      trigger={trigger}
      className="font-mono uppercase text-ui-fg-subtle text-xl"
    >
      {text}
    </TextScrambleGold>
  )
}
