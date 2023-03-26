export default function () {
  const nature = new Audio("assets/nature.wav");
  const rain = new Audio("assets/rain.wav");
  const coffeeshop = new Audio("assets/coffeeshop.wav");
  const fireplace = new Audio("assets/fireplace.wav");

  nature.loop = true;
  rain.loop = true;
  coffeeshop.loop = true;
  fireplace.loop = true;

  function toggleNature() {
    if (nature.paused) {
      nature.play();
      rain.pause();
      coffeeshop.pause();
      fireplace.pause();
    } else {
      nature.pause();
    }
  };

  function toggleRain() {
    if (rain.paused) {
      rain.play();
      nature.pause();
      coffeeshop.pause();
      fireplace.pause();
    } else {
      rain.pause();
    }
  };

  function toggleCoffeeshop() {
    if (coffeeshop.paused) {
      coffeeshop.play();
      rain.pause();
      nature.pause();
      fireplace.pause();
    } else {
      coffeeshop.pause();
    }
  };

  function toggleFireplace() {
    if (fireplace.paused) {
      fireplace.play();
      coffeeshop.pause();
      rain.pause();
      nature.pause();
    } else {
      fireplace.pause();
    }
  };

  return {
    toggleRain,
    toggleNature,
    toggleFireplace,
    toggleCoffeeshop
  };
};