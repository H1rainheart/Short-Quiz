


let score = 0;
let q1score = 0;
let q2score = 0;
let q3score = 0;
let total = q1score + q2score + q3score;
function submit(){

	if (document.getElementById('ques1A').checked == true){
			document.getElementById('check').innerHTML = "Correct!";
						let q1score = score + 1;
				}  else if (document.getElementById('ques1B').checked == true) {
								document.getElementById('check').innerHTML = "Wrong answer, try again!";
						}else if (document.getElementById('ques1C').checked == true) {
									document.getElementById('check').innerHTML = "Wrong answer, try again!";
								}else if (document.getElementById('ques1D').checked == true) {
										document.getElementById('check').innerHTML = "Wrong answer, try again!";
										}else {
											document.getElementById('check').innerHTML = "Empty, please select an answer!";
												}						

	if (document.getElementById('ques2A').checked == true){
			document.getElementById('check2').innerHTML = "Correct!";
						let q2score = score + 1;
				}  else if (document.getElementById('ques2B').checked == true) {
								document.getElementById('check2').innerHTML = "Wrong answer, try again!";
						}else if (document.getElementById('ques2C').checked == true) {
									document.getElementById('check2').innerHTML = "Wrong answer, try again!";
								}else if (document.getElementById('ques2D').checked == true) {
										document.getElementById('check2').innerHTML = "Wrong answer, try again!";
										}else {
											document.getElementById('check2').innerHTML = "Empty, please select an answer!";
												}

	if (document.getElementById('ques3A').checked == true){
			document.getElementById('check3').innerHTML = "Correct!";
						let q3score = score + 1;
				}  else if (document.getElementById('ques3B').checked == true) {
								document.getElementById('check3').innerHTML = "Wrong answer, try again!";
						}else if (document.getElementById('ques3C').checked == true) {
									document.getElementById('check3').innerHTML = "Wrong answer, try again!";
								}else if (document.getElementById('ques3D').checked == true) {
										document.getElementById('check3').innerHTML = "Wrong answer, try again!";
										}else {
											document.getElementById('check3').innerHTML = "Empty, please select an answer!";
												}		

document.getElementById('score').innerHTML = `Your score is ${total}`;

}

