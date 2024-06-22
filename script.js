//Event in JS
//The change in the state of an object is known as an Event
//Mouse events(click,double click etc.)
//keyboard events(keypress,keyup,keydown)
//Form events(submit etc)
//print event & many more

//event handling in js
//node.event=()=>{
    // Handle here
// }
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn was clicked");
//     // let a = 25;
//     // a++;
//     // console.log(a);
// }

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside box");
// };

//Event Object
//It is special object that has details about the event.
//All event handlers have access to the Event Object Properties and methods.
//node.event=(e)=>{
    //handle hrer
//}
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }


// let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
    
//     console.log(evt)
//     console.log(evt.target);
// };

//Event Listeners
//node.addEventListener(event,callback)
//Node.removeEventListener(event,callback)
//Note: the callback referance shoud be same to remove

// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });


// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked-handler2");
// });

//remove
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler1");
// })

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler2");
// })

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler3");
// })
// const handler3 = ()=>{
//     console.log("button was clicked - handler3");
// }
// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler4");
// })

// btn1.removeEventListener("click",()=>{
//     console.log("button was clicked - handler3");
// })

// btn1.removeEventListener("click",handler3);

//Practice que
//Create a toggle button that changes the screen to dark-mode when clicked & light-mode
//when click again.

// let modeBtn=document.querySelector("#mode");

// let currMode="light";
// modeBtn.addEventListener("click",()=>{
//     //console.log("You are trying to change mode!");
//     if (currMode=="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";

//     } else {
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white"
//     }
//     console.log(currMode);
// });

//Or using class css 
// let newBtn=document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode="light";
// newBtn.addEventListener("click",()=>{
//     if(currMode=="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light")
//     } else {
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })
