
// Sample student data
const studentDataList = [
  { name: 'RUIZ, ANGEL MAE R.', section: 'STE-A', average: 20, description: 'ABOVE AVERAGE', percentage: 100.00 },
  { name: 'ROA, ROMELYN M.', section: 'STE-B', average: 19.75, description: 'ABOVE AVERAGE', percentage: 97.86 },
  { name: 'SADIA, JASS BENEDICT', section: 'STE-A', average: 18.86, description: 'ABOVE AVERAGE', percentage: 94.29 },
  { name: 'OPENIANO, ROLDAN MATTHEW P.', section: 'STE-B', average: 18.71, description: 'ABOVE AVERAGE', percentage: 93.57 },
  { name: 'ROBIS, KATE YSABELLE G.', section: 'STE-A', average: 18.67, description: 'ABOVE AVERAGE', percentage: 93.33 },
  { name: 'ROCERO, CHEDRICK M.', section: 'STE-A', average: 17.86, description: 'ABOVE AVERAGE', percentage: 89.29 },
  { name: 'SALCEDO, AERA GABRIELLE R.', section: 'STE-B', average: 17.86, description: 'ABOVE AVERAGE', percentage: 89.29 },
  { name: 'DIANCO, GABRIELLE B.', section: 'STE-B', average: 17.71, description: 'ABOVE AVERAGE', percentage: 88.57 },
  { name: 'RECTO, NIKO R.', section: 'STE-B', average: 17.71, description: 'ABOVE AVERAGE', percentage: 88.57 },
  { name: 'ROOT, RICHMAE R.', section: 'STE-A', average: 17.43, description: 'ABOVE AVERAGE', percentage: 87.14 },
  { name: 'FLORENDO, SHARAH RELANO', section: 'SPJ', average: 17.14, description: 'ABOVE AVERAGE', percentage: 85.71 },
  { name: 'MOLO, MARY ANGELA R.', section: 'STE-A', average: 17.00, description: 'ABOVE AVERAGE', percentage: 85.00 },
  { name: 'MONGUEZ, CARLEY RIAN I.', section: 'STE-B', average: 17.00, description: 'ABOVE AVERAGE', percentage: 85.00 },
  { name: 'RICO, LOREA RAYAH R.', section: 'STE-A', average: 16.86, description: 'ABOVE AVERAGE', percentage: 84.29 },
  { name: 'MALALUAN, REGIE R.', section: 'STE-A', average: 16.86, description: 'ABOVE AVERAGE', percentage: 84.29 },
  { name: 'LABAJO, MARIAN R.', section: 'STE-B', average: 16.86, description: 'ABOVE AVERAGE', percentage: 84.29 },
  { name: 'EBBA, NICOLE LAURENTE', section: 'SPJ', average: 16.86, description: 'ABOVE AVERAGE', percentage: 84.29 },
  { name: 'RICO, MIKO REGALA', section: 'MATATAG', average: 16.83, description: 'ABOVE AVERAGE', percentage: 84.29 },
  { name: 'REY, JON STEPHEN B.', section: 'STE-B', average: 16.71, description: 'ABOVE AVERAGE', percentage: 83.57 },
  { name: 'RIO, RHEANNE LYKA M.', section: 'STE-A', average: 16.57, description: 'ABOVE AVERAGE', percentage: 82.86 },
  { name: 'DE GUZMAN, JOSE WILFREDO R. ', section: 'STE-A', average: 16.29, description: 'ABOVE AVERAGE', percentage: 81.43 },
  { name: 'CUAYCONG, BEA R,', section: 'STE-A', average: 16.29, description: 'ABOVE AVERAGE', percentage: 81.43 },
  { name: 'ROTONI, ANGIELYN R.', section: 'STE-B', average: 16.29, description: 'ABOVE AVERAGE', percentage: 81.43 },
  { name: 'RABINO, JENNICA ROJAS', section: 'SPJ', average: 16.29, description: 'ABOVE AVERAGE', percentage: 81.43 },
  { name: 'NARVAJA, LEE IVAN RAMO', section: 'SPJ', average: 16.14, description: 'ABOVE AVERAGE', percentage: 80.71 },
  { name: 'BALBALOSA, KHEANCHEE RUTOR', section: 'MATAPAT', average: 16.00, description: 'AVERAGE', percentage: 80.00 },
  { name: 'RABINO, ERIKA R.', section: 'STE-A', average: 15.83, description: 'AVERAGE', percentage: 79.17 },
  { name: 'RAGOT, MICHELLE JOY ', section: 'MATAPAT', average: 15.83, description: 'AVERAGE', percentage: 79.17 },
  { name: 'ALANO, ANGEL L.', section: 'STE-A', average: 15.71, description: 'AVERAGE', percentage: 78.57 },
  { name: 'ROCA, JHON OLIVER R.', section: 'STE-B', average: 15.50, description: 'AVERAGE', percentage: 77.50 },
  // Add more student data as needed
];

// Add event listeners to each rank row
for (let i = 1; i <= 30; i++) {
  const row = document.getElementById('rank' + i);
  row.addEventListener('click', () => {
    showDetails(i);
  });
}

function showDetails(rank) {
  // Fetch student details based on rank
  const studentIndex = rank - 1; // Adjust for zero-based index
  const studentData = studentDataList[studentIndex];

  // Display details
  document.getElementById('studentName').textContent = studentData.name;
  document.getElementById('section').textContent = studentData.section;
  document.getElementById('average').textContent = studentData.average;
  document.getElementById('description').textContent = studentData.description;
  document.getElementById('percentage').textContent = studentData.percentage;

  // Hide all details initially
  document.querySelectorAll('.toggle-row').forEach(row => {
    row.classList.remove('active');
  });

  // Show details for selected rank
  document.getElementById('rank' + rank).classList.add('active');
}
