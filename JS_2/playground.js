let string = prompt('Give me your string:')

if(!string){
    console.log('String shouldn\'t be empty')
}else if (string.length < 5) {
    console.log('String length less than 5')
} else if (string.length > 64) {
    console.log('String longer then 64')
} else if (!/[a-zA-Z]/g.test(string)){
    console.log('String should contain letters')
} else if (!/[A-Z]/g.test(string)){
    console.log('String should contain at least 1 capital letter')
} else if (!/\d/g.test(string)){
    console.log('String should contain at least 1 number')
} else if (!/@/g.test(string)){
    console.log('String should contain at least 1 @ symbol')
} else{
    console.log(string)
}


