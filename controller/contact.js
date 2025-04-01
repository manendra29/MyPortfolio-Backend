import {catchAsyncError} from "../Middleware/catchAsyncError.js"
import ErrorHandler from "../Middleware/error.js";
import {sendEmail} from "../utils/sendEmail.js";

export const contactMe=catchAsyncError(async(req,res,next) =>{
    const {name,email,subject,message}=req.body;
    if(!name || !email || !subject || !message)
        return next(new ErrorHandler("Please Provide All Fields",401));
    await sendEmail(email,message,name,subject);
    res.status(201).json({
        success:true,
        message:"Query Sent",
    })
})