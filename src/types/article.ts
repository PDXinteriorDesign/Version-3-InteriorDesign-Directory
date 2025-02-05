export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  commentCount: number;
  image?: string;
  category: string;
  tags: string[];
}