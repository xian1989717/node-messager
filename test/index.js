const fs = require('fs')

fs.writeFile('./test.txt', '123', (err) => {
  if (err) { return }
  console.log('over')
})