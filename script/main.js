window.addEventListener("load", function () {
  const canvas = document.getElementById('canvas');

  let molecule = new Molecule(canvas, Point, 50, 3);

  molecule.start(); 
  // setTimeout(molecule.stop.bind(molecule), 2000);
 

});
