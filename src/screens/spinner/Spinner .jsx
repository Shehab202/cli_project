// import React from 'react';
// import { Spinner } from '@ui-kitten/components';

// export const SpinnerThemingShowcase = () => (
//   <Spinner />
// );
import { View } from 'react-native'
import { Layout, Spinner } from '@ui-kitten/components';
const Loading  = () => {
  return (
    <Layout style={{ flex: 1,margin:100, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner />
    </Layout>
  )
}

export default Loading 