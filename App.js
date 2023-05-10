
// const searchButton = document.getElementById('search-button');

function searchData(){
    // let searchInput = document.getElementById("searchInput").value;
    //  alert(searchInput);

     let promiseObject = fetch("https://isro.vercel.app/api/centres");

     promiseObject.then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)))
        // .then(data =>{
        //     const fileContent = JSON.stringify(data);
        //     document.getElementById("xmlData").textContent = fileContent;
        //   })
        //   .catch(error =>{
        //     console.error(error);
        //   })
        //   show(data);
    
}

// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th scope="col">Center Name</th>
// 		<th scope="col">Place</th>
// 		<th scope="col">State</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.centres) {
// 		tab += `<tr class="row">
//     <td class = "table-data">${r.name}</td>
// 	<td class = "table-data">${r.Place}</td>
// 	<td class = "table-data">${r.State}</td>
// </tr>`;
// 	}
// }