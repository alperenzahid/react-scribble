module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--tablet': '(min-width: 980px)' }
        },
        {
          customMedia: { '--desktop': '(min-width: 1270px)' }
        }
      ]
    }
  }
}
