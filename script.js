function volume_sphere() {
    //Write your code here
	
    let radius = document.getElementById("radius").value;

    radius = Number(radius);

    if (radius < 0 || isNaN(radius)) {
        // alert("Please enter a valid non-negative radius");
		document.getElementById("volume").value="NAN";
        return;
    }

    let volume = (4 / 3) * Math.PI * radius * radius * radius;

    document.getElementById("volume").value = volume.toFixed(4);
}

  

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
