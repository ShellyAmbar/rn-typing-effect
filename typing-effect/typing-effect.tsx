import { Text, View } from 'react-native';
import React from 'react';
import Styles from './typing-effect.styles';
import TypingEffectProps from './interfaces';
import useTypingEffect from './hooks/useTypingEffect';

const TypingEffect = ({ text = '', typingDelay = 200, cursorDelay = 400, onEndTyping }: TypingEffectProps) => {
  const { typedText, isCursor } = useTypingEffect({ text, typingDelay, cursorDelay, onEndTyping });
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        {`${typedText}`}

        {isCursor && <Text style={Styles.corsur}> |</Text>}
      </Text>
    </View>
  );
};

export default TypingEffect;
