

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    };
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sum = 0;
    for(var i = 0; i < args.length; i++){
      console.log(args[i]);
      sum = sum + args[i];
    }
    return sum;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
        var avg = 0;
        for(var i = 0; i < args.length; i++){
          console.log(args[i]);
          avg = avg + args[i];
        }
        return avg/i;
    }


console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    function compareNumbers(a,b){
      return a - b;
    }
    args.sort(compareNumbers);
    return Math.max.apply( Math, args );
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var longest;
    var lngth = 0;
    for(var i=0; i < args.length; i++){
        if(args[i].length > lngth){
            var lgth = args[i].length;
            longest = args[i];
        }
    }
    return longest;
}
 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
  var arr = ["b","c","a"];
  arr.sort();
  console.assert(arr[2] === "c");
// .concat()
  var numbers = [1,2,3];
  var letters = ["a","b","c"];
  var combined = numbers.concat(letters);
  console.assert(combined[5] === "c");
// .indexOf()
  var arr = [1,2,3];
  console.assert(arr.indexOf(3) === 2);
// .split()
  var sentence = "Yo yo what up my G?";
  var arr = sentence.split(" ");
  console.assert(arr[5] === "G?");
// .join()
  var arr = ["a","b","c"];
  var thisVar = arr.join();
  console.assert(thisVar === 'a,b,c');
// .pop()
  var arr = [1,2,3];
  arr.pop();
  console.assert(arr[2] === undefined);
// .push()
  var arr = [1,2,3];
  arr.push(4);
  console.assert(arr[3] === 4);
// .slice()
  var arr = [1,2,3,4,5];
  var newArr = arr.slice(0,3);
  console.assert(newArr[2] === 3);
// .splice()
  var arr = [1,2,4,5];
  var newArr = arr.splice(2, 0, 3);
  console.assert(arr[2] === 3);
// .shift()
  var arr = [1,2,3];
  arr.shift();
  console.assert(arr[0] === 2);
// .unshift()
  var arr = [1,2,3];
  arr.unshift(0);
  console.assert[arr[0] === 0];
// .filter()
  function moreThanTen(value){
    return value > 10;
  }
  var arr = [10, 11, 12].filter(moreThanTen);
  console.assert(arr[0] === 11);
// .map()
  function addFive(value){
    return value + 5;
  }
  var arr = [1,2,3];
  var newArr = arr.map(addFive);
  console.assert(newArr[0] === 6);
