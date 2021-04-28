var React = require("react-native");

var { StyleSheet } = React;
module.exports = StyleSheet.create({

  row: {
    flex: 1,
    flexDirection: "row"
  },
  column: {
    flex: 1,
    flexDirection: "column"
  },
  wrap: {
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    justifyContent:'space-between'
  },
  textCenter:{
    textAlign:'center'
  },
  centerRow:{alignItems:'center'},
  center:{alignItems:'center',justifyContent:'center'},
  rowSpaceAround: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  columnSpaceAround: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  rowSpaceBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnSpaceBetween: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },

  spaceAround: {
    justifyContent: "space-around"
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  shadowPro:{
    shadowColor: "#00000026",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },
 

  boxShadow: {
     shadowColor: '#00000082',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 8
  },
  boxShadowC: {
    shadowColor: "#00000040",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8
  },
  titleHeader:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    flexDirection:'row', 
    backgroundColor:'white',
    padding:15,
    zIndex:2
  }
});
