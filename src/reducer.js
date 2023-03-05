export const initialState  = {
    basket: []
};
 
//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
//reduce is a function that iterates through basket and tally up the total

//reducer is something that is always listening for dispatch
//changing what the basket currently was and changing it to new
// from state.basket to action,item
const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1)
            }
            else {
                console.warn (
                    'Cant find the product (id : ${action.id}) as its not in basket !'
                )
            }
            
            return {
                ...state,
                basket: newBasket
            }

    }
};

export default reducer;