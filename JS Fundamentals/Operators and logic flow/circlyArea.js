function area(r) {
    let circlyArea = Math.PI*(Math.pow(r, 2))
    let areaRounded = circlyArea.toFixed(2)
    return areaRounded
}
console.log(area(5))
