<html>
	<?php 
		include('head.php');
	?>
	<body>
<?php include_once('topbar.php'); ?>
		<div class='row' style='position:relative; padding-top:3%;'>
			<div class='large-2 columns'>&nbsp; </div>
			<div class='large-8 columns'>
			<h1 align='center'>Registar</h1>
				<div class='panel'>
					<form method='post' action='registar.php'>
						<div class="row">
							<div class="large-12 columns">
								<input type="text" id='nome' name='nome' onchange='ValidarNome()' placeholder="Nome" required />
							</div>
							<div class="large-12 columns">
								<input type="text" id='email' name='email' onchange='ValidarEmail()' placeholder="E-mail" required />
							</div>
							<div class="large-12 columns">
								<input type="text" id='cemail' name='cemail' onchange='ValidarEmail()' placeholder="Confirmar E-mail" required />
							</div>
							<div class="large-12 columns">
								<input type="password" id='pwd' name='pwd' onchange='ValidarPwd()' placeholder="Password" required />
							</div>
							<div class="large-12 columns">
								<input type="password" id='cpwd' name='cpwd' onchange='ValidarPwd()' placeholder="Confirmar Password" required /><br>
							</div>
							<div class='large-12 columns'><center>
								<a href='login.php' class='button' >Entrar</a>
								<input type='submit' class='button' value='Registar' onclick='return validarForm()' />
							</center></div>
						 </div>
					</form>
				</div>
			</div>
			<div class='large-2 columns'>&nbsp; </div>
		</div>
		<div class='row'>
		<?php 	include_once('footer.php');?>
		</div>
	</body>
</html>