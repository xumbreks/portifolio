import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { Button } from "./ui/button"

type Slide = {
  src: string
  alt: string
  caption?: string
}

type ProjectCarouselProps = {
  slides: Slide[]
}

export function ProjectCarousel({ slides }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  })

  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  if (!slides?.length) return null

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={`${slide.src}-${index}`} className="min-w-0 shrink-0 grow-0 basis-full p-2">
              <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
                <div className="aspect-[9/16] sm:aspect-[16/10] bg-black/40">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {slide.caption ? (
                  <div className="px-3 py-2 border-t border-white/10">
                    <p className="text-xs sm:text-sm text-white/65">{slide.caption}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={[
                "h-2 rounded-full transition-all",
                i === selectedIndex ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50",
              ].join(" ")}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}