$(function() {
    var bodyEl= $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function(e) {
        bodyEl.toggleClass('active-nav');
        e.preventDefault();
    });
});

$(document).ready(function () {
var example1 = [
  ['Program Manager', 'Team A',98939,,160,40,40,40,40,40,40,40,40,40,160,160, '=E1+F1+G1+H1+I1+J1+K1+L1+M1+N1+O1+P1',],
  ['Solution Architect', 'Team A',115819,,160,40,0,0,0,0,0,0,0,0,0,0,'=E2+F2+G2+H2+I2+J2+K2+L2+M2+N2+O2+P2'],
  ['Project Manager', 'Team A',84561,,160,160,160,160,160,160,160,160,160,160,160,160,'=E3+F3+G3+H3+I3+J3+K3+L3+M3+N3+O3+P3'],
  ['Sr. Business Analyst', 'Team A',81374,,160,160,160,160,160,160,160,160,160,160,160,160,'=E4+F4+G4+H4+I4+J4+K4+L4+M4+N4+O4+P4'],
  ['Sr. Developer', 'Team A',103632,,160,160,160,160,160,160,160,160,160,160,160,160,'=E5+F5+G5+H5+I5+J5+K5+L5+M5+N5+O5+P5'],
  ['Developer', 'Team A',84054,,160,160,160,160,160,160,160,160,160,160,160,160,'=E6+F6+G6+H6+I6+J6+K6+L6+M6+N6+O6+P6'],
  ['Project Manager', 'Team B',84561,,160,160,160,160,160,160,160,160,160,160,160,160,'=E7+F7+G7+H7+I7+J7+K7+L7+M7+N7+O7+P7'],
  ['Business Analyst', 'Team B',65000,,160,160,160,160,160,160,160,160,160,160,160,160,'=E8+F8+G8+H8+I8+J8+K8+L8+M8+N8+O8+P8'],
  ['Jr. Developer', 'Team B',69401,,160,160,160,160,160,160,160,160,160,160,160,160,'=E9+F9+G9+H9+I9+J9+K9+L9+M9+N9+O9+P9'],
  ['Jr. Developer', 'Team B',69401,,160,160,160,160,160,160,160,160,160,160,160,160,'=E10+F10+G10+H10+I10+J10+K10+L10+M10+N10+O10+P10'],
  ];

var scenarioDisplay = [];
var container = $('#example5');
  
  container.handsontable({
    data: scenarioDisplay,
    startRows: 12,
    startCols: 17,
    minSpareRows: 10,
    colHeaders: ['Role Name', 'Team Name', 'Salary (default)', 'Salary (known)', 'Month-1', 'Month-2', 'Month-3', 'Month-4', 'Month-5', 'Month-6', 'Month-7', 'Month-8', 'Month-9', 'Month-10', 'Month-11', 'Month-12', 'Hours-Total'],
    rowHeaders: true,
    columns: [
      {type: 'dropdown',
  		source: ['Program Manager', 'Project Manager', 'Solution Architect', 'Sr. Developer', 'Developer', 'Jr. Developer', 'Sr. Business Analyst', 'Business Analyst', 'Sr. DBA', 'DBA', 'select role']},
      {},
      {editor: false},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    manualColumnResize: true,
    manualRowResize: true,
    formulas: true,
  });
  
  $("#scenarioLoad1").click(function(){
    var scenarioDisplay = example1;
    console.log(scenarioDisplay);
    container.handsontable({
    data: scenarioDisplay,
    startRows: 12,
    startCols: 17,
    minSpareRows: 10,
    colHeaders: ['Role Name', 'Team Name', 'Salary (default)', 'Salary (known)', 'Month-1', 'Month-2', 'Month-3', 'Month-4', 'Month-5', 'Month-6', 'Month-7', 'Month-8', 'Month-9', 'Month-10', 'Month-11', 'Month-12', 'Hours-Total'],
    rowHeaders: true,
    columns: [
      {type: 'dropdown',
      source: ['Program Manager', 'Project Manager', 'Solution Architect', 'Sr. Developer', 'Developer', 'Jr. Developer', 'Sr. Business Analyst', 'Business Analyst', 'Sr. DBA', 'DBA', 'select role']},
      {},
      {editor: false},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    manualColumnResize: true,
    manualRowResize: true,
    formulas: true,
  });
  });
});


