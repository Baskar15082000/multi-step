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
  const page1outer = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className = "priceblock";
    maindiv.id = i;
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

    page1outer.appendChild(maindiv);
  }
  cardBody.appendChild(page1outer);
  page1outer.addEventListener("click", pageselect);
  var containerDiv = document.createElement("div");
  containerDiv.className = "form-check form-switch d-flex py-2 px-5 ";
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
  const page3outer = document.createElement("div");
  page3outer.className = "page3outer";
  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className = "addOn";
    maindiv.id = i;
    maindiv.classList.add("d-flex");
    const div1 = document.createElement("div");
    div1.className = "imgdiv";
    const div1sub = document.createElement("input");

    div1sub.classList.add("form-check-input");
    div1sub.type = "checkbox";
    div1sub.className = "tickimg";
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

    maindiv.append(div1, div2, div3);
    page3outer.appendChild(maindiv);
  }
  cardBody.appendChild(page3outer);
  page3outer.addEventListener("change", pageselect1);

  currentStep = 3;
}

function step4(val1, val2, check, arr1, arr2) {
  head("Finishing up", "Double-check everything looks OK before confirming.");
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  const maindiv = document.createElement("div");
  maindiv.className = "finish d-flex flex-column";

  const div1 = document.createElement("div");
  div1.className = "final1 d-flex py-4 flex-row";

  const left1 = document.createElement("div");
  left1.className = "final1sub d-flex flex-column";
  const div1sub1 = document.createElement("div");
  const div1sub2 = document.createElement("div");
  div1sub1.textContent = val1;
  div1sub2.innerHTML = `<u>change</u>`;
  div1sub2.style.textDecoratio;
  left1.append(div1sub1, div1sub2);
  const right1 = document.createElement("div");
  right1.textContent = val2;
  div1.append(left1, right1);
  maindiv.appendChild(div1);
  var t0 = 0;
  for (let i = 0; i < arr1.length; i++) {
    const div2 = document.createElement("div");
    div2.className = "final2 d-flex p-1 flex-row";
    const div2sub1 = document.createElement("div");
    const div2sub2 = document.createElement("div");
    div2sub1.textContent = arr1[i];
    div2sub2.textContent = arr2[i];
    t0 = arr2[i].split("$");
    t0 = t0.join(" ");
    t0 = t0.split("+");
    t0 = t0.join(" ");
    t0 = t0.split("/");
    t0 = t0[0];
    div2.append(div2sub1, div2sub2);
    maindiv.appendChild(div2);
  }
  cardBody.appendChild(maindiv);
  const final = document.createElement("div");
  final.className = "total d-flex flex-row";
  const finalsub1 = document.createElement("div");
  const finalsub2 = document.createElement("div");
  finalsub1.textContent = "Total (per " + check + ")";
  var t1 = 0;
  t1 = val2.split("$");
  t1 = t1.join(" ");
  t1 = t1.split("/");
  t1 = t1[0];
  var total = parseInt(t0) + parseInt(t1);
  if (check === "month") {
    total = "$" + total + "/mo";
  } else {
    total = "$" + total + "/yr";
  }
  finalsub2.textContent = total;
  final.append(finalsub1, finalsub2);
  currentStep = 4;
  cardBody.appendChild(final);
}

function step5() {
  const newdiv = document.createElement("div");
  newdiv.className = "thank d-flex flex-column";
  const div1 = document.createElement("img");
  div1.className = "thankimg";

  div1.setAttribute("src", "./assets/images/icon-thank-you.svg");
  div1.setAttribute("alt", "");
  const div2 = document.createElement("div");
  div2.className = "thankyou";
  div2.textContent = "Thank yoy!";
  const div3 = document.createElement("div");
  div3.className = "thankcont";
  div3.textContent =
    " Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.";

  newdiv.append(div1, div2, div3);
  cardBody.appendChild(newdiv);
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
const prices1 = ["$90/yr", "$120/yr", "$150/yr"];

const next = document.getElementsByClassName("footerbutton");
console.log(next);
var vans1 = "";
var vans2 = "";
var arr1 = [];
var arr2 = [];
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
  } else if (currentStep === 3) {
    cardBody.replaceChildren();
    step4(vans1, vans2, check, arr1, arr2);
  } else {
    cardBody.replaceChildren();
    step5();
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

function pageselect(e) {
  const block = document.getElementsByClassName(e.target.className);

  for (let i = 0; i < block.length; i++) {
    block[i].style.borderColor = "gray";
  }

  //step4("ar", "$10", "month", "$14", ["on", "la"], ["$2", "$3"]);
  const v = document.getElementById(e.target.id);
  if (check === "month") {
    const v1 = v.getElementsByClassName("price");
    const v2 = v1[0].getElementsByClassName("sub1");
    const v3 = v1[0].getElementsByClassName("sub2");
    //console.log(v2.textContent);
    vans1 = v2[0].textContent + "(" + check + ")";
    vans2 = v3[0].textContent;
  } else {
    const v1 = v.getElementsByClassName("price");
    const v2 = v1[0].getElementsByClassName("sub1");
    const v3 = v1[0].getElementsByClassName("sub3");
    //console.log(v2.textContent);
    vans1 = v2[0].textContent + "(" + check + ")";
    vans2 = v3[0].textContent;
  }

  e.target.style.borderColor = "blue";
}

function pageselect1(e) {
  e.target.style.borderColor = "blue";
  var parent = e.target.parentNode.parentNode;
  if (e.target.checked) {
    parent.style.borderColor = "blue";
  } else {
    parent.style.borderColor = "gray";
  }
  const v1 = document.getElementById(e.target.parentNode.parentNode.id);
  const v2 = v1.getElementsByClassName("add");
  const v3 = v2[0].getElementsByClassName("addsub1");
  const v4 = v1.getElementsByClassName("div3sub");

  arr1.push(v3[0].textContent);
  arr2.push(v4[0].textContent);
}
