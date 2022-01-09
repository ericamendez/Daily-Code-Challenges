/**
 
In the near future you are the proud owner of an autonomous vehicle!  You want to let some friends use it whenever they want so you make an app to let them call the vehicle to come pick them up.  In this problem you will develop a system to keep track of the state of your car and your friends.


Here are some more constraints to help you code your solution:


The city is a grid of perpendicular blocks.  At initialization your code should take as user inputs the number of streets in both the x and y directions (ex. x=10, y=10).


The car can move in any direction exactly 1 block at a time.  For our purposes, we only care about when the car is at a vertex of two intersecting streets, so continuing our example, a car can be at the intersection [0, 0] in the upper-left corner of our city, or [9, 9] in the bottom-right corner.


There should be a function to advance time by one time-step (and hence the vehicle by one block in any direction).  This function should accept a list of ride requests from your friends.  These ride requests come in the form of a list of JSON elements.  For example at time=0, the incoming request list could look like:


        requests_time_0 = [
                { 
                        "name": "Ron", 
                        "start": [3,5], 
                        "end": [8,7] 
                },
                { 
                        "name": "Luna", 
                        "start": [1,2], 
                        "end": [4,3]
                }
        ]


while at time=1 the request list could be empty:


        requests_time_1 = []


and at time=2 the request list could be:
        
        requests_time_2 = [
                { 
                        "name": “Cedric”, 
                        "start": [9,9], 
                        "end": [1,3] 
                }
        ]




At each time-step this list of requests can be an empty list (ex. []), or infinitely long.  At each time step you should print out the current position of the vehicle and the names of all of the passengers currently in the vehicle, as well as anybody being dropped off or being picked up at this intersection.  (We will assume your car can fit infinitely many people at a time.)


Your goal is to schedule your car to get people where they want to go as fast as possible.  Of course, you will likely have to make some trade-offs in the process.  There is no right answer, just make sure you explain your decisions clearly in your write-up.


Submission:  Please return all of your code, as well as a write up of your solution, as well as any tests you have written in a zip file with your name in the title.


 */


let requests_time_0 = [
  {
    "name": "Ron",
    "start": [3, 5], 
    "end": [8, 7] 
  },
  {
    "name": "Luna",
    "start": [1, 2],
    "end": [4, 3] 
  },
  {
    "name": "Guthemberg",
    "start": [1,5], 
    "end": [5, 7] 
  },
  {
    "name": "Urji",
    "start": [5, 1],
    "end": [2, 3],
  }
]

function calculateTotalDistance(carLocation, personLocation){
    // absolute x_2 - x_1    &     y_2 - y_1
    let xDist = Math.abs(personLocation[0] - carLocation[0])
    let yDist = Math.abs(personLocation[1] - carLocation[1])

    return xDist + yDist
}

function allRequestDistance(requests){
    // copy or request
    let reqCopy = [...requests]
    let orderedRequests = []
    let newStart = [0, 0]
    // let newEnd = 

    //put in while loop that removes the previous shortest distance until there is no more request
    while(reqCopy.length > 0) {
        // compare the new start point with all the remaining end points
        let allDistance = reqCopy.map((request, i) => calculateTotalDistance(newStart, request.start))
        
        // compare all distances to find shortest
        let shortestIndex = allDistance.indexOf(Math.min(...allDistance))

        
        orderedRequests.push(reqCopy[shortestIndex])

        newStart = reqCopy[shortestIndex].end

        //remove request from copy
        reqCopy.splice(shortestIndex, 1)
    }

    return orderedRequests
}



// console.log(calculateTotalDistance([0,0], requests_time_0[0].start))
console.log(allRequestDistance(requests_time_0))




