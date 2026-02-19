export type Category = "wedding" | "kids" | "party" | "service"

export type CatalogItem = {
  id: string
  title: string
  description: string
  photoUrl: string
  photos?: string[]
  price: string
  category: Category
  status?: "favorite"
}

export const FEATURED_ITEMS: CatalogItem[] = [
  {
    id: "it-001",
    title: "Zamek dmuchany XL",
    description:
      "Duży, stabilny zamek dmuchany idealny na urodziny i pikniki. Szybki montaż, bezpieczne wejście i dużo frajdy dla dzieci w każdym wieku.",
    photoUrl: "/images/bouncyCastle.png",
    photos: ["/images/bouncyCastle.png", "/images/photomat.png", "/images/dekoracja1.png"],
    price: "od 499 zł / dzień",
    category: "kids",
    status: "favorite",
  },
  {
    id: "it-002",
    title: "Fotobudka 360°",
    description:
      "Efekt WOW na imprezie — dynamiczne ujęcia, światła LED i natychmiastowe udostępnianie. Idealne na wesela, 18-tki i firmówki.",
    photoUrl: "/images/photomat.png",
    photos: ["/images/photomat.png", "/images/bouncyCastle.png", "/images/love.png"],
    price: "od 899 zł / event",
    category: "party",
    status: "favorite",
  },
  {
    id: "it-003",
    title: "Girlanda",
    description:
      "Klasyka wesel i sesji zdjęciowych. Eleganckie tlo  buduje klimat, świetnie wygląda na parkiecie i przy ściance.",
    photoUrl:
      "/images/dekoracja1.png",
    price: "od 349 zł / dzień",
    category: "wedding",
  },
  {
    id: "it-004",
    title: "Napis LOVE (podświetlany)",
    description:
      "Klasyka wesel i sesji zdjęciowych. Elegancki podświetlany napis buduje klimat, świetnie wygląda na parkiecie i przy ściance.",
    photoUrl:
      "/images/love.png",
    price: "od 349 zł / dzień",
    category: "wedding",
  },
  {
    id: "it-005",
    title: "Animator dla dzieci",
    description:
      "Zabawy, konkursy, mini-disco, bańki i gry ruchowe. Dopasujemy program do wieku i charakteru wydarzenia, żeby rodzice też mieli chwilę dla siebie.",
    photoUrl:
      "/images/clown.png",
    price: "od 250 zł / godz.",
    category: "service",
    status: "favorite",
  },
  {
    id: "it-006",
    title: "Nagłośnienie + mikrofony",
    description:
      "Czysty dźwięk dla prowadzącego, DJ-a lub prelegenta. Zestaw dopasowany do sali i liczby gości, z szybkim montażem na miejscu.",
    photoUrl:
      "/images/soundSystem.png",
    price: "od 399 zł / dzień",
    category: "service",
  }
]

export const ALL_ITEMS: CatalogItem[] = FEATURED_ITEMS

export type Testimonial = {
  id: string
  author: string
  rating: 5 | 4
  text: string
  source: "Google"
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rv-001",
    author: "Karolina M.",
    rating: 5,
    text:
      "Pełna profeska — szybki kontakt, punktualnie, a dzieciaki zachwycone animacjami. Sprzęt czysty i zadbany. Polecam!",
    source: "Google",
  },
  {
    id: "rv-002",
    author: "Michał K.",
    rating: 5,
    text:
      "Fotobudka 360 zrobiła robotę na imprezie firmowej. Super obsługa, fajny vibe i wszystko dopięte na czas.",
    source: "Google",
  },
  {
    id: "rv-003",
    author: "Natalia S.",
    rating: 5,
    text:
      "Napis LOVE i dym ciężki na pierwszy taniec — efekt jak z filmu. Ekipa bardzo pomocna i ogarnięta.",
    source: "Google",
  },
  {
    id: "rv-004",
    author: "Paweł T.",
    rating: 4,
    text:
      "Świetna komunikacja i elastyczne podejście. Montaż szybki, wszystko działało bez zarzutu. Na pewno wrócimy.",
    source: "Google",
  },
  {
    id: "rv-005",
    author: "Anna i Bartek",
    rating: 5,
    text:
      "Najlepsza decyzja na wesele — zero stresu, pełna obsługa i piękny efekt dekoracji. Goście byli pod wrażeniem.",
    source: "Google",
  },
]

export type GalleryImage = {
  id: string
  category: Category
  caption: string
  src: string
}

export const GALLERY: GalleryImage[] = [
  {
    id: "g-w-001",
    category: "wedding",
    caption: "Pierwszy taniec — dym ciężki + światła",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-w-002",
    category: "wedding",
    caption: "Strefa foto z napisem LOVE",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-k-001",
    category: "kids",
    caption: "Urodziny z animacjami i konkursami",
    src: "https://images.unsplash.com/photo-1520975911120-9f2d5b8f1e6a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-k-002",
    category: "kids",
    caption: "Zamek dmuchany w plenerze",
    src: "https://images.unsplash.com/photo-1520975958221-5f1f8156f7d4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-p-001",
    category: "party",
    caption: "Fotobudka 360 na 18-tce",
    src: "https://images.unsplash.com/photo-1520975682131-3e8a0b7c93fa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-p-002",
    category: "party",
    caption: "Balonowa ścianka pod motyw imprezy",
    src: "https://images.unsplash.com/photo-1520975609852-1b8c1b8e6f65?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-s-001",
    category: "service",
    caption: "Nagłośnienie + mikrofony (event firmowy)",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "g-s-002",
    category: "service",
    caption: "Obsługa eventu — setup przed startem",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
]

export const HERO_SLIDES: { id: string; src: string; alt: string }[] = [
  {
    id: "hs-001",
    src: '/images/dekoracja1.png',
    alt: "Event setup",
  },
  {
    id: "hs-002",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
    alt: "Wedding decoration",
  },
  {
    id: "hs-003",
    src: "https://images.unsplash.com/photo-1520975958221-5f1f8156f7d4?auto=format&fit=crop&w=1600&q=80",
    alt: "Kids inflatable fun",
  },
  {
    id: "hs-004",
    src: "https://images.unsplash.com/photo-1520975682131-3e8a0b7c93fa?auto=format&fit=crop&w=1600&q=80",
    alt: "Party photo moment",
  },
]

export function filterItems(
  items: CatalogItem[],
  search: string,
  category?: Category
): CatalogItem[] {
  const q = search.trim().toLowerCase()

  return items.filter((item) => {
    const matchesCategory = category ? item.category === category : true

    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)

    return matchesCategory && matchesSearch
  })
}

export const CATEGORY_LABEL: Record<Category, string> = {
  wedding: "Wesele",
  kids: "Dzieci",
  party: "Impreza",
  service: "Usługi",
}

export type GalleryCategoryCard = {
  id: string
  category: Category
  title: string
  coverImage: string
}

export const GALLERY_CATEGORY_CARDS: GalleryCategoryCard[] = [
  {
    id: "gc-1",
    category: "wedding",
    title: "Wesele",
    coverImage:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "gc-2",
    category: "kids",
    title: "Dla dzieci",
    coverImage:
      "https://images.unsplash.com/photo-1520975958221-5f1f8156f7d4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "gc-3",
    category: "party",
    title: "Imprezy",
    coverImage:
      "https://images.unsplash.com/photo-1520975682131-3e8a0b7c93fa?auto=format&fit=crop&w=1600&q=80",
  },
]
