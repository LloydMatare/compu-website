interface SearchableVacancy {
  position: string
  description?: string
  qualifications?: string[]
  skills?: string[]
  category?: string
  duration?: string
  status?: string
}

export function filterVacancies<T extends SearchableVacancy>(
  vacancies: T[],
  searchTerm: string,
  selectedCategory = 'All',
): T[] {
  const terms = searchTerm.trim().toLowerCase().split(/\s+/).filter(Boolean)

  return vacancies.filter((vacancy) => {
    if (selectedCategory !== 'All' && vacancy.category !== selectedCategory) return false

    const searchableText = [
      vacancy.position,
      vacancy.description,
      ...(vacancy.qualifications ?? []),
      ...(vacancy.skills ?? []),
      vacancy.category,
      vacancy.duration,
      vacancy.status,
    ].filter(Boolean).join(' ').toLowerCase()

    return terms.every((term) => searchableText.includes(term))
  })
}
