 If a function is a method in an object "this" references that object itself  
If a function is not in a part of an object "this" reference is the global object which is the window oject in browsers and global in node  

In a regular function "this" by default references to the global object

When "new" operator is used, it creates empty object {} and sets "this" in the constructor function to point to the same object 

In the display title for each tag forEach method has two parameters: the first parameter is a callback function, the second parameter is thisArg, which we can pass an object and will print out the new object for every tag
````
this.tags.forEach(function(tag) {
    console.log(this,tag);   
}, {firstName: "Daniel"});
````
Output:
````
{firstName: 'Daniel'} boxing
{firstName: 'Daniel'} action
{firstName: 'Daniel'} sports
````

To pass the value in the key 
````
   showTags() {
         this.tags.forEach(function(tag) {
             console.log(this.title,tag);
         },this);
     }
````
"this" outside the forEach function references the current object, but inside showTags method