// forgive yourself

/*
my code below
*/

let sentence = "The Quick brown fox jumps over the lazy dog";

// the first example -- matching a word in a sentence (case-sensitive) (the test method)

// let boobie1X = /dog/;
// let search1Result = boobie1X.test(sentence);
// console.log(search1Result); // the boolean response is true

// the second example -- we are going to match of multiple words using the (OR | ) (case sensitive) (utilizing the test() method)

// let boobie2X = /dog|fox|brown/;
// let search2Result = boobie2X.test(sentence);
// console.log(search2Result); // the boolean results in TRUE because one or more of the entries is present.

// example 3 -- ignoring case-sensitivity by using the i flag while also utilizing the test method

// let boobie3X = /quick/i;
// let search3Result = boobie3X.test(sentence);
// console.log(search3Result); // the result is false without the i flag but true WITH the i flag

//example four -- getting the matched word utilizing the match() method

// let boobie4X = /fox/i;
// // or
// let boobie4X = /box/i;

// let search4Result = sentence.match(boobie4X);
// console.log(search4Result); // if there is a match, it produces an array from which to work with things // no match, null
// console.log(search4Result[0]); // allows us to know the location from which to extract this particular word

// example five -- grabing the matched words while utulizing the match() method and using the i flag

// let boobie5x = /the/gi;
// let search5Result = sentence.match(boobie5x);
// console.log(search5Result); // produces an array of all occurences of the searched-for string

// example six -- getting the matched words with the DOT while utilizing the match method

// let boobie6X = /.o./g; // produces an array with all of the three-letter string matches
// let boobie6X = /./g; // produces an array with every single character in the sentence let
// let search6Result = sentence.match(boobie6X);
// console.log(search6Result);

// example se7en -- getting the matched characters by using the [] and utilizing the match method

// let boobie7X = /[bdh]/g; //looking for all the b d and h characters
// let search7Result = sentence.match(boobie7X);
// console.log(search7Result); // produces an array with all of the matches of those characters

// example eight -- finds which letters of the alphabet with the [] utilizing the match() method

let boobie8X = /[a-z]/gi;
let search8Result = sentence.match(boobie8X);
console.log(search8Result); // produces an array with all the letters of the alphabet found inside of sentence -- in order of appearance
