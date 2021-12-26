//return array sorted by frequency in descending order & then sorted alphabetically in ascending order

//ex input:
  //['express', 'node', 'express', 'javascript', 'express', 'node', 'mongodb', 'mongodb']
//ex output:
  //['express', 'express', 'express', 'node', 'node', 'mongodb', 'mongodb', 'javascript']

  let arr = ['express', 'node', 'express', 'javascript', 'express', 'node', 'mongodb', 'mongodb']

  function freqAndAlpha(arr){
    let counts = {}
    //arr.sort((a, b) => a - b)
  
    //create frequency object
    for(let i = 0; i < arr.length; i++){
      console.log('is it already in counts object?', counts[arr[i]])
      counts[arr[i]] = counts[arr[i]] + 1 || 1
    }
  
    console.log(counts)
  
    let entries = Object.entries(counts)
    console.log(entries)
  
    let sortedEntries = entries.sort((a, b) => {
      if(b[1] === a[1]){
        if(b[0] < a[0]){
          return 1
        }else {
          return -1
        }
      } else {
        return b[1] - a[1]
      }
    })
    //b[1] === a[1] ? b[0] < a[0] ? 1: -1 : b[1] - a[1])
    console.log("sorted entries", sortedEntries)
  
    let answerArray = []
  
    sortedEntries.forEach(word => {
      console.log("each ind array contained in sorted entries", word)
      // word = [ 'express', 3 ]
      for(let i = 0; i < (word[1] = 3); i++){
        answerArray.push(word[0])
      }
    })
  
    return answerArray
  }
  
  console.log(freqAndAlpha(arr))
  
  // //FIRST ITERATION || i = 0
  // count = {}
  // arr[0] = 'express'
  // count[arr[0]] = count['express'] = 'undefined'
  // // if it exist do this || if undefined do this
  // counts[arr[i]] + 1 || 1
  // count = {
  //   'express': 1
  // }
  
  // //SECOND ITERATION || i = 1
  // count = {
  //    'express': 1
  // }
  // arr[1] = 'node'
  // count[arr[1]] = count['node'] = 'undefined'
  // // if it exist do this || if undefined do this
  // counts[arr[1]] + 1 || 1
  // count = {
  //   'express': 1,
  //   'node': 1
  // }
  
  // //THIRD ITERATION || i = 2
  // count = {
  //   'express': 1,
  //   'node': 1
  // }
  // arr[2] = 'express'
  // count[arr[2]] = count['express'] = 1
  // // if it exist do this || if undefined do this
  // (counts[arr[2]] = 1) + 1 || 1
  // count = {
  //   'express': 2,
  //   'node': 1
  // }
  
  // //FOURTH ITERATION || i = 3
  // count = {
  //   'express': 2,
  //   'node': 1
  // }
  // arr[3] = 'javascript'
  // count[arr[3]] = count['javascript'] = undefined
  // // if it exist do this || if undefined do this
  // (counts[arr[3]] = undefined) + 1 || 1
  // count = {
  //   'express': 2,
  //   'node': 1,
  //   'javascript': 1
  // }