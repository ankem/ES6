#Destructuring

In locations that receive the data we can use patern matching to destructure values.
This can be left side of assaginment opetator or arguments to functions etc.  

## Destructuring during variable decleration

>`let obj = {first: 'firstName', last: 'lastName'};`  
`let {first: f, last: l} = obj;`  
we will have two variables declared and initialized  
f with `firstName`   
l with `secondName` 

Arrays can be destructured in similary way

>`let [x, y] = ['a', 'b'];`  
x will be initialized with value a  
y will be initialized with value b  

## Destructuring during variable assignment
when variables are already declared then we can assaign values to them using destructring.
however all the variables shoul de declared before hand, we cannot mix them.
>`let x =10, y=20;`  
`[x, y] = ['a','b'];` _//this is OK.  x and y will have values 'a' and 'b' respectively_  
`[x, y, z] = ['a', 'b', 'c'];` _//NOT OK. z is not declared upfront, so all variables should either be declared upfront or should be declared while destructuring. We don't have an option to mix and match_  
`{x,y} = {x: 'a', y: 'b'};` _//NOT OK. Will result in a syntax error. Statements cannot start with curly braces_    
To over come above problem we should enclose them in brackets  
`({x,y} = {x: 'a', y: 'b'});` _//OK

## Destructuring in parameters
destructring can be done in function arguments as well. Same rules apply for object destructring as well in function arguments
>`function testingDestructring([firstArgument, secondArgument]){`  
        _//firstArgument will have value 'a'_  
        _//secongArgument will have value 'b'_      
 `}`  
 `let array = ['a', 'b'];`  
 `testingDestructring(array);`  
 






