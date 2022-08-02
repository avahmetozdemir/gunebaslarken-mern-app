import Protocol from "../models/protocol.js";



export const getAllProtocols =async(req,res)=> {

  try {
    const protocols = await Protocol.find({})
    res.status(200).json({
      status: 'success', 
      results: protocols.length,
      data: {
          protocols
      }
  });
    
  } catch (error) {
    
  }
        
};


export const getProtocol = async(req,res)=> {
    const resId =req.params.id 

    const protocol = await Protocol.findOne({id:resId})
    res.status(200).json({
        status: 'success', 
        data: {
            protocol
        }
    })  
}
