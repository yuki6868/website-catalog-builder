import { parts } from "./data/parts.js";

const preview = document.getElementById("preview");

// 今回は全部使う
const selectedPartIds = [
  "header-simple",
  "hero-simple",
  "cards-simple",
  "footer-simple"
];

const selectedParts = selectedPartIds
  .map(id => parts.find(part => part.id === id))
  .filter(Boolean);

// HTMLを合体
preview.innerHTML = selectedParts.map(part => part.html).join("\n");

// CSSを合体
const styleTag = document.createElement("style");
styleTag.textContent = selectedParts.map(part => part.css).join("\n");
document.head.appendChild(styleTag);

// JSを順番に実行
selectedParts.forEach(part => {
  if (part.js.trim()) {
    const scriptTag = document.createElement("script");
    scriptTag.textContent = part.js;
    document.body.appendChild(scriptTag);
  }
});