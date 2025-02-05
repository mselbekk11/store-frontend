import { FlickeringGrid } from "./FlickeringGrid"

export function FlickeringGridDemo() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={3}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.5}
        height={900}
        width={2000}
      />
    </div>
  )
}
