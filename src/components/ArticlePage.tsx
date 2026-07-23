import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogArticle, { ArticleSection } from './BlogArticle';

interface ArticlePageProps {
  /** Slug key into the `articles` i18n namespace. */
  slug: string;
  /** Canonical URL path for the article. */
  canonical: string;
  /** ISO publish date (used for structured data). */
  date: string;
  /** Category id into the `blog.categories` namespace. */
  categoryId: 'samarbejde' | 'telesalg' | 'webudvikling' | 'ai';
}

/**
 * Generic, fully translated blog-article renderer. All textual content is read
 * from the `articles.<slug>` i18n namespace so the article follows the selected
 * language; only the language-independent metadata (canonical, date, category)
 * is passed per article.
 */
const ArticlePage: React.FC<ArticlePageProps> = ({ slug, canonical, date, categoryId }) => {
  const { t, i18n } = useTranslation();
  const base = `articles.${slug}`;

  const sections = t(`${base}.sections`, { returnObjects: true }) as ArticleSection[];
  const faqs = i18n.exists(`${base}.faqs`)
    ? (t(`${base}.faqs`, { returnObjects: true }) as { question: string; answer: string }[])
    : undefined;

  return (
    <BlogArticle
      seoTitle={t(`${base}.seoTitle`)}
      seoDescription={t(`${base}.seoDescription`)}
      canonical={canonical}
      keywords={t(`${base}.keywords`)}
      category={t(`blog.categories.${categoryId}`)}
      title={t(`${base}.title`)}
      date={date}
      displayDate={t(`${base}.displayDate`)}
      readTime={t(`${base}.readTime`)}
      intro={t(`${base}.intro`)}
      sections={sections}
      faqs={faqs}
      ctaTitle={i18n.exists(`${base}.ctaTitle`) ? t(`${base}.ctaTitle`) : undefined}
      ctaSubtitle={i18n.exists(`${base}.ctaSubtitle`) ? t(`${base}.ctaSubtitle`) : undefined}
    />
  );
};

export default ArticlePage;
