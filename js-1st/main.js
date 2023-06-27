console.dir(document)//it will show document object in console.it contains all the methods of the browser. it will manipulate or add here. take any tag like doctype.head tag is another
//one.
//how to access any value in document?
console.log(document.URL)//this will show the url detail.
console.log(document.title)
//now we will change the value of title!!!!!!!!!!!
document.title="123"
console.log(document.title)
console.log(document.body)//it will return the structure of the body
console.log(document.body.childNodes)//it will represent body tag as nodelist.there are two things. nodelist and html collections.they are array like structure but no method of array
//is applicable here.they mainly have length and indexing as 2 properties.it will include everything inside head like how many divisions and sections like that.
console.log(document.body.children)//it will show html collection instead of nodelist.
//console.log(document.body.children[3])//to access the 3rd node
//console.log(document.body.children[3].baseURL)//to access something inside 3rd node
console.log(document.all)
console.log(document.all[12].children[0])
console.log(document.all[12].children[0].innerHTML)
console.log(document.all[12].children[0].textContent)
//document.all[12].children[0].textContent="john does list"//value is changed.innerText and textContent are same
//let mainHeading=document.getElementById("main-header")//to access data by id storing in  a variable
let mainHeader=document.getElementById("header-title")
console.log(mainHeader.textContent)
mainHeader.textContent="this is my list"//changing the value
mainHeader.innerHTML="<p>adding new element</p>"//to add new element
console.log(mainHeader.style.color="red")//to change the color and style. but here you can not add multiple styles. for that, you have to use
Object.assign(mainHeader.style,{backgroundColor:"aqua",fontsize:"30px"})
//we can access by class name also
let liContent=document.getElementsByClassName("list-group-item")
console.log(liContent)
//by using loop,fetch all the elements inside the class
for(let ele=0;ele<liContent.length;ele++){
	console.log(liContent[ele])
	console.log(liContent[ele].textContent)
}
//get elements by tag name also is possible
//let inputElement=document.getElementsByTagName("input")
//console.log(inputElement)
//query selector is best. we can select class or id both by this. for class, use . and for id, use # as usual. for direct element, no sign before like this
//let inputElement=document.querySelector("input")//it will fetch first input element of the page
//console.log(inputElement)
//let inputElement=document.querySelectorAll("input")//it gives all the input elements
//let inputElement=document.querySelector("input")
//console.log(inputElement)
//traverse a dom means child to parent or parent to child
//space is treated as node
//let ulElement=document.querySelector("#items")
//console.log(ulElement.firstChild)//only the first node not the all
//console.log(ulElement.firstElementChild)//only the first element
//console.log(ulElement.lastElementChild)
//console.log(ulElement.firstElementChild.nextElementSibling.textContent)//next element sibling of last element child
let firstElement=document.querySelector("#first-li")
console.log(firstElement.parentElement)//accessing parent element of first element variable which stores the particular id
console.log(firstElement.parentElement.parentElement)//we can go to further parents. at the end,it will return null value
console.log(firstElement.parentNode)

//how to create a new element

let newDivContainer=document.createElement("div")
console.log(newDivContainer)
let addSomeText=document.createTextNode("this is some content inside div container")
//it is created but how to push
newDivContainer.appendChild(addSomeText)//it will not be shown or reflect on page but in console. under div tag.
//how to add something before an element? first target it.
let referenceElement=document.querySelector(".card-body")//we want to add something before this element
console.log(referenceElement)
//for reference, go to this website--- https://developer.mozilla.org/en-US/docs/Web/API/Node
let parentElement=document.getElementsByClassName("container")
//parentElement[1].insertBefore(newDivContainer,referenceElement)//line 58
//how to append after our reference element? not before. we have to use a method called appendChild
referenceElement.appendChild(newDivContainer)
console.log(document.body.nodeType)//it will give a number which can be checked by documentation

//adding different events

function print(){//this is the function when button is clicked from html file
console.log("hiiii")	
}
//to add event to button, you have to first target the button
let btn=document.querySelector("#third")
console.log(btn.textContent)
//()=> this function is called arrow back function.addEventListener function will add event to the element.there are two arguments of it. the first one is the type of the 
//event and the next one is arrow back function.
//btn.addEventListener("click",()=>{
//	btn.className="btn"
//	console.log(btn)
//	console.log("worlddddd")
//	btn.textContent="already clicked"
//	btn.style.backgroundColor="red"
//})
//if we add event to arrow back function, it will return the source from where the event is fired.

btn.addEventListener("click",(event)=>{//dblclick is also there.
	console.log(event.target)
	console.log(event.target.className)
	console.log(event.target.id)
	console.log(event.clientX)//from which coordinate,the button is clicked. this is with respect to the top of the screen.to see the change in console log,hover around the
	//button
	console.log(event.offsetX)//with respect to the element
	btn.className="btn"
	console.log("worlddddd")
	btn.textContent="already clicked"
	btn.style.backgroundColor="red"
})

let formElement=document.querySelector("#addForm")//it will target the first form of the page
//console.log(formElement)
//let ulElement=document.querySelector("#items")//for showing the submitted text on the list. to target first
//formElement.addEventListener("submit",(e)=>{//writing e instead of event is same.
//e.preventDefault()//when you submit a form, the page is autometically refreshed. this function prevents it.it is default behaviour	
//console.log(e.target)
//console.log(e.target[0].value)//show data what we are entering and submitting in the form as box 
//let newLi=document.createElement("li")//creating or adding new list
//newLi.className="list-group-item"//adding class to the new list
//console.log(newLi)
//at the end, how to append content or add it to the list. at the end.
//newLi.appendChild(document.createTextNode(e.target[0].value))
//console.log(newLi)
//ulElement.appendChild(newLi)//it is temporary. if we refresh again, the new element added will be removed.again.
//})
let listItem=document.getElementsByClassName("list-group")
formElement.addEventListener("submit",runEvent)
function runEvent(e){
	e.preventDefault()
	let inputElement0=document.querySelector('input[id="item"]')//targeting step
	//we have to add text as well a cross button X to the list.
	let newItem=document.createElement("li")
	newItem.className="list-group-item"
	newItem.append(inputElement0.value)
	let deleteBtn=document.createElement("button")
	deleteBtn.className="btn btn-danger btn-sm float-right delete"
	deleteBtn.append("X")
	newItem.append(deleteBtn)
	//now appending on the list
	listItem[0].append(newItem)
}

//one useful link- https://developer.mozilla.org/en-US/docs/Web/API/Window
console.log(innerHeight)
console.log(innerWidth)
console.log(outerHeight)
console.log(outerHeight)
function exit(){
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}	
}
console.log(getComputedStyle(dark))
function prompting(){
let sign = prompt("What's your sign?");
if (sign.toLowerCase() === "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}
}
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});//it will be shown to the console only if the network is lost.
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// the text that the button is initialized with
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "You have clicked this button.";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,//passive, to assert that the handler will not call preventDefault()
//once, to ensure that the event handler will only be called once.
    once: true,
  });
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
console.log(document.characterSet)//not Document
console.log(document.childElementCount)
console.log(document.children)
console.log(document.documentElement)
console.log(document.firstElementChild)
console.log(document.forms)
console.log(document.head)
console.log(document.images)
//other way to use addEventListener
//btn.addEventListener("click",addevent)
//function addevent(){}
let btn0=document.querySelector("#jora")
btn0.addEventListener("click", (e) => {//mouseenter is another type of event like click. it is fired when we or the mouse enter the button or element.
console.log(e.ctrlKey)//normal clicking the button will return false in console. but click with ctrl holding will show true in console
});
let mouseEvents=document.getElementById("mouseevents")
mouseEvents.addEventListener("mouseenter",mice)//mouseleave,mouseover,mouseout,mousedown,mouseup(when you release the mouse, it will be get fired) are also there
//mouseenter is not working in my browser as expected. once we are in the division, it should get fired continuously. it is working once we click it. browser 
//incompatibility????
function mice(e){//the function mice will be called 2 times in 2 different places. one is below box and another place is the submit button box
console.log("Event Types : "+e.type)
console.log(e.target.value)//to see what the user has entered
//document.body.style.backgroundColor="rgb(" +e.offsetX+", "e.offsetY+", 100)" this was not working on my browser. this will change the background color acoording to position
//of the division.
}
let inputElement=document.querySelectorAll('input[type="text"]')[1]//select all the elements whose input type is Text
inputElement.addEventListener("keyup",mice)//will be called in console if we enter something in the box or input. keydown is there too. keypress.
inputElement.addEventListener("focus",mice)//will be called if we click on the box
inputElement.addEventListener("blur",mice)//first you focus,then you come out. then it will be called.when we are deselecting
inputElement.addEventListener("cut",mice)//called when we select the written thing and cut it there only. copy and paste is also there 
let selectElement=document.querySelector("select")
selectElement.addEventListener("change",mice)//if we change the option,it will be fired.
//how to remove element. once we click to the red delete burton X, the item will be removed.not working in the browser
//listItem.addEventListener("click",removeEvent)
//let listItem0=document.getElementsById("items")
//function removeEvent(e){
//if(e.target.classList.contains("btn-danger")){//if we click the button region only,no other place. condition for it. do not use className. use classList
//if(confirm("want to delete this item?")){
//	listItem.removeChild(e.target.parentElement)
//}	
//}	
//}
//filter out element
let filterItem=document.getElementsById("filter")
filterItem.addEventListener("keyup",filterEvent)
function filterEvent(e){
	let text=e.target.value.toLowerCase()//to make the search case insensitive
	let items=document.getElementsByTagName("li")
	Array.from(items).forEach//to convert items into an array
	((item)=>{
		let searchText=item.childNodes[0].textContent
		if(searchText.toLowerCase().indexOf(text)!=-1){//if the search item is present 
		item.style.display="block"	
		}else{
		item.style.display="none"	
		}
	})
	
}