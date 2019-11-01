
const FIRST_NAME = "DAVID";
const LAST_NAME = "ANDREEA";
const GRUPA = "1077";

/**
 * Make the implementation here
 */
class Employee {
	//1
	constructor(name, surname, salary){
		this.name=name;
		this.surname=surname;
		this.salary=salary;
	}
	//2
	getDetails(){
    return this.name + ' ' + this.surname + ' ' + this.salary;
}
}
//1
var angajat=new Employee('vasile', 'ion', 1);
//console.log(angajat.getDetails());
console.log(angajat.getDetails());

//3
class SoftwareEngineer extends Employee{
    //4 ????????	   
    constructor(name, surname, salary, experience) {
        super(name, surname, salary);
        if (experience == undefined) {
            this.experience = 'JUNIOR';
        }
    }
	
	//5
	applyBonus(){
		switch(this.experience)
		{
        case 'JUNIOR': return this.salary*1.1;
        break;
        case 'MIDDLE': return this.salary*1.15;
        break;
        case 'SENIOR':return this.salary*1.2;
        break;
        default: return this.salary*1.1;
        break;
    }
	}
}
var kill=new SoftwareEngineer('andreea', 'david', 2);
console.log(kill.experience());
var kill1=new SoftwareEngineer('a', 'v', 10);
console.log(kill1.applyBonus(0.15));

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    Employee,
    SoftwareEngineer
}

