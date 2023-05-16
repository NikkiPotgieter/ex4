addStudent = () => {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let age = +document.getElementById("age").value  //the plus is for value as a number
    let subject = document.getElementById("subject").value

    if(age >= 18){
        alert("Student: " + first + " " + last + " has been added to " + subject)
    } else {
        alert("The Student: " + first + " " + last + " is too young to enroll!")
    }
}

makePizza = () => {
    let pizzaName = document.getElementById("pizzaName").value
    let size = document.getElementById("size").value

    // Get Radio Options
    let baseOptions = document.getElementsByName("baseRadio")
    let baseValue; 

    for(let i = 0; i < baseOptions.length; i++){
        if(baseOptions[i].checked){
            baseValue = baseOptions[i].value
        }
    }

    let salami = document.getElementById("salami").checked

    if(salami){
        alert("Pizza Order: The " + pizzaName + " - Side: " + size + " - Base: " + baseValue + " with salami")
    } else {
        alert("Pizza Order: The " + pizzaName + " - Side: " + size + " - Base: " + baseValue + " No salami!")
    }

}

function calculate() {
    var value1 = parseFloat(document.getElementById("value1").value);
    var value2 = parseFloat(document.getElementById("value2").value);
    var operation = document.getElementById("operation").value;
    var result;
    
    if (operation === "add") {
      result = value1 + value2;
    } else if (operation === "subtract") {
      result = value1 - value2;
    } else if (operation === "multiply") {
      result = value1 * value2;
    } else if (operation === "divide") {
      result = value1 / value2;
    }
    
    console.log(result);
  }