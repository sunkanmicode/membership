import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const MembershipList = () => {
  return (
    <View style={styles.body}>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/img2.png')}
            resizeMode="stretch"
            style={styles.logoImage}
          />
          <View style={styles.plus}>
            <Text style={styles.plusText}>PLUS</Text>
          </View>
          <View>
            <View style={styles.ViewText}>
              <Text style={styles.Text}>Bronze Membership</Text>
            </View>
            <View style={styles.viewPrice}>
              <Text style={styles.boxPriceTitle}>Great for Beginners</Text>
              <View style={styles.boxPrice2}>
                <Text style={styles.boxPriceTitle3}>free</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/img3.png')}
            resizeMode="stretch"
            style={styles.logoImage}
          />
          <View style={styles.plus}>
            <Text style={styles.plusText}>PLUS</Text>
          </View>
          <View>
            <View style={styles.ViewText}>
              <Text style={styles.Text}>Bronze Membership</Text>
            </View>
            <View style={styles.viewPrice}>
              <Text style={styles.boxPriceTitle}>Great for Beginners</Text>
              <View style={styles.boxPrice2}>
                <Text style={styles.boxPriceTitle3}>$25.90</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={require('../../assets/images/img4.png')}
            resizeMode="stretch"
            style={styles.logoImage}
          />
          <View style={styles.plus}>
            <Text style={styles.plusText}>PLUS</Text>
          </View>
          <View>
            <View style={styles.ViewText}>
              <Text style={styles.Text}>Bronze Membership</Text>
            </View>
            <View style={styles.viewPrice}>
              <Text style={styles.boxPriceTitle}>Great for Beginners</Text>
              <View style={styles.boxPrice2}>
                <Text style={styles.boxPriceTitle3}>$25.90</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fffff',
  },
  item: {
    width: 380,
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    position: 'relative',
  },
  ViewText: {
    width: 200,
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: 10,
  },
  Text: {
    fontSize: 24,
    padding: 10,
    fontFamily: 'Nunito-Medium',
    fontWeight: '700',
  },
  logoImage: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 20,
  },
  boxPriceTitle: {
    fontSize: 18,
    fontFamily: 'Nunito-Light',
  },
  boxPrice2: {
    width: 64,
    height: 32,
    backgroundColor: '#FFF2EC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  boxPriceTitle3: {
    color: '#FF8142',
    fontWeight: '600',
    alignSelf: 'center',
  },
  plus: {
    width: 60,
    height: 35,
    backgroundColor: '#FFF2EC',
    // marginLeft: 250,
    // marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    top: 15,
    left: 20,
    opacity:0.8,
  },
  plusText: {
    color: '#FF8142',
    fontWeight: '700',
  },
});

export default MembershipList