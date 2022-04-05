var allTheTeams;

getAlltheTeams();

function getAlltheTeams() {  
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://free-nba.p.rapidapi.com/teams?page=0&rapidapi-host=free-nba.p.rapidapi.com&rapidapi-key=e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a", requestOptions)
    .then(response => response.text())
        .then(result => { allTheTeamsX = JSON.parse(result); allTheTeams = allTheTeamsX['data']; getPagination(10); console.log(allTheTeams); })
    .catch(error => console.log('error', error));
}

function getPagination(howMany = 5) {
    if (howMany == 'all') {
        howMany = allTheTeams.length;
    }
    $('#list').pagination({ // you call the plugin
        dataSource: allTheTeams, // pass all the data
        pageSize: howMany, // put how many items per page you want
        callback: function(data, pagination) {
            // data will be chunk of your data (json.Product) per page
            // that you need to display
            var wrapper = $('#list .wrapper').empty();
            var unorderedList = `<ul class="unordered-list">`;
            $.each(data, function (i, f) {
                unorderedList += `<li>${f.full_name}  <span class="price">$${generateRandomNumber()}</span> <span>from</span></li>`;
            });
            unorderedList += `</ul>`;
            $('#list .wrapper').append(unorderedList);
        }
    });
}

function generateRandomNumber() {  
    var randNum =  Math.floor(Math.random() * 1000) + 1;
    return randNum;
}

document.querySelector("#change-total").addEventListener("change", function () { getPagination(this.value); });

function orderValuesFullName() {  
    allTheTeams.sort(GetSortOrder("abbreviation"));
    console.log(allTheTeams);
    document.querySelector("#change-total").value = 10;
    getPagination(10);
}

function orderValuesGame() {  
    allTheTeams.sort(GetSortOrder("division"));
    console.log(allTheTeams);
    document.querySelector("#change-total").value = 10;
    getPagination(10);
}

function orderValuesName() {  
    allTheTeams.sort(GetSortOrder("name"));
    console.log(allTheTeams);
    document.querySelector("#change-total").value = 10;
    getPagination(10);
}

//Comparer Function    
function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}