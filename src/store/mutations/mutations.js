export default {
   SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
   },

   SET_CART: (state, product) => {
      if (state.cart.length) {
         let isProductExists = false;
         state.cart.map(function (item) {
            if (item.article === product.article) {
               isProductExists = true;
               item.quantity++
            }
         })
         if (!isProductExists) {
            state.cart.push(product)
         }
      } else {
         state.cart.push(product)
      }
   },

   REMOVE_FROM_CARD: (state, index) => {
      state.cart.splice(index, 1)
   },

   DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1)
         state.cart[index].quantity--
   },

   INCREMENT: (state, index) => {
      state.cart[index].quantity++
   },
}