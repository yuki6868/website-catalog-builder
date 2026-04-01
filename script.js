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

const CATEGORY_LABELS = {
  header: "Header",
  hero: "Hero",
  section: "Section",
  footer: "Footer"
};

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

  renderPartsList();
  renderSelectedList();
  renderPreview();
}

function groupPartsByCategory(parts) {
  const grouped = {};

  parts.forEach(part => {
    if (!grouped[part.category]) {
      grouped[part.category] = [];
    }
    grouped[part.category].push(part);
  });

  return grouped;
}

function renderPartsList() {
  partsListEl.innerHTML = "";

  const groupedParts = groupPartsByCategory(parts);

  Object.keys(CATEGORY_ORDER)
    .sort((a, b) => CATEGORY_ORDER[a] - CATEGORY_ORDER[b])
    .forEach(category => {
      const categoryParts = groupedParts[category];
      if (!categoryParts || categoryParts.length === 0) return;

      const section = document.createElement("section");
      section.className = "catalog-group";

      const heading = document.createElement("h2");
      heading.className = "catalog-group__title";
      heading.textContent = CATEGORY_LABELS[category] || category;

      section.appendChild(heading);

      categoryParts.forEach(part => {
        const buttonState = getButtonState(part);

        const item = document.createElement("div");
        item.className = "part-item";

        if (buttonState.label === "選択中") {
          item.classList.add("part-item--selected");
        }

        item.innerHTML = `
          <h3>${part.name}</h3>
          <div class="button-row">
            <button
              class="${buttonState.className}"
              data-id="${part.id}"
              ${buttonState.disabled ? "disabled" : ""}
            >
              ${buttonState.label}
            </button>
          </div>
        `;

        section.appendChild(item);
      });

      partsListEl.appendChild(section);
    });

  const actionButtons = document.querySelectorAll(".add-btn, .change-btn");
  actionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const partId = button.dataset.id;
      addPart(partId);
      renderPartsList();
    });
  });
}

function isPartSelected(partId) {
  return selectedPartIds.includes(partId);
}

function getSelectedPartByCategory(category) {
  return getSelectedParts().find(part => part.category === category) || null;
}

function getButtonState(part) {
  const isSelected = isPartSelected(part.id);
  const isSingleCategory = SINGLE_CATEGORY_RULES[part.category];
  const selectedPartInCategory = getSelectedPartByCategory(part.category);

  if (isSelected) {
    return {
      label: "選択中",
      className: "selected-btn",
      disabled: true
    };
  }

  if (isSingleCategory && selectedPartInCategory) {
    return {
      label: "変更",
      className: "change-btn",
      disabled: false
    };
  }

  return {
    label: "追加",
    className: "add-btn",
    disabled: false
  };
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
      renderPartsList();
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