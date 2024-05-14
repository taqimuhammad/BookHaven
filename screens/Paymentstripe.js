import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "../src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function Paymentstripe() {
  return (
    
    <StripeProvider publishableKey="pk_test_51Gz0OOHQjkfG1DwO9latQvA69lF4SGM6jl1DiHgWI5gkzHvI4XqlMDHDw3kQxHPZEJIZlGxxOBufbdfAPAOjVM1500HcxE0VZ2">
    <StripeApp />
  </StripeProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});