import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
   padding: 10,
   display: "flex",
   justifyContent: "flex-start",
   alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    fontFamily: "Arial"
  },
  containerBtn: {
    flexDirection: "row",
    padding: 10
  }, 
  button: {
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  
});
