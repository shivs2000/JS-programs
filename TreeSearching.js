var data = 
    {
    title: 'topNode',
     children: [
       {
           title: 'node1',
           children: [
           {
               title: 'randomNode_1'
           },
           {   
               title: 'node2',
               children: [
               {
                   title: 'randomNode_2',
                   children:[
                   {   
                       title: 'node2',
                       children: [
                       {
                           title: 'randomNode_3',
                       }]
                   }
                   ]
               }]
           }]
       }
      ]
     };

     const  Search=(data,key)=>{
         if (data.title===key){
             return data.children[0];
        }
        else if (data.children!=null){
            var result=null;
            var i;
            for(i=0;result==null&&i<data.children.length;i++){
                 result=Search(data.children[i],key);
              
            }
            return result;
        }
      
   return null;




     }
     const result=Search(data,'node2');
     console.log(result);