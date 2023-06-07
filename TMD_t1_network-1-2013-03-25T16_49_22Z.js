/**
 * @author <a href="mailto:robin.cura@gmail.com">Robin Cura</a>
 * @institution <a href="http://www.parisgeo.cnrs.fr">UMR 8504 Géographie-cités</a>
 * @project <a href="http://www.transmondyn.parisgeo.cnrs.fr">ANR TransMonDyn</a>
 */

// TODO : Design the group network
// TODO : Load the group network
// TODO : Customize the group network
// TODO : Add selection interactivity between legend / network

function init_new($divToUse, $typeReseau) { // TypeReseau as string
	var $typeReseau = $typeReseau || 't1'; // Méthode pour argument optionnel
	var myNodes = load_nodes($typeReseau);
	//console.log('nodes loaded');
	var myLinks = load_links($typeReseau);
	var myPackages = load_packages($typeReseau);
	
	myNodes = format_nodes($typeReseau, myNodes);
	//console.log('nodes formatted');
	myLinks = format_links($typeReseau, myLinks);
	myPackages = format_packages($typeReseau, myPackages);
	
	myNodes = stylize_nodes($typeReseau, myNodes);
	//console.log('nodes stylized');
	myLinks = stylize_links($typeReseau, myLinks);
	//console.log('Links stylized');
	myPackages = stylize_packages($typeReseau, myPackages);

	var global_options = create_global_options($typeReseau);
	if ($typeReseau == 'transitions') {global_options.links.style = 'arrow';};
	global_options.links
	//console.log('options loaded');
	
	var networkLocalisation = document.getElementById($divToUse);
	
	var mainNetwork = new links.Network(networkLocalisation);
	//console.log('pre-draw');
	mainNetwork.draw(myNodes, myLinks, myPackages, global_options);
	//mainNetwork.scale = 0.6;
	//console.log('post-draw');
	
	updateTitle($typeReseau, 'gr_titre');
    //console.log("onMainSelect");
	google.visualization.events.addListener(mainNetwork, 'select', function() {
        dyn_onMainSelect(mainNetwork, $typeReseau, myNodes, myLinks, myPackages);
	});
};


function load_nodes($networkType) {
	var raw_nodes = null;
	switch ($networkType) {
        case 't1':
            var dimensions = loadDimensions();
            raw_nodes = dimensions;
		default:
			break;
	};
	return raw_nodes;
};

function load_links($networkType) {
	var raw_links = null;
	switch ($networkType) {
		case 't1':
			raw_links = loadDimensionsLinks();
		default:
			break;
	};
	return raw_links;
};

function load_packages($networkType) {
	var raw_packages = null;
	switch ($networkType) {
		case 't1':
			raw_packages = loadDimensionsPackages();
		default: 
			break;
	};
	return raw_packages;
};


function format_nodes($networkType, $raw_nodes){
	var formatted_nodes = null;
	switch ($networkType){
        case 't1':
            formatted_nodes = $raw_nodes;
            formatted_nodes = tools_addColumn(formatted_nodes, 'string', 'action', 'update');
            break;
		default:
			formatted_nodes = $raw_nodes;
			break;
	};
	return formatted_nodes;
};



function format_links($networkType, $raw_links){
	var formatted_links = null;
	switch ($networkType){
        case 't1':
            formatted_links = tools_addColumn($raw_links, 'string', 'action', 'update');
            break;
		default:
			formatted_links = $raw_links;
			break;
	};
	return formatted_links;
};

function format_packages($networkType, $raw_packages){
	var formatted_packages = $raw_packages;
	return formatted_packages;
};


function stylize_nodes($networkType, $formatted_nodes){
	var stylized_nodes = null;
	stylized_nodes = $formatted_nodes;
	return stylized_nodes;
};

function stylize_links($networkType, $formatted_links){
	var stylized_links = null;
	
	stylized_links = $formatted_links;
	switch ($networkType) {
        case 't1':
            stylized_links = tools_addColumn(stylized_links, 'number', 'length', 150);
            stylized_links = tools_addColumn(stylized_links, 'string', 'color', 'grey');
            //stylized_links = tools_addColumn(stylized_links, 'number', 'width', 0.1);
            //stylized_links = tools_addColumn(stylized_links, 'string', 'style', 'arrow-end');
            break;
		default:
			break;
	};
	return stylized_links;
};

function stylize_packages($networkType, $formatted_packages){
	var stylized_packages = null;
	stylized_packages = $formatted_packages;
    stylized_packages = tools_addColumn(stylized_packages, 'string', 'style', 'image');
	return stylized_packages;
};


function create_global_options($networkType){
	var global_options = null;
	global_options = loadOptions();
	return global_options;
};

function updateTitle($networkType, $titleDiv){
	var newTitle = "";
	switch ($networkType){
		case 'axes':
			newTitle = "Membres de TransMonDyn selon leur participation aux axes";
			break;
		case 'groupes':
			newTitle = "Membres de TransMonDyn selon leurs liens aux transitions";
			break;
		case 'transitions':
			newTitle = "Liens subjectifs entre transitions";
			break;
        case 't1':
            newTitle = "Transition 1 - Sortie d'Afrique";
		default:
			break;
	};
	document.getElementById($titleDiv).innerHTML = newTitle;
};


function tools_addColumn($dataTable, $colType, $colName, $defaultValue)
{
	var newDataTable = $dataTable.clone();
	var wantedColumnId = newDataTable.getColumnIndex($colName);
	if (wantedColumnId == -1){
		newDataTable.addColumn($colType, $colName, $colName);
		wantedColumnId = newDataTable.getColumnIndex($colName);
		for (var i = 0; i < newDataTable.getNumberOfRows(); i++){
			newDataTable.setValue(i, wantedColumnId, $defaultValue);
		};
	};
	return newDataTable;
}

function dyn_onMainSelect($network, $networkType, $nodesTable, $linksTable, $packagesTable){
    $network.addNodes($nodesTable);
    dyn_displaySelectionDescription($network.getSelection(), $networkType, $nodesTable, "bl_selection_content");
};

function dyn_displaySelectionDescription($networkSelection, $typeNetwork, $nodesTable, $contextDiv){
	var selectionHTML = "";
	if ($networkSelection != ""){
		for (var i = 0; i < $networkSelection.length; i++){
            selectionHTML += '<b>'
                + $nodesTable.getValue($networkSelection[i].row,1)
                + ' : </b><br>'
                + $nodesTable.getValue($networkSelection[i].row,2)  + '<br>';

		};
		document.getElementById($contextDiv).innerHTML = selectionHTML;
	} else {
		document.getElementById($contextDiv).innerHTML = "Aucun n&oelig;ud sélectionné."
	};
};

function export_mainNetwork(){
    var mainCanvas = document.getElementsByTagName('canvas')[0];
	var mainIMG = mainCanvas.toDataURL('image/png');
	window.open(mainIMG);
};