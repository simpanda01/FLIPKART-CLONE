
let input_search = document.getElementById("search_input");
let form_search = document.getElementById("search_form");
let recent_SearchE1 = document.querySelector(".recent_search")
let recentArray = ["Mobile", "Phone"]
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    // alert("Hello")
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})

function renderRecent() {
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += `
    
    <div class="list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
        </div>
        `
    })
    recent_SearchE1.innerHTML = recent_Search_html;
   
}
renderRecent()
/*****************************image Slider *********************/
// let image = document.querySelector(".slideritem");
// let translate = 0;
// setInterval(() => {
//     if(translate >= 0 && translate < 400){
//         translate +=100
//     }
//     else{
//         translate = 0
//     }
//     console.log("hello")
//     // image.Style.transition ="2s";
//     image.style.transform = `translateX(${-translate}%)`
// }, 5000)
const slides = document.querySelectorAll(".sliderimage")
var counter = 0;
slides.forEach(
    (sliderimage,index)=>{
        sliderimage.style.left =`${index*100}%`
    }
)
// const goPrev = () =>{
//     counter--
//     slideImage()

// }
// const goNext = () => {
//     counter++
//     slideImage()
// }
const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    };
    
    
const slideImage = ()=>{
    slides.forEach(
        (sliderimage)=>{
           sliderimage.style.transform = `translateX(-${counter*100}%)` 
        }
    )
}