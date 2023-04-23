// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// require('dotenv').config();

// write the import statement for dotenv
//import dotenv from 'dotenv';

import twilio from 'twilio';

const accountSid = 'ACf96256bdca4de8a7af561200ebe8c592';
const authToken = 'ae108942d91896247715fe6c4887f9ae';
const response = '<Response><Say> Hello (momfriendname), you\'ve been unfortunately selected as (user)\'s source of accountability, and we\'re here to tell you that: Ooooooooh, (user) didn\'t go to school today!!</Say></Response>'
//const client = require('twilio')(accountSid, authToken);
const client = twilio(accountSid, authToken);


client.calls
      .create({
         //url: './ionicTest/src/callScript.xml',
         twiml: '<Response><Say>Ooooooh, Stephen didn\'t go to school today!!</Say></Response>',
         to: '+19493777622',
         from: '+18555472459'
       })
      .then(call => console.log(call.sid))
      .catch(error => console.log(error));
