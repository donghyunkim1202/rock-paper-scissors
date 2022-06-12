export default class scoreboardView {
    constructor(root, playerOneName, playerTwoName, onScoreChange){ 
        this.root = root;
        this.root.innerHTML = 
        `
        <div class="scoreboard">
            <div class="scoreboard__name scoreboard__name--one">${playerOneName}</div>
            <div class="scoreboard__name scoreboard__name--two">${playerTwoName}</div>
            <div class="scoreboard__score" data-for-player="one">0</div>
            <div class="scoreboard__score" data-for-player="two">0</div>
        </div>
        `;
    }
}