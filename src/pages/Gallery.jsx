import { useState } from 'react'
import { X } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const SCHOOL_IMG = '/School pictures/School pictures'

const tabs = ['Tout', 'Campus', 'Classes', 'Activités', 'Événements']

const images = [
  { src: `${SCHOOL_IMG}/IMG_2870.jpg`, cat: 'Campus' },
  { src: `${SCHOOL_IMG}/4f7ac21ba46d3e1cd623264946728653.JPG`, cat: 'Classes' },
  { src: `${SCHOOL_IMG}/4c5739e6-941a-412f-b55f-b6af3476b11a.JPG`, cat: 'Activités' },
  { src: `${SCHOOL_IMG}/2809d8359bb7a4d95c6852c400016c2a.JPG`, cat: 'Événements' },
  { src: `${SCHOOL_IMG}/591c94bb434fd2eadbb6247f006e0d12.JPG`, cat: 'Classes' },
  { src: `${SCHOOL_IMG}/6ff70d50-c633-4305-a0bb-2eb265b15ceb.JPG`, cat: 'Activités' },
  { src: `${SCHOOL_IMG}/IMG_2339.jpg`, cat: 'Campus' },
  { src: `${SCHOOL_IMG}/97879aef9e4cc080a09850909c8cc08e.JPG`, cat: 'Événements' },
  { src: `${SCHOOL_IMG}/10430f4a-f614-4a81-a06c-84b35cc6052f.JPG`, cat: 'Activités' },
  { src: `${SCHOOL_IMG}/0cf0007c031bed1200c44af205da4e1e_kid.JPG`, cat: 'Classes' },
  { src: `${SCHOOL_IMG}/IMG_2855.jpg`, cat: 'Campus' },
  { src: `${SCHOOL_IMG}/7ddc45d0e792197d5c438ad71c14111f.JPG`, cat: 'Événements' },
  { src: `${SCHOOL_IMG}/acba1ade9df557f417091a198dbdb127.JPG`, cat: 'Activités' },
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
