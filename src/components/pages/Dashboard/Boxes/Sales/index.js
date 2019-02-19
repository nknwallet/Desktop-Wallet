import React from 'react';

import Box from 'Root/components/tools/Box';
import Chart from 'Root/components/tools/Chart';

function Sales() {
  return (
    <Box title="Sales" width={891} height={519} line>
      <Chart />
    </Box>
  );
}

export default Sales;
