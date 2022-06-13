<?php

beforeEach(function () {
  register_user('Kaka', 'k@k');
  create_note_on_user_email('k@k', 'Note Title', 'Note Body');
  create_tag_on_user_email('k@k', 'Test Tag', '#000000', '#FFFFFF');
  logout();
});

/*************
 * CREATE TEST
 *************/
test('should return 401 when create note tag on unauthorized user.', function () {

});

/***********
 * READ TEST
 ***********/

/*************
 * UPDATE TEST
 *************/

/*************
 * DELETE TEST
 *************/
