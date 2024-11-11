function rollDice() {
    return [Math.floor(Math.random() * 6) + 1, 
            Math.floor(Math.random() * 6) + 1, 
            Math.floor(Math.random() * 6) + 1];
}
  
function calculateProbabilities(rolls) {
    let outcomes = {};
    
    for (let i = 0; i < rolls; i++) {
      let dice = rollDice();
      let sum = dice.reduce((a, b) => a + b, 0);
      
      outcomes[sum] = (outcomes[sum] || 0) + 1;
    }
    
    for (let sum = 3; sum <= 18; sum++) {
      let probability = outcomes[sum] / rolls;
      console.log(`Probability of sum ${sum}: ${probability.toFixed(5)}`);
    }
}
  
calculateProbabilities(100000);  