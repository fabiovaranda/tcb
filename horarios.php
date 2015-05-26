<?php
    include("head.php");
?>
<div id="content">
  <body onload="autocarros();">
  <div style="position:fixed;width:100%;height:50px;z-index:1;">    
<?php 
    include_once("topbar.php");
          ?>
      </div>
      <div class="row panel large-centered columns" style="padding-top:5em;">
            <div class="large-2 columns">&nbsp;</div>
            <div class="large-8 columns">
                <h1 align="center" style="padding-bottom: 20px;">Horários</h1>
                    <div class="large-centered columns">
                        <center>
                        <div id="carreiras">
                        </div>
                        </center>
                    </div>
            </div>
            <div class="large-2 columns">&nbsp;</div>
      </div>
    </body>
</div><!-- #content -->
<?php
    include("footer.php");
?>
