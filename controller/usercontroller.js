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
            if(isduplicated){
                return res.send('이미 있는 아이디 입니다');
            }
            await usermodel.insertuser(id, password);
            res.send('성공적으로 회원가입이 완료되었습니다.');
        }
        catch(err){
            res.send('회원가입중 오류');
        }
    }else{
        res.send('비밀번호와 비밀번호 확인이 알맞지 않습니다.');
    }//
}

exports.login = async(req, res) => {
    res.render('login');
}

exports.submitlogin = async (req, res) => {
    const {id, password} = req.body;
    try {
        const user = await usermodel.login(id, password);
        if(user){
            res.render('afterlogin');
        }
        else{
            res.render('login2');
        }
    }
    catch(err) {
        throw err;
    }
}