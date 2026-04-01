import { parts } from "./data/parts.js";

const partsListEl = document.getElementById("parts-list");
const selectedListEl = document.getElementById("selected-list");
const previewEl = document.getElementById("preview");

const CATEGORY_ORDER = {
  header: 1,
  hero: 2,
  section: 3,
  footer: 4
};

const SINGLE_CATEGORY_RULES = {
  header: true,
  hero: true,
  footer: true,
  section: false
};

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

function addPart(partId) {
  const newPart = parts.find(part => part.id === partId);
  if (!newPart) return;

  const isSingleCategory = SINGLE_CATEGORY_RULES[newPart.category];

  if (isSingleCategory) {
    selectedPartIds = selectedPartIds.filter(id => {
      const existingPart = parts.find(part => part.id === id);
      return existingPart && existingPart.category !== newPart.category;
    });
  } else {
    if (selectedPartIds.includes(partId)) {
      return;
    }
  }

  selectedPartIds.push(partId);

  renderSelectedList();
  renderPreview();
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
      addPart(partId);
    });
  });
}

function renderSelectedList() {
  selectedListEl.innerHTML = "";

  let selectedParts = getSelectedParts();

  selectedParts.sort((a, b) => {
    return CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category];
  });

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

function clearDynamicStyles() {
  const oldStyle = document.getElementById("dynamic-parts-style");
  if (oldStyle) {
    oldStyle.remove();
  }
}

function renderPreview() {
  let selectedParts = getSelectedParts();

  selectedParts.sort((a, b) => {
    return CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category];
  });

  previewEl.innerHTML = selectedParts.map(part => part.html).join("\n");

  clearDynamicStyles();

  const styleTag = document.createElement("style");
  styleTag.id = "dynamic-parts-style";
  styleTag.textContent = selectedParts.map(part => part.css).join("\n");
  document.head.appendChild(styleTag);

  selectedParts.forEach(part => {
    if (typeof part.init === "function") {
      part.init();
    }
  });
}

renderPartsList();
renderSelectedList();
renderPreview();