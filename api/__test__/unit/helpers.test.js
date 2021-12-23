const HELPERFUNCTIONS = require('../../helper/databaseHelper');

test('user cannot use any symbols as username', () => {
    expect(HELPERFUNCTIONS.checkUsername('correctname123')).toBeTruthy();
    expect(HELPERFUNCTIONS.checkUsername('//')).toBeFalsy();
})

test('user cannot use any spaces in their username', () => {
    expect(HELPERFUNCTIONS.checkUsername('correctname')).toBeTruthy();
    expect(HELPERFUNCTIONS.checkUsername('not correct name')).toBeFalsy();
})

test('user cannot use an empty username', () => {
    expect(HELPERFUNCTIONS.checkUsername('correctname')).toBeTruthy();
    expect(HELPERFUNCTIONS.checkUsername('')).toBeFalsy();
})