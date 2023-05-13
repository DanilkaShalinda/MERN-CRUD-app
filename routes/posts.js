const express = require('express');
const posts = require('../models/posts');

const router = express.Router();
//save post in DB

router.post("/post/save", (req, res) => {
    let newPost = new posts(req.body);
    newPost.save()
        .then(() => {
            return res.status(200).json({
                success: "Post Saved Successfully",
            });
        })
        .catch((err) => {
            return res.status(400).json({
                error: err,
            });
        });
});

//get posts

router.get('/posts', async (req, res) => {
    try {
        const allPosts = await posts.find().exec();
        return res.status(200).json({
            success: true,
            all: allPosts
        });
    } catch (err) {
        return res.status(400).json({
            error: err
        });
    }
});

//update posts

router.put('/posts/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
        .then(()=>{
            return res.status(200).json({
                success:'Post Updated successfully'

            })
        })
        .catch((err)=>{
            return res.status(400).json({
                error:err
            })
        })

})

//delete posts

router.delete('/posts/delete/:id',(req,res) =>{
    posts.findByIdAndRemove(req.params.id)
        .then(()=>{
            return res.status(200).json({
                message:'Posts delete successfully'
            })
        })
        .catch((err)=>{
            return res.status(400).json({
                message:err
            })
        })

})


module.exports = router;