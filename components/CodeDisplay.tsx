/**
 * Mono code easter egg used in the Final CTA section.
 * Designer-fixed content reproducing landing-v3.html lines 1338-1349.
 */
export function CodeDisplay() {
  return (
    <div className="code-display" aria-hidden="true">
      <span className="c-comment">// mimir.diagnostic</span>
      <br />
      <span className="c-key">cabinet</span>
      <span className="c-punct">:</span>{" "}
      <span className="c-string">&quot;votre_cabinet&quot;</span>
      <span className="c-punct">,</span>
      <br />
      <span className="c-key">duration</span>
      <span className="c-punct">:</span> <span className="c-val">120</span>
      <span className="c-punct">,</span>{" "}
      <span className="c-comment">// secondes</span>
      <br />
      <span className="c-key">questions</span>
      <span className="c-punct">:</span> <span className="c-val">8</span>
      <span className="c-punct">,</span>
      <br />
      <span className="c-key">livrable</span>
      <span className="c-punct">:</span> <span className="c-punct">[</span>
      <br />
      &nbsp;&nbsp;<span className="c-string">&quot;score_ia&quot;</span>
      <span className="c-punct">,</span>
      <br />
      &nbsp;&nbsp;<span className="c-string">&quot;plan_90j&quot;</span>
      <span className="c-punct">,</span>
      <br />
      &nbsp;&nbsp;<span className="c-string">&quot;restitution_30min&quot;</span>
      <br />
      <span className="c-punct">]</span>
      <span className="c-punct">,</span>
      <br />
      <span className="c-key">cb_required</span>
      <span className="c-punct">:</span> <span className="c-val">false</span>
    </div>
  );
}
