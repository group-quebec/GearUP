

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
        fuelE.innerHTML = car.fuel;
        descE.innerHTML = car.desc;
        rateE.innerHTML = `LKR ${car.rate}`;
        imageE.setAttribute('src',car.img);
    }
}

function initializeDateTime() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const timeNow = now.toTimeString().split(' ')[0].substr(0, 5);

    const rentalDate = document.getElementById('rental-date');
    const rentalTime = document.getElementById('rental-time');
    const returnDate = document.getElementById('return-date');
    const returnTime = document.getElementById('return-time');

    rentalDate.value = today;
    rentalTime.value = timeNow;
    now.setDate(now.getDate() + 1);
    const tomorrow = now.toISOString().split('T')[0];
    returnDate.value = tomorrow;
    returnTime.value = timeNow;
}

function calculateHours() {
    const rentalDate = document.getElementById('rental-date').value;
    const rentalTime = document.getElementById('rental-time').value;
    const returnDate = document.getElementById('return-date').value;
    const returnTime = document.getElementById('return-time').value;

    const rentalDateTime = new Date(`${rentalDate}T${rentalTime}`);
    const returnDateTime = new Date(`${returnDate}T${returnTime}`);

    const diffTime = returnDateTime - rentalDateTime;
    const diffHours = diffTime / (1000 * 60 * 60);
    return Math.ceil(diffHours);
}

function dateInputListner(){
    const hoursCountE = document.getElementById('rental-hours');
    const rentChargeE = document.getElementById('rental-charge');
    const serviceChargeE = document.getElementById('service-charge');
    const totalChargeE = document.getElementById('total-charge');

    let diff = calculateHours();
    if (diff >= 0){
        hoursCountE.innerHTML = diff;
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

function makeInquiry(){
    
}

window.onload = function(){
    loadCarInfo();
    initializeDateTime();
    document.getElementById('rental-date').addEventListener('input', dateInputListner);
    document.getElementById('return-date').addEventListener('input', dateInputListner);
    document.getElementById('rental-time').addEventListener('input', dateInputListner);
    document.getElementById('return-time').addEventListener('input', dateInputListner);
    dateInputListner();
}