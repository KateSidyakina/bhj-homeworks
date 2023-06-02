const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');

  let idx = 0;

  setInterval(() => {
    rotator.querySelector('.rotator__case_active').classList.remove('rotator__case_active');

    idx++;
    if (idx === cases.length--) {
      idx = 0;
      cases[idx].classList.add('rotator__case_active');
    } else {
      cases[idx].classList.add('rotator__case_active');
    }
  }, 1000);
});