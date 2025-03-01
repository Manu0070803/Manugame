let selectedNumber = null;

function selectNumber(num) {
    selectedNumber = num;
    document.getElementById("selected-number").innerText = num;
}

function predict() {
    if (selectedNumber === null) {
        alert("Please select a number first!");
        return;
    }

    let winningNumber = Math.floor(Math.random() * 10);
    let resultText = (selectedNumber === winningNumber) ? "You Win! 🎉" : "You Lose! 😢";

    document.getElementById("result").innerText = `Winning Number: ${winningNumber} - ${resultText}`;
}

