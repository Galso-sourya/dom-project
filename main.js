let form=document.getElementById("addForm");
let listItem=document.getElementsByClassName("list-group");
let filterItem=document.getElementById("filter");
form.addEventListener("submit",runEvent);
filterItem.addEventListener("keypress",filterEvent); //if you give keyup, you do not need to press the enter button to show the result
function runEvent(e){
e.preventDefault();
let inputElement=document.querySelector('input[id="item"]');
let newItem=document.createElement("li");
newItem.className="list-group-item";
newItem.append(inputElement.value);	
let deleteBtn=document.createElement("button");
deleteBtn.className="btn btn-danger btn-sm float-right delete";
deleteBtn.append("X");
newItem.append(deleteBtn);
listItem[0].append(newItem);
}
function filterEvent(e){
	let text=e.target.value.toLowerCase();//not case sensitive
	let items=document.getElementsByTagName("li");
	Array.from(items).forEach((item)=>{
		let searchText=item.childNodes[0].textContent;
		if(searchText.toLowerCase().indexOf(text)!=-1){
			item.style.display="block";
		}else{
			item.style.display="none";
		}
	});
}