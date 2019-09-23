const style= (theme) =>({
    container:{
       display:"flex",
       alignItems:"center",
       justifyContent:"Center",
       height:"95vh",
       textAlign:"center",
   },
   typo:{
    fontSize:theme.spacing() * 5,
    fontFamily:"Operator Mono Light"
},
button:{
        fontFamily:"Operator Mono Light",
       marginTop:theme.spacing() * 2 ,
   },

})
export default style;