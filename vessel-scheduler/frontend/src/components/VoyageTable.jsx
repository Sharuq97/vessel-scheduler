import React, { useState } from 'react';

function VoyageTable() {
  const [voyages, setVoyages] = useState([
    {
      vesselName: 'CHANG QDC',
      voyage: 'CQDC01',
      eta: '2025-09-01',
      etb: '2025-09-01',
      etd: '2025-09-02',
      remarks: 'On schedule',
      link: 'https://www.marinetraffic.com/en/ais/details/ships/name:CHANG%20QDC',
    },
    {
      vesselName: 'CHANG WQS',
      voyage: 'CWQS02',
      eta: '2025-09-03',
      etb: '2025-09-03',
      etd: '2025-09-04',
      remarks: 'Awaiting customs clearance',
      link: 'https://www.marinetraffic.com/en/ais/details/ships/name:CHANG%20WQS',
    },
    {
      vesselName: 'CHANG B01',
      voyage: 'CB01',
      eta: '2025-09-05',
      etb: '2025-09-05',
      etd: '2025-09-06',
      remarks: 'Berthing delayed',
      link: 'https://www.marinetraffic.com/en/ais/details/ships/name:CHANG%20B01',
    },
    {
      vesselName: 'CHANG B02',
      voyage: 'CB02',
      eta: '2025-09-07',
      etb: '2025-09-07',
      etd: '2025-09-08',
      remarks: 'On schedule',
      link: 'https://www.marinetraffic.com/en/ais/details/ships/name:CHANG%20B02',
    },
    {
      vesselName: 'CHANG QDT',
      voyage: 'CQDT03',
      eta: '2025-09-09',
      etb: '2025-09-09',
      etd: '2025-09-10',
      remarks: 'Delayed due to weather',
      link: 'https://www.marinetraffic.com/en/ais/details/ships/name:CHANG%20QDT',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...voyages];
    updated[index][field] = value;
    setVoyages(updated);
  };

  return (
    <div>
      <h2>Voyage Schedule (Editable)</h2>
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
          {voyages.map((voyage, index) => (
            <tr key={index}>
              <td>
                <a href={voyage.link} target="_blank" rel="noopener noreferrer">
                  {voyage.vesselName}
                </a>
              </td>
              <td>
                <input
                  type="text"
                  value={voyage.voyage}
                  onChange={(e) => handleChange(index, 'voyage', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={voyage.eta}
                  onChange={(e) => handleChange(index, 'eta', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={voyage.etb}
                  onChange={(e) => handleChange(index, 'etb', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={voyage.etd}
                  onChange={(e) => handleChange(index, 'etd', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={voyage.remarks}
                  onChange={(e) => handleChange(index, 'remarks', e.target.value)}
                  style={{ color: voyage.remarks.toLowerCase().includes('delay') ? 'red' : 'green' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VoyageTable;
 