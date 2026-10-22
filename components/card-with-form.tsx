import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/link-button'

export interface CardWithFormProps {
  title: string
  description?: string
  link?: string
  linkLabel?: string
  children?: React.ReactNode
}

export function CardWithForm({
  title,
  description,
  link,
  linkLabel = 'Learn more',
  children,
}: CardWithFormProps) {
  return (
    <Card className="flex h-full flex-col border-border/60 bg-card/60 transition-colors hover:border-primary/40">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        ) : null}
      </CardHeader>
      {children ? <CardContent className="flex-1">{children}</CardContent> : null}
      <CardFooter className="gap-2">
        {link ? <LinkButton name={linkLabel} link={link} size="sm" /> : null}
        <Button variant="outline" size="sm">
          Contact us
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardWithForm
