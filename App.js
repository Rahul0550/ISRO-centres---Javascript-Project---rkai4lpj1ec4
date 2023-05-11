
function fetchAPIExample() {
    
    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then((data) =>{
        console.log("What's inside data -> ", data);
    
        let tableData = "";
        // data.centres.filter((result) => {
        //   return result.State == "Gujarat"
        // })
        data.centres.map((values) => {
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


  