const accountSid = 'ACdad64fb4e801764127434c919f5bdd63';
const authToken = '8969abbfb2e979441bd9d3205733b12e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello',
     from: '+18443569010',
     to: '+14193208867'
   })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error));

client.calls
  .create({
    twiml: '<Response><Say>Hello, this is Twilio</Say></Response>',
    to: '+14193208867',
    from: '+18443569010'
  })
  .then(call => console.log(call.sid))
  .catch(error => console.log(error));
