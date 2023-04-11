function calculateTotalPrice(cart, discountPct=0){
    let totalPrice = 0;
    cart.forEach(function(item){
        totalPrice += item.price * item.quantity;
    });
    let discountAmount = totalPrice * discountPct / 100;
    let discountedPrice = totalPrice - discountAmount;
    return {totalPrice, discountAmount, discountedPrice}
}

module.exports = {calculateTotalPrice}