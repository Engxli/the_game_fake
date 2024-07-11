function shuffleArray(array) {
  // Create a copy of the original array to avoid mutating it
  let newArray = array.slice();

  // Fisher-Yates Shuffle algorithm
  for (let i = newArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
function selectPlayers(players) {
  const array = players.map((p) => {
    return { name: p, ask: 0, answer: 0 };
  });
  const selectedPairs = []; // Array to store the selected pairs

  // Loop until all players have asked and answered
  while (array.some((player) => player.ask === 0 || player.answer === 0)) {
    // Filter out players who have not asked yet
    const eligibleAskPlayers = array.filter((player) => player.ask === 0);

    // Filter out players who have not answered yet
    const eligibleAnswerPlayers = array.filter((player) => player.answer === 0);

    // Check if we have enough players to make a pair
    if (eligibleAskPlayers.length === 0 || eligibleAnswerPlayers.length === 0) {
      break;
    }

    // Select a random player to ask
    const askIndex = Math.floor(Math.random() * eligibleAskPlayers.length);
    const askPlayer = eligibleAskPlayers[askIndex];
    askPlayer.ask = 1; // Mark the player as asked

    // Select a random player to answer, excluding the ask player
    const eligibleAnswerPlayersExcludingAsk = eligibleAnswerPlayers.filter(
      (player) => player !== askPlayer
    );
    if (eligibleAnswerPlayersExcludingAsk.length === 0) {
      break; // No eligible answer players left
    }

    const answerIndex = Math.floor(
      Math.random() * eligibleAnswerPlayersExcludingAsk.length
    );
    const answerPlayer = eligibleAnswerPlayersExcludingAsk[answerIndex];
    answerPlayer.answer = 1; // Mark the player as answered

    // Add the selected pair to the result array
    selectedPairs.push([answerPlayer.name, askPlayer.name]);
  }

  return selectedPairs;
}
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
export { shuffleArray, selectPlayers, getRandomIndex };
