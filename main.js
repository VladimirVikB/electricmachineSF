class ElectricAppliance{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.connected = false;
    }
    // подключаем к электричеству
    turnON(){
        alert(`${this.name} connected to the mains!`)
        this.connected = true
    }
    // отключаем от электричества
    turnOFF(){
        alert(`${this.name} disconnected from the mains!`)
        this.connected = false
    }
}
// Микроволновка
class Microwave extends ElectricAppliance{
    constructor(name, power, model) {
        super(name, power);
        this.name = name;
        this.power = power;
        this.connected = false;
        this.model = model;
        this.timeOfDay = 0
    }
// Разогреваем еду
    foodWarmer(){
        if (confirm('Желаете включить Микроволновку?')){
            this.turnON()
        }
        if (confirm('Are you hungry?')){
            this.timeOfDay = Number(prompt('Enter time of day in ful hours'))
            switch (true){
                case this.timeOfDay < 7 || this.timeOfDay > 20:
                    alert('Not yet time for food!');
                    break;
                case this.timeOfDay >= 7 && this.timeOfDay <= 10:
                    alert('Have a nice breakfast!');
                    break;
                case this.timeOfDay >= 11 && this.timeOfDay <= 13:
                    alert('Have a nice lunch');
                    break;
                case this.timeOfDay >= 17 && this.timeOfDay <= 19:
                    alert('Have a nice dinner!');
                    break;
                default:
                    alert('Snacking is harmful!!!')
            }
        }

        this.turnOFF()
        }
}

const microwaweSumsung = new Microwave('Sumsung', '2000', 'QX700')

microwaweSumsung.foodWarmer()

