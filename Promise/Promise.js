const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve ('Stuff Worked');
    } else {
        reject ('Error , it broke')
    }
})

promise
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('Error'))
  .then (result3 => {
    console.log(result3 + '!');
  })