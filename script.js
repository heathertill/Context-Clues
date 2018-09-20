var friends = [
    'Mrs. Peacock',
    'Colonel Mustard',
    'Miss Scarlet',
    'Professor Plum',
    'Mr. Green'
];
var locations = [
    'dungeon',
    'front lawn',
    'pool',
    'bedroom',
    'library',
    'office',
    'garage',
    'greenhouse',
    'kitchen',
    'workshop'
];
var weapons = [
    'ax',
    'revolver',
    'rope',
    'lead pipe',
    'plastic bag',
    'ray gun',
    'tanning bed',
    'car battery',
    'garden hose',
    'pool noodle',
    'bleach',
    'hairdryer',
    'lawn mower',
    'knife',
    'bonsai scissors',
    'candlestick',
    'golf clubs',
    'iron',
    'toaster',
    'duct tape'
];
var j = 0;
var h1Text = $('<h1 id=header></h1>').text('Dinner Party Murder Mystery');
$('body').append(h1Text);

createH3();
$('.h3Accs').click(whoDunit);

function createH3() {
    for (i = 1; i < 101; i++) {
        var h3Text = $('<h3 class=h3Accs></h3>').text('Accusation ' + i);

        $('body').append(h3Text);
    }
}

function whoDunit() {
    function clue(num) {
        var person = num % friends.length;
        var place = num % locations.length;
        var thing = num % weapons.length;

        var theKillerIs =
            'I accuse ' +
            friends[person] +
            ', with the ' +
            weapons[thing] +
            ' in the ' +
            locations[place] +
            '!';
        alert(theKillerIs);
    }

    j++;
    clue(j);
}


