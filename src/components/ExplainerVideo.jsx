import { useState } from 'react'

// Shows the thumbnail first and loads the YouTube player (no-cookie domain) only on click
export default function ExplainerVideo({ id, episode, title, duration, thumbnail, page }) {
  const [play, setPlay] = useState(false)

  return (
    <figure className="not-prose my-8">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-900 ring-1 ring-gray-900/10">
        {play ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={`${title} | Entropy Explains #${episode}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="group relative block h-full w-full cursor-pointer"
            aria-label={`Play the video: ${title}`}
          >
            <img
              src={thumbnail}
              alt={`Entropy Explains, episode ${episode}: ${title}`}
              className="h-full w-full object-cover"
              width="1280"
              height="720"
              loading="lazy"
            />
            <span className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110 group-hover:bg-white">
              <svg className="h-6 w-6 translate-x-0.5 text-gray-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-gray-500">
        <a href={page} className="block font-medium text-gray-700 hover:text-gray-900">{title}</a>
        Entropy Explains #{episode} · {duration} ·{' '}
        <a href={`https://youtu.be/${id}`} className="hover:text-gray-900">Watch on YouTube</a>
      </figcaption>
    </figure>
  )
}
