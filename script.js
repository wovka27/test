
function fn() {
   let el = document.getElementsByTagName('p');
   for (el of el) {
      el.innerHTML = 'А ни чо!';
      el.style.color = 'purple';
      el.style.margin = '0 auto';
      el.style.fontSize = '70px';
      el.style.fontWeight = '900';
      el.style.fontFamily = 'Arial';
      el.style.transition = '1.3s';
      el.style.transform = 'rotate(2880deg)';
      el.style.textAlign = 'center';
   }
};

function fn2() {
   let t = document.getElementsByTagName('p');
   for (t of t) {
      t.innerHTML = '';
      t.style.color = '';
      t.style.margin = '';
      t.style.fontSize = '';
      t.style.fontWeight = '';
      t.style.fontFamily = '';
      t.style.transition = '';
      t.style.transform = '';
      t.style.textAlign = '';
   }
};
