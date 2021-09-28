function Car (){
    let Car = {
        Model:"Ford",
        Color: "Black",
        Max_Speed:"240 km/h",
        Amount_of_wheels: "4"
    }
    document.getElementById("Dictionary").innerHTML = Car.Max_Speed;
}

function Car2 (){
    let Car = {
        Model:"Ford",
        Color: "Black",
        Max_Speed:"240 km/h",
        Amount_of_wheels: "4"
    }
    delete Car.Model;
    document.getElementById("Delete").innerHTML = Car.Model;
}