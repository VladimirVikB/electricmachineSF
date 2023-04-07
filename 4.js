function ElectricAppliance(name, power){
    this.name = name;
    this.power = power;
    this.connected = false;
}
// включаем прибор
ElectricAppliance.prototype.turnON = function () {
    console.log(this.name + ' turnON');
    this.connected = true;
}

// выключаем прибор
ElectricAppliance.prototype.turnOFF = function () {
    console.log(this.name + ' turnOFF');
    this.connected = false;
}

// Микроволновка
function Microwave(name, power, volume) {
    this.name = name;
    this.power = power;
    this.connected = true;
    this.volume = volume;
}
Microwave.prototype = new ElectricAppliance();

// Пытаемся поместить еду в микроволновку
Microwave.prototype.turnFood = function (food){
    return ((food < this.volume) ? (console.log('Bon appetit!')) : (console.log('Portion is too big !')))
}

// Телевизор
function TV(name, power, diagonal){
    this.name = name;
    this.power = power;
    this.connected = false;
    this.diagonal = diagonal;
}

TV.prototype = new ElectricAppliance();

// Смотрим телевизор
TV.prototype.watchingTV = function (diagonal){
    return diagonal < 50 ? console.log('Watch TV safely!') : console.log("Don't get close!")
}

const microwaveSumsung = new Microwave('Sumsung', 1500, 1000);
microwaveSumsung.turnOFF();
microwaveSumsung.turnON();
microwaveSumsung.turnFood(700);
console.log(microwaveSumsung);

const tvXiaomi = new TV('Xiaomi', 300, 45);
tvXiaomi.turnON();
tvXiaomi.watchingTV(40);
console.log(tvXiaomi);

