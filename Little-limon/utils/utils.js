

export function reshapingArray(menuarray){
  let DATA=[]
  menuarray.forEach(element => {
    const cat =element.category
    const elementdata={
        name:element.title,
        price:element.price,
        pic:element.pic
    }
  
    const t={
        title:cat,
        data:[elementdata]
    }
    if(DATA.length==0){
        DATA.push(t)
    }else{
        let f=false
        for(let i=0 ;i<DATA.length;i++){
            f=false
            if(DATA[i].title===cat){
                DATA[i].data.push(elementdata)
                break
            }
            f=true
        }
        if(f)DATA.push(t)
    }
  });
  return DATA
}



