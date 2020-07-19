import {db} from '../../lib/firebase'

export default(req,res)=>{ 
    
    debugger
    const ref = db.ref(`todos`)
    return ref.get().then(snapshot=>{ 
        res.status(200).json({
            todos:snapshot.val()
            
        })
    }).catch((e)=>{
        console.log(e)
        res.status(400).json({
            error:e
        })
    })

}