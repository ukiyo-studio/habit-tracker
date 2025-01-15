import { View, Text, TextInput, Button } from 'react-native';

export function HabitsScreen() {
  return (
    <View>
      <View>
        <TextInput placeholder='Your course goal!'></TextInput>
        <Button title='Add Goal'></Button>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}
