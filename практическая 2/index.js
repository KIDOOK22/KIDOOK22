 "use strict";
 // 1
 document.getElementById('kidok').addEventListener('blur', e => {
    document.getElementById('lada').textContent = e.target.value;
  });

  // 2
  document.getElementById('Kolya').addEventListener('click', () => {
    document.getElementById('input2').disabled = true;
  });

  // 3
  document.getElementById('Kolya').addEventListener('click', () => {
    document.getElementById('input3').disabled = true;
  });
  document.getElementById('unblock3').addEventListener('click', () => {
    document.getElementById('input3').disabled = false;
  });

  // 4
  document.getElementById('Kolyan4ik').addEventListener('click', () => {
    document.getElementById('paragraph4').textContent = document.getElementById('checkbox4').checked ? 'привет' : 'пока';
  });

  // 5
  document.getElementById('KK').addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox5');
    checkbox.checked = !checkbox.checked;
  });

  // 6
  document.getElementById('XX').addEventListener('click', () => {
    const selected = document.
querySelector('input[name="radio6"]:checked');
    document.getElementById('paragraph6').textContent = selected ? selected.value : 'Ничего не выбрано';
  });

  // 7
  document.getElementById('II').addEventListener('input', e => {
    document.getElementById('paragraph7').textContent = e.target.value;
  });

  // 8
  document.getElementById('QQ').addEventListener('change', e => {
    document.getElementById('paragraph8').textContent = e.target.checked ? 'Отмечен' : 'Не отмечен';
  });

  // 9
  document.getElementById('RR').addEventListener('input', e => {
    e.target.style.borderColor = e.target.value.length < 5 ? 'green' : 'red';
  });

  

  // 11
  document.getElementById('input11-1').addEventListener('input', e => {
    if (e.target.value.length === 2) document.getElementById('input11-2').focus();
  });
  document.getElementById('input11-2').addEventListener('input', e => {
    if (e.target.value.length === 2) e.target.blur();
  });

  // 12
  const yearSelect12 = document.getElementById('MMM');
  for (let year = 2020; year <= 2030; year++) {
    yearSelect12.add(new Option(year, year));
  }
  yearSelect12.addEventListener('change', e => {
    const year = +e.target.value;
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    document.getElementById('paragraph12').textContent = isLeap ? 'Високосный год' : 'Не високосный год';
  });

  // 13
  document.getElementById('weekdaySelect13').addEventListener('change', e => {
    const day = +e.target.value;
    document.getElementById('paragraph13').textContent = day >= 6 ? 'Выходной день' : 'Рабочий день';
  });

  // 14
  const monthSelect14 = document.getElementById('monthSelect14');
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  months.forEach((month, index) => monthSelect14.add(new Option(month, index)));
  monthSelect14.value = new Date().getMonth();

  // 15
  document.getElementById('HWH').addEventListener('blur', e => {
    document.getElementById('select15').value = e.target.value;
  });

