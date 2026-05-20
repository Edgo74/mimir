import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="mimir-foot">
      <div className="mimir-foot-inner">
        <div className="mimir-foot-brand">
          <div className="top">
            <LogoMark size={19} />
            <span className="mark">MIMIR</span>
          </div>
          <p>
            L&apos;IA des cabinets d&apos;expertise comptable. Audit, plan d&apos;action,
            formation — packagés en 90 jours.
          </p>
        </div>
        <div className="mimir-foot-cols">
          <div className="mimir-foot-col">
            <h5>Produit</h5>
            <ul>
              <li><a href="/#methode">Méthode</a></li>
              <li><a href="/#tarifs">Tarifs</a></li>
              <li><a href="/diagnostic">Diagnostic gratuit</a></li>
              <li><a href="/#urgence">Marché</a></li>
            </ul>
          </div>
          <div className="mimir-foot-col">
            <h5>Marque</h5>
            <ul>
              <li><a href="/#genese">Genèse</a></li>
              <li><a href="/#voix">Témoignages</a></li>
            </ul>
          </div>
          <div className="mimir-foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@mimir.ai">contact@mimir.ai</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mimir-foot-bot">
        <span>© MIMIR · MMXXVI · Tous droits réservés</span>
        <span className="runes">ᛗᛁᛗᛁᚱ · 秘密</span>
      </div>
    </footer>
  );
}
