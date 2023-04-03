// window.addEventListener('DOMContentLoaded', (event) =>{
//     updateVisitorCount();
// })

// const UpdateVisitorCount = 'https://us-west2-infra-earth-377823.cloudfunctions.net/UpdateVisitorCount';
// // const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

// const getVisitCount = () => {
//     let count = 30;
//     fetch(UpdateVisitorCount).then(response => {
//         return response.json()
//     }).then(response =>{
//         console.log("Website called function API.");
//         count =  response.count;
//         document.getElementById("counter").innerText = count;
//     }).catch(function(error){
//         console.log(error);
//     });
//     return count;
// }


const countEl = document.getElementById('vc');

UpdateVisitCount();

//Testing
function UpdateVisitCount() {
  fetch('https://us-west2-infra-earth-377823.cloudfunctions.net/UpdateVisitorCount')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById('counter').innerHTML = data;
    })
}
