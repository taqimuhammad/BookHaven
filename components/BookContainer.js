import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import img1 from '../img/img4.png'; 
import img2 from '../img/img5.png'; 
import img3 from '../img/img6.png'; 
import img4 from '../img/img1.jpg'; 
import img6 from '../img/img2.jpg'; 
import img5 from '../img/img3.png'; 


const Bookinfo = [
  {
    id: 1,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    price: '350 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img1,
    
  },
  {
    id: 2,
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    price: '400 PKR',
    uploadedBy: 'Farasat Kareem',
    type: 'Exchange',
    image: img2,
    
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '0 PKR',
    uploadedBy: 'Taqi Muhammed',
    type: 'Borrow',
    image: img3,
    
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '0 PKR',
    uploadedBy: 'Awwab Sabir',
    type: 'Sale',
    image: img6,
    
  },
  {
    id: 5,
    title: 'The Cursed Child',
    author: 'J.K Rowling',
    price: '0 PKR',
    uploadedBy: 'Ali Haider',
    type: 'Borrow',
    image: img4,
    
  },{
    id: 6,
    title: 'Matilda',
    author: 'Roald Dahl',
    price: '600 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img5,
    
  },{
    id: 7,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '550 PKR',
    uploadedBy: 'Sanan Baig',
    type: 'Borrow',
    image: img6, 
  },
  
  {
    id: 8,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    price: '350 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img1,
    
  },
  {
    id: 9,
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    price: '400 PKR',
    uploadedBy: 'Farasat Kareem',
    type: 'Exchange',
    image: img2,
    
  },
  {
    id: 10,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '0 PKR',
    uploadedBy: 'Taqi Muhammed',
    type: 'Borrow',
    image: img3,
    
  },
  {
    id: 11,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '0 PKR',
    uploadedBy: 'Awwab Sabir',
    type: 'Sale',
    image: img6,
    
  },
  {
    id: 12,
    title: 'The Cursed Child',
    author: 'J.K Rowling',
    price: '0 PKR',
    uploadedBy: 'Ali Haider',
    type: 'Borrow',
    image: img4,
    
  },{
    id: 13,
    title: 'Matilda',
    author: 'Roald Dahl',
    price: '600 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img5,
    
  },{
    id: 14,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '550 PKR',
    uploadedBy: 'Sanan Baig',
    type: 'Borrow',
    image: img6, 
  },
  
  {
    id: 15,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    price: '350 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img1,
    
  },
  {
    id: 16,
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    price: '400 PKR',
    uploadedBy: 'Farasat Kareem',
    type: 'Exchange',
    image: img2,
    
  },
  {
    id: 17,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: '0 PKR',
    uploadedBy: 'Taqi Muhammed',
    type: 'Borrow',
    image: img3,
    
  },
  {
    id: 18,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '0 PKR',
    uploadedBy: 'Awwab Sabir',
    type: 'Sale',
    image: img6,
    
  },
  {
    id: 19,
    title: 'The Cursed Child',
    author: 'J.K Rowling',
    price: '0 PKR',
    uploadedBy: 'Ali Haider',
    type: 'Borrow',
    image: img4,
    
  },{
    id: 20,
    title: 'Matilda',
    author: 'Roald Dahl',
    price: '600 PKR',
    uploadedBy: 'Ayesha Nadeem',
    type: 'Sale',
    image: img5,
    
  },{
    id: 21,
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
    price: '550 PKR',
    uploadedBy: 'Sanan Baig',
    type: 'Borrow',
    image: img6, 
  },
];

const BookContainer = ({ title, author, price, uploadedBy, type, image }) =>{

  const navigation = useNavigation(); 

  const bookObject = { title, author, price, uploadedBy, type, image };
   

  return (
  
  <View style={styles.bookContainer}>
    <Image source={image} style={styles.bookImage} />
    <View style={styles.Bookinformation}>
      <Text style={styles.bookTitle}>Title: {title}</Text>
      <Text style={styles.bookAuthor}>Author: {author}</Text>
      <Text style={styles.bookPrice}>Price: {price}</Text>
      <Text style={styles.uploadedBy}>Uploaded by: {uploadedBy}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.saleButton}>
          <Text style={styles.saleButtonText}>{type}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}
          onPress={() => navigation.navigate('Bookdetail', { book: bookObject })}
          >More details</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  
 );
};
const styles = StyleSheet.create({
  

  bookContainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#F3EFFF',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#ffffff`',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom:15,
    
    
  
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5, // Assuming the book image also has rounded corners
  },
  Bookinformation: {
    marginLeft: 10, // Add space between the image and the book info
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 16, // Adjust the font size as necessary
  },
  bookAuthor: {
    fontWeight: 'bold',
    fontSize: 16, // Adjust the font size as necessary
  },
  bookPrice: {
    fontWeight: 'bold',
    fontSize: 16, // Adjust the font size as necessary
     // Add vertical margin for spacing
  },
  uploadedBy: {
    fontWeight: 'bold',
    fontSize: 16, // Adjust the font size as necessary
  },
  type: {
    fontWeight: 'bold',
    color: '#404B7C', // Green color for the Sale label
    fontSize: 14, // Adjust the font size as necessary
    marginVertical: 5, // Add vertical margin for spacing
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  saleButton: {
    backgroundColor: '#404B7C', // Green background for the Sale button
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  detailsButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#5F4B4B', // Border color based on the image provided
    borderWidth: 1,
    marginLeft: 10, // Add space between the Sale and More details button
  },
  saleButtonText: {
    color: '#FFFFFF', // White text for the Sale button
    fontWeight: 'bold',
  },
  detailsButtonText: {
    color: '#5F4B4B', // Color based on the image provided
    fontWeight: 'bold',
  }
  
  
});

export { BookContainer, Bookinfo };


