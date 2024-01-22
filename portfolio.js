const togglerBtn = document.querySelector('.toggler_bth');
const togglerBtnicon = document.querySelector('.toggler_bth i');
const dropdownManu = document.querySelector('.drop_menu');

togglerBtn.onclick = function () {
    dropdownManu.classList.toggle('open')
}


var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("sun-theme");
    if (document.body.classList.contains("sun-theme")) {
        icon.src = "new_Images/moon.png";
    }
    else {
        icon.src = "new_Images/sun.png";
    }

};




// -----MIXITUP FILTER --------// 

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


// -----LINK ACTIVE --------// 

const linkWork = document.querySelectorAll('.work_item')

function activework() {
    linkWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work')

}
linkWork.forEach(L => L.addEventListener("click", activework))


// -----LINK ACTIVE (Popup)--------// 

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        PortfolioDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portofolio_popup").classList.toggle("open");
}


document.querySelector(".portofolio_popup-close").addEventListener("click", togglePortfolioPopup);

function PortfolioDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portofolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portofolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}

// // ----------------------------------- Show scroll up ---------------///
const navLinkEls = document.querySelectorAll('.link');
const sectionEls = document.querySelectorAll('.section');

let current = 'home';

window.addEventListener('scroll', () => {

    sectionEls.forEach(sectionEL => {
        if (window.scrollY >= sectionEls.offsetTop) {
            current = sectionEL.id;
        }
    });
    navLinkEls.forEach(navLinkEls => {
        if (navLinkEls.href.includes(current)) {
            document.querySelector('.activelink').classList.remove('.activelink');
            navLinkEls.classList.add('.activelink');
        }
    });

});







