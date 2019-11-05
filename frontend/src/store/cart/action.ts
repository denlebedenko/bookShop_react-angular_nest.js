const addToCart = (id:string) => {
    return {
        type: 'ADD_TO_CART',
        payload: id,
    };
};

export { 
    addToCart,
}