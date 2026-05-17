import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import { Article } from '@/lib/data';

interface NewsCardProps {
    article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <article className="card">
            <Link href={`/stiri/${article.id}`} style={{ display: 'block', position: 'relative', height: '200px', width: '100%' }}>
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <div className="card-content">
                <span className="card-tag">
                    {article.category}
                </span>

                <h3 className="card-title">
                    <Link href={`/stiri/${article.id}`}>
                        {article.title}
                    </Link>
                </h3>

                <p className="card-excerpt">
                    {article.excerpt}
                </p>

                <div className="card-meta">
                    <div className="flex items-center" style={{ gap: '0.25rem' }}>
                        <MapPin size={14} />
                        <span>{article.region}</span>
                    </div>
                    <div className="flex items-center" style={{ gap: '0.25rem' }}>
                        <Calendar size={14} />
                        <span>{article.date}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
