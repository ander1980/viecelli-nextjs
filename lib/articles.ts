import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article } from './types';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export async function getArticles(): Promise<Article[]> {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(articlesDirectory);
  const articles: Article[] = [];

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      articles.push({
        id: data.id || file.replace('.md', ''),
        title: data.title,
        slug: file.replace('.md', ''),
        excerpt: data.excerpt,
        area: data.area,
        difficulty: data.difficulty,
        date: data.date,
        views: data.views || 0,
        content,
      });
    }
  });

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id: data.id || slug,
    title: data.title,
    slug,
    excerpt: data.excerpt,
    area: data.area,
    difficulty: data.difficulty,
    date: data.date,
    views: data.views || 0,
    content,
  };
}

export async function getArticlesByArea(area: string): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter((article) => article.area === area);
}

export async function searchArticles(query: string): Promise<Article[]> {
  const articles = await getArticles();
  const lowerQuery = query.toLowerCase();

  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.area.toLowerCase().includes(lowerQuery)
  );
}
