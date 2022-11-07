//1. Modals
// Get the modal
var modal = document.getElementById("myModal") as HTMLDivElement;

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn") as HTMLButtonElement;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0] as HTMLSpanElement;

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//4. Phonebook
const book = document.getElementById("phoneBook") as HTMLDivElement;
class Addressee {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  constructor(firstName: string, lastName: string, phoneNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}

const firstPersObj = new Addressee("John", "Smith", "0538037000");
const secondPersObj = new Addressee("Sarah", "Parker", "0538424242");
const firstPers = JSON.stringify(firstPersObj);
const secondPers = JSON.stringify(secondPersObj);

const myTable = document.getElementById("myTable") as HTMLTableElement;

const formBtn = document.getElementById("formBtn") as HTMLButtonElement;
book.innerHTML += `<table id="myTable">
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Phone number</th>
</tr>
<tbody id="tbody">
<tr>
<td>${firstPersObj.firstName}</td>
<td>${firstPersObj.lastName}</td>
<td>${firstPersObj.phoneNumber}</td>
</tr>
<tr>
<td>${secondPersObj.firstName}</td>
<td>${secondPersObj.lastName}</td>
<td>${secondPersObj.phoneNumber}</td>
</tr></tbody>
</table>`;

formBtn.addEventListener("click", () => {
  const first: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  const surname = document.getElementById("surname") as HTMLInputElement;
  const tel = document.getElementById("tel") as HTMLInputElement;
  /* const firstInput = first.value; */
  const surnameInput = String(surname.value);
  const telInput = String(tel.value);
  const save: string[] = [first, surnameInput, telInput];

  const tableRef = document.getElementsByTagName("tbody")[1];

  tableRef.innerHTML += `<td>${first}</td>
  <td>${surnameInput}</td>
  <td>${telInput}</td>`;
  localStorage.setItem("newPerson", JSON.stringify(save));
});

//2
interface PersType {
  name: string;
  age: number;
}

function greet(pers: PersType) {
  return "Hello " + pers.name;
}

const pers = {
  name: "Dave",
  age: 20,
};
console.log(greet(pers));

//3
function isTruthy(val: any) {
  if (val) {
    console.log(val + " is Truthy");
  } else {
    console.log(val + " is falsy");
  }
}
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy(42);
isTruthy("0");
isTruthy("false");
isTruthy(new Date());
isTruthy(-42);
isTruthy(12n);
isTruthy(3.14);
isTruthy(-3.14);
isTruthy(Infinity);
isTruthy(-Infinity);
isTruthy(0);
isTruthy("");
isTruthy(false);
isTruthy(NaN);
isTruthy(null);
isTruthy(undefined);
