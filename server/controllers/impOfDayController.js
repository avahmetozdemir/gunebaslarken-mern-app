import ImpOfDay from "../models/impOfDay.js";



export const getAllImpOfDay =async(req,res)=> {

  try {
    const impOfDay = await ImpOfDay.find({})
    res.status(200).json({
      status: 'success', 
      results: impOfDay.length,
      data: {
          impOfDay
      }
  });
    
  } catch (error) {
    
  }
        
};


export const getImpOfDay = async(req,res)=> {
    const resId =req.params.id 

    const impOfDay = await ImpOfDay.findOne({id:resId})
    res.status(200).json({
        status: 'success', 
        data: {
            impOfDay
        }
    })  
}
