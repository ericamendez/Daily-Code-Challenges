// Cart: add, remove, checkout
class Item {
    constructor(name, sku, price) {
        this.name = name
        this.sku = sku
        this.price = price
    }
}

class Cart {
    constructor(user) {
        this.user = user
        this.itemList = []
    }

    add(id, q = 1) {
        if(q > 0){
            for(let i= 0; i < q; i++){
                this.itemList.push(id)
            }
        }
    }

    remove(id, q=1) {
        if (q > 0) {
            for (let i = 0; i < q; i++) {
                let itemRemoveIndex = this.itemList.indexOf(id)
                if(itemRemoveIndex !== -1){
                    this.itemList.splice(itemRemoveIndex, 1)
                }
            }
        }
    }

    checkout() {
        let total = 0
        this.itemList.forEach(item => {
            total += item.price
        })
        return total
    }
}

let couch = new Item("couch", 12345, 500)
let chair = new Item("chair", 32178, 200)
let rug = new Item("rug", 68723, 300)

let userCart = new Cart("Erica")
let userTwoCart = new Cart("Vanely")

userCart.add(couch)
userCart.add(chair)
userCart.add(rug)
