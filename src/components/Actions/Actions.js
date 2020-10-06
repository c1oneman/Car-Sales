  export const BUY_ITEM = 'BUY_ITEM'; 
export const REMOVE_ITEM = 'REMOVE_ITEM';
 
 
 export function buyItem(item) {
   console.log(item)
    return {
      type: BUY_ITEM,
      payload: item
    }
  };

  export function removeItem(item) {
    console.log(item)
    return {
      type: REMOVE_ITEM,
      payload: item
    }
  }