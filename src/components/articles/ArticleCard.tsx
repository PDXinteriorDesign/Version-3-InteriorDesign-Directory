import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MessageSquare, User } from 'lucide-react';
import { Article } from '../../types/article';
import { formatDate } from '../../utils/date';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {article.image && (
        <Link to={`/resources/articles/${article.id}`} className="block relative aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
        <Link to={`/resources/articles/${article.id}`}>
          <h2 className="text-xl font-semibold mb-3 hover:text-coral-500 transition-colors">
            {article.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{article.commentCount} comments</span>
          </div>
        </div>
      </div>
    </article>
  );
};