import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c1d27"
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },

  input: {
    alignSelf: "stretch",
    marginHorizontal: 36,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#242531",
    marginTop: 25,
    fontSize: 24,
    textAlign: "center",
    color: "#6a3bc0"
  },

  result: {
    alignSelf: "stretch",
    marginHorizontal: 36,
    marginTop: 25,
    padding: 20,
    backgroundColor: "#242531",
    borderTopWidth: 3,
    borderTopColor: "#6a3bc0"
  },

  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },

  operation: {
    color: "#fff",
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
});

export default styles;
