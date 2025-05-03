import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex-1 px-6 pt-8">
        <View className="items-center mb-10">
          <View className="w-32 h-32 rounded-full bg-blue-500 items-center justify-center mb-4">
            <Text className="text-white text-4xl font-bold">SO</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-800">Suliton Olalere</Text>
          <Text className="text-xl text-gray-600">Web/Mobile Developer</Text>
        </View>

        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-800 mb-2">Welcome</Text>
          <Text className="text-base text-gray-600 mb-4">
            Thank you for checking out my portfolio app. I`m passionate about creating beautiful,
            functional mobile experiences using React Native and Expo.
          </Text>
        </View>

        <View className="flex-row justify-between">
          <TouchableOpacity
            className="bg-blue-500 px-6 py-4 rounded-xl w-40 items-center"
            onPress={() => router.push('/projects')}
          >
            <Text className="text-white font-bold text-lg">Projects</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-blue-500 px-6 py-4 rounded-xl w-40 items-center"
            onPress={() => router.push('/about')}
          >
            <Text className="text-white font-bold text-lg">About Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="py-6 bg-gray-100">
        <Text className="text-center text-gray-500">Build with ❤️ by codewithbayo</Text>
      </View>
    </SafeAreaView>
  );
}