
let kartochki = document.querySelector('.kartochki')
kartochki.innerHTML = ''
let infoFetch = fetch('https://jsonplaceholder.typicode.com/users')
 .then(Response => Response.json())
 .then(data => {

    data.forEach(Element => {
        let divcard = document.createElement('div')
        divcard.classList.add('card')
        divcard.innerHTML = `
          <h2>${Element.name}</h2>
          <img class="image" src="1608890.png" alt="">
          <p>Почта: ${Element.email}</p>
          <p>Город проживания: ${Element.address.city}</p>
        `
        kartochki.appendChild(divcard)
    });
 })
 
// Toggle Night Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Функция поиска карточек по имени
document.getElementById("searchInput").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    const name = card.querySelector("h2").textContent.toLowerCase();
    if (name.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});