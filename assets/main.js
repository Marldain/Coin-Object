(function () {
  const coin = {
    state: 0,
    flip: function () {
      let newState = Math.random();
      if (newState >= 0.5) {
        newState = 1;
      } else {
        newState = 0;
      }
      this.state = newState;
    },

    toString: function () {
      if (this.state == 0) {
        return "Heads";
      } else {
        return "Tails";
      }
    },

    toHTML: function () {
      const image = document.createElement("img");
      if (this.state == 0) {
        image.src =
          "./assets/images/Back-Good-Luck-Heads-I-Win-Tails-Lose-Challenge-Gold-Coins.jpg";
      } else {
        image.src = "./assets/images/Uruguay_sm.jpg";
      }
      return image;
    },
  };

  function display20Flips(flips) {
    const results = [];
    for (let i = 0; i < flips; i++) {
      coin.flip();
      results[i] = coin.toString();
    }
    document.querySelector("#results").innerHTML = results;
    return results;
  }

  function display20Images(flips) {
    const results = [];
    for (let i = 0; i < flips; i++) {
      coin.flip();
      image = coin.toHTML();
      document.querySelector("#images").appendChild(image);
      results[i] = image;
    }
    return results;
  }

  display20Flips(20);
  display20Images(20);
})();
