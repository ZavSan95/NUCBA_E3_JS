const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.addEventListener("DOMContentLoaded", () =>{

  const input = document.querySelector('#numero');
  const btn = document.querySelector('#buttonAccept');
  const cardContainer = document.querySelector('#card-container');

  btn.addEventListener('click', () =>{

      const val = parseInt(input.value);

      cardContainer.innerHTML = ''; //Limpiamos el contenedor

      if (isNaN(val)){
          renderError('Por favor ingrese un número válido');
          return;
      }

      const pizza = pizzas.find(pizza => pizza.id == val);
      if(pizza){
          renderPizza(pizza);

          //Guardo en local storage
          localStorage.setItem('lastPizza', JSON.stringify(pizza));
      }else{
          renderError('No se encontró una pizza con ese ID');
      }

  });

  function renderPizza(pizza){
      const cardHTML = `
          <div class="card">
              <img src="${pizza.imagen}" alt="${pizza.nombre}">
              <h2>${pizza.nombre}</h2>
              <p>Precio: $${pizza.precio}</p>
          </div>
      `;
      cardContainer.innerHTML = cardHTML;
  }

  function renderError(message){
      cardContainer.innerHTML = `<p class="error">${message}</p>`;
  }

});
