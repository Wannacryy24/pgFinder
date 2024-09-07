import React from 'react'

export default function ProductTable({data}) {
    console.log(data);
  return (
    <div>
        {

            data.map(function (item,index){
                if(item.category==='Fruits'){
                   return <>
                            <li key={index}>{item.name}</li>
                        </>
                }
            })
        }
    </div>
  )
}
