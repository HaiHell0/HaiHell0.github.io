var dpp = 2;
function displayPages() {
  var numOfPages = Math.ceil(animalList.length / dpp);
  for (let i = 1; i <= numOfPages; i++) {
    $("#page-list").append(
      `<li onclick="displayAnimalsForPage(${i})" class="page-item" ><a onclick="return false;" class="page-link" href="">${i}</a></li>`
    );
  }
}
function displayAnimalsForPage(page) {
  $("#animal-list").empty();
  var offset = dpp * (page - 1);
  for (let i = 0; i < dpp; i++) {
    var dog = animalList[offset++];
    $("#animal-list").append(`<div class="col" >
                                <div class="card border-primary">
                                <img src="${
                                  dog.Pics[0]
                                }" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${dog.Name}</h5>
                                    <p>${dog.Breed}</p>
                                    <p>Sprayed/Neutered: ${
                                      dog.SpayedNeutered
                                    }</p>
                                    <p>${dog.Sex} - ${dog.Age.Years}Yrs ${
      dog.Age.Months
    }Mths ${dog.Age.Weeks}Wks ${dog.Age.approx ? "(approx)" : ""}</p>
                                    <p>${dog.Breed}</p>
                                    <a href="detail.html?index=${i}" class="btn btn-primary">View Details</a>
                                </div>
                                </div>
                            </div>`);
  }
}
displayPages();
displayAnimalsForPage(1);
$(".pagination li:first-child").addClass("active");
$(document).ready(function () {
  var $listItems = $(".pagination li");

  $listItems.click(function () {
    $listItems.removeClass("active");
    $(this).addClass("active");
    var activeLink = $(this);
  });
});
