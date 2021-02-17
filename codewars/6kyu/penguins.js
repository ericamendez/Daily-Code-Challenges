/**
 * The situation...

   The fastest penguins in the world have just swum
 for the ultimate prize in professional penguin swimming.
 The cameras that were capturing the race stopped recording half way through.
 The athletes, and the fans are in disarray waiting
 for the results.
 The challenge...

   Given the last recorded frame of the race, and an array of penguin athletes, work out the gold, silver and bronze medal positions.

 The rules...

   Assume all penguins swim at the same speed.
 Waves(~) take twice as long to swim through as smooth water(-).
 Penguins(p or P) are racing from left to right.
 There can be any number of lanes, and the race can be any length.
 All Lanes in a single race will be the same length.
 Penguin names are in the same order as the lanes.
 Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
 There will always be an equal amount of penguins and lanes.
 There will always be a top three(no draws).
 Examples...

   Snapshot:
   |
   -- --p-- - ~-- -- -- -- - |
   |
   -- --p-- - ~~-- -- -- -- |
   |
   -- --p-- - ~~~-- -- -- - |

   Penguins: ["Derek", "Francis", "Bob"]

 Expected Output:
   "GOLD: Derek, SILVER: Francis, BRONZE: Bob"
 Snapshot:
   |
   -~~-- -- -- -- -- --~--P-- -- -- - |
   |
   ~~--~P-- -- -- -- -- --~-- -- -- - |
   |
   -- -- -- --~-P-- -- -- -- -- -- -- - |
   |
   -- -- -- --~-P-- --~~~-- -- -- -- |

   Penguins: ["Joline", "Abigail", "Jane", "Gerry"]

 Expected Output:
   "GOLD: Joline, SILVER: Jane, BRONZE: Gerry"
 */

function calculateWinners(snapshot, penguins) {
  let filteredRaceArr = snapshot.split('|').filter(el => {
    if(el[0] === '-' || el[0] === '~') {
      return true
    }else {
      return false
    }
  });

  let outcome = {}

  filteredRaceArr.forEach((el, i) => {
    let raceStart = el.toLowerCase().split('p')[1]
    
    let score = raceStart.split('').reduce((acc, char, i) => {
      if(char === '-'){
        return acc + 1
      } else {
        return acc + 2
      }
    }, 0)

    outcome[penguins[i]] = score
  })

  let sortedOutcome = Object.entries(outcome).sort((a, b) => {
    return a[1] - b[1]
  })

  console.log(filteredRaceArr)
  return `GOLD: ${sortedOutcome[0][0]}, SILVER: ${sortedOutcome[1][0]}, BRONZE: ${sortedOutcome[2][0]}`
};

const snapshot = `|-~~------------~--p-------|
    |~~--~p------------~-------|
    |--------~-p---------------|
    |--------~-p----~~~--------|`;

const penguins = ["Joline", "Abigail", "Jane", "Gerry"];

console.log(calculateWinners(snapshot, penguins))