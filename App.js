
function fetchAPIExample() {
    
    let searchText = document.getElementById("search").value.toLowerCase();
    let showCity = document.getElementById("btncheck1").checked;
    let showState = document.getElementById("btncheck2").checked;
    let showCenter = document.getElementById("btncheck3").checked;

    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then((data) =>{
    
        let filteredData = data.centres.filter((result) => {
          let matchesName = result.name.toLowerCase().includes(searchText);
          let matchesPlace = showCity && result.Place.toLowerCase().includes(searchText);
          let matchesState = showState && result.State.toLowerCase().includes(searchText);
          let matchesCenter = showCenter && result.name.toLowerCase().includes(searchText);
          return matchesName || matchesPlace || matchesState || matchesCenter;
        });

        let tableData = "";
        
        filteredData.map((values) => {
          tableData += `<tr>
                          <td>${values.name}</td>
                          <td>${values.Place}</td>
                          <td>${values.State}</td>
                        <tr>`;
        }).join()
        document.querySelector("tbody").innerHTML = tableData;
      })
      .catch(error =>{
        console.log(error);
      })
            
  }


  