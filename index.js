'use strict';

//var doc = require('./accounts.js') 

var userNames = [
  'xxxxxx',
  'xxxxxxx',
  'xxxxxxx'

  
  
];

var passwords = [
  'xxxxxxx',
  'xxxxxxx',
  'xxxxxxx'
];

for (var i = 0; i < userNames.length; i++){


var Nightmare = require('nightmare');
new Nightmare()


  .goto('https://nextdoor.com/login/')
  .type('input[id="id_username"]', userNames[i])
  .type('input[id="id_password"]', passwords[i])

  //.type('input[id="id_username"]', 'xxxxxx@gmail.com') // Substitute with your username
  //.type('input[id="id_password"]', 'xxxxxxx') // Substitute with your password
  .click('button[id="signin_button"]')


  //.wait(10000)





  //.refresh()
  .wait('input[class="create-post-prompt-text-input"]')
  .click('input[class="create-post-prompt-text-input"]')
  //.wait(1000)
  .wait('div[class="postbox-field-dropdown"]')
  .click('div[class="postbox-field-dropdown"]')
  //.wait(1000)
  //works above
  .wait('a.neighborhood-checklist-link')
  .click('a.neighborhood-checklist-link')

  //.wait(1000)
  .wait('button.postbox-submit.button-primary')
  .click('button.postbox-submit.button-primary')
  //.wait(10000)
  .wait('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div > span')
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div > span')
  //.wait(10000)
  .wait('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div.postbox-radio-options > div:nth-child(1) > label > input[type="radio"]')
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div.postbox-radio-options > div:nth-child(1) > label > input[type="radio"]')
  //.wait(10000)
  .wait('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(3) > input')
  .type('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(3) > input', 'Happy July 4th neighbors')
  .type('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(4) > textarea', 'Wishing everyone a happy July 4th')
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-footer > button')


  .wait(10000)
  .screenshot(`picture${i}`)
  .end()
 

  .run(function(err, nightmare) {
    if (err) {
      console.log(err);
    }
    console.log('Done.');
  });

}

