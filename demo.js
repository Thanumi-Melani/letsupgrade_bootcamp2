function counter(){
    let counter=0;
    return function(){
        return counter++;
    }
}
const add=counter();
add();
add();
add();
function Path2D(){
    console.log("This is p2 here");
}

console.log("This is my practice work that I am performing.")
//Adding more data from practice branch