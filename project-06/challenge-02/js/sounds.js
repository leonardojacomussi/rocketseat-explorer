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

  function toggleNatureVolume(value) {
    nature.volume = value;
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

  function toggleRainVolume(value) {
    rain.volume = value;
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

  function toggleCoffeeshopVolume(value) {
    coffeeshop.volume = value;
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

  function toggleFireplaceVolume(value) {
    fireplace.volume = value;
  };

  function resetVolumes() {
    rain.volume = .5;
    nature.volume = .5;
    fireplace.volume = .5;
    coffeeshop.volume = .5;
  };

  return {
    toggleRain,
    toggleRainVolume,
    toggleNature,
    toggleNatureVolume,
    toggleFireplace,
    toggleFireplaceVolume,
    toggleCoffeeshop,
    toggleCoffeeshopVolume,
    resetVolumes
  };
};