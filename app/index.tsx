import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const posterTypes = [
  {
    id: "display",
    title: "New Limited Edition",
    type: "Display",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=200&fit=crop",
  },
  {
    id: "promotion",
    title: "Up to 50% Off",
    type: "Promotion",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=150&h=200&fit=crop",
  },
  {
    id: "branding",
    title: "Barber Shop",
    type: "Branding",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=150&h=200&fit=crop",
    badge: "Editor's Choice",
  },
  {
    id: "birthday",
    title: "Birthday Party",
    type: "Party",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=150&h=200&fit=crop",
  },
];

const settings = [
  { label: "Size", value: "1080 x 1920 px" },
  { label: "Category", value: "Foods and beverage" },
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <View className="flex justify bg-black p-4 pt-6">
      <Ionicons name="close" size={52} color="white" />
      <View className="flex-row justify-between px-2 py-4 pt-12">
        <View className="items-center w-56">
          <View className="w-3/4 border-b-4 border-blue-400">
            <Text className="text-2xl font-bold text-white text-center mb-2">
              Smart script
            </Text>
          </View>
        </View>
        <Text className="text-2xl text-white mb-4">Advanced script</Text>
      </View>
      <View>
        <Text className="text-white text-2xl font-bold pb-3">
          what type of posters do you want to create?
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-6"
      >
        <View className="flex-row gap-x-4 mt-6">
          {posterTypes.map((poster) => (
            <TouchableOpacity key={poster.id} className="relative">
              <View className="w-36 h-40 rounded-lg overflow-hidden relative">
                <Image
                  source={{ uri: poster.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                {poster.badge && (
                  <View className="absolute top-2 left-2 bg-gray-700 rounded-full px-2 py-1">
                    <Text className="text-white text-xs font-medium">
                      {poster.badge}
                    </Text>
                  </View>
                )}
                <View className="absolute bottom-2 left-2 right-2">
                  <Text className="text-white text-xs font-bold mb-1">
                    {poster.title}
                  </Text>
                  <Text className="text-gray-300 text-xs">{poster.type}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View className="bg-gray-900 w-full h-64 rounded-lg mb-6 p-4">
        <Text className="text-white text-2xl">
          stuning promotional image of a deliciously decorated cake, emphazing
          its layers, frosting, and toppings in an enticing setting.
        </Text>
        <TouchableOpacity className="items-end rounded-lg p-4 mt-8">
            <View className="relative">
          <Ionicons name="image-outline" size={32} color="white" />
          <Ionicons
            name="add-circle"
            size={20}
            color="white"
            style={{ position: "absolute", bottom: -4, right: -4 }}
          />
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-gray-400 text-lg font-semibold mb-4">Settings</Text>
      <View className="space-y-4 mb-6">
        {settings.map((setting, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center justify-between bg-gray-900 rounded-lg px-4 py-4"
          >
            <Text className="text-white font-medium">{setting.label}</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 mr-2">{setting.value}</Text>
              <Ionicons name="chevron-forward" size={22} color="white" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        className="bg-white px-6 py-3 rounded-lg mb-4 mt-4"
        onPress={() => setVisible(true)}
      >
        <Text className="text-black text-2xl font-semibold text-center">
          Generate
        </Text>
      </TouchableOpacity>
      <Modal transparent visible={visible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white w-80 p-6 rounded-2xl items-center shadow-lg">
            <Text className="text-gray-700 mb-6 pt-2 text-2xl">
              Generated Successfully!
            </Text>
            <TouchableOpacity
              className="bg-orange-500 px-6 py-3 rounded-lg"
              onPress={() => setVisible(false)}
            >
              <Text className="text-white font-semibold">OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
