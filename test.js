var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){console.log("now driving");};

myCar.drive();

var myCar2 = {

    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    },
    test: function(){
        console.log(this);
    }
};
myCar2.test();
myCar2.logDriver ();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);