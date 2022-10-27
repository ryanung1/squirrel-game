import react from 'react';
import {View, Text} from 'react-native'

const CellComponent = ({cellData}) => {
    const {key} = cellData;
    return(
      <View>
        <Text>{key}</Text>
      </View>
    )

}

export default CellComponent;