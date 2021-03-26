const https = require('https')
const options = {
  hostname: 'www.cvs.com',
  port: 443,
  path: '/immunizations/covid-19-vaccine.vaccine-status.VA.json',
  query:'vaccine',
  method: 'GET',
	headers: {
	'Referer': 'https://www.cvs.com/immunizations/covid-19-vaccine',
	'User-Agent' : 'Mozilla/5.0'
	}
}

const req = https.request(options, res => {
 var body = '';
  res.on('data', d => {
    body += d;
  })

  res.on('end', function(){
  	console.log('done');
  	var json = JSON.parse(body);
  	var vadata = json.responsePayloadData.data.VA;
  	console.log(vadata);
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()