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
	var $typeReseau = $typeReseau || 'axes'; // Méthode pour argument optionnel
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
	
	mainNetwork = new links.Network(networkLocalisation);
	
	switch ($typeReseau){
		case 'axes':
			myLinks = tools_deleteSomeLinks(myNodes, myLinks);
			break;
		case 'groupes':
			myNodes = tools_deleteUnlinkedNodes(myNodes, myLinks);
			break;
		default:
			break;
	};
	//console.log('pre-draw');
	mainNetwork.draw(myNodes, myLinks, myPackages, global_options);
	//mainNetwork.scale = 0.6;
	//console.log('post-draw');
	
	updateTitle($typeReseau, 'gr_titre');
	var tmpLegendNetwork = init_legend($typeReseau, 'bl_legende_content', mainNetwork, myNodes);
	legendNetwork = tmpLegendNetwork[0];
	var legendNodesTable = tmpLegendNetwork[1];
	
	google.visualization.events.addListener(mainNetwork, 'select', function() {
		dyn_onMainSelect(mainNetwork, $typeReseau, myNodes, myLinks, myPackages, legendNetwork, legendNodesTable);
	});
	
	google.visualization.events.addListener(legendNetwork, 'select', function() {
		dyn_onLegendSelect($typeReseau, legendNetwork, mainNetwork, myNodes, myLinks);
	});
	
	
};


function load_nodes($networkType) {
	var raw_nodes = null;
	switch ($networkType) {
		case 'axes':
			var axes = loadAxes();
			var members = loadMembers();
			var membersColumnsCorr = [['id', 'id'], ['text', 'prenomnom'], ['group', 'discipline'],['title', 'prenomnom'], ['type', 'type'], ['url', 'internURL']] ;
    		var axesColumnsCorr = [['id', 'id'], ['text', 'text'], ['group', 'type'], ['title', 'text'], ['type', 'type'], ['url', 'url']] ;
			raw_nodes = tools_ConcatenateTables(members, membersColumnsCorr, axes, axesColumnsCorr);
			break;
		case 'groupes':
			var members = loadMembers();
			var transitions = loadTransitions();
			var membersColumnsCorr = [['id', 'id'], ['text', 'prenomnom'], ['group', 'discipline'],['title', 'prenomnom'], ['type', 'type'], ['url', 'internURL']] ;
			var transitionsColumnsCorr = [['id', 'id'], ['text', 'text'], ['group', 'type'],['title', 'title'], ['type', 'type'], ['url', 'url']] ;
			raw_nodes = tools_ConcatenateTables(members, membersColumnsCorr, transitions, transitionsColumnsCorr);
			break;
		case 'transitions':
			var transitions = loadTransitions();
			raw_nodes = transitions;
			raw_nodes = raw_nodes.removeRow(8);
		default: 
			break;
	};
	return raw_nodes;
};

function load_links($networkType) {
	var raw_links = null;
	switch ($networkType) {
		case 'axes':
			raw_links = loadAxesMembersLinks();
			//raw_links = tools_deleteLinksRows(raw_links, 'axe3');
			break;
		case 'groupes':
			raw_links = loadTransitionsMembersLinks();
			break;
		case 'transitions':
			raw_links = loadTransitionsLinks();
		default: 
			//Instructions;
			break;
	};
	return raw_links;
};

function load_packages($networkType) {
	var raw_packages = null;
	switch ($networkType) {
		case 'axes':
			break;
		case 'groupes':
			break;
		default: 
			break;
	};
	return raw_packages;
};


function format_nodes($networkType, $raw_nodes){
	var formatted_nodes = null;
	switch ($networkType){
		case 'axes':
			formatted_nodes = $raw_nodes;
			//formatted_nodes = tools_deleteNodesRows($raw_nodes, 'id', 'axe3');
			formatted_nodes = tools_addColumn(formatted_nodes, 'string', 'action', 'update');
			break;
		case 'groupes':
			formatted_nodes = $raw_nodes
			formatted_nodes = tools_addColumn(formatted_nodes, 'string', 'action', 'update');
			break;
		case 'transitions':
			formatted_nodes = tools_addColumn($raw_nodes, 'string', 'group', 'group');
			formatted_nodes = tools_addColumn(formatted_nodes, 'string', 'action', 'update');
			var groupColumnId = formatted_nodes.getColumnIndex('group');
			var typeColumnId = formatted_nodes.getColumnIndex('type');
			for (var i = 0; i < formatted_nodes.getNumberOfRows(); i++){
				formatted_nodes.setValue(i, groupColumnId, formatted_nodes.getValue(i, typeColumnId));
			};
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
		case 'axes':
			formatted_links = tools_addColumn($raw_links, 'string', 'action', 'update');
			break;
		case 'groupes':
			formatted_links = tools_addColumn($raw_links, 'string', 'action', 'update');
			break;
		default:
			formatted_links = $raw_links;
			break;
	};
	return formatted_links;
};

function format_packages($networkType, $raw_packages){
	var formatted_packages = null;
	switch ($networkType){
		case 'axes':
			formatted_packages = $raw_packages;
			break;
		case 'groupes':
			formatted_packages = $raw_packages;
			break;
		default:
			formatted_packages = $raw_packages;
			break;
	};
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
		case 'axes':
			stylized_links = tools_addColumn(stylized_links, 'number', 'length', 100);
			stylized_links = tools_addColumn(stylized_links, 'number', 'width', 0.5);
			break;
		case 'groupes':
			stylized_links = tools_addColumn(stylized_links, 'number', 'length', 150);
			stylized_links = tools_addColumn(stylized_links, 'string', 'color', 'grey');
			var myColors = {porteur: 'black', inter: '#A9A9A9'};
			stylized_links = tools_changeColors(stylized_links, myColors);
			stylized_links = tools_addColumn(stylized_links, 'number', 'width', 0.5);
			break;
		case 'transitions':
			stylized_links = tools_addColumn(stylized_links, 'number', 'length', 150);
			stylized_links = tools_addColumn(stylized_links, 'number', 'width', 0.5);
			break;
		default:
			break;
	};
	
	
	// Élargissement initial des liens des responsables d'axes.
	// TODO : Conserver et corriger dyn_increaseLinkedLinks pour que ce soit reporté
	// TODO : Ou supprimer complètement.
	if ($networkType = 'axes'){
		// FIXME : Faire apparaitre les porteurs d'axe ?
		/*
		var fromColumnId = stylized_links.getColumnIndex('from');
		var toColumnId = stylized_links.getColumnIndex('to');
		var widthColumnId = stylized_links.getColumnIndex('width');
		
		var tmpDenise = stylized_links.getFilteredRows([{column: fromColumnId, value: 'Dpu'}, {column: toColumnId, value: 'axe1'}]);
		var tmpLaure = stylized_links.getFilteredRows([{column: fromColumnId, value: 'Lnu'}, {column: toColumnId, value: 'axe2'}]);
		var tmpLena = stylized_links.getFilteredRows([{column: fromColumnId, value: 'Lsa'}, {column: toColumnId, value: 'axe3'}]);
		
		stylized_links.setValue(tmpDenise[0], widthColumnId, 2);
		stylized_links.setValue(tmpLaure[0], widthColumnId, 2);
		stylized_links.setValue(tmpLena[0], widthColumnId, 2);
		*/
	};
	return stylized_links;
};

function stylize_packages($networkType, $formatted_packages){
	var stylized_packages = null;
	stylized_packages = $formatted_packages;
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
			newTitle = "Membres de TransMonDyn selon leurs liens aux transitions étudiées";
			break;
		case 'transitions':
			newTitle = "Liens subjectifs entre transitions";
			break;
		default:
			break;
	};
	document.getElementById($titleDiv).innerHTML = newTitle;
};

function tools_GetOldTableId($corrTable, $idToLookFor)
{
    var idToReturn = 'none' ;
    for (var i = 0; i < $corrTable.length; i++)
    {
        if ($corrTable[i][0] == $idToLookFor)
        {
            idToReturn = $corrTable[i][1];
            break;
        };
    };
    return idToReturn
};

function tools_ConcatenateTables($table1, $correspondanceT1, $table2, $correspondanceT2)
{
    var gResultTable = new google.visualization.DataTable();
    // On crée les colonnes de la t1.
    for (var i = 0; i < $correspondanceT1.length; i++)
    {
        gResultTable.addColumn('string', $correspondanceT1[i][0], $correspondanceT1[i][0]);
    };
    // On crée les colonnes de la t2 si elles n'existent pas
    for (var j = 0; j < $correspondanceT2.length; j++)
    {   
        if (gResultTable.getColumnIndex($correspondanceT2[j][0]) == -1)
        {
            gResultTable.addColumn('string', $correspondanceT2[j][0], $correspondanceT2[j][0]);
        };
    };

    var t1Length = $table1.getNumberOfRows();
    var t2Length = $table2.getNumberOfRows();
    gResultTable.addRows(t1Length + t2Length);
    
    // Loop on rows, then on columns, then ifelse
    for (var iRow = 0; iRow < (t1Length + t2Length); iRow++)
    { 
        for (var iCol = 0; iCol < gResultTable.getNumberOfColumns(); iCol++)
        {
            var currentColId = gResultTable.getColumnId(iCol);
            if (iRow < t1Length)
            { // On est ds la table1
                // Trouver l'id ancien
                var oldTableColId = tools_GetOldTableId($correspondanceT1, currentColId);
                if (oldTableColId != 'none')
                { // On remplit la bonne cellule avec la valeur
                    var oldTableColIndex = $table1.getColumnIndex(oldTableColId);
                    gResultTable.setValue(iRow, iCol, $table1.getValue(iRow, oldTableColIndex));
                }
                else
                { // on remplit en "nop"
                    gResultTable.setValue(iRow, iCol, "nop");
                };  
            }
            else
            { // On est ds la table2
                // Trouver l'id ancien
                var oldTableColId = tools_GetOldTableId($correspondanceT2, currentColId);
                if (oldTableColId != 'none')
                { // On remplit la bonne cellule avec la valeur
                    var oldTableColIndex = $table2.getColumnIndex(oldTableColId);
                    gResultTable.setValue(iRow, iCol, $table2.getValue(iRow - t1Length, oldTableColIndex));
                }
                else
                { // on remplit en "nop"
                    gResultTable.setValue(iRow, iCol, "nop");
                };  
            };
        };
    };
    return gResultTable;
};

function tools_deleteLinksRows($linksTable, $stringToDelete){
	var cleanLinkTable = $linksTable.clone();
	var fromColumnId = cleanLinkTable.getColumnIndex('from');
	var toColumnId = cleanLinkTable.getColumnIndex('to');
	for (var i = cleanLinkTable.getNumberOfRows() - 1; i >= 0; i-- ){
		if (cleanLinkTable.getValue(i, fromColumnId) == $stringToDelete
			|| cleanLinkTable.getValue(i, toColumnId) == $stringToDelete)
		{
			cleanLinkTable.removeRow(i);
		};
	};
	return cleanLinkTable;
};

function tools_deleteSomeLinks($nodesTable, $linksTable){
	var cleanedLinksTable = $linksTable.clone();
	var fromColumnId = cleanedLinksTable.getColumnIndex('from');
	var toColumnId = cleanedLinksTable.getColumnIndex('to');
	var memberColumnId = $nodesTable.getColumnIndex('id');
	var actionColumnId = cleanedLinksTable.getColumnIndex('action');
	
	for (var iMem = $nodesTable.getNumberOfRows() - 1; iMem >= 0; iMem--){
		var currentMemberId = $nodesTable.getValue(iMem, memberColumnId);
		if (currentMemberId == 'Vde'
		|| currentMemberId == 'Rcu'
		|| currentMemberId == 'Lsa'
		|| currentMemberId == 'Tlo'){
			continue;
		};
		var currentLinks = cleanedLinksTable.getFilteredRows([{column: fromColumnId, value: currentMemberId}]);
		var currentLinksNb = currentLinks.length
		
		if (currentLinksNb > 1){
			var linkToRemoveRowNb = cleanedLinksTable.getFilteredRows([{column: fromColumnId, value: currentMemberId}, {column: toColumnId, value: 'axe3'}]);
			//cleanedLinksTable.setValue(linkToRemoveRowNb[0], actionColumnId, 'delete');
			cleanedLinksTable.removeRow(linkToRemoveRowNb[0]);
		};
	};
	return cleanedLinksTable
};

function tools_deleteNodesRows($nodesTable, $columnName, $stringToDelete){
	var cleanNodesTable = $nodesTable.clone();
	var columnToBrowseId = cleanNodesTable.getColumnIndex($columnName);
	for (var i = cleanNodesTable.getNumberOfRows() - 1; i >= 0; i--){
		if (cleanNodesTable.getValue(i,columnToBrowseId) == $stringToDelete){
			cleanNodesTable.removeRow(i);
		}
	};
	return cleanNodesTable;
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
};

function tools_deleteUnlinkedNodes($nodesTable, $linksTable){
	
	var newNodesTable = $nodesTable.clone();
	var nodesIDColumn = $nodesTable.getColumnIndex('id');
	var linksFromColumn = $linksTable.getColumnIndex('from');
	var linksToColumn = $linksTable.getColumnIndex('to');
	
	for (var i = newNodesTable.getNumberOfRows() - 1; i >= 0; i--){
		var currentMemberId = newNodesTable.getValue(i, nodesIDColumn);
		var inLinks = $linksTable.getFilteredRows([{column: linksFromColumn, value: currentMemberId}]);
		var outLinks = $linksTable.getFilteredRows([{column: linksToColumn, value: currentMemberId}]);
		if ((inLinks.length + outLinks.length) == 0){
			newNodesTable.removeRow(i);
		};
	};
	
	return newNodesTable;
};

function dyn_onMainSelect($network, $networkType, $nodesTable, $linksTable, $packagesTable, $legendNetwork, $legendNodesTable){
    $network.addNodes($nodesTable);
    $network.addNodes(dyn_greyUnlinkedNodes($network.getSelection(), $nodesTable, $linksTable));
    switch ($networkType) {
    	case 'axes':
    		$network.addLinks(dyn_increaseLinkedLinks($network.getSelection(), $nodesTable, $linksTable, 150, 50, 100));
    		break;
		case 'groupes':
			$network.addLinks(dyn_increaseLinkedLinks($network.getSelection(), $nodesTable, $linksTable, 200, 100, 150));
			break;
		case 'transitions':
			$network.addLinks(dyn_increaseLinkedLinks($network.getSelection(), $nodesTable, $linksTable, 200, 100, 150));
			break;
		default:
			break;
    };
    dyn_displaySelectionDescription($network.getSelection(), $networkType, $nodesTable, "bl_selection_content");
    dyn_selectLegendItems($legendNetwork, $network, $legendNodesTable);
};

function dyn_greyUnlinkedNodes($networkSelection, $nodesTable, $linksTable){
	var gNewNodesTable = $nodesTable.clone();
	if ($networkSelection == "")
	{return gNewNodesTable;}
	var groupColumn = $nodesTable.getColumnIndex('group');
	// On grise tous les noeuds
    for (var allI = 0; allI < gNewNodesTable.getNumberOfRows(); allI++)
    {
    	var currentGroup = gNewNodesTable.getValue(allI, groupColumn);
    	var reducedGroup = 'greyed';
 		gNewNodesTable.setValue(allI, groupColumn, reducedGroup);	
    };
    
    var nodesToUngrey = new Array();
    var linkTableFromId = $linksTable.getColumnIndex('from');
    var linkTableToId = $linksTable.getColumnIndex('to');
    // On crée un tableau dans lequel on ajoute tous les Id de noeuds à dégriser
    for (var selRow = 0; selRow < $networkSelection.length ; selRow++)
    {
    	var nodeId = $nodesTable.getValue($networkSelection[selRow].row, 0);
    	//On parcourt tous les liens et on ajoute les Id des noeuds en relation avec le lien selectionné
    	for (var iLink = 0; iLink < $linksTable.getNumberOfRows(); iLink++)
    	{
    		var fromId = $linksTable.getValue(iLink, linkTableFromId);
    		var toId = $linksTable.getValue(iLink, linkTableToId);
    		if (nodeId == fromId) {nodesToUngrey.push(toId);}
    		else if (nodeId == toId) {nodesToUngrey.push(fromId);};
    	};
    	// On ajoute aussi le noeud selectionné
    	nodesToUngrey.push(nodeId);
    };
    // On a donc maintenant un tableau/liste contenant les Id des noeuds à dégriser.
    // On boucle sur la liste pour créer une copie de la liste contenant cette fois-ci le rowNb dans usedTable
    var rowsToUngrey = new Array();
    for (var iList= 0; iList < nodesToUngrey.length; iList++)
    {
    	var currentId = nodesToUngrey[iList];
    	for (var iRows = 0; iRows < $nodesTable.getNumberOfRows(); iRows++)
    	{
    		if (currentId == $nodesTable.getValue(iRows, 0))
    		{
    			rowsToUngrey.push(iRows);
    			break;
    		};
    	};
    };
    // On peut maintenant boucler sur la liste des rowNb pour les dégriser
    for (var iNode = 0; iNode < rowsToUngrey.length; iNode++)
    {
    	gNewNodesTable.setValue(rowsToUngrey[iNode], groupColumn, $nodesTable.getValue(rowsToUngrey[iNode], groupColumn)); 
    };
	return gNewNodesTable;  
};


function dyn_increaseLinkedLinks($networkSelection, $nodesTable, $linksTable, $BigLinkLength, $SmallLinkLength, $DefaultLinkLength)
{
	var updateLinksTable = $linksTable.clone();
	var lengthColumnIndex = updateLinksTable.getColumnIndex('length');
	var widthColumnIndex = updateLinksTable.getColumnIndex('width');
	var fromColumnId = updateLinksTable.getColumnIndex('from');
	var toColumnId = updateLinksTable.getColumnIndex('to');
	var nodesIdColumnId = $nodesTable.getColumnIndex('id');
	var actionColumnId = updateLinksTable.getColumnIndex('action');
	
	if ($networkSelection == ""){
		for (var iLink = 0; iLink < updateLinksTable.getNumberOfRows(); iLink++){
			updateLinksTable.setValue(iLink, lengthColumnIndex, $DefaultLinkLength);
			updateLinksTable.setValue(iLink, widthColumnIndex, 1);
		};
	}
	else{
		// On réduit tous les links
		for (var iLink = 0; iLink < updateLinksTable.getNumberOfRows(); iLink++){
			updateLinksTable.setValue(iLink, lengthColumnIndex, $SmallLinkLength);
			updateLinksTable.setValue(iLink, widthColumnIndex, 0.5);
		};
		// On augmente les links "selectionnés"
		for (var i = 0; i < $networkSelection.length; i++){
			var currentNodeId = $nodesTable.getValue($networkSelection[i].row, nodesIdColumnId);
			for (var iLink = 0; iLink < updateLinksTable.getNumberOfRows(); iLink++){
				var fromNode = updateLinksTable.getValue(iLink, fromColumnId);
				var toNode = updateLinksTable.getValue(iLink, toColumnId);
				if (fromNode == currentNodeId || toNode == currentNodeId){
					updateLinksTable.setValue(iLink, lengthColumnIndex, $BigLinkLength);
					updateLinksTable.setValue(iLink, widthColumnIndex, 2);
				};
			};
		};
	};
	return updateLinksTable;
};

function dyn_displaySelectionDescription($networkSelection, $typeNetwork, $nodesTable, $contextDiv){
	var nodesURLColumn = $nodesTable.getColumnIndex('url');
	var nodesTitleColumn = $nodesTable.getColumnIndex('title');
	var nodesTypeColumn = $nodesTable.getColumnIndex('type');
	var nodesTextColumn = $nodesTable.getColumnIndex('text');
	var memberHTMLurl = "http://sites.google.com/site/transmondyn/membres/"
	var axeHTMLurl = "http://sites.google.com/site/transmondyn/taches/"
	var transitionHTMLurl = "http://sites.google.com/site/transmondyn/tests/transitions-etudiees/"
	var selectionHTML = "";
	if ($networkSelection != ""){
		for (var i = 0; i < $networkSelection.length; i++){
			var urlToEncode = $nodesTable.getValue($networkSelection[i].row, nodesURLColumn);
			var descTextToEncode = $nodesTable.getValue($networkSelection[i].row, nodesTitleColumn);
			var myType = $nodesTable.getValue($networkSelection[i].row, nodesTypeColumn);
			switch (myType)
			{
				case 'axe':
					selectionHTML += '<a href="' + axeHTMLurl + urlToEncode + '" target="_blank">' + descTextToEncode + '</a><br>';
					break;
				case 'membre':
					selectionHTML += '<a href="' + memberHTMLurl + urlToEncode + '" target="_blank">' + descTextToEncode + '</a><br>';
					break;
				case 'transition':
					selectionHTML += '<a href="' + transitionHTMLurl + urlToEncode + '" target="_blank">' + $nodesTable.getValue($networkSelection[i].row, nodesTextColumn) + " : " + descTextToEncode + '</a><br>';
					break;
				default:
					break;
			};		
		};
		document.getElementById($contextDiv).innerHTML = selectionHTML;
	} else {
		document.getElementById($contextDiv).innerHTML = "Aucun n&oelig;ud sélectionné."
	};
};

function rowObject(rowNb)
{
this.row=rowNb;
};

function init_legend($typeReseau, $legendContentDiv, $mainNetwork, $mainNodes){
	var legendDiv = "bl_legende_content";
	var myLegendNodes = load_legend_nodes($typeReseau);
	var legend_options = loadOptions()
	legend_options.height = '293px';
	legend_options.width = '185px';
	var mainNodesGroupColumn = $mainNodes.getColumnIndex('group');
	var legendNodesGroupColumn = myLegendNodes.getColumnIndex('group');
	for (var i = myLegendNodes.getNumberOfRows() -1 ; i >= 0; i--){
		var currentGroup = myLegendNodes.getValue(i, legendNodesGroupColumn);
		if ($mainNodes.getFilteredRows([{column: mainNodesGroupColumn, value: currentGroup}]).length < 1){
			myLegendNodes.removeRow(i);
		};
	};

	var networkLocalisation = document.getElementById($legendContentDiv);

	myLegendNodes = legend_setXY($typeReseau, legend_options, myLegendNodes);
	var myLegendNetwork = new links.Network(networkLocalisation);
	
	myLegendNetwork.draw(myLegendNodes, legend_options);
	return [myLegendNetwork, myLegendNodes];
};


function legend_setXY($networkType, $optionObject, $nodesTable){
	var xyTable = $nodesTable.clone();
	xyTable.addColumn('number', 'x', 'x');
	xyTable.addColumn('number', 'y', 'y');
	var nbItems = xyTable.getNumberOfRows();
	var nbColumns = 2;
	var height_available = parseInt($optionObject.height);
	var width_available = parseInt($optionObject.width);
	var typeColumnId = xyTable.getColumnIndex('type');
	var xColumnId = xyTable.getColumnIndex('x');
	var yColumnId = xyTable.getColumnIndex('y');

	var nbMetiers = xyTable.getFilteredRows([{column: typeColumnId, value: 'metier'}]).length;
	var heightMetiers = height_available * 0.75;
	var xOrigin = (22 / 100) * heightMetiers;
	var yOrigin = (5 / 100) * width_available;
	var currentX = xOrigin;
	var currentY = yOrigin;
	var i = null;
	for (i = 0; i < nbMetiers; i++){
		xyTable.setValue(i, xColumnId, currentX);
		xyTable.setValue(i, yColumnId, currentY);
		if (i % 2 == 0){ // Si i pair
			currentX = width_available * (78/100);
		} else { // Si i impair
			currentY = currentY + ((heightMetiers * 0.8) / (nbMetiers / 2));
			currentX = xOrigin;
		};
	};
	
	if (xyTable.getValue(i, typeColumnId) == 'axe'){
		xyTable.setValue(i, xColumnId, (width_available / 2));
	} else {
		xyTable.setValue(i, xColumnId, xOrigin);
	};
	xyTable.setValue(i, yColumnId, heightMetiers);
	if ($networkType == 'transitions'){
		xyTable.setValue(0, xColumnId, (width_available / 2));
		xyTable.setValue(0, yColumnId, (height_available / 2));
	};
	
	return xyTable;
};


function dyn_selectLegendItems($legendNetwork, $mainNetwork, $legendNodesTable){
	$legendNetwork.setSelection([]);
	if ($mainNetwork.getSelection().length > 0) {
		var mainSelectionArray = new Array();
		var legendGroupColumnId = $legendNodesTable.getColumnIndex('group');
		for (var i = 0; i < $mainNetwork.getSelection().length; i++){// Pour chaque membre de la selection
			// On recupere son groupe
			var currentGroup = $mainNetwork.nodesTable[$mainNetwork.getSelection()[i].row].group;
			// On filtre la table des legendNodes pour trouver ce groupe
			var groupLegendItem = $legendNodesTable.getFilteredRows([{column: legendGroupColumnId, value: currentGroup}]);
			// On ajoute à la selection
			mainSelectionArray.push(new rowObject(groupLegendItem));
		};
		$legendNetwork.setSelection(mainSelectionArray);
	};
};

function dyn_onLegendSelect($networkType, $legendNetwork, $mainNetwork, $mainNodesTable, $mainLinksTable){
	$mainNetwork.setSelection([]);
	$mainNetwork.addNodes($mainNodesTable);
	var mainNodesToSelect = tools_getGroupNodes($legendNetwork, $mainNetwork, $mainNodesTable);
	$mainNetwork.setSelection(mainNodesToSelect);
	if ($mainNetwork.getSelection().length > 0){
		$mainNetwork.addNodes(dyn_greyUnSelectedNodes($mainNetwork.getSelection(), $mainNodesTable));
	};
    switch ($networkType){
	case 'axes':
		$mainNetwork.addLinks(dyn_increaseLinkedLinks($mainNetwork.getSelection(), $mainNodesTable, $mainLinksTable, 150, 50, 100));
		break;
	case 'groupes':
		$mainNetwork.addLinks(dyn_increaseLinkedLinks($mainNetwork.getSelection(), $mainNodesTable, $mainLinksTable, 200, 100, 150));
		break;
	case 'transitions':
		$mainNetwork.addLinks(dyn_increaseLinkedLinks($mainNetwork.getSelection(), $mainNodesTable, $mainLinksTable, 200, 100, 150));
		break;
	default:
		break;
    };
	dyn_displaySelectionDescription($mainNetwork.getSelection(), $networkType, $mainNodesTable, "bl_selection_content");
};


function dyn_greyUnSelectedNodes($networkSelection, $nodesTable){
	var updatingTable = $nodesTable.clone();
	// On passe tout en grey
	var groupColumnId = updatingTable.getColumnIndex('group');
	for (var i = 0; i < updatingTable.getNumberOfRows(); i++){
		updatingTable.setValue(i, groupColumnId, 'greyed');
	};
	// On réactive les selectionnés
	for (var i = 0; i < $networkSelection.length; i++){
		var updatingTableRow = $networkSelection[i].row;
		updatingTable.setValue(updatingTableRow, groupColumnId, $nodesTable.getValue(updatingTableRow, groupColumnId));
	};
	return updatingTable;
};

function tools_getGroupNodes($legendNetwork, $mainNetwork, $mainNodesTable){
	var nodesToSelectArray = new Array();
	for (var i = 0; i < $legendNetwork.getSelection().length; i++){
		var currentItemRow = $legendNetwork.getSelection()[i].row;
		var selectedGroup = $legendNetwork.nodesTable[currentItemRow].group;
		var mainNodesGroupColumn = $mainNodesTable.getColumnIndex('group');
		var groupNodes = $mainNodesTable.getFilteredRows([{column: mainNodesGroupColumn, value: selectedGroup}]);
		for (var j = 0; j < groupNodes.length; j++){
			nodesToSelectArray.push(new rowObject(groupNodes[j]));
		};
	};
	return nodesToSelectArray;
};

function tools_changeColors($linksTable, $corrTable){
	var updatingTable = $linksTable.clone();
	var colorColumnId = updatingTable.getColumnIndex('color');
	var typeColumnId = updatingTable.getColumnIndex('type');
	for (var i = 0; i < updatingTable.getNumberOfRows(); i++){
		var myType = updatingTable.getValue(i, typeColumnId);
		updatingTable.setValue(i, colorColumnId, $corrTable[myType]);
	};
	return updatingTable;
};

function export_mainNetwork(){
    var mainCanvas = document.getElementsByTagName('canvas')[0];
	var mainIMG = mainCanvas.toDataURL('image/png');
	window.open(mainIMG);
};

function export_legendNetwork(){
	var legendCanvas = document.getElementsByTagName('canvas')[1];
	var legendIMG = legendCanvas.toDataURL('image/png');
	window.open(legendIMG);
};