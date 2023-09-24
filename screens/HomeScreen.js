import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {

  return (
    <SafeAreaView style={tw`bg-white`}>
      
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-4 gap-x-2`}>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />

        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB"/>
      </View>

      {/* Search */}

      <View style={tw`flex-row items-center gap-x-2 pb-2 mx-4`}>
        <View style={tw`flex-1 flex-row gap-x-2 bg-gray-200 p-3`}>
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput 
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView>
        {/* Categories */}

        {/* Featured Rows */}

        
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen