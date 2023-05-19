const tabs = Array.from(document.querySelectorAll('.tabs'));

tabs.forEach((tab) => {
  const tabItems = Array.from(tab.querySelectorAll('.tab'));
  const tabContents = Array.from(tab.querySelectorAll('.tab__content'));

  tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      tabItems.forEach((item) => {
        if (item.classList.contains('tab_active')) {
          item.classList.remove('tab_active');
        }
      });

      tabContents.forEach((content) => {
        if (content.classList.contains('tab__content_active')) {
          content.classList.remove('tab__content_active');
        }
      });

      item.classList.add('tab_active');
      tabContents[index].classList.add('tab__content_active');
    });
  });
});