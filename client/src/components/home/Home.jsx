import ArticleItem from '../article-catalog/article-item/ArticleItem';

export default function Home() {
  return (
    <>
      <h1>Latest Articles</h1>
      
      // TODO: - render all articles one by one; - use cards to display
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </>
  );
}
