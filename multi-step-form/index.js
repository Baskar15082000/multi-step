var cardBody = document.getElementById("innercard");
var goBack = document.querySelector(".goBack");
goBack.style.display = "none";
var cardTitle = "";
var cardSubtitle = "";

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
function step2(data, prices, link, plan) {
  cardBody.replaceChildren();
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
    const sub2 = document.createElement("div");

    sub1.textContent = data[i];
    sub2.textContent = prices[i];
    div2.appendChild(sub1);
    div2.appendChild(sub2);
    if (plan === "year") {
      const sub3 = document.createElement("div");
      sub3.textContent = "2 months free";
      div1.style.marginTop = "-25px";
      div2.appendChild(sub3);
    }
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
  goBack.style.display = "block";
}
const data = ["Arcade", "Advanced", "Pro"];
const prices = ["$9/mo", "$12/mo", "$15/mo"];
const link = [
  "./assets/images/icon-arcade.svg",
  "./assets/images/icon-advanced.svg",
  "./assets/images/icon-pro.svg",
];
const prices1 = ["$90/mo", "$120/mo", "$150/mo"];
//step2(data, prices1, link, "year");
step2(data, prices, link, "month");
var toggleSwitch = document.getElementById("toggleSwitch");
toggleSwitch.addEventListener("change", function (event) {
  if (event.target.checked) {
    step2(data, prices1, link, "year");
  } else {
    console.log("Switch is off");
  }
});
//const next = document.querySelector(".footerbutton");
console.log("ajdh");
