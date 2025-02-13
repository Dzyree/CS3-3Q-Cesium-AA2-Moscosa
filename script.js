function respondToClick() {
    let P = parseFloat(prompt('input the initial population here pogi: '));
    let r = parseFloat(prompt('input rate of growth here pogi: '));
    let time = parseFloat(prompt('input time here pogi (hrs): '));

    let finalPopulation = Math.round(P*Math.pow(Math.E,r*time));

   document.getElementById("result").innerText = finalPopulation;

   let location = prompt('where is the monster? ');
   let name = prompt('what is the name of the monster? ');
   let populationOfMonster = name.toUpperCase(name.concat(' ',location.toUpperCase()));
   document.getElementById("result").innerText= "After " + time + " hours, the population of " + populationOfMonster + " has risen to " + finalPopulation;


   

}

