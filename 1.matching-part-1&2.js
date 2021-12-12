// forgive yourself

/*
my code below
*/

// let sentence = "The Quick brown fox jumps over the lazy dog";

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

// let boobie8X = /[a-z]/gi;
// let search8Result = sentence.match(boobie8X);
// console.log(search8Result); // produces an array with all the letters of the alphabet found inside of sentence -- in order of appearance

let sentence =
  "The 11 Quick 65 brown 7210 fox 6054 _ jumps 32 over 205 the 51 lazy 103 dog really reallly The";

// example number nine getting the matched numbers and characters of the alphabet using the [] and the match() method

// let boobie9X = /[1-3x-z]/gi;
// let search9Result = sentence.match(boobie9X);
// console.log(search9Result); // produces an array of ALL the characters in the string matching the request without regard for capitalization

// example number ten -- getting the letters and numbers that don't match [] while utulizing the match method -- negated character sets -- we're using the caret ^ here

// let boobies10X = /[^1-9a-v ]/gi;
// let search10Result = sentence.match(boobies10X);
// console.log(search10Result); // produces an array with the characters NOT included in the regular expression

// example number eleven -- getting the matched numbers or characters that occur one or more times

// let boobies11X = /l+/g;
// let search11Result = sentence.match(boobies11X);
// console.log(search11Result); // grabs and produces an array of the occurances of the searched-for character that happen one or more times (without the g it would return the first one only. without the plus sign, it would produce an array of each occurance)

// example number twelve -- getting the matched characters that happen zero or more times

let sentence2 = "gooooooooogle";

// let boobies12X = /go*/;
// let search12Result = sentence2.match(boobies12X);
// console.log(search12Result); // grabs all of the occurances of the request no matter how many oooooooo

// example number 13 -- get all of the matched characters with lazy matching ? -- as opposed to greedy matching

// let boobies13X = /T.*/g; // greedy example // greedy example -- returns the entire sentence
// let boobies13X = /T.*?/g; // returns just T
// let search13Result = sentence.match(boobies13X);
// console.log(search13Result);

// example number 14 -- matching the beginning string patterns

// let boobies14X = /^The/i; // with or without the i it only returns the first instance -- without brackets
// let search14Result = sentence.match(boobies14X);
// console.log(search14Result);

// example number fifteen -- matching the ending string patterns

let boobies15X = /The$/i; // with or without the i it only returns the first instance -- without brackets
let search15Result = sentence.match(boobies15X);
console.log(search15Result);

// example number sixteen -- matching all letters and numbers

let boobies16X = /\w/g; // lowercase w matches a-z and 0-9 and _ -- only, no special characters
let search16Result = sentence.match(boobies16X);
console.log(search16Result);
