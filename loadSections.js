function loadSection(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${file}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(error));
}

loadSection("hero", "/sections/hero.html");
loadSection("highlights", "/sections/highlights.html");
loadSection("motorcycles", "/sections/motorcycles.html");
loadSection("motoculture", "/sections/motoculture.html");
loadSection("rides", "/sections/rides.html");
loadSection("latest", "/sections/latest.html");
loadSection("legacy", "/sections/legacy.html");
loadSection("locate", "/sections/locate.html");
loadSection("shop", "/sections/shop.html");
loadSection("footer", "/sections/footer.html");