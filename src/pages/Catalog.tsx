import { useState } from 'react'
import SEO from '../components/SEO'
import CatalogCard from '../components/CatalogCard'
import { ALL_ITEMS, Category, CATEGORY_LABEL, filterItems } from '../mock/funrent.data'
import './Catalog.css'

const Catalog = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined)

  const filteredItems = filterItems(ALL_ITEMS, search, selectedCategory)

  const categories: (Category | 'all')[] = ['all', 'wedding', 'kids', 'party', 'service']

  return (
    <>
      <SEO
        title="Katalog - Fun Rent"
        description="Przeglądaj naszą pełną ofertę sprzętu i usług. Wszystko, czego potrzebujesz do zorganizowania niezapomnianego wydarzenia."
        canonical="/katalog"
      />
      <div className="katalog-page">
        <section className="katalog-hero section" aria-labelledby="catalog-title">
          <div className="container">
            <h1 id="catalog-title" className="section-title">Katalog</h1>
            <p className="section-subtitle">
              Przeglądaj naszą pełną ofertę sprzętu i usług. Wszystko, czego potrzebujesz 
              do zorganizowania niezapomnianego wydarzenia.
            </p>

            <div className="katalog-filters">
              <div className="katalog-search">
                <label htmlFor="search-input" className="visually-hidden">
                  Szukaj w katalogu
                </label>
                <input
                  id="search-input"
                  type="search"
                  placeholder="Szukaj..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="katalog-search-input"
                  aria-label="Wyszukaj produkt"
                />
              </div>
              <div className="katalog-categories" role="group" aria-label="Filtruj po kategorii">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`katalog-category-btn ${
                      (cat === 'all' && !selectedCategory) || selectedCategory === cat
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => setSelectedCategory(cat === 'all' ? undefined : cat)}
                    aria-pressed={(cat === 'all' && !selectedCategory) || selectedCategory === cat}
                  >
                    {cat === 'all' ? 'Wszystkie' : CATEGORY_LABEL[cat]}
                  </button>
                ))}
              </div>
            </div>

            <div className="katalog-results">
              {filteredItems.length > 0 ? (
                <>
                  <p className="katalog-results-count" role="status" aria-live="polite">
                    Znaleziono {filteredItems.length} {filteredItems.length === 1 ? 'pozycję' : 'pozycji'}
                  </p>
                  <ul className="catalog-grid" role="list">
                    {filteredItems.map((item) => (
                      <li key={item.id} role="listitem">
                        <CatalogCard item={item} />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="katalog-empty" role="status">
                  <p>Nie znaleziono pozycji spełniających kryteria wyszukiwania.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Catalog
