import { Image, Text, TouchableOpacity, View } from "react-native";
import { ToDo } from "@/api/data.mock";
import { styles } from "@/components/molecules/cardComponent/cardComponent.styles";
import React, { useState } from "react";
import { ButtonComponent } from "@/components/atoms/button/button.atom";

export const TodoComponenet = ({
  id,
  title,
  descr
}: ToDo) => {

  const [isPressed, setIsPressed] = useState(false);

  // Funzione che cambia lo stato di `isPressed`
  const handlePress = () => {
    setIsPressed((prev: any) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBtn}>
      <TouchableOpacity 
          style={[styles.button, isPressed && styles.buttonPressed]} 
          onPress={handlePress}>
        </TouchableOpacity>      
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text>{descr}</Text>
    </View>
  );
};
