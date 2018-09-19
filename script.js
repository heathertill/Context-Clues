// var friends = ['Will', 'Judy', 'Penny', 'Maureen', 'Dr. Smith'];
// var location = ['dungeon', 'front lawn', 'pool', 'bedroom', 'library', 'office', 'garage'];
// var weapons = ['ax', 'revolver', 'rope', 'lead pipe', 'plastic bag', 'ray gun', 'tanning bed', 'car battery', 'garden hose'];

var h1Text = $('<h1 id=header></h1>').text('Dinner Party Murder Mystery');
$('body').append(h1Text);

createH3();

$('.h3Accs').click(whoDunit);

function createH3() {
    for (i = 1; i < 10; i++) {
        var h3Text = $('<h3 class=h3Accs></h3>').text('Accusation ' + i);

        $('body').append(h3Text);
    }
}

function clue() {
   
}

function whoDunit() {
    var theKillerIs = 'I accuse ' + ', with the ' + 'in the ' + '!';
    alert(theKillerIs);
}
