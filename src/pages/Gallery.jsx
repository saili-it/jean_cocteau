import { useState } from 'react'
import { X } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const tabs = ['Tout', 'Campus', 'Classes', 'Activités', 'Événements']

const images = [
  { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80', cat: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80', cat: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=80', cat: 'Activités' },
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80', cat: 'Événements' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80', cat: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=900&q=80', cat: 'Activités' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80', cat: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80', cat: 'Événements' },
  { src: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=900&q=80', cat: 'Activités' },
  { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80', cat: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80', cat: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80', cat: 'Événements' },
]

export default function Gallery() {
  const [tab, setTab] = useState('Tout')
  const [lightbox, setLightbox] = useState(null)
  const filtered = tab === 'Tout' ? images : images.filter((i) => i.cat === tab)

  return (
    <>
      <PageHeader
        title="Galerie"
        subtitle="Plongez dans l'univers Jean Cocteau à travers nos photos."
        breadcrumbs={[{ label: 'Galerie' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  tab === t
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img.src)}
                className="aspect-square overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition"
              >
                <img src={img.src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4">
                  <span className="text-white font-display text-xs uppercase tracking-widest font-semibold">{img.cat}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center p-4 cursor-pointer backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white p-2 hover:text-accent-300">
            <X size={32} />
          </button>
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-2xl shadow-2xl" />
        </div>
      )}
    </>
  )
}
