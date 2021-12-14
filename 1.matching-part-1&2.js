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

// let sentence =
//   "The 11 Quick 65 brown 7210 fox 6054 _ jumps jury jogs 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / gooooooooogle yeeeeeeeeah";

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

// let sentence2 = "gooooooooogle";

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

// let boobies15X = /The$/i; // with or without the i it only returns the first instance -- without brackets
// let search15Result = sentence.match(boobies15X);
// console.log(search15Result);

// example number sixteen -- matching all letters and numbers

// let boobies16X = /\w/g; // lowercase w matches a-z and 0-9 and _ (basically all non-letters and non-numbers or the underscore) -- only, no special characters
// let search16Result = sentence.match(boobies16X);
// console.log(search16Result);

// example 17 -- matching NOT all letters and numbers (basically the opposite of sixteen) but returning everything else

// let boobies17X = /\W/g; // everything but uppercase w matches a-z and 0-9 and _ -- basically all special characters
// let search17Result = sentence.match(boobies17X);
// let search17Result = sentence.match(boobies17X).length;
// console.log(search17Result);

// example number eighteen -- matching all numbers

// let boobies18X = /\d/g;
// let search18Result = sentence.match(boobies18X);
// let search18Result = sentence.match(boobies18X).length;
// console.log(search18Result);

// example number nineteen -- matching all non numbers

// let boobies19X = /\D/g;
// let search19Result = sentence.match(boobies19X);
// let search19Result = sentence.match(boobies19X).length;
// console.log(search19Result);

// example number 20 -- matching all of the white space -- space, enter, tab etc

// let boobies20X = /\s/g;
// let search20Result = sentence.match(boobies20X);
// // let search20Result = sentence.match(boobies20x).length;
// console.log(search20Result);

// example number 21 -- matching all of the non white space -- space, enter, tab etc

// let boobies21X = /\S/g;
// let search21Result = sentence.match(boobies21X);
// // let search21Result = sentence.match(boobies21x).length;
// console.log(search21Result);

// example 22 -- specifying upper and lower number of matches using the quantity specifiers

// let boobies22X = /o{2,4}/; // are there instances where it's two or four - true
// let search22Result = boobies22X.test(sentence);
// console.log(search22Result);

// let boobies22X = /e{3,5}/g; // where are they and what do they consist of
// let search22Result = sentence.match(boobies22X);
// console.log(search22Result);

// example 23 -- specifying only the lower number of matches using the quantity specifiers

// let boobies23X = /o{2,}/; //does it happen at least two times -- true
// let search23Result = boobies23X.test(sentence);
// console.log(search23Result);

// example 24 -- specifying the exact number of matches using the quantity specifiers

// let boobies24X = /o{2}/; // is there an instance where there is only exactly oo -- false
// let search24Result = boobies24X.test(boobies24X);
// console.log(search24Result);

// with the above examples, test() is used to see if the pattern exists and match() is used to extract the matched patern for use in coding apps or whatever

// let sentence2 = "colour";

// example 25 -- check for all or none

// let boobies25X = /colou?r/; // returns a boolean if the word color or colour is there or not with the ? for lazy search
// let search25result = boobies25X.test(sentence2);
// console.log(search25result);

// example twenty-six -- look aheads

// the POSITIVE condition look aheads

// let boobies26X = /j(?=u)/; // looking for all instances where the j is followed by u -- if there is one, the test() method returns true; match() will return the index in the string where it happens
// let search26result = boobies26X.test(sentence);
// console.log(search26result);

// the NEGATIVE condition look aheads

// let boobies27X = /j(?!m)/; // will return a boolean confirming whether or not the condition DOESN'T exist
// let boobies27X = /j(?!u)/; // will return a boolean confirming whether or not the condition DOESN'T exist;
// let search27result = sentence.match(boobies27X); // will return the first instance in the string where there is a j but without a u
// console.log(search27result);

/*
here we will work on restricting usernames
*/

/*
first -- must have at least two letters
second -- numbers must be at the end if there are any numbers
third -- letters can be either lowercase or uppercase
fourth -- if there are two letters, they cannot contain numbers
*/

// let username = "sdk"; // true
// let username = "k9"; // false
// let username = "sk";
// let username = "k";
// let username = "k9";
// let username = "kk9";
// let username = "9kk";

// let usernameCheck = /^[A-Za-z]{2,}\d*$/;

// let checkStatus = usernameCheck.test(username);
// console.log(checkStatus);

/*
^[A-Za-z] -> it matches all letters uppercase and lowercase
{2,}      -> it requires the quantity of the characters to be at least 2 
\d        -> it inserts matches for digits
*         -> it matches the characters that occur zero or more times
$         -> it makes sure the digits are at the end of the username
*/

/* Case 2
-----------------------------Requirements-----------------------------
1- Passwords must be at least 8 characters
2- Passwords must contain at least two consecutive digits
*/

// let password = "cosmictech12345"; // true
// let password = "cosmictech1"; // false
// let password = "cosmictecH1225"; // true

// let passCheck = /(?=\w{8})(?=\D*\d{2})/;
// let checkStatus = passCheck.test(password);
// console.log(checkStatus);

/* 
(?=\w{8})  -> a positive lookahead that matches 8 or more letters and digits 
(?=)       -> a positive lookahead
\w         -> matches all letters and numbers and _
{8}        -> a quantity specifier that is looking for the exact number of occurances which is 8
\D*        -> zero or more occurances of characters that are not digits
\d{2}      -> two consecutive digits
*/

// Example 27 -> Capture Groups

// let sentence = "book book";
// let reg27X = /(\w+)\s\1/;
// let reg27X = /(\w+)\s(\w+)/;

// Testing
// let regXTestResult = reg27X.test(sentence);
// console.log(regXTestResult);

// Matching
/*
\1        -> a shorthand way for repeating what is in the paranthesis
(\w+)\s\1 -> "book book"
(\w+)     -> "book"
*/
// let regXMatchResult = sentence.match(reg27X);
// console.log(regXMatchResult);

// ---------------------------------------------------------------
// let digits = "321 321 321";
// let reg27X = /^(\d+)\s\1\s\1$/;
// let reg27X = /^(\d+)\s(\d+)\s(\d+)$/;

// Testing

// let regXTestResult = reg27X.test(digits);
// console.log(regXTestResult);

// Matching
/*
\1             -> a shorthand way or repeating what is in the parenthesis
(\d+)\s\1\s\1 -> "321 321 321"
(\d+)         -> "321"
*/

// let regXMatchResult = digits.match(reg27X);
// console.log(regXMatchResult);
