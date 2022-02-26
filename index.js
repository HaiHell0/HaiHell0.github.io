function changeDpp() {
  //save dpp value to sessionStorage in case page reloads
  sessionStorage.setItem("dpp", dpp.value);
  displayPages(dpp.value);
  displayDogsForPage(dpp.value);
}

function displayPages(dpp) {
  document.getElementById("page-list").innerHTML = "";
  document.getElementById("page-list").innerHTML += `<li class="page-item">
                                                      <a class="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                      </a>
                                                    </li>`;
  var numOfPages = Math.ceil(animalList.length / dpp);
  for (let i = 1; i <= numOfPages; i++) {
    document.getElementById(
      "page-list"
    ).innerHTML += `<li onclick="displayDogsForPage(${dpp}, ${i})" class="page-item"><a onclick="return false;" class="page-link" href="">${i}</a></li>`;
  }
  document.getElementById("page-list").innerHTML += `<li class="page-item">
                                                      <a class="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                      </a>
                                                    </li>`;
}

function displayDogsForPage(dpp, page = 1) {
  document.getElementById("dog-list").innerHTML = "";
  var offset = dpp * (page - 1);
  for (let i = 0; i < dpp; i++) {
    var dog = animalList[offset++];
    document.getElementById("dog-list").innerHTML += `<div class="col" >
                      <div class="card border-success mb-3 p-4 m-lg-4 m-md-3.5 m-4">
                        <img src="${dog.Pics[0]
      }" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${dog.Name}</h5>
                          <p>${dog.Breed}</p>
                          <p>Sprayed/Neutered: ${dog.SpayedNeutered}</p>
                          <p>${dog.Sex} - ${dog.Age.Years}Yrs ${dog.Age.Months
      }Mths ${dog.Age.Weeks}Wks ${dog.Age.approx ? "(approx)" : ""}</p>
                          <p>${dog.Breed}</p>
                          <a href="detail.html?index=${i}" class="btn btn-success">View Details</a>
                        </div>
                      </div>
                    </div>`;
  }
}

window.onload = function () {
  var setItem = sessionStorage.getItem("dpp");
  //if dpp is not set yet, this is first time load
  if (setItem == null) {
    changeDpp();
  } else {
    //else the dpp value should be retained
    dpp.value = setItem;
  }
  displayPages(dpp.value);
  displayDogsForPage(dpp.value);
};
