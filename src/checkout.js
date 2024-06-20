

function getCarIndex(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return parseInt(params.extr, 10);
}

function getCarInfo(){
    const index = getCarIndex();
    if (index != NaN && index >= 0 && index < car_info.length){    
        return car_info[index];
    }
    else{
        return null;
    }
}

function loadCarInfo(){
    const modelE = document.getElementById('model-disp');
    const imageE = document.getElementById('car-image');
    const typeE = document.getElementById('type-disp');
    const fuelE = document.getElementById('fuel-disp');
    const descE = document.getElementById('desc-disp');
    const rateE = document.getElementById('rate-disp');

    const index = getCarIndex();

    if (index != NaN && index >= 0 && index < car_info.length){    
        const car = car_info[index];
        modelE.innerHTML = car.model;
        typeE.innerHTML = car.type;
        fuelE.innerHTML = '4566';
        descE.innerHTML = car.desc;
        rateE.innerHTML = car.rate;
        imageE.setAttribute('src',car.img);
    }
}

function setTodayDate(id) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = today.getDate().toString().padStart(2, '0');

    document.getElementById(id).value = `${year}-${month}-${day}`;
}

function getDayDifference(date1, date2) {
    // apparently this is in milliseconds :|
    const timeDiff = date2 - date1;
    const dayDiff = timeDiff / (1000 * 86400);

    return dayDiff;
}

function dateInputListner(){
    const dayCountE = document.getElementById('rental-days');
    const rentChargeE = document.getElementById('rental-charge');
    const serviceChargeE = document.getElementById('service-charge');
    const totalChargeE = document.getElementById('total-charge');

    const date1 = new Date(document.getElementById('rental-date').value);
    const date2 = new Date(document.getElementById('return-date').value);
    let diff = getDayDifference(date1, date2);
    if (diff >= 0){
        diff = Math.max(diff,1);
        dayCountE.innerHTML = diff;
        const car = getCarInfo();
        const rent = car.rate * diff;
        rentChargeE.innerHTML = `<span class="fas pe-1"></span>${rent}`;
        serviceChargeE.innerHTML = `<span class="fas pe-1"></span>${service_sections[car.category].serviceCharge}`;
        totalChargeE.innerHTML = rent + service_sections[car.category].serviceCharge;
    }
    else{
        dayCountE.innerHTML = 'Invalid dates';
        rentChargeE.innerHTML = `<span class="fas pe-1"></span>0`;
        serviceChargeE.innerHTML = `<span class="fas pe-1"></span>0`;
        totalChargeE.innerHTML = 0;
    }
}

window.onload = function(){
    loadCarInfo();
    setTodayDate('rental-date');
    setTodayDate('return-date');
    document.getElementById('rental-date').addEventListener('input', dateInputListner);
    document.getElementById('return-date').addEventListener('input', dateInputListner);
    dateInputListner();
}