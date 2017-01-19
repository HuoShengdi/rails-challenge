const allItems = (state)=>{
  const itemsArray = Object.keys(state.feedback).map((key)=>{
    return state.feedback[key];
  })

  return itemsArray;
}

export {allItems}
