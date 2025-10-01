import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Logo from '../../assets/app/logo.svg';
import Icon from '../../assets/app/app-icon.svg';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const handleGuestLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 justify-center items-center  bg-secondary px-9">
      <View className="mb-4">
        <Logo width={250} height={250} accessibilityLabel="Logo aplikacji" />
      </View>

      <View className="mb-36">
        <Icon width={110} height={110} accessibilityLabel="Ikona aplikacji" />
      </View>

      <Text className="text-accent text-left font-bold text-2xl mb-8">
        Welcome to the best YouTube-based learning application.
      </Text>

      <TouchableOpacity
        className="bg-primary w-full py-5  rounded-md mb-10 "
        activeOpacity={0.7}
        accessibilityLabel="Zaloguj się jako gość"
        onPress={handleGuestLogin}
      >
        <Text className="text-accent font-bold text-center ">Log in as guest</Text>
      </TouchableOpacity>

      {/* Tekst privacy na dole */}
      <Text className="text-sm text-accent text-center absolute bottom-8 w-2/3">
        By continuing you agree with{' '}
        <Text
          className="text-primary underline"
          onPress={() => Linking.openURL('http://google.com')}
        >
          Terms and Conditions
        </Text>{' '}
        and{' '}
        <Text
          className="text-primary underline"
          onPress={() => Linking.openURL('http://google.com')}
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}
