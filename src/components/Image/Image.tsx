import type { FC } from 'react';
import { useCallback, useState } from 'react';
import type { ImageProps } from 'react-native';
import { Image as RNImage, StyleSheet } from 'react-native';

const Image: FC<ImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadEnd = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <RNImage
        {...props}
        source={require('../../assets/images/placeholderImage.png')}
        style={StyleSheet.compose(props.style, { display: isLoaded ? 'none' : 'flex' })}
      />
      <RNImage
        {...props}
        onLoadEnd={onLoadEnd}
        style={StyleSheet.compose(props.style, {
          position: isLoaded ? 'relative' : 'absolute',
          transform: [{ scale: isLoaded ? 1 : 0 }],
        })}
      />
    </>
  );
};

export default Image;
