// Define the gameObject function that returns the full game data
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // numPointsScored function - returns the number of points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return "Player not found"; // If player name is not found
  }
  
  // shoeSize function - returns the shoe size of the player
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return "Player not found"; // If player name is not found
  }
  
  // teamColors function - returns the colors of the team
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found"; // If team name is not found
  }
  
  // teamNames function - returns an array of all team names
  function teamNames() {
    const game = gameObject();
    const teams = [];
    for (let team in game) {
      teams.push(game[team].teamName);
    }
    return teams;
  }
  
  // playerNumbers function - returns an array of player numbers for a specific team
  function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (let team in game) {
      if (game[team].teamName === teamName) {
        for (let player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
  }
  
  // Test examples
  console.log(numPointsScored("Ben Gordon")); // 33
  console.log(shoeSize("Mason Plumlee")); // 19
  console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
  console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
  