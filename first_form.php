<?php
    if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['mobile'];
		$to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Century Horizon';
		$message="Project_name:"."Century Horizon"."\n"."Name :".$name."\n"."Phone :".$phone."\n"."emiail :".$email."\n";
		$headers="From: ".$email;
		if(mail($to, $subject, $message, $headers)){
		$apiKey = urlencode("PC56D9fMjaQ-3gw9h0qV4d5KkwYZMpo5xr1McpRBYv");
		// Message details
		$numbers = array(918050933931);
		$sender = urlencode("TXTLCL");
		$message = rawurlencode("$message");
		$numbers = implode(",", $numbers);
		// Prepare data for POST request
		$data = array("apikey" => $apiKey, "numbers" => $numbers, "sender" => $sender, "message" => $message);
		// Send the POST request with cURL
		$ch = curl_init("https://api.textlocal.in/send/");
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($ch);
		curl_close($ch);
		echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=11Fl3bN_M_7_kzMqoND6tdJr4_LnEL4RR">Click here to download Brochure</a><h3>';
		echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1b03J2U_AGPZA6DrxCldFMhucSFRUZxeM">Click here to download Cost Sheet</a><h3>';
		}
		
	}
?>
