
function constructSelectionBox(parent, car, index){
    const carDiv = document.createElement('div');
    carDiv.className = 'moye-box';

    const img = document.createElement('img');
    img.src = car.img;
    img.alt = car.model;
    img.className = 'sss';
    carDiv.appendChild(img);

    const layerDiv = document.createElement('div');
    layerDiv.className = 'moye-layer';

    const h4 = document.createElement('h4');
    h4.innerHTML = `<i class="fa-solid fa-car"></i> ${car.model}`;
    layerDiv.appendChild(h4);

    const ol = document.createElement('ol');

    const descLi = document.createElement('li');
    descLi.innerHTML = `<i class="fa-solid fa-hand-point-right"></i> ${car.desc}`;
    ol.appendChild(descLi);
    ol.appendChild(document.createElement('br'));

    const typeLi = document.createElement('li');
    typeLi.innerHTML = `<i class="fa-solid fa-hand-point-right"></i> ${car.type} & ${car.fuel}`;
    ol.appendChild(typeLi);
    ol.appendChild(document.createElement('br'));

    const priceLi = document.createElement('li');
    priceLi.innerHTML = `<i class="fa-solid fa-hand-point-right"></i> LKR ${car.rate}`;
    ol.appendChild(priceLi);
    ol.appendChild(document.createElement('br'));

    layerDiv.appendChild(ol);

    const a = document.createElement('a');
    a.href = '#';
    a.setAttribute('data-index', index);
    a.addEventListener('click', function() {
        const logged = isLoggedIn();
        if(logged){
            const index = this.getAttribute('data-index');
            const url = `../sites/checkout.html?extr=${index}`;
            window.open(url, '_blank');
        }
        else{
            alert('Please log in to your account');
        }
    });
    a.innerHTML = "<i class='bx bx-link-external'></i>";
    layerDiv.appendChild(a);

    carDiv.appendChild(layerDiv);
    parent.appendChild(carDiv);
}


function constructSelectionHeader(parent, service){
    const head = document.createElement('div');
    head.className = 'section-head';
    
    const h2 = document.createElement('h2');
    h2.innerHTML = `${service.name}`;
    head.appendChild(h2);
    
    parent.appendChild(head);
}


function constructSelectionDOM(parent, service){
    // Construct and append the header to the parent
    constructSelectionHeader(parent, service);

    // Construct and append the selection boxes (children of container) to the parent
    const container = document.createElement('div');
    container.className = 'moye-container';
    
    car_info.forEach((car, index) => {    
        if (car.category == service.index){
            constructSelectionBox(container, car, index);
        }
    });

    parent.appendChild(container);
}


function constructSelectionDOMwSearch(parent, service, searchText){
    constructSelectionHeader(parent, service);
    
    const container = document.createElement('div');
    container.className = 'moye-container';
    
    car_info.forEach((car,index) => {
        const combinedStr = `${car.model}${car.desc}${car.fuel}${car.type}`.toLowerCase()
        if (combinedStr.includes(searchText) && car.category == service.index){        
            constructSelectionBox(container, car, index);
        }
    });

    parent.appendChild(container);
}


function populateCarSelect() {
    const parent = document.getElementById('vehicals');
    const searchText = document.getElementById('search-text').value.toLowerCase();
    const dummyChild = document.createElement('div');
    const servRestr = indexRestrictSection();
    
    if (searchText === ""){
        if (servRestr < 0 || servRestr >= service_sections.length || !servRestr){
            service_sections.forEach(service => constructSelectionDOM(dummyChild, service));
        }
        else{
            constructSelectionDOM(dummyChild, service_sections[servRestr]);
        }
    }
    else{
        if (servRestr < 0 || servRestr > service_sections.length || !servRestr){
            const catOptions = document.getElementById('category-select').options;
            constructSelectionDOMwSearch(dummyChild, service_sections[catOptions.selectedIndex], searchText);
        }
        else{
            constructSelectionDOMwSearch(dummyChild, service_sections[servRestr], searchText);
        }
    }

    parent.replaceChildren(dummyChild);
}


function removeChildren(){
    const parent = document.getElementById('vehicals');
    while(parent.firstChild){
        parent.removeChild(parent.lastChild);
    }
}

function indexRestrictSection(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params.serv;
}

window.onload = function() {
    document.getElementById('search-text').addEventListener("input", populateCarSelect);
    document.getElementById('category-select').addEventListener("input", populateCarSelect);

    const servRestr = indexRestrictSection();
    if (servRestr < 0 || !servRestr){
        populateCarSelect();
        let catOptions = document.getElementById('category-select').options;
        service_sections.forEach(service => catOptions.add(new Option(service.name, service.index)));
    }
    else{
        const sbParent = document.getElementById('search-bar-parent');
        sbParent.replaceChildren(document.getElementById('search-text').parentNode);

        populateCarSelect();
    }
};


function navigateToBack() {
    history.go(-1);
}


  function navigateToPageSignup() {
    let button = document.getElementById('goBack');
    button.style.display = 'none';

    window.location.href = "http://127.0.0.1:3000/sites/signup.html";
   
}
