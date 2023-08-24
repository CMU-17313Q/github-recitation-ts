 // Import the fibonacci function 
import fibonacci from "./fib";

// Import Request and Response types from Express
import { Request, Response } from "express"; 

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10)); // Specify radix 10 when parsing integers
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};
