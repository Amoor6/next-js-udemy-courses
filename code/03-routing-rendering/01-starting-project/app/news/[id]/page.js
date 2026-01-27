export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>News detail page</h1>
      <p>News Id : {newsId}</p>
    </>
  );
}
