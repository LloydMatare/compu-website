'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const QUICK_REPLIES = [
  'What services do you offer?',
  'How do I request a quote?',
  'Do you offer 24/7 support?',
]

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: "Hi! I'm the Compulink assistant. Ask me about our cloud, security, hardware or software services.",
    },
  ])
  const [input, setInput] = useState('')

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      {
        role: 'bot',
        text: "Thanks — our team will get back to you shortly. You can also reach us at support@compulink.co.zw.",
      },
    ])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="glass w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-2xl border shadow-2xl"
          >
            <div className="flex items-center justify-between border-b bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-primary" />
                <span className="text-sm font-semibold">Compulink Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4 text-sm">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed',
                    message.role === 'bot'
                      ? 'bg-muted text-foreground'
                      : 'ml-auto bg-primary text-primary-foreground'
                  )}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t px-3 py-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => send(reply)}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t px-3 py-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your message…"
                className="h-9 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit" size="icon" className="size-9">
                <Send className="size-4" />
              </Button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Button
        size="icon"
        onClick={() => setOpen((value) => !value)}
        className="size-12 rounded-full shadow-lg shadow-primary/25"
        aria-label={open ? 'Close assistant' : 'Open assistant'}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </Button>
    </div>
  )
}
