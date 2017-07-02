'use strict';

//var doc = require('./accounts.js') 

var userNames = [
  'xxxxxx',
  'xxxx'
  
];

var passwords = [
  'xxxx',
  'xxxxx'
];

for (var i = 0; i < userNames.length; i++){







var Nightmare = require('nightmare');
new Nightmare()


  .goto('https://nextdoor.com/login/')
  .type('input[id="id_username"]', userNames[i])
  .type('input[id="id_password"]', passwords[i])

  //.type('input[id="id_username"]', 'networkmiguelg@gmail.com') // Substitute with your username
  //.type('input[id="id_password"]', 'college2011math') // Substitute with your password
  .click('button[id="signin_button"]')

//I am in
//now need to create post
.wait(10000)





  .refresh()
  .click('input[class="create-post-prompt-text-input"]')
  .wait(1000)
  .click('div[class="postbox-field-dropdown"]')
  .wait(1000)
  //works above
  .click('a.neighborhood-checklist-link')
  .wait(1000)
  .click('button.postbox-submit.button-primary')
  .wait(10000)
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div > span')
  .wait(10000)
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(2) > div.postbox-radio-options > div:nth-child(1) > label > input[type="radio"]')
  .wait(10000)
  .type('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(3) > input', 'Bookstore worth going to?')
  .type('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-compose > div:nth-child(4) > textarea', 'Hi everyone, Are there any bookstores that have great atomospher/books?')
  .click('body > div:nth-child(19) > div > div.in.modal > div > div > div.cee-modal-body-no-footer.cee-modal-body.postbox-modal-body.modal-body > div > div.postbox-footer > button')


  .wait(10000)
  .screenshot('screen.png')
  .end()
 

 





  .run(function(err, nightmare) {
    if (err) {
      console.log(err);
    }
    console.log('Done.');
  });

}

