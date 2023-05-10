  function searchData() {

    // let xmlHttp = new XMLHttpRequest();
    // let url = "https://isro.vercel.app/api/centres";
    // xmlHttp.open("GET", url, true);
    // xmlHttp.send();

    // xmlHttp.onreadystatechange = () => {
    //   if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
    //     const todosResponse = JSON.parse(xmlHttp.response);
    //     console.log("Response success receivied :- ", todosResponse);
    //     document.querySelector("p").innerHTML = xmlHttp.response;
    //   }
    // };

    let url = "https://isro.vercel.app/api/centres";
     let obj = fetch(url);
     console.log('obj->', obj);
     fetch(url)
        .then((response) => response.json())
        .then((response) => console.log("response -> ", response))
        .then(data =>{
            const fileContent = JSON.stringify(data);
            document.getElementById("xmlData").textContent = fileContent;
          })
          .catch(error =>{
            console.error(error);
          })

    debugger
    console.log(data);
    var val = document.getElementById('search-button').value;
    let tab =
      `<tr class="row">
          <th class="col">S.no</th>
      <th class="col">Center Name</th>
      <th class="col">Place</th>
      <th class="col">State</th>
      </tr>`;
  
    if (flag === 'name') {
      searchByName(tab, val);
    } else if (flag === 'city') {
      searchByCity(tab, val);
    } else if (flag === 'state') {
      searchByState(tab, val);
    }
  
  }
  
  
  //Funtion for searching center by name
  function searchByName(tab, val) {
  
    let i = 1;
  
    for (let r of data.centres) {
  
      if (r.name.toLowerCase().includes(val.toLowerCase())) {
        tab += `<tr class="row">
        <td class="table-data">${i++} </td>
        <td "table-data">${r.name} </td>
        <td "table-data">${r.Place}</td>
        <td "table-data">${r.State}</td>
        </tr>`;
      }
    }
  
    if(i <= 1){
      tab += `<tr scope="row">
        <td colspan="4" style="text-align:center;">No Record Found!!</td>
      </tr>`;
    }
  
    document.getElementById("xmlData").innerHTML = tab;
  }
  
  //Funtion for searching center by state
  function searchByState(tab, val) {
    let i = 1;
    for (let r of data.centres) {
  
      if (r.State.toLowerCase().includes(val.toLowerCase())) {
        tab += `<tr class="row">
        <td class="table-data">${i++} </td>
        <td "table-data">${r.name} </td>
        <td "table-data">${r.Place}</td>
        <td "table-data">${r.State}</td>
      </tr>`;
      }
    }
  
    if(i <= 1){
      tab += `<tr scope="row">
        <td colspan="4" style="text-align:center;">No Record Found!!</td>
      </tr>`;
    }
    
    document.getElementById("xmlData").innerHTML = tab;
  }
  
  //Funtion for searching center by city
  function searchByCity(tab, val) {
  
    let i = 1;
  
    for (let r of data.centres) {
      if (r.Place.toLowerCase().includes(val.toLowerCase())) {
        tab += `<tr class="row">
        <td class="table-data">${i++} </td>
        <td "table-data">${r.name} </td>
        <td "table-data">${r.Place}</td>
        <td "table-data">${r.State}</td>
      </tr>`;
      }
    }
  
    if(i <= 1){
      tab += `<tr scope="row">
        <td colspan="4" style="text-align:center;">No Record Found!!</td>
      </tr>`;
    }
    document.getElementById("xmlData").innerHTML = tab;
  }