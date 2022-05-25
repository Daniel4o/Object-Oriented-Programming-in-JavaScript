Every object type has protytpe. The prototype has its own object, so it will have its' own prototype- this called _prototype chain_. The chain ends when it reaches a prototype that has null for its own prototype  
The User class/function has a prototype and can be accessed but we can't call instances of those objects (i.e. userOne does not have their own prototype. The prototype they have points to the prototype in the function/class ) 
_...args_ Takes the params in variable admin and puts them into an array
````
function Admin(...args)
````


_this_ inside the function _apply()_ refers to the _this_ inside _User_. We use the split operator- (_..._) to pass the variables inside the new object  _Admin_ in an array and pass the array into _this_ which itself will be applied in the _User_ function/class
````
   User.apply(this)
````