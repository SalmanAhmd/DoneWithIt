const { Platform } = require("react-native")
const { default: colors } = require("./colors")

export default {
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
}
