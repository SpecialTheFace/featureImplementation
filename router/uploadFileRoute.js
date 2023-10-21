const express = require ( 'express' );
const router = express.Router ()
const multer = require ( "multer" );
const path = require ( "path" );

// 磁盘存储引擎使您可以完全控制将文件存储到磁盘。
const storage = multer.diskStorage ( {
    destination : function ( req , file , cb ) {
        cb ( null , path.resolve ( __dirname , "../static" ) );
    } ,
    filename : function ( req , file , cb ) {
        // 时间戳-6位随机字符.文件后缀
        const timeStamp = Date.now ();
        const ramDomStr = Math.random ().toString ( 36 ).slice ( -6 );
        // 获取文件后缀名
        const ext = path.extname ( file.originalname );
        const filename = `${ timeStamp }-${ ramDomStr }${ ext }`;
        cb ( null , filename );
    } ,
} );

const upload = multer ( {
    storage : storage
} );


// upload.single ( "img" )  中的参数与 input 中的 name 属性有关
router.post ( "/" , upload.single ( "img" ) , ( req , res ) => {
    const url = `/static/${ req.file.filename }`;
    res.send ( {
        code : 0 ,
        msg : "" ,
        data : url ,
    } );
} );


module.exports = router;
