var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();
console.log(dinosaur);
console.log('original sentence:\n' + text);

var textCorrected = text.replace('Velociraptor', dinosaur);
console.log('corrected sentence:\n' + textCorrected);
console.log('half of corrected sentence:\n' + textCorrected.slice(0, textCorrected.length/2));
