# You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

# Return the direction you will face after the turn.

# Examples
# "S",  180  -->  "N"
# "SE", -45  -->  "E"
# "W",  495  -->  "NE"

def direction(facing, turn):
    direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    startingIndex = direction.index(facing)
    getTurnAmount = int(turn / 45)
   
    currentIndex = startingIndex
    for i in range(abs(getTurnAmount)):
        if getTurnAmount < 0:
            currentIndex -= 1
            if currentIndex < 0:
                currentIndex = 7 
        else:
            currentIndex += 1
            if currentIndex > 7:
                currentIndex = 0

    return direction[currentIndex]