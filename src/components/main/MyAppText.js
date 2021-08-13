import React, {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const FONT_SIZE_TYPES = {
  TITLE: {label: 'title', value: 20},
  PARAGRAPH: {label: 'paragraph', value: 15},
  INFO: {label: 'info', value: 10},
};

const MyAppText = props => {
  const {children, fontSize} = props;
  if (typeof children != 'string') {
    // console.warn('Expected a string as a text', children);
    return null;
  }
  function checkFontSize(_fontSize) {
    switch (_fontSize) {
      case FONT_SIZE_TYPES.TITLE.label:
        return FONT_SIZE_TYPES.TITLE.value;

      case FONT_SIZE_TYPES.PARAGRAPH.label:
        return FONT_SIZE_TYPES.PARAGRAPH.value;

      case FONT_SIZE_TYPES.INFO.label:
        return FONT_SIZE_TYPES.INFO.value;

      default:
        break;
    }
  }
  const fontSizeValue = checkFontSize(fontSize);
  return (
    <Text {...props} style={styles.text(fontSizeValue)}>
      {children}
    </Text>
  );
};
const possibleTypesOfFontSize = Object.values(FONT_SIZE_TYPES).map(
  fontSize => fontSize.label,
);
MyAppText.propTypes = {
  /**
   *  "title", "paragraph", "info"
   */
  fontSize: PropTypes.oneOf(possibleTypesOfFontSize),
};
export default MyAppText;

const styles = StyleSheet.create({
  text: (fontSize, color) => ({
    fontSize,
    color,
  }),
});
