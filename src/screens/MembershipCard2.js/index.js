import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const MembershipCard2 = () => {
  return (
    <View style={styles.sectionContainer}>
      <ImageBackground
        source={require('../../assets/images/img5.png')}
        resizeMode="stretch"
        imageStyle={{borderRadius: 20}}
        style={styles.logoImage}>
        <View style={styles.plus}>
          <Text style={styles.plusText}>PLUS</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.titleBox1}>
              <Text style={styles.titleBox}>Bronze Membership</Text>
              <Text style={styles.boxText}>
                Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <View style={styles.boxPrice}>
                <Text style={styles.boxPriceTitle}>Great for Beginners</Text>
                <View style={styles.boxPrice2}>
                  <Text style={styles.boxPriceTitle3}>$25.90</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: 281,
    height: 359,
    margin: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
  },
  // logoImage: {
  //   width: '100%',
  //   height: 359,
  //   borderRadius: 50,
  // },
  box: {
    width: 300,
    height: 150,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 230,
    borderRadius: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleBox: {
    fontFamily: 'Nunito-Medium',
    fontWeight: '700',
    // margin: 12,
    color: '#111827',
    fontSize: 20,
    // lineHeight: '150'
  },
  boxText: {
    color: '#9CA3AF',
    // textAlignVertical: 5,
    fontSize: 10,
    width: 190,
  },
  titleBox1: {
    margin: 12,
  },
  boxPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxPrice2: {
    width: 64,
    height: 32,
    backgroundColor: '#FFF2EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  boxPriceTitle: {
    fontSize: 18,
    fontFamily: 'Nunito-Light',
  },
  boxPriceTitle3: {
    color: '#FF8142',
  },
  plus: {
    width: 60,
    height: 35,
    backgroundColor: '#FFF2EC',
    marginLeft: 250,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  plusText: {
    color: '#FF8142',
    fontWeight: '700',
  },
});

export default MembershipCard2;
