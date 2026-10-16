// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.replaceChildren();

  list.forEach((item) => {
    const card = document.createElement("li");
    card.className = "article-card";
    card.textContent = item.name;
    listElement.append(card);
  });
}

export function matching() {
  return items.filter((item) => item.category === "stationery");
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}
