import React from 'react';
import moment from 'moment';

const HeaderTitle = () => (
  <p style={{ marginBottom: '8px' }}>
    <span style={{ fontWeight: 'bold' }}>Lambda School </span>
    <span style={{ color: '#808080', fontSize: '1.2rem' }}>
      @LambdaSchool • {moment().format('D MMM')}
    </span>
  </p>
);

export default HeaderTitle;
