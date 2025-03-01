import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import HomeScreenBackground from './components/HomeScreenBackground'
import Spacing from '../../components/Spacing'
import TextCard from '../../components/TextCard'
import { resources } from '../../utils/strings'
import ListContainer from '../../components/ListContainer'
import UnSelectedGridIcon from '../../assets/svg/unselected-grid.svg'
import SelectedGridIcon from '../../assets/svg/selected-grid.svg'
import UnSelectedListIcon from '../../assets/svg/unselected-list.svg'
import SelectedListIcon from '../../assets/svg/selected-list.svg'
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
                            <SelectedGridIcon height={20} width={20} />
                        ) : (
                            <UnSelectedGridIcon height={20} width={20} />
                        )}
                    </RoundedView>

                    <RoundedView
                        onPress={() => handleTogle('list', 1)}
                        layout={layout === 'list' ? layout : ''}
                    >
                        {layout === 'list' ? (
                            <SelectedListIcon height={20} width={20} />
                        ) : (
                            <UnSelectedListIcon height={20} width={20} />
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
                            <HomeGridListItem item={item} onPress={() => {}} />
                        ) : (
                            <HomeListView item={item} onPress={() => {}} />
                        )
                    }
                    numColumns={column}
                    keyExtractor={(item) =>
                        item.id ? item.id.toString() : null
                    }
                />
            </ListContainer>
        </HomeScreenBackground>
    )
}
