(() => {
const ID = "pv-vueling-nl";
if (document.getElementById(ID)) return;

const LINK =
"https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela";

const style = document.createElement("style");
style.textContent = `
    #${ID} {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 380px;
    max-width: calc(100vw - 32px);
    background: #fff;
    color: #111;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 14px;
    box-shadow: 0 16px 48px rgba(0,0,0,.22);
    overflow: hidden;
    z-index: 2147483647;
    transform: translateX(120%);
    opacity: 0;
    transition: transform 480ms cubic-bezier(.2,.9,.2,1), opacity 220ms ease;
    font-family: VuelingPilcrow, Arial, sans-serif;
    }
    #${ID}.pv-show {
    transform: translateX(0);
    opacity: 1;
    }
    #${ID} .pv-head {
    background: #FFCC00;
    color: #000;
    padding: 14px 16px 12px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    justify-content: space-between;
    }
    #${ID} .pv-title {
    margin: 0;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: .2px;
    font-family: inherit;
    padding-top: 8px;
    }
    #${ID} .pv-close {
    appearance: none;
    border: 0;
    background: transparent;
    color: #000;
    cursor: pointer;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    font-size: 18px;
    line-height: 1;
    font-family: inherit;
    }
    #${ID} .pv-close:hover { background: rgba(0,0,0,.08); }
    #${ID} .pv-body { padding: 14px 16px 16px; }
    #${ID} .pv-desc {
    margin: 0 0 12px 0;
    font-size: 13px;
    line-height: 1.35;
    color: rgba(0,0,0,.75);
    font-family: inherit;
    }
    #${ID} .pv-row {
    display: flex;
    gap: 10px;
    align-items: stretch;
    flex-wrap: wrap;
    }
    #${ID} .pv-input {
    flex: 1 1 200px;
    min-width: 170px;
    height: 42px;
    padding: 0 12px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,.18);
    outline: none;
    font-size: 14px;
    font-family: VuelingPilcrow, Arial, sans-serif;
    }
    #${ID} .pv-input:focus {
    border-color: #000;
    box-shadow: 0 0 0 3px rgba(255,204,0,.45);
    }
    #${ID} .pv-cta {
    flex: 0 0 auto;
    height: 42px;
    padding: 0 14px;
    border-radius: 12px;
    background: #000;
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    letter-spacing: .2px;
    white-space: nowrap;
    font-family: VuelingPilcrow, Arial, sans-serif;
    }
    #${ID} .pv-cta:hover { filter: brightness(1.3); }
    #${ID} .pv-foot {
    margin-top: 10px;
    font-size: 11px;
    color: rgba(0,0,0,.55);
    font-family: inherit;
    }
    @media (prefers-reduced-motion: reduce) {
    #${ID} { transition: none; transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

const box = document.createElement("div");
box.id = ID;
box.setAttribute("role", "dialog");
box.setAttribute("aria-modal", "false");
box.setAttribute("aria-label", "Suscripción a la newsletter");

box.innerHTML = `
<div class="pv-head">
    <h3 class="pv-title">¿Quieres ofertas y novedades?</h3>
    <button class="pv-close" type="button" aria-label="Cerrar">✕</button>
</div>
<div class="pv-body">
    <p class="pv-desc">
    Apúntate a la newsletter y recibe promociones, inspiración de destinos y avisos útiles para tu próximo viaje.
    </p>
    <div class="pv-row">
    <input class="pv-input" type="email" inputmode="email" autocomplete="email"
            placeholder="Introduce tu email" aria-label="Email" />
    <a class="pv-cta" href="${LINK}" target="_blank" rel="noopener noreferrer">
        Quiero apuntarme
    </a>
    </div>
    <div class="pv-foot">Te llevaremos a la página oficial para completar la suscripción.</div>
</div>
`;

  document.body.appendChild(box);

  const closeBtn = box.querySelector(".pv-close");
  const emailInput = box.querySelector(".pv-input");

  const close = () => {
    box.classList.remove("pv-show");
    setTimeout(() => box.remove(), 250);
  };

  closeBtn.addEventListener("click", close);
  document.addEventListener(
    "keydown",
    (e) => { if (e.key === "Escape" && document.getElementById(ID)) close(); },
    { capture: true }
  );

  setTimeout(() => {
    if (!document.getElementById(ID)) return;
    box.classList.add("pv-show");
    setTimeout(() => emailInput && emailInput.focus({ preventScroll: true }), 250);
  }, 3000);
})();
