export const cashFormat = (x: any, number?: number) => {
  if(x){ 
    return Number(x).toFixed(number?  number:2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 
  return "0"
};