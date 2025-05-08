const usermodel = require('../model/usermodel');
const express = require('express');

exports.home = async(req, res) => {
    res.render('index');
}

exports.signup = async(req, res) => {
    res.render('signup');
}

exports.submitsignup = async (req, res) => {
    const {id, password, checkpassword} = req.body;
    if(password == checkpassword){
        try {
            const isduplicated = await usermodel.finduser(id);
            if(!isduplicated){
                return res.send('이미 있는 아이디 입니다');
            }
            await usermodel.insertuser(id, password);
            res.send('성공적으로 회원가입이 완료되었습니다.');
        }
        catch(err){
            res.status(500).send('회원가입중 에러');
        }
    }else{
        res.send('비밀번호와 비밀번호 확인이 알맞지 않습니다.');
    }
}