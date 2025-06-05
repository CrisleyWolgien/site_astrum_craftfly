const const_carrousel_sites = document.getElementById("carrousel_sites");
const prevbtn_sites = document.getElementById("prev_sites");
const nextbtn_sites = document.getElementById("next_sites");
const indicador_sites = document.getElementById("slide_indicator_sites");

const total_slides_sites = const_carrousel_sites.children.length;
let current_slide_site = 0;

function update_carrosel_sites() {
  const offset = -current_slide_site * 100;
  const_carrousel_sites.style.transform = `translateX(${offset}%)`;
  indicador_sites.textContent = `${
    current_slide_site + 1
  }/${total_slides_sites}`;
}

nextbtn_sites.addEventListener("click", () => {
  current_slide_site = (current_slide_site + 1) % total_slides_sites;
  update_carrosel_sites();
});

prevbtn_sites.addEventListener("click", () => {
  current_slide_site =
    (current_slide_site - 1 + total_slides_sites) % total_slides_sites;
  update_carrosel_sites();
});

update_carrosel_sites();
