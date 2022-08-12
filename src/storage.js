import ChocolateShake from "../img/choco-shake.jpg";
import StrawberryShake from "../img/strawberry-shake.jpg";
import VanillaShake from "../img/vanilla-shake.jpg";

export function ShakeStorage(){
    const shakes = [];

    function init(){
        console.log(ChocolateShake)
        addShake('Chocolate Shake', ChocolateShake);
        addShake('Strawberry Shake', StrawberryShake);
        addShake('Vanilla Shake', VanillaShake);
    }

    const addShake = function(shakeName,shakeImg){
        let newShake = {};
        newShake.name = shakeName;
        newShake.img = shakeImg;
        shakes.push(newShake);
    }

    const removeShake = function(shake){
        if(shakes.includes(shake)){
            shakes.splice(shakes.indexOf(shake),1);
        }
    }

    const getShakes = function(){
        return shakes;
    }

    init();
    return {addShake, removeShake, getShakes};
}


