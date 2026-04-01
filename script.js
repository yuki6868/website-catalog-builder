import { parts } from "./data/parts.js";

const partsListEl = document.getElementById("parts-list");
const selectedListEl = document.getElementById("selected-list");
const previewEl = document.getElementById("preview");

let selectedPartIds = [
  "header-simple",
  "hero-simple",
  "cards-simple",
  "footer-simple"
];

function getSelectedParts() {
  return selectedPartIds
    .map(id => parts.find(part => part.id === id))
    .filter(Boolean);
}

function renderPartsList() {
  partsListEl.innerHTML = "";

  parts.forEach(part => {
    const item = document.createElement("div");
    item.className = "part-item";

    item.innerHTML = `
      <h3>${part.name}</h3>
      <p>カテゴリ: ${part.category}</p>
      <div class="button-row">
        <button class="add-btn" data-id="${part.id}">追加</button>
      </div>
    `;

    partsListEl.appendChild(item);
  });

  const addButtons = document.querySelectorAll(".add-btn");
  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      const partId = button.dataset.id;

      if (selectedPartIds.includes(partId)) {
        return;
      }

      selectedPartIds.push(partId);
      renderSelectedList();
      renderPreview();
    });
  });
}

function renderSelectedList() {
  selectedListEl.innerHTML = "";

  const selectedParts = getSelectedParts();

  selectedParts.forEach(part => {
    const item = document.createElement("div");
    item.className = "selected-item";

    item.innerHTML = `
      <h3>${part.name}</h3>
      <p>カテゴリ: ${part.category}</p>
      <div class="button-row">
        <button class="remove-btn" data-id="${part.id}">削除</button>
      </div>
    `;

    selectedListEl.appendChild(item);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const partId = button.dataset.id;
      selectedPartIds = selectedPartIds.filter(id => id !== partId);
      renderSelectedList();
      renderPreview();
    });
  });
}

function clearPartScripts() {
  const oldScripts = document.querySelectorAll('script[data-part-script="true"]');
  oldScripts.forEach(script => script.remove());
}

function clearDynamicStyles() {
  const oldStyle = document.getElementById("dynamic-parts-style");
  if (oldStyle) {
    oldStyle.remove();
  }
}

function renderPreview() {
  const selectedParts = getSelectedParts();

  previewEl.innerHTML = selectedParts.map(part => part.html).join("\n");

  clearDynamicStyles();
  const styleTag = document.createElement("style");
  styleTag.id = "dynamic-parts-style";
  styleTag.textContent = selectedParts.map(part => part.css).join("\n");
  document.head.appendChild(styleTag);

  clearPartScripts();
  selectedParts.forEach(part => {
    if (part.js.trim()) {
      const scriptTag = document.createElement("script");
      scriptTag.dataset.partScript = "true";
      scriptTag.textContent = part.js;
      document.body.appendChild(scriptTag);
    }
  });
}

renderPartsList();
renderSelectedList();
renderPreview();