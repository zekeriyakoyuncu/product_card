let mainDOM = document.querySelector(".main");
let productCardBottomDOM = document.querySelector(".productcard_bottom");
let productCardBottomDOM = document.querySelector(".productcard_bottom");

mainDOM.addEventListener("mouseover", mouseOver);
mainDOM.addEventListener("mouseout", mouseOut);

function mouseOver() {
  productCardBottomDOM.innerHTML = `<div>
  <a href="#">Sepete Ekle</a>
</div>`;
}

function mouseOut() {
  productCardBottomDOM.innerHTML = `<div class="productcard_bottom_empty"></div>
  <div class="product_taste">
    <i style="color: rgb(246, 159, 41)" class="fa-solid fa-star"></i>
    <i style="color: rgb(246, 159, 41)" class="fa-solid fa-star"></i>
    <i style="color: rgb(246, 159, 41)" class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
  </div>`;
}
