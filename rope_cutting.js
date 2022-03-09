const ropeCuttingProblem = function (ropeLength, cut1, cut2, cut3) {
    // Base Case
    if(ropeLength == 0) return 0
    if(ropeLength < 0) return -1

    //Recursion
    const maximum = Math.max(
        ropeCuttingProblem(parseInt(ropeLength-cut1), cut1, cut2, cut3),
        ropeCuttingProblem(parseInt(ropeLength-cut2), cut1, cut2, cut3),
        ropeCuttingProblem(parseInt(ropeLength-cut3), cut1, cut2, cut3)
    )

    if (maximum == -1) return -1
    
    return maximum+1;
}

console.log(ropeCuttingProblem(23, 11, 9, 12))