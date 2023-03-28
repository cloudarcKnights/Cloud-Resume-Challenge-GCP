// window.addEventListener('DOMContentLoaded', (event) =>{
//     getVisitCount();
// })

// // const functionApiUrl = 'https://getresumecounter.azurewebsites.net/api/GetResumeCounter?code=Q/LkPt0mhQKdP8DoE3DdllAYdFQO//58Iq7AoS6JUBj9FgJ86Rqt8A==';
// // const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

fetch('https://us-west2-infra-earth-377823.cloudfunctions.net/UpdateVisitorCount')
  .then(response => response.text())
  .then(data => {
    console.log(data);
  });
