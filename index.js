const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const csv=require('csvtojson')
 
var app = express()

 
app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
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

