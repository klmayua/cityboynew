import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, MapPin, User } from 'lucide-react'

const impactStories = [
  {
    id: 1,
    category: 'Education',
    title: '100 Schools Renovated in Rural Kano',
    summary: 'Our volunteers transformed learning environments for 15,000+ students.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    author: 'Amina Mohammed',
    location: 'Kano State',
    likes: 2847,
  },
  {
    id: 2,
    category: 'Healthcare',
    title: 'Mobile Clinic Reaches 50 Communities',
    summary: 'Free healthcare services delivered to underserved areas across Niger Delta.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    author: 'Dr. Chidi Okonkwo',
    location: 'Rivers State',
    likes: 3156,
  },
  {
    id: 3,
    category: 'Infrastructure',
    title: 'Solar Power for 200 Households',
    summary: 'Sustainable energy solutions bringing light to communities without electricity.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    author: 'Tunde Adeyemi',
    location: 'Ekiti State',
    likes: 1923,
  },
  {
    id: 4,
    category: 'Women',
    title: '1,000 Women Trained in Tech Skills',
    summary: 'Empowering the next generation of female tech leaders in Nigeria.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    author: 'Sarah Ibrahim',
    location: 'Lagos State',
    likes: 4102,
  },
  {
    id: 5,
    category: 'Youth',
    title: 'Youth Entrepreneurship Hub Opens',
    summary: 'A space for young innovators to build and scale their businesses.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    author: 'Daniel Emeka',
    location: 'Abuja',
    likes: 2876,
  },
  {
    id: 6,
    category: 'Agriculture',
    title: 'Modern Farming Techniques Training',
    summary: 'Teaching sustainable agriculture to 500+ smallholder farmers.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    author: 'Musa Abdullahi',
    location: 'Kaduna State',
    likes: 1543,
  },
]

export default function ImpactGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-prussian-dark to-prussian">
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            REAL IMPACT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Stories That Move Nigeria
          </h2>
          <p className="text-lg text-soft-ivory/70 max-w-2xl mx-auto">
            Every project tells a story of transformation. Every number represents a life changed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactStories.map((story) => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className="group card block overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-prussian/80 backdrop-blur-sm text-xs font-medium text-white">
                    {story.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-prussian-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {story.title}
              </h3>

              <p className="text-sm text-soft-ivory/70 mb-4 line-clamp-2">
                {story.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-soft-ivory/60">
                  <User className="w-4 h-4" />
                  <span>{story.author}</span>
                  <span>•</span>
                  <MapPin className="w-4 h-4" />
                  <span>{story.location}</span>
                </div>
                <div className="flex items-center gap-1 text-soft-ivory/60">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{story.likes.toLocaleString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/impact" className="btn-ghost inline-flex items-center gap-2">
            View All Stories
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}