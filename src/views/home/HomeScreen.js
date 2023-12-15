import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Style from '../../style/Style'
import Color from '../../style/Color'
import HomeScreenBackground from './components/HomeScreenBackground'
import Spacing from '../../components/Spacing'
import TextCard from '../../components/TextCard'
import { resources } from '../../utils/strings'
import ListContainer from '../../components/ListContainer'
import UnSelectedGridIcon from '../../assets/svg/unselected-grid.svg'
import SelectedGridIcon from '../../assets/svg/selected-grid.svg'
import UnSelectedListIcon from '../../assets/svg/unselected-list.svg'
import SelectedListIcon from '../../assets/svg/selected-list.svg'
// import HomeScreenStyles from './HomeScreenStyles'
import HomeGridListItem from './components/HomeGridListItem'
import { homeScreenListData } from '../../utils/dummyData'
import RoundedView from '../../components/RoundedView'
import HomeListView from './components/HomeListView'
export default HomeScreen = ({}) => {
    const HomeScreenStyles = require('./HomeScreenStyles').default

    const [layout, setLayout] = useState('')
    const [column, setNumberOfColumn] = useState(2)
    const [key, setKey] = useState('grid-key')

    useEffect(() => {
        setLayout('grid')
    }, [])
    const handleTogle = (layoutName, numColumns) => {
        console.log('layoutName', layoutName)
        setLayout(layoutName)
        setKey(layoutName === 'grid' ? 'grid-key' : 'list-key')

        setNumberOfColumn(numColumns)
    }

    return (
        <HomeScreenBackground>
            <Spacing val={20} />
            <TextCard text={resources?.cordilleras} />
            <Spacing val={12} />
            <ListContainer>
                <Spacing val={10} />
                <View style={HomeScreenStyles.toggleContainer}>
                    <RoundedView
                        onPress={() => handleTogle('grid', 2)}
                        layout={layout === 'grid' ? layout : ''}
                    >
                        {layout === 'grid' ? (
                            <SelectedGridIcon height={25} width={25} />
                        ) : (
                            <UnSelectedGridIcon height={25} width={25} />
                        )}
                    </RoundedView>

                    <RoundedView
                        onPress={() => handleTogle('list', 1)}
                        layout={layout === 'list' ? layout : ''}
                    >
                        {layout === 'list' ? (
                            <SelectedListIcon height={25} width={25} />
                        ) : (
                            <UnSelectedListIcon height={25} width={25} />
                        )}
                    </RoundedView>
                </View>

                {/* lists View */}
                <Spacing val={14} />

                <FlatList
                    key={key}
                    initialNumToRender={4}
                    windowSize={5}
                    showsVerticalScrollIndicator={false}
                    data={homeScreenListData}
                    renderItem={({ item }) =>
                        layout === 'grid' ? (
                            <HomeGridListItem
                                item={item}
                                onPress={() => {
                                    // Handle onPress as needed
                                }}
                            />
                        ) : (
                            <HomeListView
                                item={item}
                                onPress={() => {
                                    // Handle onPress as needed
                                }}
                            />
                        )
                    }
                    numColumns={column}
                    keyExtractor={(item) =>
                        item.id ? item.id.toString() : null
                    } // Handle potential null or undefined item.id
                />
            </ListContainer>
        </HomeScreenBackground>
    )
}
