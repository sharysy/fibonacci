'use strict';

function fibonacci_series(n)
{
var arr = [0,1];
    if(n === 1)
    {
        return arr;
    }
    else
    {
        for(var i = 2 ; i <= n ; i++)
        {
            arr.push((arr[i-1])+arr[i-2]);
        }
    }
    
}

module.exports = fibonacci_series;
