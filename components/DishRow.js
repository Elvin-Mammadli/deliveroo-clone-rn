import { View, Text, TouchableOpacity, Image } from "react-native";
// import Currency from "react-currency-format";
import { urlFor } from "../sanity";
import tw from "twrnc";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useState } from "react";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prev) => !prev)}
        style={tw`bg-white border p-4 border-gray-200 ${
          isPressed ? "border-b-0" : ""
        }`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text>
              AZN {price}
              {/* <Currency quantity={price} currency="AZN" /> */}
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              style={[
                tw`h-20 w-20 bg-gray-300 p-4`,
                { borderWidth: 1, borderColor: "#F3F3F4" },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center gap-x-2 pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} color={"#00CCBB"} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
