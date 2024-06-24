


export function getSectionListData(data) {
  const groupedItems = data.reduce((acc, item) => {
    const { category, title, price ,pic } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ name: title, price: `$${price}.00` ,picture:pic});
    return acc;
  }, {});
  
  // Map grouped items into the desired format
  const menuItemsToDisplay = Object.entries(groupedItems).map(([title, data]) => ({
    title,
    data
  }));
  return menuItemsToDisplay
}

export function newsections(data){

  let DATA=[]

data.forEach(element => {
  const cat =element.category.title
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



