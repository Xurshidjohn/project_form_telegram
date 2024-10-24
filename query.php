<?php



	function get_last_index() {
	$connect = new PDO("sqlite:main.db");
		$result = $connect->query("SELECT * FROM `views` WHERE id ='0");
		foreach($result as $row) {
			print_r($row);
		}
	}

	get_last_index();
	
?>