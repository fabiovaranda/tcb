<?php
    include("header.php");
?>
<div id="content">
  <body onload="autocarros();">
      
      <div class="menu" style="position:fixed; z-index:99; width:100%;">
<?php 
    include_once("topbar.php");
          ?>
      </div>
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
    </body>
</div><!-- #content -->
<?php
    include("footer.php");
?>