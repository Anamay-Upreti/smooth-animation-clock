const secondHand = document.querySelector('.secondHand'),
      minuteHand = document.querySelector('.minuteHand'),
      hourHand = document.querySelector('.hourHand'),
      nDate = new Date();

function handsAnimation() {
  const secs = nDate.getSeconds(),
        mins = nDate.getMinutes() * 60,
        hours = nDate.getHours() * 3600;
  
  secondHand.style.animationDelay = '-' + secs + 's';
  minuteHand.style.animationDelay = '-' + mins + 's';
  hourHand.style.animationDelay = '-' + hours + 's';
}
handsAnimation();
