import React from 'react';
import { Link } from 'react-router-dom';

const SingleCurrency = (props) => {
  const { 
    website_slug,
    id,
    rank,
    name,
    symbol
    } = props.currency;
  return (
    <div className="singleCurrency">
      <Link to={{ pathname:`/${website_slug}`, state: { id } }} >
        <span>{rank}.</span>
        <span>{name}</span>
        <span>({symbol})</span>
      </Link>
    </div>
  );
}

export default SingleCurrency;