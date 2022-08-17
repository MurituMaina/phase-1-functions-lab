// Code your solution in this file!
let distanceInBlocks 
let blocks;
function distanceFromHqInBlocks(blocks){
  if(blocks>=42){
  distanceInBlocks = blocks - 42;
  return distanceInBlocks;
}
else 
{
  distanceInBlocks = 42 - blocks;
  return distanceInBlocks;
}}
distanceFromHqInBlocks(50)
let distanceInFeet;
function distanceFromHqInFeet(block){
distanceInBlocks= distanceFromHqInBlocks(block)
distanceInFeet = distanceInBlocks * 264;
console.log(`I got it now ${distanceInFeet}`)
return distanceInFeet;

  }
  
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)


function distanceTravelledInFeet(start, destination){
let distanceTravelled;
  if(destination >= start){
    distanceTravelled = (destination - start) * 264;
  return distanceTravelled;
} 
else{
  distanceTravelled = (start - destination) * 264;
  return distanceTravelled; 
}
  
}
console.log(distanceTravelledInFeet(34,38));



function calculatesFarePrice(start, destination){
let distanceTravelled=distanceTravelledInFeet(start, destination);
let fare;
  if(distanceTravelled< 400){
  fare =0;
  console.log(fare + ' gives customers a free sample')
  return fare;
  }
  else if(distanceTravelled>=400 && distanceTravelled<2000){
  fare = (distanceTravelled-400) * 0.02;
  console.log(fare + ' charges 2 cents per foot when total feet travelled is between 400 and 2000')
  return fare;
  }
  else if(distanceTravelled>=2000 && distanceTravelled<2500){
  fare =(distanceTravelled - 400) * 0.02
    if(distanceTravelled > 528){
    fare= 25;
    console.log(fare)
    return fare;
    }}
  else if(distanceTravelled >2500){
fare = 'cannot travel that far'
return fare;
  
}

  
}
calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);
