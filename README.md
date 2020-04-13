## Coding Assessment

### Assignment

The Coffee Shop

In this exercise you’ll be recreating the functionality of a coffee shop.

The Menu
Here are three menu items with their corresponding creation times:
Cafe Au Lait - 4 seconds
Cappuccino - 10 seconds
Expresso - 15 seconds

When you select an item on the menu, it immediately gets added to the ticketing system.

Multiple items can be tapped and queued up for the barista to do.

The Barista
The barista will start working on the next ticket if he’s not already working on another task.

There is only one barista for this particular coffee shop

The Coffee Counter
When the barista is done preparing the item, it gets put on the coffee counter and waits for a person to pick it up.

Drinks are picked up every 3 seconds on average.

Your Task
Your task is to recreate this functionality in code. Adding a visual representation is a major plus but not a requirement for completion.

### Postmortem

I unfortunately was not able to finish the assignment in time. While I thought the solution was trivial at first, thinking that a barista in this instance would simply be an async function that waits the "preparation time" and then resolves the promise, thus delivering the drink to the customer.

The ran into two obstacles:

1. I could not access previous state when my async function would try to update state, this is why the list is jumpy and sometimes doesn't work.
2. I realized to late that I had misread a part of the instructions, an asynchronous barista service would be more similar to a counter full of baristas, any one ready to make your order with no waiting. What was required however was one barista making it so it was closer to a synchronous queuing system. I unfortunately ran out of time before I was able to figure out the details of how to make this work.
