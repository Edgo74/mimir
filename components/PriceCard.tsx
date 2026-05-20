import { Button } from "./Button";

export function PriceCard({
  tag,
  name,
  /** Optional — when omitted the price row is hidden */
  amount,
  unit,
  description,
  features,
  ctaHref,
  ctaLabel = "En savoir plus",
  featured = false,
  featuredBadge,
}: {
  tag: string;
  name: string;
  amount?: string;
  unit?: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaLabel?: string;
  featured?: boolean;
  featuredBadge?: string;
}) {
  return (
    <article className={`price ${featured ? "featured" : ""}`}>
      {featured && featuredBadge && (
        <span className="price-feat-badge">{featuredBadge}</span>
      )}
      <span className="price-tag">
        <span className="arc" />
        {tag}
      </span>
      <div className="price-name">{name}</div>
      {amount && (
        <div className="price-amount">
          <span className="amt">{amount}</span>
          {unit && <span className="unit">{unit}</span>}
        </div>
      )}
      <p className="price-desc">{description}</p>
      <ul className="price-features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="price-cta">
        <Button
          href={ctaHref}
          variant={featured ? "cyan" : "ghost"}
          block
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
