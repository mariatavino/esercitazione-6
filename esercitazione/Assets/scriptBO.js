//dichiarazioni globali

let url = "https://striveschool-api.herokuapp.com/api/product";
let cardBo = Array.from(document.getElementsByClassName('cardBO'));
let indice = 0;
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
        .then(response => {
          if (!response.ok) {
            throw new Error(`Errore nella richiesta: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
    .then(data => {
      //handle data
      console.log(data)
      displayProductMO(data)
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
function put(p,body) {
    fetch(url + p, {
        method: 'PUT', 
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
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
    fetch(url + p, {
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

//• Aggiungi un bottone "Reset" per resettare il form. 
//In back-office: I bottoni "reset" e "delete" dovranno chiedere conferma prima di procedere con l'operazione.  
function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');
    const loggedInPage = document.getElementById('loggedInPage');
  
    // Verifica delle credenziali (esempio: username=admin, password=123)
    const username = usernameInput.value;
    const password = passwordInput.value;
    const isCredentialsValid = checkCredentials(username, password);
  
    if (isCredentialsValid) {
      // Nasconde il form di accesso e mostra la pagina successiva
      loginForm.style.display = 'none';
      loggedInPage.classList.remove('d-none');
    } else {
      alert('Credenziali non valide. Riprova.');
    }
  }
  
  function checkCredentials(username, password) {
    // In un'applicazione del mondo reale, verifica le credenziali lato server
    // Qui puoi implementare la tua logica di verifica delle credenziali
    return username === 'admin' && password === '123';
  }
  
  const displayProductMO = (d) => { 
    try {
      d.forEach(x => {
        let immagine = x.imageUrl;
        let nome = x.name;
        let desc = x.description;
        let prezzo = x.price + '€';
        let brand = x.brand;
        let id = x._id;
        
        let pro1 = [nome, desc, brand, immagine, prezzo];
        console.log(Array.isArray(pro1))
        cardBo[indice].innerHTML =
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
        <p class="brand">${brand}</p>
      </a>
      <h6 class="mb-3 price">${prezzo}</h6>
    </div>
    <div class="d-grid gap-2">
    <button type="button" class="btn btn-primary" onclick="editForm('${id}', ${indice}, '${pro1}')">Modifica</button>
    <button type="button" class="btn btn-danger" onclick="deleteProduct('${id}', ${indice})">Cancella</button>
    <button type="button" class="btn btn-warning" onclick="resetProduct('${id}', ${indice})">Reset</button>
  </div>
    `;
    indice++;
    });  
      // Se la funzione arriva qui, non ci sono errori
      if (!d || d.length === 0) {
        throw new Error("Nessun dato disponibile per visualizzare i prodotti.");
      }
      if (!d || !Array.isArray(d) || !d.every(item => item.hasOwnProperty('imageUrl'))) {
        throw new Error("La struttura dei dati non è valida.");
      }
  
    } catch (error) {
      // Mostra l'elemento di avviso con il messaggio di errore
      document.getElementById('errorMessage').innerText = error.message;
      document.getElementById('errorAlert').classList.remove('d-none');
    }
  }

  function get() {
    fetch( url, {
        headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjcwOWMwNTgzNTAwMTg1MjJjZDIiLCJpYXQiOjE3MDIzNzMxMjksImV4cCI6MTcwMzU4MjcyOX0.b0DMDPFcSAuxx3jr7zLyPjBTFuhvn4CZt5tfNycOYiE',
        }
    })
    //handle response  
    .then(response => response.json())
    .then(data => {
        //handle data
        console.log(data)
        return data;
    })
    .catch(error => {
        //handle error
        console.log(error);
    });
  }
  function editForm (p,i,pro){
    console.log(pro);
    let pro1 = pro.split(',');
    let id = p;
    let immagine = pro1[3];
    let nome = pro1[0];
    let desc = pro1[1];
    let brand = pro1[2];
    let prezzo = pro1[4];

cardBo[i].innerHTML = `
</div>
<div class="card-body">
<div class="mb-3">
<label for="editImg${p}" class="form-label">immagine:</label>
<input type="text" class="form-control" id="editImg${p}" value='${immagine}'>
</div>
  <div class="mb-3">
    <label for="editNome${p}" class="form-label">Nome:</label>
    <input type="text" class="form-control" id="editNome${p}" value="${nome}">
  </div>
  <div class="mb-3">
    <label for="editDesc${p}" class="form-label">Descrizione:</label>
    <textarea class="form-control" id="editDesc${p}" rows="3">${desc}</textarea>
  </div>
  <div class="mb-3">
    <label for="editBrand${p}" class="form-label">Brand:</label>
    <input type="text" class="form-control" id="editBrand${p}" value="${brand}">
  </div>
  <div class="mb-3">
    <label for="editPrezzo${p}" class="form-label">Prezzo:</label>
    <input type="text" class="form-control" id="editPrezzo${p}" value="${prezzo}">
  </div>
  <div class="d-grid gap-2">
  <button type="button" class="btn btn-primary" onclick="getValue('${id}', ${i}, '${pro1}')">Invia</button>
  <button type="button" class="btn btn-danger" onclick="deleteProduct('${id}', ${i})">Cancella</button>
  <button type="button" class="btn btn-warning" onclick="resetProduct('${id}', ${i})">Reset</button>
  </div>
</div>
`;
  }
  function getValue(p, i, pro) {
    let immagine = document.getElementById('editImg'+ p).value
    let nome = document.getElementById('editNome'+ p).value
    let desc = document.getElementById('editDesc'+ p).value
    let brand = document.getElementById('editBrand'+ p).value
    let prezzo = document.getElementById('editPrezzo'+ p).value
    let id = p;
    let pro1 = pro.split(',');
    let prodotto = {
        name: nome,
        description: desc,
        brand: brand,
        imageUrl: immagine,
        price: prezzo,
        userId: "6385f782597b9d001545386c",
    }
    console.log(prodotto);

    put(p, prodotto);
    console.log(i);
    cardBo[i].innerHTML =
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
        <p class="brand">${brand}</p>
      </a>
      <h6 class="mb-3 price">${prezzo}</h6>
    </div>
    <div class="d-grid gap-2">
        <button type="button" class="btn btn-primary" onclick="editForm('${id}', ${indice}, '${pro1}')">Modifica</button>
        <button type="button" class="btn btn-danger" onclick="deleteProduct('${id}', ${indice})">Cancella</button>
        <button type="button" class="btn btn-warning" onclick="resetProduct('${id}', ${indice})">Reset</button>
  </div>
    `;
    
  }

  function deleteProduct(p,i) {
    
  }

  function resetProduct(p,i) {
    
  }

    //call delle funzioni
    window.onload = function () {
        base();
      }