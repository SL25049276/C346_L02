import React from 'react';
import {View, Text} from 'react-native';

function Welcome(code,name) {
  return (
      <Text>
        Welcome to {code} - {name}
      </Text>
  );
}

class ModuleInfo extends React.Component {
  render() {
    return (
        <View>
          <Text> </Text>
          <Text>These are my modules this semester:</Text>

          {Welcome("C346", "Mobile App Development")}
          {Welcome("C339", "Software Testing and Analytics")}
          {Welcome("C218", "UI/UX Design for Apps")}
          {Welcome("C304", "Cloud Application Development")}
        </View>
    );
  }
}

export default ModuleInfo;

