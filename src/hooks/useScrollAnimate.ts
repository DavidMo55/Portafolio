import { useEffect, useRef } from 'react'

/**
 * Observes all children with class "anim" inside the ref container.
 * When they enter the viewport, adds "anim-show" with a stagger delay.
 */
export function useScrollAnimate<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll<HTMLElement>('.anim')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add('anim-show')
            observer.unobserve(target)
          }
        })
      },
      { threshold }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
