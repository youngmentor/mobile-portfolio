import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
const experiences = [
    {
        title: 'Senior Mobile Engineer (React Native Expo)',
        company: 'Tranxact Technologies.',
        duration: '2025 - Present',
        description: 'Led the development of multiple mobile applications used by thousands of users daily. Implemented best practices for state management and app architecture.',
    },
    {
        title: 'Mobile Engineer (React Native Expo)',
        company: 'Hollo Technologies',
        duration: '2024 - present',
        description: 'Developed and maintained cross-platform applications for iOS and Android. Collaborated with designers to implement pixel-perfect UI components.',
    },
    {
        title: 'Senior Frontend Engineer (React)',
        company: 'Maarketplaace Technologies',
        duration: '2024 - present',
        description: 'Developed and maintained cross-platform applications for iOS and Android. Collaborated with designers to implement pixel-perfect UI components.',
    },
    {
        title: 'Junior Frontend Engineer (React)',
        company: 'Kora Payment network',
        duration: '2024 - present',
        description: 'Developed and maintained cross-platform applications for iOS and Android. Collaborated with designers to implement pixel-perfect UI components.',
    },
    {
        title: 'Intern Frontend Engineer (React)',
        company: 'Kora Payment network',
        duration: '2023 - 2024',
        description: 'Developed and maintained cross-platform applications for iOS and Android. Collaborated with designers to implement pixel-perfect UI components.',
    },
];

export default function AboutScreen() {
    const handleContactPress = (type: string, value: string) => {
        switch (type) {
            case 'email':
                Linking.openURL(`mailto:${value}`);
                break;
            case 'phone':
                Linking.openURL(`tel:${value}`);
                break;
            case 'linkedin':
            case 'github':
            case 'twitter':
                Linking.openURL(value);
                break;
            default:
                break;
        }
    };
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6 pt-4">
                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Profile</Text>
                    <Text className="text-base text-gray-600 mb-4">
                        I`m a passionate mobile developer with 3+ years of experience building cross-platform
                        applications using React Native and Expo. I specialize in creating user-friendly,
                        performant mobile experiences that solve real problems.
                    </Text>
                </View>
                <TouchableOpacity
                    className="bg-blue-500 py-3 px-6 rounded-lg mb-6 flex-row items-center justify-center"
                    onPress={() => {/* Add logic to open resume PDF */ }}
                >
                    <Ionicons name="document-text-outline" size={20} color="white" />
                    <Text className="text-white font-bold ml-2">Download Resume</Text>
                </TouchableOpacity>
                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Skills</Text>
                    <View className="flex-row flex-wrap">
                        {['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'API Integration', 'React Query', 'Webflow', 'Wordpress'].map((skill) => (
                            <View key={skill} className="bg-blue-100 mr-2 mb-2 px-3 py-1 rounded-full">
                                <Text className="text-blue-800">{skill}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View className="mb-6">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Experience</Text>
                    {experiences.map((experience, index) => (
                        <View key={index} className="mb-4">
                            <Text className="text-lg font-bold text-gray-800">{experience.title}</Text>
                            <Text className="text-base text-gray-600">{experience.company} | {experience.duration}</Text>
                            <Text className="text-base text-gray-600 mt-1">{experience.description}</Text>
                        </View>
                    ))}
                </View>

                <View className="mb-8">
                    <Text className="text-xl font-bold text-gray-800 mb-2">Education</Text>
                    <Text className="text-lg font-bold text-gray-800">BS in Computer Science</Text>
                    <Text className="text-base text-gray-600">University of Technology | 2015 - 2019</Text>
                </View>
                <View className="mb-10">
                    <Text className="text-xl font-bold text-gray-800 mb-4">Contact</Text>

                    <TouchableOpacity
                        className="flex-row items-center mb-4"
                        onPress={() => handleContactPress('email', 'olaleresuliton43@gmail.com')}
                    >
                        <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                            <Ionicons name="mail-outline" size={20} color="#3B82F6" />
                        </View>
                        <View>
                            <Text className="text-gray-800 font-semibold">Email</Text>
                            <Text className="text-gray-600">olaleresuliton43@gmail.com</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center mb-4"
                        onPress={() => handleContactPress('phone', '07058290856')}
                    >
                        <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-3">
                            <Ionicons name="call-outline" size={20} color="#10B981" />
                        </View>
                        <View>
                            <Text className="text-gray-800 font-semibold">Phone</Text>
                            <Text className="text-gray-600">+234 7058290856</Text>
                        </View>
                    </TouchableOpacity>

                    <Text className="text-gray-800 font-semibold mb-3 mt-2">Social Media</Text>
                    <View className="flex-row">
                        <TouchableOpacity
                            className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center mr-4"
                            onPress={() => handleContactPress('linkedin', 'https://linkedin.com/in/yourprofile')}
                        >
                            <FontAwesome name="linkedin" size={20} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="w-12 h-12 bg-gray-800 rounded-full items-center justify-center mr-4"
                            onPress={() => handleContactPress('github', 'https://github.com/yourusername')}
                        >
                            <FontAwesome name="github" size={20} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="w-12 h-12 bg-blue-400 rounded-full items-center justify-center"
                            onPress={() => handleContactPress('twitter', 'https://twitter.com/yourusername')}
                        >
                            <FontAwesome name="twitter" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}