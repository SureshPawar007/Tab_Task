let cl = console.log;

const tabHeading = [...document.querySelectorAll(".tabHeading > li")];
const tabcontent = [...document.querySelectorAll(".tabcontent")];

cl(tabHeading);
cl(tabcontent);

const onHeadClick = (eve) =>{
    let getId = eve.target.getAttribute('data-id');
    cl(getId);

    //Iterating li beacuse tabHeading is Array
    tabHeading.forEach((li) =>{
    //Remove active class  from tabHeading using classList
        li.classList.remove('active');
    })
    //Add active class using click Event
    eve.target.classList.add("active");

    //Iterating tab beacuse tabcontent is Array
    tabcontent.forEach((tab) =>{
    //Remove active class from tabcontent using classList
        tab.classList.remove('active');
    })
    //Add active class on tab which tabHeading id and tabcontent id match
    document.getElementById(getId).classList.add('active');

}



//Add Event 
tabHeading.forEach((li) =>{
    li.addEventListener('click',onHeadClick);
})