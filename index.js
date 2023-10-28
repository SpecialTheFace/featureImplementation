const express = require ( 'express' );
const svgCaptcha = require ( 'svg-captcha' );
const app = express ();
const cors = require ( 'cors' );

// 解决烦人的跨域问题
app.use ( cors () )


const port = 8080;
app.get ( '/' , ( req , res ) => {
    const captcha = svgCaptcha.create ( {
        size : 5 ,
        ignoreChars : '0o1i' ,
        noise : 8 ,
        color : true ,
    } );
    res.type ( 'svg' );
    res.status ( 200 ).send ( captcha.data );
} )

// 服务器测试
app.get ( '/home' , ( req , res ) => {
    res.send ( 'Hello World' )
} )


app.listen ( port , () => {
    console.log ( `Example app listening on port ${ port }` )
} )

