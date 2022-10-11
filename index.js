const menuTrigger = document.getElementById('menu-trigger');
const navUL = document.querySelector(".links");

menuTrigger.addEventListener('click', () => {
  navUL.classList.toggle('show');

});

// dropdown 
$(document).ready(function dropDown() {
  $('.fa').click(function () {
    $(this).closest('.dropdown').find('.dropdown-content').toggle();
  })
});


//News Api 
const newsList = document.getElementById("news-list");
let healthyNews = [];
async function loadNews() {
  try {
    const news = await fetch("https://health.gov/myhealthfinder/api/v3/myhealthfinder.json");
    healthyNews = await news.json();
    let data = healthyNews.Result.Resources.all.Resource;
    // console.log(data)
    displayNews(data);
  }
  catch (err) {
    console.log(err);
  }
}

function displayNews(information) {
  const desc = information.map((topic) => {
    return `
        <li>
         <h3>${topic.Title}</h3>
        <p>${topic.MyHFDescription}</p>
        <a href="${topic.AccessibleVersion}">Read more</a>
        </li>`
  }).join('');
  newsList.innerHTML = desc;
}

loadNews();
