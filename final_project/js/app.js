/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ul = document.getElementById('navbar__list');


//creating a section

const section =  `<section id="section4" data-nav="Section 4" >
<div class="landing__container">
  <h2>Section 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;

//appending the section to the body

const Main = document.querySelector('main');
Main.insertAdjacentHTML('beforeend', section);
const sections = document.querySelectorAll('section');

// joining sections and lists

sections.forEach(section => {const li = document.createElement("li");
li.innerHTML = section.getAttribute("data-nav");
li.classList.add("menu__link");
ul.appendChild(li);

// Scroll to section on link click

li.addEventListener('click', () =>{
    section.scrollIntoView({ behavior: "smooth" });
});

})

// // Setting sections and lists as active  active on viewport

function makeActive(){

    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            //apply active state on current section and corresponding Nav link
         const lists = document.querySelectorAll('li');
            for(const list of lists){
                if(list.innerHTML === section.getAttribute('data-nav')){
                    list.classList.add('your-active-class');
       
                }else{  list.classList.remove('your-active-class');
              
                }
            }
            section.classList.add('your-active-class');
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
        }
    }
}

document.addEventListener('scroll', makeActive);












