import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212669717478?text=Bonjour%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20l'%C3%A9cole."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  )
}
