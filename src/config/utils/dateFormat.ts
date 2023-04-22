import { format } from "date-fns";

export const dateFormat = (x: any) => { 
  return  format(
            new Date(x),
            'do MMM, yyyy'
        )
};