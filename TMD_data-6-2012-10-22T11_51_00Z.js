/**
 * @author <a href="mailto:robin.cura@gmail.com">Robin Cura</a>
 * @institution <a href="http://www.parisgeo.cnrs.fr">UMR 8504 Géographie-cités</a>
 * @project <a href="http://www.transmondyn.parisgeo.cnrs.fr">ANR TransMonDyn</a>
 */

// TODO : create loadTransitionsMembersLinks()


function loadAxes(){
	var gAxesTable = new google.visualization.DataTable();
	gAxesTable.addColumn('string', 'id', 'id');
	gAxesTable.addColumn('string', 'text', 'text');
	gAxesTable.addColumn('string', 'title', 'title');
	gAxesTable.addColumn('string', 'type', 'type');
	gAxesTable.addColumn('string', 'url', 'url');
	gAxesTable.addRows([
		['axe1', 'Axe 1', 'Dynamiques socio-spatiales et mise en réseau : l\'évolution des systèmes de villes', 'axe', 'axe-1'],
		['axe2', 'Axe 2', 'Structurations des systèmes de peuplement pré-industriels: agrégation/dispersion', 'axe', 'axe-2'],
		['axe3', 'Axe 3', 'Les transformations des systèmes de peuplement : concepts transversaux, tendances longues et ruptures', 'axe', 'axe-3'],
	]);
	return gAxesTable;
};

function loadMembers(){
	var gMembersTable = new google.visualization.DataTable();
	gMembersTable.addColumn('string', 'id', 'id');
	gMembersTable.addColumn('string', 'nom', 'nom');
	gMembersTable.addColumn('string', 'prenom', 'prenom');
	gMembersTable.addColumn('string', 'prenomnom', 'prenomnom');
	gMembersTable.addColumn('string', 'internURL', 'internURL');
	gMembersTable.addColumn('string', 'labo', 'labo');
	gMembersTable.addColumn('string', 'discipline', 'discipline');
	gMembersTable.addColumn('string', 'externURL', 'externURL');
	gMembersTable.addColumn('string', 'type', 'type');
	gMembersTable.addRows([
	    ['Aba', 'BANOS', 'Arnaud', 'Arnaud BANOS', 'arnaud-banos', 'UMR Géographie-Cités / CNRS', 'Géographie', 'http://arnaudbanos.perso.neuf.fr/home.html', 'membre'],
	    ['Abr', 'BRETAGNOLLE', 'Anne', 'Anne BRETAGNOLLE', 'anne-bretagnolle', 'UMR Géographie-Cités / Université Paris 1', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article63&lang=fr', "membre"],
	    ['Afr', 'FRANC', 'Alain', 'Alain FRANC', 'alain-franc', 'UMR Biodiversité, Gènes et Communautés / INRA', 'Mathématiques', 'http://www.pierroton.inra.fr/biogeco/genetique/personnel/Franc/franc.html', "membre"],
	    ['Cco', 'COUPÉ', 'Christophe', 'Christophe COUPÉ', 'christophe-coupe', 'UMR Dynamique du Langage / CNRS', 'Linguistique', 'http://www.ddl.ish-lyon.cnrs.fr/Annuaires/Index.asp?Action=Edit&Langue=fr&Page=Christophe%20COUPE', "membre"],
	    ['Cdu', 'DUCRUET', 'César', 'César DUCRUET', 'cesar-ducruet', 'UMR Géographie-Cités / CNRS', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article105&lang=fr', "membre"],
	    ['Csc', 'SCHMITT', 'Clara', 'Clara SCHMITT', 'clara-schmitt', 'UMR Géographie-Cités / ADEME', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article178', "membre"],
	    ['Cta', 'TANNIER', 'Cécile', 'Cécile TANNIER', 'cecile-tannier', 'UMR Théma / CNRS', 'Géographie', 'http://thema.univ-fcomte.fr/_Tannier-Cecile_', "membre"],
	    ['CVM', 'VACCHIANI-MARCUZZO', 'Céline', 'Céline VACCHIANI-MARCUZZO', 'celine-vacchiani-marcuzzo', 'UMR Géographie-Cités / Université de Reims Champagne-Ardenne', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article187', "membre"],
	    ['Dph', 'PHAN', 'Denis', 'Denis PHAN', 'denis-phan', 'GEMASS / CNRS', 'Économie', 'http://www.gemass.fr/dphan/', "membre"],
	    ['Dpu', 'PUMAIN', 'Denise', 'Denise PUMAIN', 'denise-pumain', 'UMR Géographie-Cités / Université Paris 1', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article164', "membre"],
	    ['Elo', 'LORANS', 'Elisabeth', 'Elisabeth LORANS', 'elisabeth-lorans', 'UMR CITERES / Université de Rouen', 'Archéologie', 'http://www.univ-tours.fr/lorans/0/fiche___annuaireksup/&RH=1179210999827', "membre"],
	    ['EZR', 'ZADORA-RIO', 'Elisabeth', 'Elisabeth ZADORA-RIO', 'elisabeth-zadora-rio', 'UMR CITERES / CNRS', 'Archéologie', 'http://citeres.univ-tours.fr/', "membre"],
	    ['Fbe', 'BERTONCELLO', 'Frédérique', 'Frédérique BERTONCELLO', 'frederique-bertoncello', 'UMR CEPAM / CNRS', 'Archéologie', 'http://www.cepam.cnrs.fr/spip.php?article38', "membre"],
	    ['Ffa', 'FAVORY', 'François', 'François FAVORY', 'francois-favori', 'UMR Chrono-Environnement / Université de Franche-Comté', 'Archéologie', 'http://chrono-environnement.univ-fcomte.fr/spip.php?article223', "membre"],
	    ['FLN', 'LE NÉCHET', 'Florent', 'Florent LE NÉCHET', 'florent-le-nechet', 'UMR Géographie-Cités / Université de Marne-la-Vallée', 'Géographie', 'http://sites.google.com/site/florentlenechet/', "membre"],
	    ['Fva', 'VARENNE', 'Franck', 'Franck VARENNE', 'franck-varenne', 'GEMASS / Université de Rouen', 'Épistémologie', 'http://franck.varenne.monsite-orange.fr/', "membre"],
	    ['Hma', 'MATHIAN', 'Hélène', 'Hélène MATHIAN', 'helene-mathian', 'UMR Géographie-Cités / CNRS', 'Géomatique', 'http://www.parisgeo.cnrs.fr/spip.php?article148', "membre"],
	    ['Jfe', 'FERBER', 'Jacques', 'Jacques FERBER', 'jacques-ferber', 'UMR LIRMM / Université de Montpellier', 'Informatique', 'http://www.lirmm.fr/~ferber/', "membre"],
	    ['JLFi', 'FICHES', 'Jean-Luc', 'Jean-Luc FICHES', 'jean-luc-fiches', 'UMR Archéologie des sociétés méditerranéennes', 'Archéologie', 'http://www.archeo-lattes.cnrs.fr/spip.php?rubrique129', "membre"],
	    ['JMHo', 'HOMBERT', 'Jean-Marie', 'Jean-Marie HOMBERT', 'jean-marie-hombert', 'UMR Dynamique du Langage / CNRS', 'Linguistique', 'http://www.ddl.ish-lyon.cnrs.fr/Annuaires/Index.asp?Action=Edit&Langue=fr&Page=Jean-Marie%20HOMBERT', "membre"],
	    ['Lka', 'KADDOURI', 'Lahouari', 'Lahouari KADDOURI', 'lahouari-kaddouri', 'UMR ESPACE / Université d\'Avignon', 'Géographie', 'http://www.univ-avignon.fr/en/research/annuaire-chercheurs/membrestruc/personnel/kaddouri-lahouari.html', "membre"],
	    ['Lnu', 'NUNINGER', 'Laure', 'Laure NUNINGER', 'laure-nuninger', 'MSHE Nicolas Ledoux / CNRS', 'Archéologie', 'http://chrono-environnement.univ-fcomte.fr/spip.php?article267', "membre"],
	    ['Lsa', 'SANDERS', 'Lena', 'Lena SANDERS', 'lena-sanders', 'UMR Géographie-Cités / CNRS', 'Géographie', 'http://www.parisgeo.cnrs.fr/spip.php?article176&lang=fr', "membre"],
	    ['MJOu', 'OURIACHI', 'Marie-Jeanne', 'Marie-Jeanne OURIACHI', 'marie-jeanne-ouriachi', 'UMR Chrono-Environnement', 'Archéologie', '', "membre"],
	    ['MNCo', 'COMIN', 'Marie-Noëlle', 'Marie-Noëlle COMIN', 'marie-noelle-comin', 'UMR Géographie-Cités / Institut des systèmes complexes', 'Géographie', 'http://mapage.noos.fr/mn.comin/', "membre"],
	    ['Pga', 'GARMY', 'Pierre', 'Pierre GARMY', 'pierre-garmy', 'UMR Archéologie des sociétés méditerranéennes / CNRS', 'Archéologie', 'http://www.archeo-lattes.cnrs.fr/spip.php?rubrique114', "membre"],
	    ['Pli', 'LIVET', 'Pierre', 'Pierre LIVET', 'pierre-livet', 'CEPERC / Université de Provence', 'Épistémologie', 'http://sites.univ-provence.fr/newceperc/spip.php?article28/', "membre"],
	    ['Pou', 'OUZOULIAS', 'Pierre', 'Pierre OUZOULIAS', '', 'UMR 7041 ArScAn / CNRS', 'Archéologie', 'http://www.mae.u-paris10.fr/annuaire/infos.php?nom_rech=OUZOULIAS%20Pierre', "membre"],
	    ['Rcu', 'CURA', 'Robin', 'Robin CURA', 'robin-cura', 'UMR Géographie-Cités / CNRS', 'Géomatique', '', "membre"],
	    ['Sle', 'LETURCQ', 'Samuel', 'Samuel LETURCQ', 'samuel-leturcq', 'UMR CITERES / Université François-Rabelais, Tours', 'Histoire', '', "membre"],
	    ['SRC', 'REY-COYREHOURCQ', 'Sébastien', 'Sébastien REY-COYREHOURCQ', 'sebastien-rey-coyrehourcq', 'UMR Géographie-Cités / R2DS', 'Géomatique', 'http://www.parisgeo.cnrs.fr/spip.php?article165', "membre"],
	    ['Tko', 'KOHLER', 'Tim', 'Tim KOHLER', 'tim-kohler', 'Department of Anthropology / Washington State University', 'Archéologie', 'http://libarts.wsu.edu/anthro/faculty/kohler.html', "membre"],
	    ['Tli', 'LIBOUREL', 'Thérèse', 'Thérèse LIBOUREL', 'therese-libourel', 'UMR Espace-Dev / LIRMM / Université de Montpellier 2', 'Informatique', 'http://www.lirmm.fr/~libourel/', "membre"],
	    ['Tlo', 'LOUAIL', 'Thomas', 'Thomas LOUAIL', 'thomas-louail', 'UMR Géographie-Cités / CNRS', 'Informatique', 'http://www.ibisc.fr/~tlouail', "membre"],
	    ['Vde', 'DEGOUT', 'Véronique', 'Véronique DEGOUT', '', 'UMR Géographie-Cités / CNRS', 'Gestion', 'http://www.parisgeo.cnrs.fr/spip.php?article93', "membre"],
	    ['Xro', 'RODIER', 'Xavier', 'Xavier RODIER', 'xavier-rodier', 'Laboratoire Archéologie et Territoires, UMR CITERES / CNRS', 'Archéologie', 'http://www.univ-tours.fr/rodier/0/fiche___annuaireksup/&RH=ACCUEIL_FR', "membre"]
	]);
	return gMembersTable;
};

function loadTransitions(){
	var gTransitionsTable = new google.visualization.DataTable();
	gTransitionsTable.addColumn('string', 'id', 'id');
	gTransitionsTable.addColumn('string', 'text', 'text');
	gTransitionsTable.addColumn('string', 'title', 'title');
	gTransitionsTable.addColumn('string', 'url', 'url');
	gTransitionsTable.addColumn('string', 'type', 'type');
	gTransitionsTable.addRows([
	    ['T1', 'Transition 1', 'Sortie d\'Afrique', 't1', "transition"],
	    ['T2', 'Transition 2', 'Néolithique Bantu', 't2', "transition"],
	    ['T3', 'Transition 3', 'Village formation in Pueblo societies', 't3', "transition"],
	    ['T4', 'Transition 4', 'Émergence des villes', 't4', "transition"],
	    ['T5', 'Transition 5', 'Concentration de l\'habitat de l\'Âge du Fer', 't5', "transition"],
	    ['T6', 'Transition 6', '"Romanisation"', 't6', "transition"],
	    ['T7', 'Transition 7', 'Antiquité tardive', 't7', "transition"],
	    ['T8', 'Transition 8', 'Transition 800-1100 : Polarisation', 't8', "transition"],
	    ['T9', 'Transition 9', 'Transition urbaine liée à la la révolution industrielle', 't9', "transition"],
	    ['T10', 'Transition 10', 'Urbanisation de l\'Afrique du Sud', 't10', "transition"],
	    ['T11', 'Transition 11', 'Littoralisation des systèmes de peuplement', 't11', "transition"],
	    ['T12', 'Transition 12', 'Émergence de métropoles polycentriques "Mega Cities"', 't12', "transition"]
	]);
	return gTransitionsTable;
};

function loadTransitionsLinks(){
	var gTransitionsLinksTable = new google.visualization.DataTable();
	gTransitionsLinksTable.addColumn('string', 'id', 'id');
	gTransitionsLinksTable.addColumn('string', 'from', 'from');
	gTransitionsLinksTable.addColumn('string', 'to', 'to');
	gTransitionsLinksTable.addColumn('string', 'type', 'type');
	gTransitionsLinksTable.addRows([
	    ['T1-T2', 'T1', 'T2', 'tlink'],
	    ['T2-T4', 'T2', 'T4', 'tlink']
	]);
	return gTransitionsLinksTable;
};

function loadAxesMembersLinks(){
	var gAxesMembersLinksTable = new google.visualization.DataTable();
	gAxesMembersLinksTable.addColumn('string', 'id', 'id');
	gAxesMembersLinksTable.addColumn('string', 'from', 'from');
	gAxesMembersLinksTable.addColumn('string', 'to', 'to');
	gAxesMembersLinksTable.addRows([
		['Aba-axe1',  'Aba',  'axe1'],
		['Aba-axe3',  'Aba',  'axe3'],
		['Abr-axe1',  'Abr',  'axe1'],
		['Abr-axe3',  'Abr',  'axe3'],
		['Afr-axe3',  'Afr',  'axe3'],
		['Cco-axe1',  'Cco',  'axe1'],
		['Cco-axe3',  'Cco',  'axe3'],
		['Cdu-axe1',  'Cdu',  'axe1'],
		['Cdu-axe3',  'Cdu',  'axe3'],
		['Csc-axe1',  'Csc',  'axe1'],
		['Csc-axe3',  'Csc',  'axe3'],
		['Cta-axe2',  'Cta',  'axe2'],
		['Cta-axe3',  'Cta',  'axe3'],
		['CVM-axe1',  'CVM',  'axe1'],
		['CVM-axe3',  'CVM',  'axe3'],
		['Dph-axe3',  'Dph',  'axe3'],
		['Dpu-axe1',  'Dpu',  'axe1'],
		['Dpu-axe3',  'Dpu',  'axe3'],
		['Elo-axe2',  'Elo',  'axe2'],
		['Elo-axe3',  'Elo',  'axe3'],
		['EZR-axe2',  'EZR',  'axe2'],
		['EZR-axe3',  'EZR',  'axe3'],
		['Fbe-axe2',  'Fbe',  'axe2'],
		['Fbe-axe3',  'Fbe',  'axe3'],
		['Ffa-axe2',  'Ffa',  'axe2'],
		['Ffa-axe3',  'Ffa',  'axe3'],
		['FLN-axe1',  'FLN',  'axe1'],
		['FLN-axe3',  'FLN',  'axe3'],
		['Fva-axe3',  'Fva',  'axe3'],
		['Hma-axe1',  'Hma',  'axe1'],
		['Hma-axe3',  'Hma',  'axe3'],
		['Jfe-axe3',  'Jfe',  'axe3'],
		['JLFi-axe2',  'JLFi',  'axe2'],
		['JLFi-axe3',  'JLFi',  'axe3'],
		['JMHo-axe3',  'JMHo',  'axe3'],
		['Lka-axe2',  'Lka',  'axe2'],
		['Lka-axe3',  'Lka',  'axe3'],
		['Lnu-axe2',  'Lnu',  'axe2'],
		['Lnu-axe3',  'Lnu',  'axe3'],
		['Lsa-axe1',  'Lsa',  'axe1'],
		['Lsa-axe3',  'Lsa',  'axe3'],
		['MJOu-axe2',  'MJOu',  'axe2'],
		['MJOu-axe3',  'MJOu',  'axe3'],
		['MNCo-axe1',  'MNCo',  'axe1'],
		['MNCo-axe3',  'MNCo',  'axe3'],
		['Pga-axe2',  'Pga',  'axe2'],
		['Pga-axe3',  'Pga',  'axe3'],
		['Pli-axe3',  'Pli',  'axe3'],
		['Pou-axe1',  'Pou',  'axe1'],
		['Pou-axe3',  'Pou',  'axe3'],
		['Rcu-axe1',  'Rcu',  'axe1'],
		['Rcu-axe2',  'Rcu',  'axe2'],
		['Rcu-axe3',  'Rcu',  'axe3'],
		['Sle-axe2',  'Sle',  'axe2'],
		['Sle-axe3',  'Sle',  'axe3'],
		['SRC-axe1',  'SRC',  'axe1'],
		['SRC-axe3',  'SRC',  'axe3'],
		['Tko-axe2',  'Tko',  'axe2'],
		['Tko-axe3',  'Tko',  'axe3'],
		['Tli-axe3',  'Tli',  'axe3'],
		['Tlo-axe1',  'Tlo',  'axe1'],
		['Tlo-axe2',  'Tlo',  'axe2'],
		['Tlo-axe3',  'Tlo',  'axe3'],
		['Vde-axe1',  'Vde',  'axe1'],
		['Vde-axe2',  'Vde',  'axe2'],
		['Vde-axe3',  'Vde',  'axe3'],
		['Xro-axe2',  'Xro',  'axe2'],
		['Xro-axe3',  'Xro',  'axe3']
	]);
	return gAxesMembersLinksTable;
};

function loadTransitionsMembersLinks(){ // FIXME : Complete me
	var gTransitionsMembersLinksTable = new google.visualization.DataTable();
	gTransitionsMembersLinksTable.addColumn('string', 'id', 'id');
	gTransitionsMembersLinksTable.addColumn('string', 'from', 'from');
	gTransitionsMembersLinksTable.addColumn('string', 'to', 'to');
	gTransitionsMembersLinksTable.addColumn('string', 'type', 'type');
	gTransitionsMembersLinksTable.addRows([
		// GROUPES
		/*
		Transition 5 et 6 : un pas de plus vers la modélisation et questionnements sur une
		approche conduite par les données versus conduite par des concepts / théories, groupe de
		travail « transitions 5 et 6 » (Pierre Garmy, Laure, Thérèse, Frédérique, Marie-Jeanne,
		Lahouari, Jean-Luc)
		*/
		['Pga-T5-inter', 'Pga', 'T5', 'inter'],
		['Pga-T6-inter', 'Pga', 'T6', 'inter'],
		['Lnu-T5-inter', 'Lnu', 'T5', 'inter'],
		['Lnu-T6-inter', 'Lnu', 'T6', 'inter'],
		['Tli-T5-inter', 'Tli', 'T5', 'inter'],
		['Tli-T6-inter', 'Tli', 'T6', 'inter'],
		['Fbe-T5-inter', 'Fbe', 'T5', 'inter'],
		['Fbe-T6-inter', 'Fbe', 'T6', 'inter'],
		['MJOu-T5-inter', 'MJOu', 'T5', 'inter'],
		['MJOu-T6-inter', 'MJOu', 'T6', 'inter'],
		['Lka-T5-inter', 'Lka', 'T5', 'inter'],
		['Lka-T6-inter', 'Lka', 'T6', 'inter'],
		['JLFi-T5-inter', 'JLFi', 'T5', 'inter'],
		['JLFi-T6-inter', 'JLFi', 'T6', 'inter'],
		['Fva-T3-inter', 'Fva', 'T3', 'inter'],
		['Ffa-T5-inter', 'Ffa', 'T5', 'inter'],
		['Ffa-T6-inter', 'Ffa', 'T6', 'inter'],
		['Afr-T6-inter', 'Afr', 'T6', 'inter'],
		['SRC-T4-inter', 'SRC', 'T4', 'inter'],
		['Csc-T4-inter', 'Csc', 'T4', 'inter'],
				// PORTEURS
		['JMHo-T1-porteur', 'JMHo', 'T1', 'porteur'],
		['Cco-T1-porteur', 'Cco', 'T1', 'porteur'],
		['JMHo-T2-porteur', 'JMHo', 'T2', 'porteur'],
		['Cco-T2-porteur', 'Cco', 'T2', 'porteur'],
		['Tko-T3-porteur', 'Tko', 'T3', 'porteur'],
		['Dpu-T4-porteur', 'Dpu', 'T4', 'porteur'],
		['Pga-T5-porteur', 'Pga', 'T5', 'porteur'],
		['Lnu-T5-porteur', 'Lnu', 'T5', 'porteur'],
		['JLFi-T5-porteur', 'JLFi', 'T5', 'porteur'],
		['MJOu-T6-porteur', 'MJOu', 'T6', 'porteur'],
		['Fbe-T6-porteur', 'Fbe', 'T6', 'porteur'],
		['Sle-T8-porteur', 'Sle', 'T8', 'porteur'],
		['Elo-T8-porteur', 'Elo', 'T8', 'porteur'],
		['Xro-T8-porteur', 'Xro', 'T8', 'porteur'],
		['EZR-T8-porteur', 'EZR', 'T8', 'porteur'],
		['Abr-T9-porteur', 'Abr', 'T9', 'porteur'],
		['Afr-T9-porteur', 'Afr', 'T9', 'porteur'],
		['CVM-T10-porteur', 'CVM', 'T10', 'porteur'],
		['Cdu-T11-porteur', 'Cdu', 'T11', 'porteur'],
		['FLN-T12-porteur', 'FLN', 'T12', 'porteur']
	]);
	return gTransitionsMembersLinksTable;
};

function loadOptions()
{
    var options = {
        width:  "485px",
        height: "495px",
        stabilize: false, // do not stabilize before displaying
        nodes: {
          'style': 'dot',
          'color': 'black',
          'group': 'default',  
          'fontColor': 'black',
          'fontSize': 14,
          'radius': 5,
        },
        'links': {
            'color': 'grey',
            'width': 1,
        },
        'groups': {
        	'greyed':
            {
                'style': 'dot',
                'radius': 1,
                'borderColor': 'grey',
                'backgroundColor': 'grey',
                'fontColor': 'black',
                'fontSize': 6,
                'highlightColor': 'yellow',
                'fontFace': 'arial',
            },
            'Géographie':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#0074b8',
                'backgroundColor': '#0074b8',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
                'fontFace': 'arial',
            },
            'Géomatique':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#9fb5da',
                'backgroundColor': '#9fb5da',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
                'fontFace': 'arial',
            },
            'Mathématiques':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#f1a4c4',
                'backgroundColor': '#f1a4c4',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },  
            'Linguistique':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#cc3366',
                'backgroundColor': '#cc3366',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'Économie':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#9e7219',
                'backgroundColor': '#9e7219',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'Archéologie':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#f5a318',
                'backgroundColor': '#f5a318',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },  
            'Épistémologie':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#7a2650',
                'backgroundColor': '#7a2650',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'Informatique':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#becf23',
                'backgroundColor': '#becf23',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'Histoire':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#1a5f2c',
                'backgroundColor': '#1a5f2c',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },  
            'Gestion':
            {
                'style': 'dot',
                'radius': 5,
                'borderColor': '#96808b',
                'backgroundColor': '#96808b',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'axe':
            {
                'style': 'rect',
                'borderColor': 'black',
                'backgroundColor': '#d3d4d5',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            },
            'transition':
            {
                'style': 'rect',
                'borderColor': 'black',
                'backgroundColor': '#d3d4d5',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
            }
        },        
    };
    return options;
};

function load_legend_nodes($networkType){
	var gLegendeTable = new google.visualization.DataTable();
	gLegendeTable.addColumn('string', 'id', 'id');
	gLegendeTable.addColumn('string', 'text', 'text');
	gLegendeTable.addColumn('string', 'group', 'group');
	gLegendeTable.addColumn('string', 'type', 'type');
	gLegendeTable.addRows([
		['archeo', 'Archéologue', 'Archéologie', 'metier'],
		['geographe', 'Géographe', 'Géographie', 'metier'],
		['geomaticien', 'Géomaticien', 'Géomatique', 'metier'],
		['info', 'Informaticien', 'Informatique', 'metier'],
		['epistemo', 'Épistémologue', 'Épistémologie', 'metier'],
		['linguiste', 'Linguiste', 'Linguistique', 'metier'],
		['econo', 'Économiste', 'Économie', 'metier'],
		['histo', 'Historien', 'Histoire', 'metier'],
		['math', 'Mathématicien', 'Mathématiques', 'metier'],
		['gestion', 'Gestionnaire', 'Gestion', 'metier'],
		['axe', 'Axe de Recherche', 'axe','axe'],
		['transition', 'Transition', 'transition', 'transition']
	]);
	var typeColumnId = gLegendeTable.getColumnIndex('type');
	if ($networkType == 'groupes'){
		var rowToDelete = gLegendeTable.getFilteredRows([{column: typeColumnId, value: 'axe'}])[0];
		gLegendeTable.removeRow(rowToDelete);
	} else if ($networkType == 'axes'){
		var rowToDelete = gLegendeTable.getFilteredRows([{column: typeColumnId, value: 'transition'}])[0];
		gLegendeTable.removeRow(rowToDelete);
	} else if ($networkType == 'transitions'){
		var rowToDelete = gLegendeTable.getFilteredRows([{column: typeColumnId, value: 'axe'}])[0];
		gLegendeTable.removeRow(rowToDelete);
		var rowsToDelete = gLegendeTable.getFilteredRows([{column: typeColumnId, value: 'metier'}]);
		for (var i = rowsToDelete.length - 1; i >= 0 ; i--){
			gLegendeTable.removeRow(rowsToDelete[i]);
		};
	};
	return gLegendeTable;
};


