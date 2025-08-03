const access="d0a48eebd6150a1bfe4303634c6ec893"
const btnn=document.getElementById("btnn")
const key=document.getElementById("keyword")
const btn=document.getElementById("btn")
async function  locationn(city)
{
const res= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},+91&appid=${access}`)
 const result =await res.json();

api(result[0].lat,result[0].lon)
}

async function  api(latt,lonn)
{
const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${lonn}&appid=${access}&units=metric`)
 const result =await res.json();

 document.getElementById("conten").innerHTML=`<p id="temp">${result.main.temp}<sup>.</sup>C</p>
                   <p id="city">${result.name}</p>
                   <div class="info">
                        <div class="data">
                            <p>${result.wind.speed}</p>
                            <p>WIND</p>
                        </div>
                        <div class="data">
                            <p>${result.main.pressure}</p>
                            <p>PRESSURE</p>
                        </div>
                        <div class="data">
                            <p>${result.main.humidity}</p>
                            <p>HUMIDITY</p>
                        </div>
`

}

async function getlatlan()
{

const res= await fetch(`https://ipinfo.io/json`)
 const result =await res.json();
 return result



}
btnn.addEventListener("click", async()=>{
    const h =  getlatlan()
      h.then((res)=>{
      let data1=res.loc.slice(0,7)
      let data2=res.loc.slice(8,res.loc.length)
    key.value=res.city
   api(data1,data2)
      })
      
})



btn.addEventListener("click",()=>{
      let data=key.value;
      locationn(data)



})

