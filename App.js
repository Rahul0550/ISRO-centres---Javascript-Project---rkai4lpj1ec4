
function fetchAPIExample() {
    let promiseObject = fetch("https://isro.vercel.app/api/centres");
    promiseObject
      .then((response) => response.json())
      .then((response) => console.log("response -> ", response));
      .then(data =>{
        const fileContent = JSON.stringify(data);
        document.getElementById("xmlData").textContent = fileContent;;
      })
      .catch(error =>{
        console.error(error);
      })


      let htmlData = response.map((eachPost) => {
        return `<tr>
                  <td>${eachPost.name}</td>
                  <td>${eachPost.Place}</td>
                  <td>${eachPost.State}</td>
                <tr>`;
      })
      .join("");
            document.querySelector("tbody").innerHTML = htmlData;
            document.querySelector("#loadBtn").style.display = "none";
  }


  