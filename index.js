function solution(start, finish){
    let moves = finish - start 
    let numOfThrees = Math.floor(moves/3)
    let numOfOnes = moves - (numOfThrees*3)
    return numOfThrees + numOfOnes
}