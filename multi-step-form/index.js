var cardBody = document.getElementById("innercard");
var goBack = document.querySelector(".goBack");
goBack.addEventListener("click", gobackfunc);
goBack.style.display = "none";
const button = document.querySelectorAll(".button");
const next = document.getElementsByClassName("footerbutton");

var cardTitle = "";
var cardSubtitle = "";
var currentStep = 1;
function head(heading, subheading) {
  cardTitle = document.createElement("h5");

  cardTitle.classList.add("card-title", "pt-1", "pb-1");
  cardTitle.textContent = heading;
  cardTitle.style.color = "var(--marine-blue)";

  cardSubtitle = document.createElement("h6");
  cardSubtitle.classList.add("card-subtitle", "mb-2", "pb-1", "lh-2");

  cardSubtitle.style.color = "var(--cool-gray)";

  cardSubtitle.innerHTML = "<span id='subhead'>" + subheading + "</span>";
}
var s1 = "";
var s2 = "";
var s3 = "";
var s4 = "";
function step1() {
  document.getElementById("b1").style.backgroundColor = "var(--light-blue)";
  goBack.style.display = "none";
  head(
    "Personal info",
    "Please provide your name, email address, and phone number."
  );
  s1 = document.createElement("div");
  const form = document.createElement("form");
  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  const labels = ["Name", "Email Address", "Phone Number"];
  labels.forEach((labelText, index) => {
    const label = document.createElement("label");

    label.textContent = labelText;
    label.style.color = "var(--marine-blue)";
    label.style.fontSize = ".9.4rem";

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control", "mb-3");
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
  s1.append(cardTitle, cardSubtitle, form);
  cardBody.appendChild(s1);
}

step1();
var check = "monthly";
var month = document.createElement("label");
var year = document.createElement("label");

function step2(data, prices, prices1, link) {
  document.getElementById("b2").style.backgroundColor = "var(--light-blue)";

  head("Select your plan", "You have the option of monthly or yearly billing");
  s2 = document.createElement("div");
  const page1outer = document.createElement("div");
  s2.appendChild(cardTitle);
  s2.appendChild(cardSubtitle);
  page1outer.className = "page_2  d-flex flex-column  flex-lg-row";
  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className =
      "priceblock  m-lg-2 p-lg-2 py-lg-3 d-flex flex-lg-column ";
    maindiv.id = i;
    maindiv.classList.add("d-flex");
    const div1 = document.createElement("img");
    div1.className = "img";

    div1.setAttribute("src", link[i]);
    div1.setAttribute("alt", "");

    const div2 = document.createElement("div");
    div2.className = "price py-lg-4";

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
  s2.appendChild(page1outer);

  page1outer.addEventListener("click", pageselect);
  var containerDiv = document.createElement("div");
  containerDiv.className = "form-check form-switch d-flex py-2 px-5 ";
  containerDiv.id = "toggleSwitchContainer";

  month.className = "form-check-label ";
  month.htmlFor = "toggleSwitch";
  month.textContent = "Monthly";
  month.style.color = "var(--marine-blue)";

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

  s2.appendChild(containerDiv);
  cardBody.appendChild(s2);

  currentStep = 2;
  goBack.style.display = "block";
  // if (plan === "year") {
  //   toggleSwitch.checked = true;
  // } else {
  //   toggleSwitch.checked = false;
  // }
}

// Pick add-ons Add-ons help enhance your gaming experience. Online service
// Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save
// +$2/mo Customizable Profile Custom theme on your profile +$2/mo
function step3(step3data1, step3data2, step3data3, step3data4, check) {
  document.getElementById("b3").style.backgroundColor = "lightblue";

  next[0].textContent = "Next step";
  next[0].style.backgroundColor = "var(--marine-blue)";
  s3 = document.createElement("div");
  head("Pick add-ons", "Add-ons help enhance your gaming experience.");
  s3.appendChild(cardTitle);
  s3.appendChild(cardSubtitle);
  const page3outer = document.createElement("div");
  page3outer.className = "page3outer";
  for (let i = 0; i < 3; i++) {
    const maindiv = document.createElement("div");
    maindiv.className = "addOn py-2 ";
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
    sub1.style.fontWeight = "500";
    sub1.style.fontSize = ".9rem";
    sub1.style.color = "var(--marine-blue)";
    const sub2 = document.createElement("div");
    sub2.className = "addsub2";
    sub2.style.fontWeight = "400";
    sub2.style.fontSize = ".75rem";
    sub2.style.color = "var(--cool-gray)";
    sub1.textContent = step3data1[i];
    sub2.textContent = step3data2[i];
    div2.appendChild(sub1);
    div2.appendChild(sub2);
    const div3 = document.createElement("div");

    div3.className = "div3sub d-flex";
    div3.style.fontSize = ".9rem";
    div3.style.color = "var(--purplish-blue)";

    if (check === "monthly") {
      div3.textContent = step3data3[i];
    } else {
      div3.textContent = step3data4[i];
    }

    maindiv.append(div1, div2, div3);
    page3outer.appendChild(maindiv);
  }
  s3.appendChild(page3outer);
  cardBody.appendChild(s3);
  page3outer.addEventListener("change", pageselect1);

  currentStep = 3;
}

function step4(val1, val2, check, arr1, arr2) {
  console.log(val1 + "  " + val2);
  document.getElementById("b4").style.backgroundColor = "lightblue";
  s4.createElement = document.createElement("div");
  next[0].textContent = "Confirm";
  next[0].style.backgroundColor = "var(--purplish-blue)";

  head("Finishing up", "Double-check everything looks OK before confirming.");
  s4 = document.createElement("div");
  s4.appendChild(cardTitle);
  s4.appendChild(cardSubtitle);
  const maindiv = document.createElement("div");
  maindiv.className = "finish d-flex flex-column";

  const div1 = document.createElement("div");
  div1.className = "final1 d-flex py-4 flex-row";

  const left1 = document.createElement("div");
  left1.className = "final1sub d-flex flex-column";
  const div1sub1 = document.createElement("div");
  const div1sub2 = document.createElement("div");
  div1sub1.textContent = val1;
  div1sub1.style.color = "var(--marine-blue)";
  div1sub1.style.fontWeight = "500";
  div1sub1.style.fontSize = ".9rem";
  div1sub2.innerHTML = `<u id = changed>change</u>`;
  div1sub2.style.color = "var(--cool-gray)";
  div1sub2.style.fontWeight = "400";
  div1sub2.style.fontSize = ".9rem";
  div1sub2.style.textDecoratio;
  left1.append(div1sub1, div1sub2);
  const right1 = document.createElement("div");
  right1.textContent = val2;
  right1.style.color = "var(--marine-blue)";
  right1.style.fontWeight = "500";
  right1.style.fontSize = ".9rem";
  div1.append(left1, right1);

  maindiv.appendChild(div1);
  var t1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    const div2 = document.createElement("div");
    div2.className = "final2 d-flex p-1 flex-row";
    const div2sub1 = document.createElement("div");
    const div2sub2 = document.createElement("div");
    div2sub1.textContent = arr1[i];
    div2sub1.style.color = "var(--cool-gray)";
    div2sub1.style.fontWeight = "400";
    div2sub1.style.fontSize = ".9rem";
    var conversion = arr2[i].split("/");
    console.log(conversion);
    if (check === "monthly") {
      conversion[1] = "/mo";
    } else {
      conversion[1] = "/yr";
    }
    conversion = conversion.join("");
    div2sub2.textContent = conversion;
    div2sub2.style.color = "var(--cool-gray)";
    div2sub2.style.fontWeight = "400";
    div2sub2.style.fontSize = ".9rem";
    var t0 = arr2[i].split("$");
    t0 = t0.join(" ");
    t0 = t0.split("+");
    t0 = t0.join(" ");
    t0 = t0.split("/");
    t0 = t0[0];
    t1 += parseInt(t0);
    div2.append(div2sub1, div2sub2);
    maindiv.appendChild(div2);
  }
  s4.appendChild(maindiv);
  const final = document.createElement("div");
  final.className = "total d-flex flex-row";
  const finalsub1 = document.createElement("div");
  const finalsub2 = document.createElement("div");
  finalsub1.textContent = "Total (per " + check + ")";
  finalsub1.style.color = "var(--cool-gray)";
  finalsub1.style.fontWeight = "400";
  finalsub1.style.fontSize = ".9rem";
  var t2 = 0;
  t2 = val2.split("$");
  t2 = t2.join(" ");
  t2 = t2.split("/");
  t2 = t2[0];
  var total = t1 + parseInt(t2);
  if (check === "monthly") {
    total = "$" + total + "/mo";
  } else {
    total = "$" + total + "/yr";
  }
  finalsub2.textContent = total;
  finalsub2.style.color = "var(--purplish-blue)";
  final.append(finalsub1, finalsub2);
  currentStep = 4;
  s4.appendChild(final);
  cardBody.appendChild(s4);
}

function step5() {
  const footer = document.querySelectorAll(".footer");
  footer[0].style.visibility = "hidden";
  console.log(footer);
  const newdiv = document.createElement("div");
  newdiv.className = "thank d-flex flex-column";
  const div1 = document.createElement("img");
  div1.className = "thankimg";

  div1.setAttribute("src", "./assets/images/icon-thank-you.svg");
  div1.setAttribute("alt", "");
  const div2 = document.createElement("div");
  div2.className = "thankyou";
  div2.textContent = "Thank you!";
  const div3 = document.createElement("div");
  div3.className = "thankcont";
  div3.textContent =
    " Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.";

  newdiv.append(div1, div2, div3);
  cardBody.appendChild(newdiv);
}

const step3data1 = ["Online service", "Larger storage", "Customizable profile"];
const step3data2 = [
  "Access to multiplayer games",
  "Extra 1TB of cloud save",
  "Custom theme on your profile",
];
const step3data3 = ["+$1/mo", "+$2/mo", "+$2/mo "];
const step3data4 = ["+$10/yr", "+$20/yr", "+$20/yr "];

const data = ["Arcade", "Advanced", "Pro"];
const prices = ["$9/mo", "$12/mo", "$15/mo"];
const link = [
  "./assets/images/icon-arcade.svg",
  "./assets/images/icon-advanced.svg",
  "./assets/images/icon-pro.svg",
];
const prices1 = ["$90/yr", "$120/yr", "$150/yr"];

console.log(next);
var vans1 = "";
var vans2 = "";
var arr1 = [];
var arr2 = [];
next[0].addEventListener("click", nextpage);
function nextpage(e) {
  button.forEach((e) => (e.style.backgroundColor = ""));

  if (currentStep === 1) {
    cardBody.replaceChildren();
    step2(data, prices, prices1, link, "month");
    var toggleSwitch = document.getElementById("toggleSwitch");
    toggleSwitch.addEventListener("change", toggle);
  } else if (currentStep === 2) {
    if (vans1 === "" && vans2 === "") {
      alert("please select any plan to continue");
    } else {
      arr1 = [];
      arr2 = [];
      cardBody.replaceChildren();
      step3(step3data1, step3data2, step3data3, step3data4, check);
    }
  } else if (currentStep === 3) {
    cardBody.replaceChildren();
    step4(vans1, vans2, check, arr1, arr2);
  } else {
    cardBody.replaceChildren();
    step5();
  }
}

function gobackfunc() {
  button.forEach((e) => (e.style.backgroundColor = ""));

  if (currentStep === 2) {
    document.getElementById("b1").style.backgroundColor = "var(--light-blue)";
    goBack.style.display = "none";
    cardBody.replaceChildren(s1);

    currentStep--;
  } else if (currentStep === 3) {
    document.getElementById("b2").style.backgroundColor = "var(--light-blue)";
    currentStep--;
    cardBody.replaceChildren(s2);

    var toggleSwitch = document.getElementById("toggleSwitch");
    toggleSwitch.addEventListener("change", toggle);
  } else if (currentStep === 4) {
    document.getElementById("b3").style.backgroundColor = "var(--light-blue)";
    next[0].textContent = "Next Step";
    next[0].style.backgroundColor = "var(--marine-blue)";
    cardBody.replaceChildren(s3);
    currentStep--;
  }
}

function toggle(e) {
  console.log(e.target.checked);
  const sub3 = document.querySelectorAll(".sub3");
  const sub2 = document.querySelectorAll(".sub2");
  const sub4 = document.querySelectorAll(".sub4");
  const block = document.getElementsByClassName("priceblock");
  console.log(block);
  for (let i = 0; i < block.length; i++) {
    block[i].style.borderColor = "gray";
    block[i].style.backgroundColor = "";
  }

  if (e.target.checked) {
    for (let i = 0; i < 3; i++) {
      sub2[i].style.display = "none";
      sub3[i].style.display = "block";
      sub4[i].style.display = "block";
    }
    check = "yearly";
    console.log(sub3[0]);
    year.style.color = "var(--marine-blue)";
    month.style.color = "";
    console.log(check);
  } else {
    for (let i = 0; i < 3; i++) {
      sub2[i].style.display = "block";
      sub3[i].style.display = "none";
      sub4[i].style.display = "none";
    }
    month.style.color = "var(--marine-blue)";
    year.style.color = "";
    check = "monthly";
    console.log(check);
  }
}

function pageselect(e) {
  const block = document.getElementsByClassName(e.target.className);
  console.log(block);
  for (let i = 0; i < block.length; i++) {
    block[i].style.borderColor = "var(--cool-gray)";
    block[i].style.backgroundColor = "";
  }

  //step4("ar", "$10", "month", "$14", ["on", "la"], ["$2", "$3"]);
  const v = document.getElementById(e.target.id);
  if (check === "monthly") {
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

  e.target.style.borderColor = "var(--purplish-blue)";
  e.target.style.backgroundColor = "var(--light-blue)";
}

function pageselect1(e) {
  e.target.style.borderColor = "var(--purplish-blue)";
  var parent = e.target.parentNode.parentNode;
  if (e.target.checked) {
    parent.style.borderColor = "var(--purplish-blue)";
    parent.style.backgroundColor = "var(--light-blue)";
    const v1 = document.getElementById(e.target.parentNode.parentNode.id);
    const v2 = v1.getElementsByClassName("add");
    const v3 = v2[0].getElementsByClassName("addsub1");
    const v4 = v1.getElementsByClassName("div3sub");

    arr1.push(v3[0].textContent);
    arr2.push(v4[0].textContent);
    arr1 = [...new Set(arr1)];
    arr2 = [...new Set(arr2)];
  } else {
    console.log("g");
    parent.style.borderColor = "var(--cool-gray)";
    parent.style.backgroundColor = "";
    const v1 = document.getElementById(e.target.parentNode.parentNode.id);
    const v2 = v1.getElementsByClassName("add");
    const v3 = v2[0].getElementsByClassName("addsub1");
    const v4 = v1.getElementsByClassName("div3sub");
    arr1 = arr1.filter((e) => v3[0].textContent !== e);
    arr2 = arr2.filter((e) => v4[0].textContent !== e);
  }
}
