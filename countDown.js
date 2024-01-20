const card_date_and_time = "22 Jan 2024 10:18";
document.getElementById("card_date_and_time").innerText = card_date_and_time;
const inputs= document.querySelectorAll("input")
function clock() {
  const end = new Date(card_date_and_time);
  // console.log(end, "end");
  const now= new Date()
  // console.log(now,"now")
  const diff= (end-now)/1000;
  // console.log(diff,"difff")
  // console.log(Math.floor(diff/3600/24))
  inputs[0].value=(Math.floor(diff/3600/24))
  inputs[1].value=(Math.floor(diff/3600%24))
  inputs[2].value=(Math.floor(diff/60%60))
  inputs[3].value=(Math.floor(diff%60))
}
clock();
setInterval(
  ()=>{
    clock()
  },
  1000
)
// days
// 1 days= 24hrs
// 1 hrs= 60 mint
// 1 mint= 3600 sec