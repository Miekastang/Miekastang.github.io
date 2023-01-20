//Mieka Stang
//5/12/20
//(c) Public Access

//function get fortune with math.random

function getFortune (str){
var value = Math.floor(Math.random() * 76);;
  if (value == 0){
    return "You will see somebody that you can love.";
  }
  else if (value == 1){
    return "You will learn how to talk to cheetahs.";
  }
  else if (value == 2){
    return "You will build the biggest bicycle.";
  }
  else if (value == 3){
    return "You will swim with dolphins.";
  }
  else if (value == 4){
    return "You love cats.";
  }
  else if (value == 5){
    return "You could build a big scooter.";
  }
   else if (value == 6){
      return "You will ride on a unicorn.";
    }
    else if (value == 7){
      return "You’re awesome.";
    }
    else if (value == 8){
      return "May you have a wonderful day.";
    }
    else if (value == 9){
      return "You will speak one Tagalog word.";
    }
    else if (value == 10){
      return "You will light up other people’s day.";
    }
    else if (value == 11){
      return "You will take dance classes.";
    }
    else if (value == 12){
      return "Love will grow inside of you.";
    }
    else if (value == 13){
      return "You will build the coolest fort ever.";
    }
    else if (value == 14){
      return "You are loved.";
    }
    else if (value == 15){
      return "I love you.";
    }
    else if (value == 16){
      return "You will be kind and generous.";
    }
    else if (value == 17){
      return "You will speak Chinese.";
    }
    else if (value == 18){
      return "You will build the biggest tree house with a painted door and doorbell.";
    }
    else if (value == 19){
      return "You will swim with some fishes in an underground sea tank.";
    }
    else if (value == 20){
      return "You love fishes.";
    }
    else if (value == 21){
      return "You will have a blanket on your bed that lights up.";
    }
    else if (value == 22){
      return "You will build the coolest thing out of LEGOs.";
    }
    else if (value == 23){
      return "You will sew a beautiful dress if you want it.";
    }
    else if (value == 24){
      return "You will learn to speak mouse.";
    }
    else if (value == 25){
      return "You will learn to speak like a tiger.";
    }
    else if (value == 26){
      return "People will say fun facts about you every morning.";
    }
    else if (value == 27){
      return "You will build the biggest house in the whole wide world with a mouse on top for a toy.";
    }
    else if (value == 28){
      return "You will build a huge square with dogs balancing on it.";
    }
    else if (value == 29){
      return "You will build the biggest classroom in the whole world.";
    }
    else if (value == 30){
      return "You will build the biggest sparkle in the world.";
    }
    else if (value == 31){
      return "You will whisper “unicorn.”";
    }
    else if (value == 32){
      return "You will be the best mommy in the whole wide universe.";
    }
    else if (value == 33){
      return "You will build the biggest Transformer.";
    }
    else if (value == 34){
      return "You will build the biggest flag in the world.";
    }
    else if (value == 35){
      return "You can find the most precious thing on earth.";
    }
    else if (value == 36){
      return "Rock will light up your day.";
    }
    else if (value == 37){
      return "You will get the biggest puzzle.";
    }
    else if (value == 38){
      return "You will build the biggest castle in the world.";
    }
    else if (value == 39){
      return "You will build the coolest house ever.";
    }
    else if (value == 40){
      return "You will sew the most beautiful dress ever.";
    }
    else if (value == 41){
      return "You will build the biggest and prettiest robot.";
    }
    else if (value == 42){
      return "You will build the biggest planet Jupiter.";
    }
    else if (value == 43){
      return "You will have your favorite stuffy in the world.";
    }
    else if (value == 44){
      return "You are beautiful.";
    }
    else if (value == 45){
      return "You will make the biggest bow ever.";
    }
    else if (value == 46){
      return "You will sew a little puppet.";
    }
    else {
      return "You will find the biggest treasure ever.";
    }
}

//On button run function
var button = document.getElementById("button");
  button.addEventListener("click",function (){
    var fortune = getFortune();
  button.addEventListener("click", console.log("working"));
//output
  var outputEl = document.getElementById ("output");
    outputEl.innerHTML = fortune
    outputEl.style.fontFamily = "Comic Sans MS,Arial,sans-serif"
    outputEl.style.color = " #dfa727";
  outputEl.style.backgroundImage = "url('banner.png')";
  outputEl.style.backgroundPosition = "center";
  outputEl.style.backgroundRepeat = "no-repeat";
  outputEl.style.backgroundSize = "cover";
});
