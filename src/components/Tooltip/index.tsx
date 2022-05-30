import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}) {
  return (
    <TooltipPrimitive.Root
      delayDuration={0}
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content side="top" align="center" {...props}>
        {content}
        <TooltipPrimitive.Arrow offset={5} width={11} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  )
}
