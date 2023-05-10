
function fetchAPIExample() {
    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then(data =>{
        console.log("What's inside data -> ", data);
        //const fileContent = JSON.stringify(data);
        //document.getElementById("xmlData").textContent = fileContent;;
        let tableData = "";
        data.map((eachPost) => {
          tableData += `<tr>
                    <td>${eachPost.name}</td>
                    <td>${eachPost.Place}</td>
                    <td>${eachPost.State}</td>
                  <tr>`;
        });
        document.querySelector("tbody").innerHTML = tableData;
      })
      .catch(error =>{
        console.log(error);
      })
            
  }


  