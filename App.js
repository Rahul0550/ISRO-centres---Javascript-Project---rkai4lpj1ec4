
function fetchAPIExample() {
    
    let searchText = document.getElementById("search").value.toLowerCase();
    let showCity = document.getElementById("btncheck1").checked;
    let showState = document.getElementById("btncheck2").checked;
    let showCenter = document.getElementById("btncheck3").checked;

    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then((data) =>{
        console.log("What's inside data -> ", data);
    
        let filteredData = data.centres.filter((result) => {
          return result.name.toLowerCase().includes(searchText) && 
            (showCity && result.Place.toLowerCase().includes(searchText)) || 
            (showState && result.State.toLowerCase().includes(searchText)) || 
            (showCenter && result.name.toLowerCase().includes(searchText));
        });

        let tableData = "";
        
        filteredData.map((values) => {
          tableData += `<tr>
                          <td scope="col">${values.name}</td>
                          <td scope="col">${values.Place}</td>
                          <td scope="col">${values.State}</td>
                        <tr>`;
        }).join()
        document.querySelector("tbody").innerHTML = tableData;
      })
      .catch(error =>{
        console.log(error);
      })
            
  }


  