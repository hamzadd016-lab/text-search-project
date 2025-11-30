const articles = [
  "CSS Grid makes layout easier",
  "JavaScript is the language of the web",
  "Frontend development includes HTML CSS and JS",
  "Grid auto rows and columns",
  "Learning React after JavaScript is easier",
  "GitHub contribution graph with CSS Grid"
];

function searchText() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  if (input === "") return;

  const filtered = articles.filter(article =>
    article.toLowerCase().includes(input)
  );

  filtered.forEach(article => {
    const regex = new RegExp(`(${input})`, "gi");
    const highlighted = article.replace(regex, `<span class="highlight">$1</span>`);

    const div = document.createElement("div");
    div.className = "article";
    div.innerHTML = highlighted;

    resultsDiv.appendChild(div);
  });
}
