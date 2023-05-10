
function fetchAPIExample() {
    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then((data) =>{
        console.log("What's inside data -> ", data);
        const fileContent = JSON.stringify(data);
        document.getElementById("xmlData").textContent = fileContent;;
        let tableData = "";
        fileContent.map((values) => {
          tableData += `<tr>
                    <td scope="col">${values.name}</td>
                    <td scope="col">${values.Place}</td>
                    <td scope="col">${values.State}</td>
                  <tr>`;
        });
        document.querySelector("tbody").innerHTML = tableData;
      })
      .catch(error =>{
        console.log(error);
      })
            
  }


  