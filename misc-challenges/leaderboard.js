class LeaderBoard {
    constructor(){
        this.players = {};
    }

    add_score(player_id, score){
        if(this.players.hasOwnProperty(player_id)){
            this.players[player_id] = (this.players.player_id + score) / 2
        }else{
            this.players[player_id] = score
        }
    }

    top(max=5){
        let sorted = [];
        for (let score in this.players) {
            sorted.push([score, this.players[score]]);
        }

        let sortedArr = sorted.sort(function (a, b) {
            return b[1] - a[1];
        });


        return sortedArr.slice(0, max);
    }

    reset(player_id){
        this.players[player_id] = 0
    }
}

let board = new LeaderBoard()

board.add_score("erica", 100)
board.add_score("person", 90)
board.add_score("random", 120)
board.add_score("someone", 70)
board.add_score("else", 80)
board.add_score("hey", 90)
board.add_score("sup", 97)
