// ===============================
// JOSHI FAMILY TREE
// script.js
// ===============================

// Welcome Message
window.onload = function () {

    console.log("Joshi Family Tree Loaded Successfully");

    alert("🙏 Welcome to Joshi Family Tree Website");

};

// ===============================
// Explore Button
// ===============================

const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function () {

        const section = document.querySelector("#family");

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        } else {

            alert("Family Section Coming Soon");

        }

    });

}

// ===============================
// Navigation Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const id = this.getAttribute("href");

        if (id.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(id);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});

// ===============================
// Member Card Click
// ===============================

const members = document.querySelectorAll(".member-card");

members.forEach(card => {

    card.addEventListener("click", function () {

        let name = this.dataset.name;

        alert("Opening Profile : " + name);

    });

});

// ===============================
// Birthday Reminder
// ===============================

const today = new Date();

const month = today.getMonth() + 1;

const day = today.getDate();

if (month === 8 && day === 20) {

    alert("🎂 Happy Birthday Jiya!");

}

// ===============================
// Dark Mode
// ===============================

const darkBtn = document.querySelector("#darkMode");

if (darkBtn) {

    darkBtn.onclick = function () {

        document.body.classList.toggle("dark");

    }

}

// ===============================
// Footer Year
// ===============================

const year = document.querySelector("#year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}
