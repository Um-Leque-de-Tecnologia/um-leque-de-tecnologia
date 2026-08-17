"use client";

import { useEffect } from "react";

/**
 * Observa tudo que tem [data-reveal] e marca com .is-in quando entra na tela.
 * Uma vez só — nada aqui volta a animar depois que já apareceu.
 *
 * Também roda o count-up dos números do hero. Os valores finais já vêm no HTML
 * (o componente renderiza o texto real); a animação só sobrescreve depois que
 * o JS assume. Assim leitor de tela e busca sempre veem o número certo, mesmo
 * se o script não carregar.
 */
export default function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const countUp = (el: HTMLElement) => {
      const raw = el.dataset.count;
      if (!raw || reduced) return;
      const target = Number(raw);
      if (!Number.isFinite(target)) return;

      const prefix = el.dataset.countPrefix ?? "";
      const start = performance.now();
      const dur = 1200;

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = prefix + Math.round(target * eased).toString();
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(el);
        }
      },
      // threshold 0 (e não 0.15): um card mais alto que a janela nunca chega a
      // ter 15% visível de uma vez, e ficaria escondido pra sempre
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
