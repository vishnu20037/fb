$(document).ready(function () {

    var url = "https://randomuser.me/api/?results=10";
    var p = "";
    fetchInformation(url);
    function fetchInformation(url) {
        fetch(url)
            .then((response) => response.json())
            .then(function (data) {

                data.results.forEach(person => {

                    p = `<div class="well">
                        <img src="${person.picture.medium}" class="img-rounded" alt="image">
                        <span style="margin-left:25px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
                         <span>(${person.nat})</span>
                        
                    </div>`;
                    $("#result").append(p);

                });
            })
    }

});