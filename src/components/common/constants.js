import { Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window');


//FONT SCALING
//Usage: nf(16)
const scale = SCREEN_WIDTH / 375;
const normalizeFont = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
    }
}

//DYNAMIC DIMENSION CONSTANTS 
//Usage: wp(5), hp(20)
const widthPercentageToDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};


const widthFromPixel = (widthPx, w = 375) => {
    const scale = SCREEN_WIDTH / w;
    const newSize = widthPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};

const heightFromPixel = (heightPx, h = 667) => {
    const scale = SCREEN_HEIGHT / h;
    const newSize = heightPx * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
};

export {
    widthFromPixel as wpx,
    heightFromPixel as hpx,
    normalizeFont as nf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
};