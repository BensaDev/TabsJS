const tabs = document.querySelectorAll('.tabs li');
const tabsArray = Array.from(tabs);
const content = document.querySelectorAll('.content > div');
const contentArray = Array.from(content);

tabsArray.forEach((el) => {
  el.addEventListener('click' , function(e){
    tabsArray.forEach((el) => {
      el.classList.remove('active');
    });
    contentArray.forEach((el) =>{
      el.style.display = 'none';
    });
    e.currentTarget.classList.add('active');
    let text = document.querySelector(e.currentTarget.dataset.text);
    text.style.display = 'block';
  });
});