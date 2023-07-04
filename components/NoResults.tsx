import React from 'react';

interface IProps {
    text:string;
}

//use iprops like this for simpler ones
const NoResults = ({text} : IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults