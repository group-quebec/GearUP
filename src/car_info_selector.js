
function populateCarSelect() {
    const parent = document.getElementById('vehicals');
    
    service_sections.forEach(
        service => {
            const container = document.createElement('div');
            container.className = 'moye-container';

            const head = document.createElement('div');
            head.className = 'section-head';

            const h2 = document.createElement('h2');
            h2.innerHTML = `${service.name}`;
            head.appendChild(h2);

            parent.appendChild(head);
            
            car_info.forEach((car, index) => {

                if (car.category == service.index){
                    
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
                        const index = this.getAttribute('data-index');
                        const url = `../sites/checkout.html?extr=${index}`;
                        window.open(url, '_blank');
                    });
                    a.innerHTML = "<i class='bx bx-link-external'></i>";
                    layerDiv.appendChild(a);
            
                    carDiv.appendChild(layerDiv);
                    container.appendChild(carDiv);
                }
            });

            parent.appendChild(container);
        }
    );

}


window.onload = function() {
    populateCarSelect();
};