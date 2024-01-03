let cart = [];

let total = 0;

 

function addToCart(bookName, price) {

    cart.push({ name: bookName, price: price });

    total += price;

    updateCart();

}

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();

}

function updateCart() {

  let cartItemsElement = document.getElementById("cart-items");

  let totalElement = document.getElementById("total");

  cartItemsElement.innerHTML = '';

 

  cart.forEach((item, index) => {

      let itemElement = document.createElement("tr");

      itemElement.innerHTML = `

          <td>${item.name}</td>

          <td>${item.price.toFixed(2)} Rs</td>

          <td><button class="remove-button" onclick="removeFromCart(${index})">Remove</button></td>

      `;

      cartItemsElement.appendChild(itemElement);

  });

 

  totalElement.textContent = `Total: ${total.toFixed(2)} Rs`;

}

const books =[

  { title: "Nature Kingdom", price: 150, image: "https://www.melora.sa/cdn/shop/products/nature-kingdom-lavender-soothing-moisturizing-gel-300-ml-melora-2-23861600649355.jpg?v=1692799547" },

  { title: "boat earbuds", price: 2299, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/o/d/r/-original-imagpgwsm6zgtsrj.jpeg?q=70" },

  { title: "vivo v27pro", price: 37999, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1681133024/Croma%20Assets/Communication/Mobiles/Images/270432_ayeasp.png?tr=w-480" },

  { title: "smartwatchs", price: 2250, image: "https://www.gonoise.com/cdn/shop/files/Carousel-500x500-1_3c03c126-1a24-4bc3-9150-2db6f23ff4b0_480x.png?v=1687523892" },

  { title: "speakers", price: 4599, image: "https://rukminim2.flixcart.com/image/832/832/k5h2jrk0/speaker/home-theatre/c/w/n/intex-it-2616-tufb-os-original-imafz5g7njyhb2vg.jpeg?q=70" },

  { title: "apples", price: 199, image: "https://images.jdmagicbox.com/quickquotes/images_main/apple-fruit-375006339-6uwr1.jpg" },

  { title: "potatos", price: 50, image: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg.webp" },

  { title: "shrit", price: 450, image: "https://thebearhouse.com/cdn/shop/products/TBH-TONIC-RT1_1800x1800.jpg?v=1667988066" },

  { title: "pant", price: 1480, image: "https://www.suxxus.com/cdn/shop/products/4M6A6769_1005x.jpg?v=1689790410" },

  { title: "Awake", price: 299, image: "http://4.bp.blogspot.com/-ayh32CF1HrY/UCt4sQzqBqI/AAAAAAAAAB0/iseG9EYmXp8/s1600/cover2.jpg" },

];


function initializeBookstore() {

  let bookContainer = document.getElementById("book-container");

  books.forEach(book => {

      let bookElement = document.createElement("div");

      bookElement.classList.add("book");

      bookElement.innerHTML = `

          <img src="${book.image}" alt="${book.title}">

          <h3>${book.title}</h3>

          <p> ${book.price.toFixed(2)} Rs</p>

          <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>

      `;

      bookContainer.appendChild(bookElement);

  });

}

window.onload = function() {

  initializeBookstore();

};
