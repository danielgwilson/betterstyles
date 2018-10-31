// This file contains work arounds for office-api using the legacy @office-iss/react-native dataservice instead of reka-react-native
// This file can be deleted once office-api has been updated

const resources = require('@office-iss/sdx-build-tools/lib/haul-resources');

export default resources.createHaulConfig({
  webpackConfig: {
    resolve: {
      alias: {
        '@office-iss/react-native-dataservice': '@office-iss/reka-react-native'
      }
    }
  }
});
