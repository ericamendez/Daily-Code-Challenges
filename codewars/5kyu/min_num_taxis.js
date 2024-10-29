/**
 * You work at a taxi central.
People contact you to order a taxi. They inform you of the time they want to be picked up and dropped off.

A taxi is available to handle a new customer 1 time unit after it has dropped off a previous customer.

What is the minimum number of taxis you need to service all requests?

Constraints:
Let N be the number of customer requests:
N is an integer in the range [1, 100k]
All times will be integers in range [1, 10k]
Let PU be the time of pickup and DO be the time of dropoff
Then for each request: PU < DO
The input list is NOT sorted.
Examples:
# Two customers, overlapping schedule. Two taxis needed.
# First customer wants to be picked up 1 and dropped off 4.
# Second customer wants to be picked up 2 and dropped off 6.
requests = [(1, 4), (2, 6)]
min_num_taxis(requests) # => 2

# Two customers, no overlap in schedule. Only one taxi needed.
# First customer wants to be picked up 1 and dropped off 4.
# Second customer wants to be picked up 5 and dropped off 9.
requests = [(1, 4), (5, 9)]
min_num_taxis(requests) # => 1
 */

const sample = [[1,4], [5,9]] //Two customers, no overlap in schedule.
const sample2 = [[1,4], [2,9], [3,6]] // Three requests, three taxis.


function min_num_taxis(requests){
    let booked = []
    let taxis = 0

    requests.forEach(request => {
        let partialBook = []
        let partialBool = false
        for(let i = request[0]; i <= request[1]; i++){
            console.log(booked.includes(i))
            if(booked.includes(i)){
                partialBool = true
            }
            partialBook.push(i)
        }
        booked = [...booked, ...partialBook]
        console.log(booked)

        if (partialBool) {
            taxis++
        }
    })

    return `${requests.length} requests, ${taxis == 0? 'no overlap': taxis} taxis`
}

console.log(min_num_taxis(sample2))