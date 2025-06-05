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

const const_carrosel_marketing = document.getElementById("carrousel_marketing");
const prevbtn_marketing = document.getElementById("prev_marketing");
const nextbtn_marketing = document.getElementById("next_marketing");
const indicador_marketing = document.getElementById(
  "slide_indicator_marketing"
);

const total_slides_marketing = const_carrosel_marketing.children.length;
let current_slide_marketing = 0;

function update_carrosel_marketing() {
  const offset = -current_slide_marketing * 100;
  const_carrosel_marketing.style.transform = `translateX(${offset}%)`;
  indicador_marketing.textContent = `${
    current_slide_marketing + 1
  }/${total_slides_marketing}`;
}

nextbtn_marketing.addEventListener("click", () => {
  current_slide_marketing = (current_slide_marketing + 1) % total_slides_marketing;
  update_carrosel_marketing();
});

prevbtn_marketing.addEventListener("click", () => {
  current_slide_marketing =
    (current_slide_marketing - 1 + total_slides_marketing) % total_slides_marketing;
  update_carrosel_marketing();
});

update_carrosel_marketing()