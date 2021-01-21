class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '')
  }
  static titleize(title){
    let exceptions =  [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let newTitle = [];
    let array = title.split(" ");
    for (let i = 0; i < array.length; i++){
      if (i === 0){
        console.log(this.capitalize(array[i]))
        newTitle.push(this.capitalize(array[i]))
      } else{
        if (exceptions.includes(array[i])){
          newTitle.push(array[i])
        } else {
          newTitle.push(this.capitalize(array[i]))
        }
      }
    }
    return newTitle.join(" ")
  }
}
//       if (i = 0){
//         newTitle.push(this.capitalize(array[i]))
//       } else{
//         newTitle.push(array[i])
//       }
//     }
//     return newTitle.join(" ")
//   }
// }