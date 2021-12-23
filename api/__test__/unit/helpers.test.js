const HELPERFUNCTIONS = require('../../helper/databaseHelper');

test('user cannot type any symbols as username', () => {
    expect(HELPERFUNCTIONS.checkUsername('correctname')).toBeTruthy();
    expect(HELPERFUNCTIONS.checkUsername('//')).toBeFalsy();
})

test('user cannot type any spaces in their username', () => {
    expect(HELPERFUNCTIONS.checkUsername('correctname')).toBeTruthy();
    expect(HELPERFUNCTIONS.checkUsername('not correct name')).toBeFalsy();
})