export default function ArticleItem({ title, img, content }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{content}</p>
    </div>
  );
}
