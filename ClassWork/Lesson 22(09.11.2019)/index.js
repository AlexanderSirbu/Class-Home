const list =['Apple','Bananas','Bread','limon','Butter'];


list.filter((item) =>{
  return item === 'Apple'
})

function filterApple(item){
  return item === 'Apple'
}
 list.filter(filterApple)


// list.filter(function(item, inde, arr){
//   return item == 'Apple'
// })
const list1 = list.filter((item) =>{
  return item === 'Apple'
})
console.log(list1)
console.log(list)

const listen =['Apple','Bananas','Bread','limon','Butter'];
function logItems(item){
  console.log(item)
}
listen.map(logItems)



for(let i = 0;i < listen.length;i++){
console.log(listen[i])
}


