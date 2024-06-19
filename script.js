
const navDialog = document.getElementById('nav-dialog')
function handleMenu()
{
    // console.log(navDialog)
    navDialog.classList.toggle('hidden')
}



function setupIntersectionObserver(element,isLTR,speed)
{
    const intersectionCallback = (enteries)=>{
        const isIntersecting = enteries[0].isIntersecting;
        // console.log(isIntersecting,"isIntersecting and eleement=>",element)

        if(isIntersecting)
            {
                document.addEventListener("scroll",scrollHandler)
            }
            else
            {
                document.removeEventListener("scroll",scrollHandler)  
            }


            const initialTranslateLTR = -48*4;
            const initialTranslateRTL = 36*4;



            function scrollHandler()
            {   

                const translateX = (window.innerHeight-element.getBoundingClientRect().top)*speed;

                let totalTranslate = 0;
                if(isLTR)
                    {
                        totalTranslate = translateX + initialTranslateLTR;
                    }
                    else
                    {
                        totalTranslate = -(translateX +initialTranslateRTL)
                    }
                element.style.transform = `translateX(${totalTranslate}px)`
            }

    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)
    intersectionObserver.observe(element);
}

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
setupIntersectionObserver(line1,true,0.15)
setupIntersectionObserver(line2,false,0.15)
setupIntersectionObserver(line3,true,0.15)




const dtElements = document.querySelectorAll('dt')

dtElements.forEach((element)=>{
    element.addEventListener("click",()=>{
        const ddId = element.getAttribute('aria-controls');
        console.log(ddId,"::DDid")
        const ddElement = document.getElementById(ddId)
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle("hidden");
        ddArrowIcon.classList.toggle("-rotate-180")

    })
})
console.log("wokring bhai")