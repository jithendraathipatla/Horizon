<?php
    if(isset($_POST['submit'])){
		$name=$_POST['client_name'];
		$email=$_POST['client_mail_id'];
		$phone=$_POST['client_phone_number'];
	
		$to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Century Horizon';
		$message="Project_name:"."Century Horizon"."\n"."Name :".$name."\n"."Phone :".$phone."\n"."email :".$email."\n";
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
			echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=11Fl3bN_M_7_kzMqoND6tdJr4_LnEL4RR">Click here to download Brochure</a><h3>';
			echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1b03J2U_AGPZA6DrxCldFMhucSFRUZxeM">Click here to download Cost Sheet</a><h3>';
		
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
