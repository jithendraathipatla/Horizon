<?php
    if(isset($_POST['submit'])){
		$email=$_POST['email'];
		$phone=$_POST['mobile'];
	    $to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='century Property';
		$message="Project_name:"."Century Horizon"."\n"."Email :".$email."\n"."Phone :".$phone."\n";
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you, We will contact you shortly!</h1>";
			echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=11Fl3bN_M_7_kzMqoND6tdJr4_LnEL4RR">Click here to download Brochure</a><h3>';
			echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1b03J2U_AGPZA6DrxCldFMhucSFRUZxeM">Click here to download Cost Sheet</a><h3>';
		
		}
		else{
			echo "Something went wrong!";
		}
	
	}
	
?>
