"use client"

import React, { useRef, useLayoutEffect } from "react"
import { InnerLine, getPreRef, InnerPre } from "codehike/code"

function useScrollToFocus(ref) {
  const firstRender = useRef(true)
  useLayoutEffect(() => {
    if (ref.current) {
      const focusedElements = ref.current.querySelectorAll("[data-focus=true]")
      if (focusedElements.length === 0) return

      const containerRect = ref.current.getBoundingClientRect()
      let top = Infinity
      let bottom = -Infinity

      focusedElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        top = Math.min(top, rect.top - containerRect.top)
        bottom = Math.max(bottom, rect.bottom - containerRect.top)
      })

      if (bottom > containerRect.height || top < 0) {
        ref.current.scrollTo({
          top: ref.current.scrollTop + top - 10,
          behavior: firstRender.current ? "instant" : "smooth",
        })
      }
    }
    firstRender.current = false
  })
}

function PreWithFocus(props) {
  const ref = getPreRef(props)
  useScrollToFocus(ref)
  return <InnerPre merge={props} />
}

export const focus = {
  name: "focus",
  onlyIfAnnotated: true,
  PreWithRef: PreWithFocus,
  Line: (props) => (
    <InnerLine
      merge={props}
      className="opacity-50 data-[focus]:opacity-100 px-2"
    />
  ),
  AnnotatedLine: ({ annotation, ...props }) => (
    <InnerLine merge={props} data-focus={true} className="bg-blue-500/20 opacity-100 px-2" />
  ),
}
