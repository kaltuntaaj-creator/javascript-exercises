// let classInfo = {
//     grade: "eight",
//     subject:"English",
//     lecturer: "jaamac",
//     greet:function(){
//         console.log("Hi, how are you doing", this.lecturer)
//     }
// }

// console.log(classInfo)
// classInfo.grade ="Seven";
// console.log(classInfo)
// classInfo.regesterdate = "2024-5-9"
// console.log(classInfo.greet ())

let car = {
    make:"Japan",
    model:"Toyota",
    year:2003,
    start: function() {
        console.log("The car has started");
    }
}
car.start()
 console.log(car)
 console.log(car.make)
 console.log(car.model)
 console.log(car["year"])
 console.log(car.start())