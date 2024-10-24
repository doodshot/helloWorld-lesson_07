import { Image, Text, View } from "react-native";
import { ToDo } from "@/api/data.mock";
import { styles } from "@/components/molecules/cardComponent/cardComponent.styles";
import React from "react";
import { ButtonComponent } from "@/components/atoms/button/button.atom";

export const TodoComponenet = ({
  id,
  title,
  descr
}: ToDo) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
        <ButtonComponent onPress={function (): void {
          throw new Error("Function not implemented.");
        } } title={""}/>
      <Text style={styles.title}>{title}</Text>
      </View>
      <Text>{descr}</Text>
    </View>
  );
};
