import { useState } from 'react'
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
import HomeScreenStyles from './HomeScreenStyles'
export default HomeScreen = ({}) => {
    const [layout, setLayout] = useState('grid')

    const handleTogle = (layoutName) => {
        setLayout(layoutName)
    }
    return (
        <HomeScreenBackground>
            <Spacing val={20} />
            <TextCard text={resources?.cordilleras} />
            <Spacing val={10} />
            <ListContainer>
                <Spacing val={10} />
                <View style={HomeScreenStyles.toggleContainer}>
                    <TouchableOpacity
                        onPress={() => handleTogle('grid')}
                        style={[
                            HomeScreenStyles.iconsBox,
                            {
                                backgroundColor:
                                    layout === 'grid'
                                        ? Color.yellowColor
                                        : Color.white,
                            },
                        ]}
                    >
                        {layout === 'grid' ? (
                            <SelectedGridIcon height={25} width={25} />
                        ) : (
                            <UnSelectedGridIcon height={25} width={25} />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleTogle('list')}
                        style={[
                            HomeScreenStyles.iconsBox,
                            {
                                backgroundColor:
                                    layout === 'list' ? '#ddad5a' : Color.white,
                            },
                        ]}
                    >
                        {layout === 'list' ? (
                            <SelectedListIcon height={25} width={25} />
                        ) : (
                            <UnSelectedListIcon height={25} width={25} />
                        )}
                    </TouchableOpacity>
                </View>
            </ListContainer>
        </HomeScreenBackground>
    )
}
