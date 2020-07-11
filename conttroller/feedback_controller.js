const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError.js');
const feedback = require('../schema/feedbackModel');
const { json } = require('body-parser');

exports.newfeedback = catchAsync(async(req,res,next)=>{
    const newfeedback = await feedback.create(req.body);

    res.status(200).json({
        status:"success",
        feedback:newfeedback
    });
})


exports.updategood = catchAsync(async(req,res,next)=>{
    const id = req.body._id;
    const currfeedback = await feedback.findById(id);

    currfeedback.good++;
    currfeedback.save();

    res.status(200).json({
        status:"success",
        feedback:currfeedback
    })
})

exports.updatebad = catchAsync(async(req,res,next)=>{
    const id = req.body._id;
    const currfeedback = await feedback.findById(id);

    currfeedback.bad++;
    currfeedback.save();

    res.status(200).json({
        status:"success",
        feedback:currfeedback
    })
})

exports.updatenormal = catchAsync(async(req,res,next)=>{
    const id = req.body._id;
    const currfeedback = await feedback.findById(id);

    currfeedback.normal++;
    currfeedback.save();

    res.status(200).json({
        status:"success",
        feedback:currfeedback
    })
})


exports.getfeedback = catchAsync(async(req,res,next)=>{
    const id = req.body._id;
    const currfeedback = await feedback.findById(id);
    
    res.status(200).json({
        status:"success",
        feedback:currfeedback
    })
})
