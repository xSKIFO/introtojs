let raceNumber = Math.floor(Math.random() * 1000);
var earlyRegister = false;
var runnerAge = 18;

if (runnerAge >= 18 && earlyRegister === true) {
  raceNumber +=1000;
  console.log(`Your race will start at 9:30 AM, your racing number is ${raceNumber}.`);

}
else if (runnerAge >= 18 && earlyRegister === false) {
  console.log(`Your race will start at 11:00 AM, your racing number is ${raceNumber}.`);

} else {
  console.log(`Your race will start at 12:30 PM, your racing number is ${raceNumber}.`);

}
