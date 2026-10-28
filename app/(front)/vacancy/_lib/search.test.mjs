import assert from 'node:assert/strict'
import test from 'node:test'
import { filterVacancies } from './search.ts'

const vacancies = [
  {
    position: 'Software Engineer',
    description: 'Build reliable applications',
    qualifications: ['Computer Science degree', 'TypeScript experience'],
    category: 'Engineering',
    duration: 'Full-time',
    status: 'open',
  },
  {
    position: 'Accountant',
    description: 'Manage company finances',
    skills: ['Excel'],
    category: 'Finance',
    duration: 'Contract',
    status: 'closed',
  },
  { position: 'Office Assistant' },
]

test('matches case-insensitively and ignores surrounding/repeated whitespace', () => {
  assert.deepEqual(filterVacancies(vacancies, '  SOFTWARE   engineer  '), [vacancies[0]])
})

test('searches descriptions, qualifications, skills, categories, duration and status', () => {
  for (const term of ['reliable', 'TypeScript', 'Engineering', 'Full-time', 'open']) {
    assert.deepEqual(filterVacancies(vacancies, term), [vacancies[0]])
  }
  assert.deepEqual(filterVacancies(vacancies, 'Excel'), [vacancies[1]])
})

test('matches all keywords across fields regardless of their order', () => {
  assert.deepEqual(filterVacancies(vacancies, 'typescript software'), [vacancies[0]])
  assert.deepEqual(filterVacancies(vacancies, 'software excel'), [])
})

test('combines keyword search with the selected category', () => {
  assert.deepEqual(filterVacancies(vacancies, 'software', 'Finance'), [])
  assert.deepEqual(filterVacancies(vacancies, 'software', 'Engineering'), [vacancies[0]])
})

test('empty searches restore results while respecting category filters', () => {
  assert.deepEqual(filterVacancies(vacancies, '   '), vacancies)
  assert.deepEqual(filterVacancies(vacancies, '', 'Finance'), [vacancies[1]])
})

test('handles missing optional fields and unmatched searches', () => {
  assert.deepEqual(filterVacancies(vacancies, 'office'), [vacancies[2]])
  assert.deepEqual(filterVacancies(vacancies, 'nonexistent'), [])
  assert.deepEqual(filterVacancies([], 'software'), [])
})
