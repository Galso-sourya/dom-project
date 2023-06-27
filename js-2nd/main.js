let themeColors=document.querySelectorAll('input[type="radio"]')
//console.log(themeColors)
//when we are refreshing the page, the default color is coming. but how to prevent that? if we refresh, the background color will stay as it is from the radio button,
//whatever is selected presently.
//store themes
function storeTheme(theme){
	localStorage.setItem("theme",theme)//localStorage function is called only when we want to store something locally.in browser only.very limited capacity.
	//go to application and check local storage in developer tool
}
//apply themes.even if we refresh the page, the background color will not go away.
function applyTheme(){
	const activeTheme=localStorage.getItem("theme")//it will fetch the value whatever is stored in local storage
	themeColors.forEach((themeOption)=>{
		if(activeTheme===themeOption.id){
			themeOption.checked=true
		}
	})
}
document.onload=applyTheme()//when the page is being loaded, we will call this function
themeColors.forEach((themeOption)=>{
	themeOption.addEventListener("click",()=>{
		console.log(themeOption)
		storeTheme(themeOption.id)//we are storing the id
	})
})
let form=document.getElementById("addForm")
let listItem=document.getElementById("items")
let filterItem=document.getElementById("filter")
//console.log(listItem)
form.addEventListener("submit",runEvent)
listItem.addEventListener("click",removeEvent)
filterItem.addEventListener("keypress",filterEvent)//if you use keyup, you do not need to press enter to filter
function runEvent(e){
	e.preventDefault()
	//console.log(e.target)
	let inputElement=document.querySelector('input[id="item"]')
	//console.log(inputElement.value)
	let newItem=document.createElement("li")
	newItem.className="list-group-item"
	newItem.append(inputElement.value)
	console.log(newItem)
	let deleteBtn=document.createElement("button")
	deleteBtn.className="btn btn-danger btn-sm float-right delete"
	deleteBtn.append("X")
	//console.log(deleteBtn)
	newItem.append(deleteBtn)
	listItem.append(newItem)
}
function removeEvent(e){
//console.log(e.target.parentElement)	
//console.log(e.target)
if(e.target.classList.contains("btn-danger")){
	//console.log(e.target.classList)
	//console.log(e.target.className)
	//console.log(e.target)
	if(confirm("want to delete this item?")){
	//console.log(e.target)
	//console.log(e.target.parentElement)
	listItem.removeChild(e.target.parentElement)
	
	}
}	
}
//filter out elements
function filterEvent(e){
console.log(e.target.value)
let text=e.target.value.toLowerCase()
let items=document.getElementsByTagName("li")
//console.log(items)	
Array.from(items).forEach
((item)=>{
	//console.log(item)
	//console.log(item.children)
	//console.log(item.childNodes)
	//console.log(item.textContent)
	//console.log(item.childNodes[0].textContent)
	let searchText=item.childNodes[0].textContent
	if(searchText.toLowerCase().indexOf(text)!=-1){
		item.style.display="block"
	}else{
	item.style.display="none"	
	}
})
}