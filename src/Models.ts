/** defines the data models for various things in the app */

export type Drinks = "latte" | "cappuccino" | "espresso";
export type Status = "waiting" | "preparing" | "complete";

export type CustomerOrder = {
  id: string;
  name: Drinks;
  complete: boolean;
};
