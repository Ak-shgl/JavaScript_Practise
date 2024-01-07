(function(){
    let count=0;

    function increment(){
        count++;
        console.log(`Counter: ${conunt}`);
    }
    function decrement(){
        count--;
        console.log(`Counter: ${count}`);
    }

    console.log(count);
    increment();
    decrement();
})();