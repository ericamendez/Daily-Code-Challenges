class LeaderBoard {
    constructor(){
        this.players = {};
    }

    add_score(player_id, score){
        if(this.players.hasOwnProperty(player_id)){
            this.players[player_id] = (this.players[player_id] + score) / 2
        }else{
            this.players[player_id] = score
        }
    }

    top(num_players){
        let sorted = [];
        for (let score in this.players) {
            sorted.push([score, this.players[score]]);
        }

        let sortedArr = sorted.sort(function (a, b) {
            return b[1] - a[1];
        });


        return sortedArr.slice(0, num_players);
    }

    reset(player_id){
        this.players[player_id] = 0
    }
}

function array_equals(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

var leader_board = new LeaderBoard()

leader_board.add_score(1, 50)
leader_board.add_score(2, 80)
leader_board.add_score(2, 70)
leader_board.add_score(2, 60)

console.log(leader_board)

// console.log('Add score should return the average. test with 1 score')
// console.log(leader_board.add_score(3, 90) == 90)
// console.log('Add score should return the average. test with 2 scores')
// console.log(leader_board.add_score(3, 85) == 87.5)
// console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:')
// console.log(array_equals(leader_board.top(3), [3, 2, 1]))
// console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:')
// console.log(array_equals(leader_board.top(2), [3, 2]))
// leader_board.reset(3)
// console.log('After reset top 3 [' + leader_board.top(3) + '] should equal [2, 1, 3]')
// console.log(array_equals(leader_board.top(3), [2, 1, 3]))

class LeaderBoard {
    constructor() {
        this.players = {};
    }

    add_score = (player_id, score) => {
        if (this.players.hasOwnProperty(player_id)) {
            this.players[player_id] = (this.players[player_id] + score) / 2
        } else {
            this.players[player_id] = score
        }
    };

    top = (num_players) => {
        let sorted = [];
        for (let score in this.players) {
            sorted.push([score, this.players[score]]);
        }

        let sortedArr = sorted.sort(function (a, b) {
            return b[1] - a[1];
        });
        let sortedPlayerId = sortedArr.slice(0, num_players).map(player => player[0])
        return sortedPlayerId
    };

    reset = (player_id) => {
        this.players[player_id] = 0
    };
}

class LeaderBoard {
    constructor() {
        this.players = {};
    }

    add_score = (player_id, score) => {
        let answer = null
        if (this.players.hasOwnProperty(player_id)) {
            this.players[player_id].push(score)
            let average = (this.players[player_id].reduce((a, b) => a + b)) / this.players[player_id].length
            answer = average

        } else {
            this.players[player_id] = [score]
            answer = score
        }
        return answer
    };

    top = (num_players) => {
        let sorted = [];
        for (let score in this.players) {
            console.log(this.players[score].reduce((a, b) => a + b))
            // let average = this.players[score].reduce((a,b) => a + b) / this.players[score].length
            // sorted.push([score, average]);
        }

        let sortedArr = sorted.sort(function (a, b) {
            return b[1] - a[1];
        });
        let sortedPlayerId = sortedArr.slice(0, num_players).map(player => player[0])
        return sortedPlayerId
    };

    reset = (player_id) => {
        this.players[player_id] = 0
    };
}
