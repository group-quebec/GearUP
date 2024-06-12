let carOptions = [
    {
    text: 'Audi R8',
    value: 'Audi R8'
},
{
    text: 'Lotus Elise',
    value: 'Lotus Elise',
    selected: true
},
{
    text: 'HUkanawa',
    value: 'HUkanawa'
  }
];

let bikeOptions = [
    {
      text: 'Carry Bike',
      value: 'Audi R8'
    },
    {
        text: 'Supiri Bike',
        value: 'Lotus Elise',
        selected: true
    },
    {
        text: 'Gal tattaya Bike',
        value: 'HUkanawa'
    }
];

function AddOptions() {
    let carOptionList = document.getElementById('car-models').options;
    let bikeOptionList = document.getElementById('bike-models').options;

    carOptions.forEach(option =>
    carOptionList.add(
        new Option(option.text, option.value, option.selected)
        )
    );

    bikeOptions.forEach(option =>
        bikeOptionList.add(
            new Option(option.text, option.value, option.selected)
        )
    );
}

function ChangeType(){

    var e = document.getElementById("type");
    var text = e.options[e.selectedIndex].text;

    if (text == 'Car'){
        document.getElementById('cardiv').style.display = 'flex';
        document.getElementById('bikediv').style.display = 'none';
    }
    else{
        document.getElementById('bikediv').style.display = 'flex';
        document.getElementById('cardiv').style.display = 'none';
    }
}


function GotoLogin(){
    document.getElementById("login").style.display = 'block';
    document.getElementById("reg").style.display = 'none';
}

function GotoRegister(){
    document.getElementById("reg").style.display = 'block';
    document.getElementById("login").style.display = 'none';
}