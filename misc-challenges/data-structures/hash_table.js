class HashTable {
    constructor(val){
        this._storage = []
        this.tableSize = val
    }

    insert(key, value){
        const index = this._hash(key, this.tableSize)
        if(!this._storage[index]) {
            this._storage[index] = []
        }
        //TODO: make sure there are no duplicate keys!
        this._storage[index].push([key, value])
    }

    retrieve(key){
        const index = this._hash(key, this.tableSize)
        let arrayAtIndex = []
        if(this._storage[index]){
            arrayAtIndex = this._storage[index]
            for (let i = 0; i < arrayAtIndex.length; i++){
                if(arrayAtIndex[i][0] === key){
                    return arrayAtIndex[i]
                }
            }
        }
        return undefined
    }

    // n = size of storage 
    _hash(str, n) {
        let sum = 0
        for(let i = 0; i < str.length; i++){
            sum += str.charCodeAt(i) * 3
        }
        return sum % n
    }
}

let test = new HashTable(25)

// console.log(test._hash('a', 25)) //16
// console.log(test._hash('b', 25)) //19
// console.log(test._hash('c', 25)) //22

test.insert('a', 1)
console.log(test._storage);
test.insert('b', 2)
console.log(test._storage);
console.log(test.retrieve('b'));