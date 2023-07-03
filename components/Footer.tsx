import React from 'react';
import { footerList1, footerList2, footerList3 } from '@/utils/constants';


//reason to store this jsx in the function List is so that we can use it multiple times
// in typescript, while passing the parameters we have to specify it's type also
const List = ({items, mt} : {items:string[], mt:boolean}) => (
    <div className='mt-6 hidden xl:block'>
        {/* making this class dynamic so that we can use the parameter mt passed above to remove the margin from the first one */}
        <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
            {items.map((item)=> (
                <p key={item} className='text-gray-400 text-sm hover:underline cursor-pointer'
                >{item}</p>
            ))}
        </div>
        {/* checking  */}
    </div>
)

const Footer = () => {
  return (
    <div className='mt:6 hidden xl:block'>
        {/* passing the above created function */}
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt/>
        <List items={footerList3} mt/>
        <p className='text-gray-400 text-sm mt-5'>2023 VidVerse</p>
    </div>
  )
}

export default Footer