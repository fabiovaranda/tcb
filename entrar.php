<!DOCTYPE html>
<html>
	<?php
		include("head.php");
	?>
	<body>
		<?php 
			include_once("topbar.php");
		?>
		
		<div class="row panel large-centered columns" style="padding-top:5em;">
            <div class="large-4 columns">&nbsp;</div>
            <div class="large-4 columns">
                <h1 align="center" style="padding-bottom: 20px;">Login</h1>
                    <div class="large-centered columns">
                        <center>
                            <?php
                                include('login.php');
                            ?>
                        </center>
                    </div>
            </div>
            <div class="large-4 columns">&nbsp;</div>
        
		
		</div>
		<div class='row'>
		<?php
			include('footer.php'); 
		?>
		</div>
	</body>
</html>