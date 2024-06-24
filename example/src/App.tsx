import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, AppButton } from 'react-native-rn-waraps-ui';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>(1);

  React.useEffect(() => {
    multiply(1, 2).then(setResult);
  }, []);

  const doMultiply = () => {
    const num = result || 1;
    multiply(2, num).then(setResult);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <AppButton onPress={doMultiply}>Multiply</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
