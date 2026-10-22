import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type LinkButtonProps = {
  /** Button label. Ignored when `children` is provided. */
  name?: string
  /** Destination URL. */
  link?: string
  href?: string
  variant?: React.ComponentProps<typeof Button>['variant']
  size?: React.ComponentProps<typeof Button>['size']
  className?: string
  children?: React.ReactNode
}

function LinkButton({
  name,
  link,
  href,
  variant,
  size,
  className,
  children,
}: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <Link href={link ?? href ?? '#'}>{children ?? name}</Link>
    </Button>
  )
}

export default LinkButton
