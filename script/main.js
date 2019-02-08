window.addEventListener("load", function () {
  const canvas = document.getElementById('canvas');

  let molecule = new Molecule(canvas, Point, 40, 3);

  molecule.start(); 
 

});
