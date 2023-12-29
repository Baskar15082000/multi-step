var cardBody = document.getElementById("innercard");
var goBack = document.querySelector(".goBack");
goBack.style.display = "none";
var cardTitle = "";
var cardSubtitle = "";
var currentStep = 1;
function head(heading, subheading) {
  cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "pt-1", "pb-1");
  cardTitle.textContent = heading;
  cardSubtitle = document.createElement("h6");
  cardSubtitle.classList.add("card-subtitle", "mb-2", "pb-1", "lh-2");
  cardSubtitle.textContent = subheading;
}

function step1() {
  head(
    "Personal info",
    "Please provide your name, email address, and phone number."
  );
  const form = document.createElement("form");
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  const labels = ["Name", "Email Address", "Phone Number"];
  labels.forEach((labelText, index) => {
    const label = document.createElement("label");

    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control", "mb-2");
    input.id = "input";
    let placeholderText = "";
    if (labelText === "Name") {
      placeholderText = "e.g. Stephen King";
    } else if (labelText === "Email Address") {
      placeholderText = "e.g. stephenking@lorem.com";
    } else if (labelText === "Phone Number") {
      placeholderText = "e.g. +1 234 567 890";
    }
    input.placeholder = placeholderText;
    formGroup.appendChild(label);
    formGroup.appendChild(input);
  });

  form.appendChild(formGroup);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(form);

  const card = document.getElementById("cardbody");
  card.appendChild(cardBody);
}
step1();
function step2(data, prices, prices1, link, plan) {
  head("Select your plan", "You have the option of monthly or yearly billing");
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className = "priceblock";
    maindiv.classList.add("d-flex");
    const div1 = document.createElement("img");
    div1.className = "img";

    div1.setAttribute("src", link[i]);
    div1.setAttribute("alt", "");

    const div2 = document.createElement("div");
    div2.className = "price";
    const sub1 = document.createElement("div");
    sub1.className = "sub1";
    const sub2 = document.createElement("div");
    sub2.className = "sub2";

    sub1.textContent = data[i];
    sub2.textContent = prices[i];
    div2.appendChild(sub1);
    div2.appendChild(sub2);

    const sub3 = document.createElement("div");
    sub3.className = "sub3";
    sub3.style.display = "none";
    sub3.textContent = prices1[i];
    div2.appendChild(sub3);

    const sub4 = document.createElement("div");
    sub4.className = "sub4";
    sub4.style.display = "none";
    sub4.textContent = "2 months free";

    div2.appendChild(sub4);
    // div1.style.marginTop = "-25px";

    maindiv.append(div1, div2);

    cardBody.appendChild(maindiv);
  }

  var containerDiv = document.createElement("div");
  containerDiv.className = "form-check form-switch d-flex py-1 px-5 ";
  containerDiv.id = "toggleSwitchContainer";

  var month = document.createElement("label");
  month.className = "form-check-label ";
  month.htmlFor = "toggleSwitch";
  month.textContent = "Monthly";

  var year = document.createElement("label");
  year.className = "form-check-label  ";
  year.htmlFor = "toggleSwitch";
  year.textContent = "Yearly";
  // Create the input element
  var inputElement = document.createElement("input");
  inputElement.className = "form-check-input ms-1";

  inputElement.type = "checkbox";
  inputElement.id = "toggleSwitch";

  containerDiv.appendChild(month);
  containerDiv.appendChild(inputElement);
  containerDiv.appendChild(year);
  cardBody.appendChild(containerDiv);

  currentStep = 2;
  goBack.style.display = "block";
  if (plan === "year") {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
}

// Pick add-ons Add-ons help enhance your gaming experience. Online service
// Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save
// +$2/mo Customizable Profile Custom theme on your profile +$2/mo
var check = "month";
function step3(step3data1, step3data2, step3data3, step3data4, check) {
  head("Pick add-ons", "Add-ons help enhance your gaming experience.");
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);

  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className = "addOn";
    maindiv.classList.add("d-flex");
    const div1 = document.createElement("div");
    div1.className = "imgdiv";
    const div1sub = document.createElement("img");
    div1sub.className = "tickimg";

    div1sub.setAttribute("src", "./assets/images/icon-checkmark.svg");
    div1sub.setAttribute("alt", "");
    div1sub.style.display = "none";
    div1.appendChild(div1sub);
    const div2 = document.createElement("div");
    div2.className = "add";
    const sub1 = document.createElement("div");
    sub1.className = "addsub1";
    const sub2 = document.createElement("div");
    sub2.className = "addsub2";

    sub1.textContent = step3data1[i];
    sub2.textContent = step3data2[i];
    div2.appendChild(sub1);
    div2.appendChild(sub2);
    const div3 = document.createElement("div");
    div3.className = "div3sub d-flex";
    if (check === "month") {
      div3.textContent = step3data3[i];
    } else {
      div3.textContent = step3data4[i];
    }

    cardBody.appendChild(maindiv);
    maindiv.append(div1, div2, div3);
  }
  const checkbox = document.getElementsByClassName("tickimg");
  checkbox[0].addEventListener("click", clickevent);
  currentStep = 3;
}
const step3data1 = ["Online service", "Larger storage", "Customizable profile"];
const step3data2 = [
  "Access to multiplayer games",
  "Extra 1TB of cloud save",
  "Custom theme on your profile",
];
const step3data3 = ["+$1/mo", "+$2/mo", "+$2/mo"];
const step3data4 = ["+$10/yr", "+$20/yr", "+$20/yr"];

const data = ["Arcade", "Advanced", "Pro"];
const prices = ["$9/mo", "$12/mo", "$15/mo"];
const link = [
  "./assets/images/icon-arcade.svg",
  "./assets/images/icon-advanced.svg",
  "./assets/images/icon-pro.svg",
];
const prices1 = ["$90/mo", "$120/mo", "$150/mo"];

const next = document.getElementsByClassName("footerbutton");
console.log(next);
next[0].addEventListener("click", nextpage);
function nextpage(e) {
  if (currentStep === 1) {
    cardBody.replaceChildren();
    step2(data, prices, prices1, link, "month");
    var toggleSwitch = document.getElementById("toggleSwitch");
    toggleSwitch.addEventListener("change", toggle);
  } else if (currentStep === 2) {
    cardBody.replaceChildren();
    step3(step3data1, step3data2, step3data3, step3data4, check);
  }
}
function toggle(e) {
  console.log(e.target.checked);
  const sub3 = document.querySelectorAll(".sub3");
  const sub2 = document.querySelectorAll(".sub2");
  const sub4 = document.querySelectorAll(".sub4");
  if (e.target.checked) {
    for (let i = 0; i < 3; i++) {
      sub2[i].style.display = "none";
      sub3[i].style.display = "block";
      sub4[i].style.display = "block";
    }
    check = "year";
    console.log(sub3);
  } else {
    for (let i = 0; i < 3; i++) {
      sub2[i].style.display = "block";
      sub3[i].style.display = "none";
      sub4[i].style.display = "none";
    }
  }
}
function clickevent(e) {
  console.log("F");
  console.log(e);
  const c = document.getElementsByClassName("tickimg");
  c.style.display = "block";
}
