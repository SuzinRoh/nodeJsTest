var name = 'sujin';
// String literals
var letter = 'Dear ' + name + ' Lorem ipsum dolor sit amet\n\
consectetur adipisicing elit '
            +  name ; 
console.log(letter);

// `  not '"
// Template literals
var a = '1' ;
letter = `Lorem ${name} ${1+2}
ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor 
nobis consectetur ${name} vel modi non minima, aut culpa quisquam
 molestiae dolore fugiat cupiditate accusamus neque iste et nostrum 
 numquam beatae? ${name}`;
 console.log(letter);