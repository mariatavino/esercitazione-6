//dichiarazioni globali

let url = "https://striveschool-api.herokuapp.com/api/product";
let card = Array.from(document.getElementsByClassName('card'));
let modal = Array.from(document.getElementsByClassName('reference'));
let edit = document.getElementById('edit');
let indice = 0;
edit.addEventListener("click", Back_office);
const products = [
    {
      name: "Samsung Galaxy S21",
      description: "Flagship smartphone with high-end features",
      brand: "Samsung",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 899,
      userId: "6385f782597b9d001545386c",
      createdAt: "2022-02-15T14:20:45.123Z",
      updatedAt: "2022-02-15T14:20:45.123Z",
      __v: 0
    },
    {
      name: "Apple MacBook Pro",
      description: "Powerful laptop for professional use",
      brand: "Apple",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 1499,
      userId: "6385f782597b9d001545386d",
      createdAt: "2022-03-10T18:45:30.987Z",
      updatedAt: "2022-03-10T18:45:30.987Z",
      __v: 0
    },
    {
      name: "Sony PlayStation 5",
      description: "Next-gen gaming console with 4K graphics",
      brand: "Sony",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 499,
      userId: "6385f782597b9d001545386e",
      createdAt: "2022-04-05T12:10:15.789Z",
      updatedAt: "2022-04-05T12:10:15.789Z",
      __v: 0
    },
    {
      name: "Dell XPS 13",
      description: "Compact and powerful ultrabook",
      brand: "Dell",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 1299,
      userId: "6385f782597b9d001545386f",
      createdAt: "2022-05-20T09:55:22.654Z",
      updatedAt: "2022-05-20T09:55:22.654Z",
      __v: 0
    },
    {
      name: "Canon EOS R5",
      description: "Mirrorless camera with 8K video recording",
      brand: "Canon",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 3499,
      userId: "6385f782597b9d0015453870",
      createdAt: "2022-06-15T15:30:40.567Z",
      updatedAt: "2022-06-15T15:30:40.567Z",
      __v: 0
    },
    {
      name: "LG OLED C1",
      description: "High-end OLED TV for stunning visuals",
      brand: "LG",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 1999,
      userId: "6385f782597b9d0015453871",
      createdAt: "2022-07-10T21:12:55.432Z",
      updatedAt: "2022-07-10T21:12:55.432Z",
      __v: 0
    },
    {
      name: "Bose QuietComfort 35 II",
      description: "Premium noise-canceling headphones",
      brand: "Bose",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 349,
      userId: "6385f782597b9d0015453872",
      createdAt: "2022-08-25T08:40:18.876Z",
      updatedAt: "2022-08-25T08:40:18.876Z",
      __v: 0
    },
    {
      name: "Tesla Model 3",
      description: "Electric car with cutting-edge technology v2",
      brand: "Tesla",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 39999,
      userId: "6385f782597b9d0015453873",
      createdAt: "2022-09-12T17:28:33.721Z",
      updatedAt: "2022-09-12T17:28:33.721Z",
      __v: 0
    },
    {
      name: "Tesla Model 2",
      description: "Electric car with cutting-edge technology v1",
      brand: "Tesla",
      imageUrl: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
      price: 29999,
      userId: "6385f782597b9d0015453873",
      createdAt: "2022-09-12T17:28:33.721Z",
      updatedAt: "2022-09-12T17:28:33.721Z",
      __v: 0
    }
];


//fetch post per creare elementi già presenti
function base() {
    fetch(url, {
        method: 'POST', 
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(products),
    })
        //handle response  
    .then(response => response.json())
    .then(data => {
      //handle data
      console.log(data)
      displayProduct(data);
    })
      .catch(error => {
        //handle error
        console.log(error);
    });
}

//fetch post per aggiungere un nuovo elemento
function post(p) {
    fetch(url, {
        method: 'POST', 
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(p),
    })
            //handle response  
            .then(response => response.json())
            .then(data => {
              //handle data
              console.log(data);
            })
            .catch(error => {
              //handle error
              console.log(error);
            });
}

//fetch put per modificare elementi già presenti
function put(p) {
    fetch(url + p._id, {
        method: 'PUT', 
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(p),
    })
            //handle response  
            .then(response => response.json())
            .then(data => {
              //handle data
              console.log(data);
            })
            .catch(error => {
              //handle error
              console.log(error);
            });
}

//fetch delete per eliminare elementi già presenti
function cancella(p) {
    fetch(url + p._id, {
        method: 'DELETE', 
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE",
        }
    })
            //handle response  
            .then(response => response.json())
            .then(data => {
              //handle data
              console.log(data);
            })
            .catch(error => {
              //handle error
              console.log(error);
            });
}

//fetch get per visualizzare gli elementi già presenti NON FUNZIONA IL SERVER NON HA PERMANENZA DEI DATI
// function loadProducts() {
//     fetch( url, {
//         headers: {
//         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE',
        
//       }
//     })
//     //handle response  
//     .then(response => response.json())
//     .then(data => {
//       //handle data
//       console.log(data)
//       displayProduct(data);
//     })
//     .catch(error => {
//       //handle error
//       console.log(error);
//     });

// }

const displayProduct = (d) => { 

  d.forEach(x => {
    let immagine = x.imageUrl;
    let nome = x.name;
    let desc = x.description;
    let prezzo = x.price + '€';
    let brand = x.brand;
    card[indice].innerHTML =
  `
  <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light pic"
  data-mdb-ripple-color="light">
  <img src="${immagine}"
    class="w-100" />
  <a href="#">
    <div class="mask">
      <div class="d-flex justify-content-start align-items-end h-100">
        <h5><span class="badge bg-dark ms-2">NEW</span></h5>
      </div>
    </div>
    <div class="hover-overlay">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </div>
  </a>
</div>
<div class="card-body">
  <a href="" class="text-reset">
    <h5 class="card-title mb-2 nome">${nome}</h5>
  </a>
  <a href="" class="text-reset ">
    <p class="desc">${desc}</p>
  </a>
  <h6 class="mb-3 price">${prezzo}</h6>
</div>
`;
modal[indice].innerHTML= `
<div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header d-flex">
                <h5 class="modal-title col-6" id="exampleModalLabel">${nome}</h5>
                <p class="col-4 mt-3">${brand}</p>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex justify-content-center align-content-center">
                <div class="col-6">
                  <img src="${immagine}" height="165">
                </div>
                <div class="col-6 mt-3">
                  <p>${desc}</p>
                  <h2>${prezzo}</h2>
                </div>
              </div>
            </div>
          </div>
        `
indice++;
});

}

function Back_office() {
  
}
//call delle funzioni
window.onload = function () {
  base();
}

