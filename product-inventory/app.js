function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') { 
        return null
    } else if (discountRate < 0 || discountRate > 1) {
        return null;
    } else {
        let discountedPrice = Number((price * (1 - discountRate)).toFixed(2));
        return discountedPrice;
    }
}


function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    
    return callback(products); 
    // Filtering call back in our function allows us to test with different fx
    // instead of a single hardcoded fx
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports = {calculateDiscount, filterProducts, sortInventory}

