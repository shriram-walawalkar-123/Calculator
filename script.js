// let content=document.querySelector('#counter');

// function decrement(){
// //get the value
// let value=parseInt(content.innerText);
// //update the value
// value--;
// //set the value
// content.innerText=value;
// };

// function increment(){
//     //get the value
//     let value=parseInt(content.innerText);
//     //update the value
//     value++;
//     //set the value
//     content.innerText=value;
// };


const modal=document.querySelector('.modal');

//modal open function
const openModal=()=>{
    console.log(`modal is opened`);
    modal.classList.add("active");
};

//modal close function
const closeModal=()=>{
    console.log(`modal is closed`);
    modal.classList.remove("active");
};