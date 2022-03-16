import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Eggs from './assets/eggs.png';

const MyProducts = (prop, {navigation}) => {
  return (
    <TouchableOpacity style={style.card} onPress={prop.click}>
      <View style={{alignItems: 'center'}}>
        <Image source={prop.product} style={{height: 120, width: 150}} />

        <View style={{marginHorizontal: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{prop.tittle}</Text>
          <Text style={{fontSize: 14, color: 'grey', marginTop: 2}}>
            {prop.quantity}
          </Text>
        </View>

        <View
          style={{
            marginTop: 5,
            marginLeft: 50,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginRight: 50,
            }}>
            RS: {prop.price}
          </Text>

          {/* <TouchableOpacity style={style.addToCartBtn}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

function HomeScreen({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      <MyProducts product={Eggs} tittle="Eggs" quantity="1 Dozen" price="10$" />
      {/*
          <MyProducts
            product={Eggs}
            tittle="Eggs"
            quantity="1 Dozen"
            price='10$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Eggs", image: Eggs });
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyProducts
            product={yogurt}
            tittle="Yogurt"
            quantity="1 kg"
            price='15$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Yogurt",image: yogurt });
            }}
          />
          <MyProducts
            product={Ghee}
            tittle="Desi Ghee"
            quantity="1 kg"
            price='30$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Ghee",image: Ghee });
            }}
          />
          */}
    </ScrollView>
  );
}

const App = () => {
  return (
    <View>
      <HomeScreen />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  header: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#e7f6f1',
  },
  cardImage: {
    padding: 10,
    height: 150,
    resizeMode: 'cover',
    width: 300,
    borderRadius: 15,
    // backgroundColor: "white",
    //backgroundColor: COLORS.primary,
    marginHorizontal: 8,
    marginVertical: 0,

    overflow: 'hidden',
    //Properties to setup your Shadow

    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 200,
    width: 160,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 90,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: 'white',
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
