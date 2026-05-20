export function TestimonialCard({
  quote,
  who,
  what,
}: {
  quote: string;
  who: string;
  what: string;
}) {
  return (
    <article className="testi-card">
      <span className="qmark">&ldquo;</span>
      <blockquote>{quote}</blockquote>
      <div className="testi-cite">
        <span className="who">{who}</span>
        <span className="what">{what}</span>
      </div>
    </article>
  );
}
