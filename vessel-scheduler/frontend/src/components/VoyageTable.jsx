import React from 'react';

function VoyageTable() {
  return (
    <div>
      <h2>Voyage Schedule</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Vessel Name</th>
            <th>Voyage</th>
            <th>ETA</th>
            <th>ETB</th>
            <th>ETD</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://www.marinetraffic.com/en/ais/details/ships/name:ZHONG%20GU%20LIN%20YI"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZHONG GU LIN YI
              </a>
            </td>
            <td>SL1</td>
            <td>2025-08-28</td>
            <td>2025-08-28</td>
            <td>2025-08-29</td>
            <td style={{ color: 'red' }}>Delayed due to weather</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VoyageTable;
