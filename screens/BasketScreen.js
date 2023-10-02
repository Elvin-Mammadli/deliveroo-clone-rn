import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useEffect, useState } from "react";
import tw from "twrnc";
import { XCircleIcon } from "react-native-heroicons/outline";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-b border-[#00CCBB] bg-white shadow-sm`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}
          >
            <XCircleIcon color={"#00CCBB"} height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row items-center gap-x-4 px-4 py-3 bg-white my-5`}>
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          />
          <Text>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#00CCBB]`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
        // style={tw`divide-y divide-gray-200`}
        >
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              style={tw`flex-row items-center gap-x-3 bg-white py-2 px-5`}
            >
              <Text style={tw`text-[#00CCBB]`}>{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                style={tw`h-12 w-12 rounded-full`}
              />
              <Text style={tw`flex-1`}>{items[0]?.name}</Text>

              <Text style={tw`text-gray-600`}>
                <Text style={tw`flex-1`}>AZN {items[0]?.price}</Text>
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text style={tw`text-[#00CCBB] text-xs`}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 gap-y-4`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>Subtotal</Text>
            <Text style={tw`text-gray-400`}>AZN {basketTotal}</Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-400`}>Delivery Fee</Text>
            <Text style={tw`text-gray-400`}>AZN 5.99</Text>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text>Order Total</Text>
            <Text style={tw`font-extrabold`}>AZN {basketTotal + 5.99}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            style={tw`rounded-lg bg-[#00CCBB] p-4`}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
