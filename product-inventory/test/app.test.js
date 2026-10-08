const {calculateDiscount, filterProducts, sortInventory} = require("../app.js")

// ############ FUNCTION TEST 1 ############

describe("calculateDiscount", function() {
    test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
    });
    test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
    });
    test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
    });
});

// ############ FUNCTION TEST 2 ############

let sampleProducts = ["apple", "banana", "cherry"];
let sampleProducts2 = "";
let sampleProducts3 = [];

const callback1 = (array) => {
    let filteredArray = []
    for (const index of array) {
        if (index.includes("a")) {
            filteredArray.push(index)
        }
    } return filteredArray
} 

const callback2 =  "nothing"

const callback3 = (array) => {
    let filteredArray = []
    for (const index of array) {
        if (index.includes("a")) {
            filteredArray.push(index)
        }
    } return filteredArray
}


describe("filterProducts", function() {
    test ("Should filter products by letter a", 
        function() {
            expect(filterProducts(sampleProducts, callback1)).toEqual(["apple", "banana"])
        }
    );
    test ("Callback is not a function", 
        function() {
            expect(filterProducts(sampleProducts, callback2)).toEqual([])
        }
    );
    test ("Product is not an array", 
        function() {
            expect(filterProducts(sampleProducts2, callback1)).toEqual([])
        }
    );
    test ("Product is an array but empty", 
        function() {
            expect(filterProducts(sampleProducts3, callback1)).toEqual([])
        }
    )
});

// ############ FUNCTION TEST 3 ############

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];

    return products.filter(callback); 
    // Filtering call back in our function allows us to test with different fx
    // instead of a single hardcoded fx
}