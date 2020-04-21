import { useState, useEffect } from "react";

export type DrinkOrder = {
  id: string;
  name: string;
  prepTime: number;
};

export const drinks: DrinkOrder[] = [
  {
    id: "coffee",
    name: "Regular Coffee",
    prepTime: 7000,
  },
  {
    id: "espresso",
    name: "Espresso Coffee",
    prepTime: 3000,
  },
  {
    id: "latte",
    name: "Latte Coffee",
    prepTime: 12000,
  },
];

export const useBarista = () => {
  const [queue, setQueue] = useState<DrinkOrder[]>([]);
  const [completeQueue, setCompleteQueue] = useState<DrinkOrder[]>([]);
  const [currentDrink, setCurrentDrink] = useState<DrinkOrder | null>(null);

  useEffect(() => {
    _processDrink();
  }, [queue, completeQueue, currentDrink]);

  const _processDrink = () => {
    if (!currentDrink && queue.length > 0) {
      const drink = _popQueue();
      setCurrentDrink(drink);
      setTimeout(() => {
        _pushCompleteQueue(drink);
        setCurrentDrink(null);
      }, drink.prepTime);
    }
  };

  const _pushCompleteQueue = (item: DrinkOrder) => {
    setCompleteQueue([...completeQueue, item]);
  };

  const _pushQueue = (item: DrinkOrder) => {
    setQueue([...queue, item]);
  };

  const _popQueue = () => {
    const firstItem = queue.slice(0, 1)[0];
    const otherItems = queue.slice(1, queue.length);

    setQueue(otherItems);

    return firstItem;
  };

  return {
    queue,
    completeQueue,
    currentDrink,
    addItem: _pushQueue,
  };
};
