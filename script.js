"use strict";

// vending machine
const colaPrice1 = 2.00;
const peanutPrice1 = 3.00;
const chocolatePrice1 = 4.00;
const gummyPrice1 = 6.00;
let total1 = 0.00;


const colaPrice = document.querySelector(".options .cola");
const peanutPrice = document.querySelector(".options .peanut");
const chocolatePrice = document.querySelector(".options .chocolate");
const gummyPrice = document.querySelector(".options .gummies");
const total = document.querySelector(".total");

const incrementTotal = (amount) => {
    total1 += amount;
    total.textContent = "$" + total1.toFixed(2);
}

colaPrice.addEventListener("click", () => {
    incrementTotal(colaPrice1);
});
peanutPrice.addEventListener("click", () => {
    incrementTotal(peanutPrice1);
});
chocolatePrice.addEventListener("click", () => {
    incrementTotal(chocolatePrice1);
});
gummyPrice.addEventListener("click", () => {
    incrementTotal(gummyPrice1);
});

// Make money
const bank = document.querySelector(".bank");
const main = document.querySelector("main");
const coinForm = document.getElementById("coinForm");
coinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let coinAmount = document.getElementById("many");
    let coinType = document.getElementById("coins");
    console.log(coinAmount.value);
    console.log(coinType.value);
    
    for(let i = 0; i < coinAmount.value; i++) {
        console.log("HI");
        const newDiv = document.createElement("div");
        newDiv.textContent = coinType.value;
        newDiv.classList.add("coin-drawing", coinType.value);
        newDiv.addEventListener("click", () => {
            newDiv.remove();
        })
        bank.append(newDiv);
    }
    coinAmount = "";
    coinType = "";
    
});

const on_button = document.getElementById("on");
const off_button = document.getElementById("off");
const toggle_button = document.getElementById("toggle");
const end_button = document.getElementById("end");
const turnOn = () => {
    const bulb = document.getElementById("light");
    bulb.style.backgroundColor = "yellow";
}
on_button.addEventListener("click", turnOn);
const turnOff = () => {
    const bulb = document.getElementById("light");
    bulb.style.backgroundColor = "gray";
}
off_button.addEventListener("click", turnOff);

const toggleLight = () => {
    const bulb = document.getElementById("light");
    bulb.style.backgroundColor === "yellow" ? bulb.style.backgroundColor = "gray" : bulb.style.backgroundColor = "yellow"
}
toggle_button.addEventListener("click", toggleLight);


const end = () => {
    const bulb = document.getElementById("light");
    bulb.style.display = "none";
    on_button.removeEventListener("click", turnOn)
    off_button.removeEventListener("click", turnOff)
    toggle_button.removeEventListener("click", toggleLight)
    end_button.removeEventListener("click", end)
}
end_button.addEventListener("click", end);