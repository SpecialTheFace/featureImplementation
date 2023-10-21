const express = require ( 'express' );
const app = express ();

// 引入路由
const uploadFileRouter = require ( './router/uploadFileRoute' );

// 路由注册
app.use ( '/upload' , uploadFileRouter );

// 静态资源服务
app.use ( '/' , express.static ( 'public' ) )
app.use ( '/static' , express.static ( 'static' ) )


const port = 8080
app.listen ( port , () => {
    console.log ( `listening on http://localhost:${ port } ` )
} )

