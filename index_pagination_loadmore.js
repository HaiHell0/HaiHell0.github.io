var i = 0;//resets when page reloads on purpose
function displayDog() {
  var dog1 = animalList[i];
  var dog2 = animalList[i+1];
  document.getElementById("dog-list").innerHTML +=

    `<div class = "container">
    <div class = "row">
        <div class="col" >
              <div class="card border-success mb-3 p-4 m-lg-4 m-md-3.5 m-4">
                                <img src="${dog1.Pics[0]}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${dog1.Name}</h5>
                                  <p>${dog1.Breed}</p>
                                  <p>Sprayed/Neutered: ${dog1.SpayedNeutered}</p>
                                  <p>${dog1.Sex} - ${dog1.Age.Years}Yrs ${dog1.Age.Months}Mths ${dog1.Age.Weeks}Wks ${dog1.Age.approx ? "(approx)" : ""}</p>
                                  <p>${dog1.Breed}</p>
                                  <a href="detail.html?index=${i}" class="btn btn-success">View Details</a>
                                </div>
                </div>
          </div>
        <div class="col" >
                <div class="card border-success mb-3 p-4 m-lg-4 m-md-3.5 m-4">
                                <img src="${dog2.Pics[0]
    }" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${dog2.Name}</h5>
                                  <p>${dog2.Breed}</p>
                                  <p>Sprayed/Neutered: ${dog2.SpayedNeutered}</p>
                                  <p>${dog2.Sex} - ${dog2.Age.Years}Yrs ${dog2.Age.Months
    }Mths ${dog2.Age.Weeks}Wks ${dog2.Age.approx ? "(approx)" : ""}</p>
                                  <p>${dog2.Breed}</p>
                                  <a href="detail.html?index=${i+1}" class="btn btn-success">View Details</a>
                </div>
        </div>
    </div>
  </div>
`;
}

document.getElementById("showmore").addEventListener("click", function () {
  i+=2;
  console.log("Show more")
  displayDog();
})
function main(){
  displayDog()//display first two dogs
}
main()

