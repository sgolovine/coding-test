/** this is the main screen */
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { CustomerOrder, Drinks } from "./Models";
import styled from "styled-components";

type QueueState = {
  [guid: string]: CustomerOrder;
};

// This function will emulate the barista
// Making the drink. All it does is set a timeout
// and resolve the promise after that timeout is up
async function baristaService(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
}

// Internal function, how long each order should take
function _getOrderTime(orderType: Drinks) {
  if (orderType === "cappuccino") return 10;
  if (orderType === "espresso") return 15;
  if (orderType === "latte") return 4;
  // We should never get here
  // Prevents undefined returns
  return 0;
}

function _makeGuid() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
    c
  ) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export const Main = () => {
  const [queue, setQueue] = useState<QueueState>({});

  const handleOrder = (orderType: Drinks) => {
    // Generate an order guid
    const orderGuid = _makeGuid();

    const orderTime = _getOrderTime(orderType);

    const currentOrder: CustomerOrder = {
      id: orderGuid,
      name: orderType,
      complete: false,
    };

    setQueue({
      ...queue,
      [orderGuid]: currentOrder,
    });

    baristaService(orderTime).then((resp) => {
      setQueue({
        ...queue,
        [orderGuid]: {
          ...currentOrder,
          complete: true,
        },
      });
    });
  };

  const renderQueue = () => {
    if (Object.keys(queue).length === 0) {
      return <Text>You don't have any orders yet</Text>;
    }
    return Object.keys(queue).map((key: keyof QueueState) => {
      return (
        <Row key={queue[key].id}>
          <TextLeft>{queue[key].name}</TextLeft>
          <TextRight>{queue[key].complete ? "Done" : "Preparing..."}</TextRight>
        </Row>
      );
    });
  };

  return (
    <>
      <View style={{ margin: 50 }}>
        <Button onPress={() => handleOrder("latte")} title="Add Latte" />
        <Button
          onPress={() => handleOrder("cappuccino")}
          title="Add Cappuccino"
        />
        <Button onPress={() => handleOrder("espresso")} title="Add Espresso" />
      </View>
      {renderQueue()}
    </>
  );
};

const Row = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const TextLeft = styled(Text)``;

const TextRight = styled(Text)``;
