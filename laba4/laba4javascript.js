let headingsBtn = document.querySelectorAll(".headings_btn");
let btnShowAllPublication = document.querySelector("#show_all_publication");


btnShowAllPublication.addEventListener("click", () => {
    let mainItems = document.querySelectorAll(".main_item");

    mainItems.forEach(it => {

        if (it.classList.contains('hide') || it.classList.contains('show')) {
            it.classList.remove('hide');
            it.classList.remove('show');
        }

    })
})

const FilterMainItems = categorie => {
    let mainItems = document.querySelectorAll(".main_item[data-categories]");

    mainItems.forEach(item => {
        let categoriesItem = item.dataset.categories.split(', ');

        let result = categoriesItem.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block"))
            item.classList.remove("block")
        else
            item.classList.remove("hide")

        item.classList.add(result ? "block" : "hide");
    })
};

headingsBtn.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});

function toggleMenu() {
    var menuBox = document.getElementById('burger_blocks');   
    var headerContainer = document.getElementById('header_container');   
    var mainContainer = document.getElementById('main_container');   
    var footerContainer = document.getElementById('footer_container');   

    menuBox.style.display = "block";

    headerContainer.style.display = "none";
    mainContainer.style.display = "none";
    footerContainer.style.display = "none";
    document.body.style.backgroundColor = "#624C90"
  }

  function closeMenu() {
    var headerContainer = document.getElementById('header_container');   
    var mainContainer = document.getElementById('main_container');   
    var footerContainer = document.getElementById('footer_container'); 
    var menuBox = document.getElementById('burger_blocks'); 
    
    menuBox.style.display = "none";

    headerContainer.style.display = "block"
    mainContainer.style.display = "block";
    footerContainer.style.display = "block";
    document.body.style.backgroundColor = "white"
  }
