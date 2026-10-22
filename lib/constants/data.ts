export interface Testimony {
  id: string
  description: string
  name: string
  type: string
}

export const testimonies: Testimony[] = [
  {
    id: 'testimony-1',
    description:
      'Compulink transformed our network infrastructure. Their team delivered a secure, high-availability setup ahead of schedule and supported us through every stage of the rollout.',
    name: 'Tendai Moyo',
    type: 'Head of IT, Old Mutual Zimbabwe',
  },
  {
    id: 'testimony-2',
    description:
      'The migration to their cloud platform was seamless. Downtime was practically zero and we have not had a single critical incident since handover.',
    name: 'Rudo Chari',
    type: 'Operations Director, CABS',
  },
  {
    id: 'testimony-3',
    description:
      'Their cyber security assessment uncovered risks our internal team had missed. The remediation plan was practical, clearly explained and delivered on time.',
    name: 'Brian Ncube',
    type: 'ICT Manager, Government of Zimbabwe',
  },
  {
    id: 'testimony-4',
    description:
      'We have built our entire in-house learning platform with Compulink. Their engineers are genuinely expert and they treat our business like their own.',
    name: 'Grace Mutendi',
    type: 'Programme Coordinator, University of Zimbabwe',
  },
]
