const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const csv=require('csvtojson')
 
var app = express()

 app.get('/', (request, response) => {
  response.json({
    'answer':"Hello, world! I'm working as expected!"
  })
})

app.get('/csv', function(req, res) {
	csv()
		.fromFile(csvFilePath)
		.then((jsonObj)=>{
		    res.json(jsonObj)
		})
})
 
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const csvFilePath='myfile.csv'

