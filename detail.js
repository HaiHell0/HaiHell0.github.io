var urlParam = getAllUrlParams()["index"];
function displayAnimalDetails(urlParam) {
  var dog = animalList[urlParam];
  document.getElementById("name").innerHTML += `
  <div><h2>${dog.Name}</h2></div>
  <div><h6>${dog.Type} | ${dog.Breed} | ${dog.SecondBreed===""?dog.Sex:(dog.secondBreed+" | "+dog.Sex)} </h6></div>
  `;
  

  document.getElementById("inner-carousel").innerHTML += `
    <div class="carousel-item active">
            
      <img class="ratio ratio-1x1 center-block d-block mx-auto img-thumbnail rounded"  style = "height:600px"src="${dog.Pics[0]}" alt="dog-image-0">

    </div>
    `;
  dog.Pics.slice(1,-1).forEach((pic) => {
    document.getElementById("inner-carousel").innerHTML += `
      <div class="carousel-item">
              
        <img class="ratio ratio-1x1 center-block d-block mx-auto img-thumbnail rounded"  style = "height:600px"src="${pic}" alt="dog-image-0">
  
      </div>
      `;
  })
  document.getElementById("about").innerHTML+=`
    <strong>Age:</strong> ${dog.Age.Weeks} Weeks,  ${dog.Age.Months} Months,  ${dog.Age.Years} Years ${dog.Age.approx?"(approx)":""}<br>
    <strong>Suitability:</strong> ${dog.Suitability===""?"No specific requirements":dog.Suitability}<br>
    <h4>Meet ${dog.Name}:</h4>
    ${(dog.AbtMe==="")? "Nothing here yet":dog.AbtMe}
  `
  document.getElementById("specs").innerHTML+=`
  ${(dog.Type==="Cat"? "<strong>Declawed: </strong>"+dog.Declawed:"")}<br>
  <strong>Spayed/neutered: </strong>${dog.SpayedNeutered}<br>
  <strong>Color: </strong>${dog.Color}<br>
  <strong>Health: </strong>${(dog.Details.Health ? "checked" : "not checked")}<br>
  <strong>Vaccination: </strong>${(dog.Details.Vacc ? "up to date" : "not up to date")}<br>
  <strong>Worming: </strong>${(dog.Details.Worming ? "up to date" : "not up to date")}<br>
  <strong>Microchipped: </strong>${(dog.Details.Microchpped ? "Yes" : "No")}<br><br>
  <strong>AnimalID: </strong>${dog.AnimalId.ID}<br>
  ${dog.AnimalId.MicroChipNo===""?"":"<strong>MicroChipNoID: </strong>"+dog.AnimalId.MicroChipNo}
  `


}
displayAnimalDetails(urlParam);
