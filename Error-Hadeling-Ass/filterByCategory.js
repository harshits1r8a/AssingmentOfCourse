const product = [
    {name : "Shirt", category : "clothing"},
    {name : "Pants", category : "clothing"},
    {name : "Kurtha", category : "Ethenic"},
    {name : "Hat", category : "Accessories"},
    {name : "Sunglass", category : "Accessories"},
    {name : "Undergarment", category : "clothing"}
]


function filterByCategory(P){
    return (C)=> P.filter((e) => e.category == C )
}

let clothingProduct = filterByCategory(product)("clothing")

console.log(clothingProduct);