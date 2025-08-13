import Link from 'next/link';

export default function Card({ 
  title, 
  description, 
  href, 
  image, 
  date, 
  tags = [] 
}) {
  return (
    <div className="bg-bg-secondary rounded-lg overflow-hidden shadow-lg hover-scale transition-transform">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-bg-tertiary rounded-full text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        
        {date && (
          <p className="text-sm text-text-secondary mb-4">
            {new Date(date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        )}
        
        {href && (
          <Link 
            href={href} 
            className="text-accent hover:text-accent-hover font-medium inline-flex items-center gap-1 transition-colors"
          >
            Baca Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}