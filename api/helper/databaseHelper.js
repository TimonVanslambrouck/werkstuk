function checkUsername(name) {
    if (name.includes(" ") || name.match(/^[^a-zA-Z0-9]+$/) || name === '' || name === null || name === undefined) {
        return false;
    } else {
        return true;
    }
}

// Source: https://stackoverflow.com/a/32311229

module.exports = {
    checkUsername
}