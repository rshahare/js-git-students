console.log('iife');
/*
An Immediately-invoked Function Expression is a way to execute functions immediately, as soon as they are created.
IIFEs are very useful because
1. they don't pollute the global object,
2. and they are a simple way to isolate variables declarations
*/

// syntax
(function(){
    // do something
})();

// with arrow function
(() => {
    // do something
})();

//Function declarations want a name, while function expressions do not require it.
//You could also put the invoking parentheses inside the expression parentheses, there is no difference, just a styling preference:

(function() {
    // do something
}());

(() => {
    // do something
}());

// Classical JavaScript module pattern --------------------------------
//theFunction will be set to the return value of the IIFE. This is generally known as the module pattern
var Sequence = (function sequenceIIFE() {

    // Private variable to store current counter value.
    var current = 0;

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },

        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };

}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2



