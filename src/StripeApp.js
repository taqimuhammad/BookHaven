import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'; 

const StripeApp = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("/"); 
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation(); 

  const handlePayNow = () => {
    if (!validateCardNumber(cardNumber)) {
      Alert.alert("Invalid Card Number", "Please enter a valid card number.");
    } else if (!validateExpiry(expiry)) {
      Alert.alert("Invalid Expiry Date", "Please enter a valid expiry date in MM/YY format.");
    } else if (!validateCvc(cvc)) {
      Alert.alert("Invalid CVC", "Please enter a valid CVC.");
    } else if (nameOnCard.trim() === "") {
      Alert.alert("Name Required", "Please enter the name on the card.");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        Alert.alert("Payment Success", "Payment processed successfully!");
      
        navigation.navigate('BookHaven'); 
      }, 1000);
    }
  };

  const validateCardNumber = (number) => {
    return number.replace(/\s/g, "").length === 16;
  };

  const validateExpiry = (expiry) => {
    const [month, year] = expiry.split("/");
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    return (
      /^\d{2}\/\d{2}$/.test(expiry) &&
      parseInt(month, 10) <= 12 &&
      parseInt(year, 10) >= currentYear &&
      (parseInt(year, 10) > currentYear || parseInt(month, 10) >= currentMonth)
    );
  };

  const validateCvc = (cvc) => {
    return /^\d{3,4}$/.test(cvc);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Card Number"
          style={styles.input}
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <View style={styles.inputRow}>
          <TextInput
            placeholder="MM/YY"
            style={[styles.input, styles.smallInput]}
            keyboardType="numeric"
            value={expiry}
            onChangeText={setExpiry}
          />
          <TextInput
            placeholder="CVC"
            style={[styles.input, styles.smallInput]}
            keyboardType="numeric"
            value={cvc}
            onChangeText={setCvc}
          />
        </View>
        <TextInput
          placeholder="Name on Card"
          style={styles.input}
          value={nameOnCard}
          onChangeText={setNameOnCard}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayNow} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Pay Now</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  smallInput: {
    width: "45%",
  },
  button: {
    backgroundColor: "#5cb85c",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StripeApp;
