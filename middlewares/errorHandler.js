const errorHandler = (err,req,res,next)=>{
    console.error(err.stack);//Useful for debugging

    const statusCode =err.statusCode || 500;
    // Send a structured response
    res.status(statusCode).json({
        success:false, message: err.message||'Internal server error',
        data:null
    });
}

export default errorHandler;