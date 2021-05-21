/**
 * The rgb
 function is incomplete.Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.Valid decimal values
 for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

 Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

 The following are examples of expected output values:

   rgb(255, 255, 255) // returns FFFFFF
 rgb(255, 255, 300) // returns FFFFFF
 rgb(0, 0, 0) // returns 000000
 rgb(148, 0, 211) // returns 9400D3
 */

 function rgb(r, g, b) {
    return individual(r) + individual(g) + individual(b)
 }

 function individual(color) {
   if (color <= 0) {
     return '00'
   } else if(color >= 255) {
     return 'FF'
   }
   const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
   const first = Math.floor(color / 16)
   const second = color % 16

   return `${hex[first]}${hex[second]}`
 }

 console.log(rgb(206, 83, 33));