/** this is the main screen */
import React from "react";
import { View, Button, Text } from "react-native";
import { useBarista, drinks } from "./hook";

export const Main = () => {
  const { queue, completeQueue, currentDrink, addItem } = useBarista();

  const renderQueue = () => {
    return (
      <View>
        <Text>Queue:</Text>
        {queue.map((item) => {
          return <Text>{item.name}</Text>;
        })}
      </View>
    );
  };
  const renderCompleteQueue = () => {
    return (
      <View>
        <Text>Complete:</Text>
        {completeQueue.map((item) => {
          return <Text>{item.name}</Text>;
        })}
      </View>
    );
  };
  const renderCurrentDrink = () => {
    return (
      <View>
        <Text>Current Drink:</Text>
        <Text>{currentDrink?.name || "No Active Drink"}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={{ margin: 50 }}>
        <Button onPress={() => addItem(drinks[0])} title="Regular Coffee" />
        <Button onPress={() => addItem(drinks[1])} title="Espresso Coffee" />
        <Button onPress={() => addItem(drinks[2])} title="Latte Coffee" />
      </View>
      {renderCurrentDrink()}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {renderQueue()}
        {renderCompleteQueue()}
      </View>
    </>
  );
};
