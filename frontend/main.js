// window.addEventListener('DOMContentLoaded', (event) =>{
//     getVisitCount();
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
// fetch('https://us-west2-infra-earth-377823.cloudfunctions.net/UpdateVisitorCount')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//   });


// const visitorCount = 42;
// const apiUrl = "https://counter-gateway-7u7o4lcy.wl.gateway.dev/UpdateVisitorCount";

// fetch(apiUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({visitorCount: visitorCount})
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Response:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });


const countEl = document.getElementById('vc');

updateVisitCount();
//Testing
function updateVisitCount() {
    fetch('https://counter-gateway-7u7o4lcy.wl.gateway.dev/UpdateVisitorCount')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
