import React from 'react';
import { Helmet } from "react-helmet-async";

const Metadata = ({metaData}) => {
  return (
    <div>
         <Helmet>
    <title>{metaData}</title>
  </Helmet>
    </div>
  )
}

export default Metadata
