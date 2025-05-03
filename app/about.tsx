import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6 pt-4">
                <Text className="text-2xl font-bold text-gray-800 mb-6">About Me</Text>

                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Profile</Text>
                    <Text className="text-base text-gray-600 mb-4">
                        I`m a passionate mobile developer with 3+ years of experience building cross-platform
                        applications using React Native and Expo. I specialize in creating user-friendly,
                        performant mobile experiences that solve real problems.
                    </Text>
                </View>

                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Skills</Text>
                    <View className="flex-row flex-wrap">
                        {['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'UI/UX Design', 'API Integration'].map((skill) => (
                            <View key={skill} className="bg-blue-100 mr-2 mb-2 px-3 py-1 rounded-full">
                                <Text className="text-blue-800">{skill}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Experience</Text>

                    <View className="mb-4">
                        <Text className="text-lg font-bold text-gray-800">Senior Mobile Developer</Text>
                        <Text className="text-base text-gray-600">TechCorp Inc. | 2021 - Present</Text>
                        <Text className="text-base text-gray-600 mt-1">
                            Led the development of multiple mobile applications used by thousands of users daily.
                            Implemented best practices for state management and app architecture.
                        </Text>
                    </View>

                    <View>
                        <Text className="text-lg font-bold text-gray-800">Mobile Developer</Text>
                        <Text className="text-base text-gray-600">AppWorks | 2019 - 2021</Text>
                        <Text className="text-base text-gray-600 mt-1">
                            Developed and maintained cross-platform applications for iOS and Android.
                            Collaborated with designers to implement pixel-perfect UI components.
                        </Text>
                    </View>
                </View>

                <View className="mb-8">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Education</Text>
                    <Text className="text-lg font-bold text-gray-800">BS in Computer Science</Text>
                    <Text className="text-base text-gray-600">University of Technology | 2015 - 2019</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}