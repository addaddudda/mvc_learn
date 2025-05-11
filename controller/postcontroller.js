const postmodel = require('../model/postmodel');

exports.postcontroller = async (req,res) => {
    const {postname, postdetali} = req.body;
    try{
        await postmodel.uploadpost(postname, postdetali);
    }
    catch(err){
        res.send('메모 올리는중 에러');
    }
}