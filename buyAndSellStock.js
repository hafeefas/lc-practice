/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxSoFar = 0;
    let minSoFar = 1000000;

    for (let i=0; i<prices.length; i++){
        if (minSoFar > prices[i]){
            minSoFar = prices[i]
        }
        else {
            maxSoFar = Math.max(prices[i] - minSoFar);
        }
    }
    return maxSoFar;

};
    /*prices array - price of a given stock on the ith day
    -- u want to maximize ur profit by choosing a single day to buy one stock
    and choosing a different day in the future to sell that stock
    - return the maximum profit u can achieve from this transaction. if ucannot achieve any profit, return 0.

    u can see if two numbers subtract to form the max amount. this will happen after u check day 1
    -- becauase for example, 

    --go backwards and check if backwards, what's the biggest difference between the 
    latest elements and the earliest
    */

