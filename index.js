const progressBar = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentStep = 1;

prev.addEventListener('click',()=>{
    currentStep--
    if(currentStep < 1){
        currentStep = 1
    }
    update()
})

next.addEventListener('click',()=>{
    currentStep++
    if(currentStep > circles.length){
        currentStep = circles.length
    }
    update()
})

function update(){
    circles.forEach((circle,index)=>{
        if(index < currentStep){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const progressStatus = (currentStep-1)/ (circles.length-1)
// debugger

    progressBar.style.width = progressStatus*100 + '%'
    if(currentStep === circles.length){
        next.disabled = true
    }else if (currentStep === 1){
        prev.disabled = true
    }else{
        next.disabled = false
        prev.disabled = false
    }
}