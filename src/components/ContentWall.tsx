import { Heart, HeartPulse, Rocket, Stethoscope, Trophy, Users, Sparkles } from 'lucide-react'
import { Section } from './layout/Section'
import { CONTENT_WALL_POSTS, INSTAGRAM_HANDLE, type WallPost } from '../config'

const POST_ICONS: Record<string, typeof HeartPulse> = {
  'heart-pulse': HeartPulse,
  rocket: Rocket,
  stethoscope: Stethoscope,
  trophy: Trophy,
  users: Users,
  sparkles: Sparkles,
}

const INSTAGRAM_URL = INSTAGRAM_HANDLE
  ? `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
  : 'https://www.instagram.com/'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function PostCard({ post }: { post: WallPost }) {
  const Icon = POST_ICONS[post.icon] ?? Sparkles

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-pista/40 cursor-pointer"
    >
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${post.gradient}`}
      >
        <Icon className="h-14 w-14 text-white/90 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
        <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {post.date}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-text">
          <Heart className="h-4 w-4 fill-pista text-pista" />
          {post.likes}
        </p>
        <p className="text-sm leading-relaxed text-text/60">{post.caption}</p>
      </div>
    </a>
  )
}

export function ContentWall() {
  return (
    <Section id="content-wall" className="border-y border-white/5">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Content Wall</p>
          <h2 className="mt-3 font-display text-display-sm font-extrabold tracking-tight text-text">
            Everything fresh, in one feed
          </h2>
          <p className="mt-4 text-text/55">
            {INSTAGRAM_HANDLE
              ? `Live from @${INSTAGRAM_HANDLE} — every post lands here automatically.`
              : 'Every post we drop on Instagram lands here automatically. Follow the wall below to stay in the loop.'}
          </p>

          <div className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-pista/30 bg-pista/10 px-5 py-2.5 text-sm font-semibold text-pista transition-all duration-200 hover:-translate-y-0.5 hover:bg-pista/20 cursor-pointer"
            >
              <InstagramIcon />
              {INSTAGRAM_HANDLE ? `Follow @${INSTAGRAM_HANDLE}` : 'Follow us on Instagram'}
            </a>
          </div>
        </div>

        {INSTAGRAM_HANDLE ? (
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-1.5">
            <iframe
              title={`@${INSTAGRAM_HANDLE} Instagram feed`}
              src={`https://www.instagram.com/${INSTAGRAM_HANDLE}/embed/`}
              className="h-[520px] w-full rounded-2xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT_WALL_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
