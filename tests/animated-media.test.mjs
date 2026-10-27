import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import test from 'node:test'
import { animatedMedia } from '../lib/animated-media.ts'

const sourceGifs = {
  cybersecurity: 'cyber.gif',
  networking: 'network.gif',
  company: 'compu.gif',
  ai: 'ef.gif',
  innovation: 'ab.gif',
  news: 'breaking news.gif',
}

for (const [topic, filename] of Object.entries(animatedMedia)) {
  test(`${topic} has a compact video and a valid WebP poster`, async () => {
    const videoUrl = new URL(`../public/media/${filename}.mp4`, import.meta.url)
    const posterUrl = new URL(`../public/media/${filename}-poster.webp`, import.meta.url)
    const sourceUrl = new URL(`../public/images/${sourceGifs[topic]}`, import.meta.url)
    const [video, poster, source] = await Promise.all([
      readFile(videoUrl),
      readFile(posterUrl),
      stat(sourceUrl),
    ])

    assert.equal(video.toString('ascii', 4, 8), 'ftyp')
    assert.equal(poster.toString('ascii', 0, 4), 'RIFF')
    assert.equal(poster.toString('ascii', 8, 12), 'WEBP')
    assert.ok(video.length < source.size / 5, 'video must be at least 80% smaller than GIF')
    assert.ok(poster.length < 150_000, 'poster should stay small')
  })
}
