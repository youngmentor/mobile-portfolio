import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';

const projects = [
    {
        id: '1',
        title: 'E-Commerce App',
        description: 'A full-featured online shopping application with cart functionality and payment integration.',
        technologies: 'React Native, Redux, Stripe',
        year: '2023',
        url: 'https://example.com/ecommerce-app',
    },
    {
        id: '2',
        title: 'Weather Forecast',
        description: 'Real-time weather updates with a beautiful UI and 7-day forecast.',
        technologies: 'Expo, API Integration, Custom Animations',
        year: '2023',
        url: 'https://example.com/weather-forecast',
    },
    {
        id: '3',
        title: 'Task Management',
        description: 'Productivity app for managing daily tasks with reminders and categories.',
        technologies: 'React Native, Context API, AsyncStorage',
        year: '2022',
        url: 'https://example.com/task-management',
    },
    {
        id: '4',
        title: 'Social Media App',
        description: 'Connect with friends, share photos, and message in real-time.',
        technologies: 'React Native, Firebase, Push Notifications',
        year: '2022',
        url: 'https://example.com/social-media-app',
    },
];

export default function ProjectsScreen() {
    const openURL = async (url: string) => {
        try {
            await WebBrowser.openBrowserAsync(url);
        } catch (err) {
            console.error('Failed to open URL:', err);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-6 pt-4">
                {projects.map((project) => (
                    <View key={project.id} className="bg-gray-50 rounded-xl p-6 mb-4 border border-gray-200">
                        <Text className="text-xl font-bold text-gray-800 mb-1">{project.title}</Text>
                        <Text className="text-sm text-gray-500 mb-3">{project.year}</Text>
                        <Text className="text-base text-gray-700 mb-3">{project.description}</Text>
                        <View className="bg-blue-100 self-start px-3 py-1 rounded-full mb-3">
                            <Text className="text-blue-800 text-sm">{project.technologies}</Text>
                        </View>
                        <TouchableOpacity onPress={() => openURL(project.url)}>
                            <Text className="text-blue-600 text-sm underline">View Project</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}