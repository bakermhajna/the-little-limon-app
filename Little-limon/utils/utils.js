

export function reshapingArray(menuarray){
  let DATA=[]

  menuarray.forEach(element => {
   
    const itemOB={
        title:element.category,
        data:[{
          name:element.title,
          price:element.price,
          pic:element.pic
      }]
    }
    if(DATA.length==0){
        DATA.push(itemOB)
    }else{
        let flag=true
        for(let i=0 ;i<DATA.length;i++){
            if(DATA[i].title===category){
                DATA[i].data.push(elementdata)
                flag=false
                break
            }
        }
        if(flag)DATA.push(itemOB)
    }
  });
  return DATA
}



