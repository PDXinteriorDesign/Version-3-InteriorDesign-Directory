import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/date';

const articles = [
  {
    id: 1,
    title: 'The Future of Sustainable Interior Design',
    excerpt: 'Exploring eco-friendly materials and sustainable practices in modern interior design.',
    author: 'Sarah Anderson',
    date: '2024-03-15',
    readTime: '5 min read',
    commentCount: 12
  },
  {
    id: 2,
    title: 'Building Your Design Business: A Comprehensive Guide',
    excerpt: 'Essential tips and strategies for growing your interior design business.',
    author: 'Michael Chen',
    date: '2024-03-10',
    readTime: '8 min read',
    commentCount: 24
  }
];

export const ArticlesList: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-serif">Latest Articles</h2>
        <Link to="/resources/articles" className="text-sage-600 hover:text-sage-700">
          View all articles →
        </Link>
      </div>
      
      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-xl p-6 shadow-sm">
            <Link to={`/resources/articles/${article.id}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-sage-600">
                {article.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>{article.author}</span>
              <span>•</span>
              <span>{formatDate(article.date)}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.commentCount} comments</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};