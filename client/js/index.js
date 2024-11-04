const shopContent = document.getElementById("shopContent");
const cart = []; // este es nuestro carrito es un array vacio

productos.forEach((product) =>{
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <p>${product.productName}</p>
    <p>$ ${product.price} <p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton);

    buyButton.addEventListener("click", ()=>{
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            cart.map((prod)=> {
                if(prod.id === product.id){
                    prod.quanty++;
                    displayCartCouter();
                }
            })
        }else{
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCouter();
        }
    });
});

// const favorites = []; // Array para guardar los favoritos

// productos.forEach((product) => {
//     const content = document.createElement("div");
//     content.innerHTML = 
//         `<img src="${product.img}">
//         <p>${product.productName}</p>
//         <p>$ ${product.price}</p>`;
//     shopContent.append(content);

//     // Botón de "Favorito"
//     const favoriteButton = document.createElement("button");
//     favoriteButton.innerText = "❤ Favorito";
//     content.append(favoriteButton);

//     favoriteButton.addEventListener("click", () => {
//         const isFavorite = favorites.some(fav => fav.id === product.id);

//         if (!isFavorite) {
//             favorites.push(product);
//             alert("Producto agregado a favoritos");
//         } else {
//             alert("El producto ya está en favoritos");
//         }
//     });

//     // Botón de "Comprar"
//     const buyButton = document.createElement("button");
//     buyButton.innerText = "Comprar";
//     content.append(buyButton);

//     buyButton.addEventListener("click", () => {
//         const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

//         if (repeat) {
//             cart.map((prod) => {
//                 if (prod.id === product.id) {
//                     prod.quanty++;
//                     displayCartCounter();
//                 }
//             });
//         } else {
//             cart.push({
//                 id: product.id,
//                 productName: product.productName,
//                 price: product.price,
//                 quanty: product.quanty,
//                 img: product.img,
//             });
//             displayCartCounter();
//         }
//     });
// });


// const displayFavorites = () => {
//     shopContent.innerHTML = ""; // Limpia la sección de productos

//     if (favorites.length > 0) {
//         favorites.forEach((product) => {
//             const content = document.createElement("div");
//             content.innerHTML = `
//                 <img src="${product.img}">
//                 <p>${product.productName}</p>
//                 <p>$ ${product.price}</p>
//             `;
//             shopContent.append(content);

//             // Botón para eliminar de favoritos
//             const removeFavoriteButton = document.createElement("button");
//             removeFavoriteButton.innerText = "Quitar de Favoritos";
//             content.append(removeFavoriteButton);

//             removeFavoriteButton.addEventListener("click", () => {
//                 removeFavorite(product.id);
//             });
//         });
//     } else {
//         shopContent.innerHTML = "<p>No tienes productos en favoritos</p>";
//     }
// };

// // Función para eliminar un producto de favoritos
// const removeFavorite = (id) => {
//     const index = favorites.findIndex(product => product.id === id);
//     if (index > -1) {
//         favorites.splice(index, 1);
//         displayFavorites();
//         alert("Producto eliminado de favoritos");
//     }
// };
