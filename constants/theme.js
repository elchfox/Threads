import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

export const COLORS = {

    black: "#1E1F20",
    gray: "#e8e8e8",

      
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 10,
    padding: 15,
    padding2: 10,
    //Margin top of header
    marginTop: 55,
    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions

    width:SCREEN_WIDTH,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};


export const DIRS = {
   rtl : 'left'
};

const appTheme = { COLORS, SIZES, FONTS, DIRS };

export default appTheme;