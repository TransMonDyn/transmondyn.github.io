<?xml version="1.0" encoding="UTF-8"?>
<Module>
<ModulePrefs title="Transition 1 Network Visualization Gadget" />
<Content type="html">
<![CDATA[
<head>
<title>Dimensions de la Transition 1</title>
    <script src="https://www.google.com/jsapi" type="text/javascript" charset="utf-8"></script>
    <script src="https://sites.google.com/site/transmondyn/network-min1.4.js" type="text/javascript" charset="utf-8"></script>

    <script src="https://sites.google.com/site/transmondyn/TMD_t1_network.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://sites.google.com/site/transmondyn/TMD_t1_data.js" type="text/javascript" charset="utf-8"></script>

<script type="text/javascript">
google.load("visualization", "1", {packages:["corechart", "table"]});
// Set callback to run when API is loaded

google.setOnLoadCallback(function () {init_new('gr_reseau', 't1')});
</script>
<meta charset="utf-8" />
<link rel="stylesheet" href="https://sites.google.com/site/transmondyn/style_t1.css" />
</head>

<body>
<section>
<div id="boutons" class="menu">
	<div id="bt_reset" class="btn">
	    <button id="resetBtn" onclick="window.location.href=window.location.href">Réinitialiser</button>
    </div>
</div>
</section>

<section>
<div id="graphique" class="central">
	<div id="gr_titre" class="network">Titre du réseau</div>
	<div id="gr_reseau" class="network">
	</div>
	<div id="gr_sources" class="network">
	Réseau dynamique basé sur <a href="http://chap.almende.com/">la bibliothèque CHAP</a>.
	<button id="mainExportBtn" class="exportBtn" onclick="export_mainNetwork();">Export du réseau courant</button>
	</div>
</div>
</section>

<aside>
<div id="barre_laterale" class="description">
	<div id="bl_legende" class="lateral">
		<div id="bl_legende_titre" class="lat_title">
		<b>Légende</b>
		</div>
		<div id="bl_legende_content" class="lat_content">
		 <img src="https://sites.google.com/site/transmondyn/information-blue.svg" height="15px" align="right"/>
        </div>
	</div>
	<div id="bl_selection" class="lateral">
		<div id="bl_selection_titre" class="lat_title">
		    <span title="Vous pouvez sélectionner des noeuds en cliquant dessus, ou en dessinant une sélection avec la touche Maj enfoncée.">
		    <b>Sélection</b>
                <img src="https://sites.google.com/site/transmondyn/information-blue.svg" height="15px" align="right"/>
            </span>
	    </div>
		<div id="bl_selection_content" class="lat_content">
		    
        </div>
	</div>
</div>
</aside>
</body>
]]>
</Content>
</Module>
