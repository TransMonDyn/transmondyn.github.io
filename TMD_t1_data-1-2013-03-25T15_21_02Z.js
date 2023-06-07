/**
 * @author <a href="mailto:robin.cura@gmail.com">Robin Cura</a>
 * @institution <a href="http://www.parisgeo.cnrs.fr">UMR 8504 Géographie-cités</a>
 * @project <a href="http://www.transmondyn.parisgeo.cnrs.fr">ANR TransMonDyn</a>
 */

function loadDimensions(){
    var gDimensionsTable;
    gDimensionsTable = new google.visualization.DataTable();
    gDimensionsTable.addColumn('string', 'id', 'id');
    gDimensionsTable.addColumn('string', 'text', 'text');
    gDimensionsTable.addColumn('string', 'desc', 'desc');
    gDimensionsTable.addColumn('string', 'group', 'group');
    gDimensionsTable.addRows([
        [
            '2',
            'mode de vie, culture',
            'émergence \"entité que l\'on pourrait qualifier de réseau ethnolinguistique pour des époques plus proches de nous\"' +
                ' [...] ' +
                'les manifestations symboliques se répandent elles aussi' +
                ' [...] ' +
                'pas de changement en ce qui concerne le mode de vie nomade' +
                ' [...] ' +
                'Rencontre avec d\'autres espèces',
            'évolution'
        ],
        [
            '5',
            'taille des groupes',
            'groupe constitué d\'environ 25 individus',
            'stabilité'
        ],
        [
            '9',
            'déplacements pluriannuels',
            'mode de vie nomade stable' +
                ' [...] ' +
                'émergence d\'une \"route migratoire\" le long des côtes',
            'évolution'
        ],
        [
            '10',
            'forme des migrations',
            'Sortie d\'Homo Sapiens hors d\'Afrique' +
                ' [...] ' +
                'excursions de plus en plus éloignées des côtes',
            'évolution'
        ],
        [
            '11',
            'changements climatiques',
            'modifications de l\'environnement, inscrites dans le décours de la dernière période glacière' +
                ' [...] ' +
                'Eruption Mont Toba (7000 BP)',
            'évolution'
        ],
        [
            '12',
            'environnement local',
            'Adaptation aux caractéristiques de l\'environnement local' +
                ' [...] ' +
                'Impact humain sur l\'environnement local ?',
            'évolution'
        ],
        [
            '13',
            'diversité ressources',
            'Utilisation des ressources du milieu marin : coquillages, poissons, crustacés',
            'évolution'
        ],
        [
            '14',
            'rapport à l\'environnement',
            'maîtrise toujours plus grande des rythmes et caractéristiques de l\'environnement' +
                ' [...] ' +
                'Chasseurs-cueilleurs : Forte dépendance et considération pour l\'environement.',
            'évolution'
        ],
        [
            '15',
            'spécialisation de la production',
             'éventuelle spécialisation de certains individus du groupes aux activités (précédentes)' +
                 ' [...] ' +
                 'Diversification de la production Chasse / boucheries : les outils témoignent d\'une diversité des fonctions au sein du groupe ; spécialisation pêche ?',
            'évolution'
        ],
        [
            '16',
            'productivité',
            'les outils continuent leur évolution vers plus d\'efficacité',
            'évolution'
        ],
        [
            '17',
            'système d\'échange',
            'les réseaux d\'échange / de circulation des biens sont peu connus à l\'époque' +
                ' [...] ' +
                'Notion de réseau ethnolinguistique pertinente dans les périodes récentes.' +
                ' [...] ' +
                'Excursions de plus en plus loin des côtes' +
                ' [...] ' +
                'Augmentation de la taille des réseaux d\'échanges : plusieurs centaines de kilomètres dans le SO France',
            'inconnue'
        ],
        [
            '18',
            'innovation technologique',
            'navigation' +
                '[ ...] ' +
            'modification de l\'environnement pour favoriser la croissance de certaines plantes',
            'évolution'
        ]
    ]);
    return gDimensionsTable;
}

function loadDimensionsLinks(){
    var gDimensionsLinksTable;
    gDimensionsLinksTable = new google.visualization.DataTable();
    gDimensionsLinksTable.addColumn('string', 'id', 'id');
    gDimensionsLinksTable.addColumn('string', 'from', 'from');
    gDimensionsLinksTable.addColumn('string', 'to', 'to');
    gDimensionsLinksTable.addColumn('string', 'type', 'type');
    gDimensionsLinksTable.addColumn('string', 'style', 'style');
    gDimensionsLinksTable.addColumn('number', 'width', 'width');
    gDimensionsLinksTable.addColumn('string', 'color', 'color');
    gDimensionsLinksTable.addRows([
        ['11-16', '11', '16', 'direct-sur', 'arrow-end', 2.5, 'black'],
        ['11-18', '11', '18', 'direct-sur', 'arrow-end', 2.5, 'black'],
        ['18-10', '18', '10', 'direct-sur', 'arrow-end', 2.5, 'black'],
        ['16-10', '16', '10', 'direct-sur', 'arrow-end', 2.5, 'black'],
        ['11-12', '11', '12', 'direct-sur', 'arrow-end', 2.5, 'black'],
        ['11-13', '11', '13', 'direct-sur', 'arrow-end', 2.5, 'black'],

        ['10-17', '10', '17', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['15-17', '15', '17', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['17-2', '17', '2', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['17-12', '17', '12', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['17-13', '17', '13', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['15-16', '15', '16', 'direct-suppose', 'arrow-end', 1, 'grey'],
        ['15-18', '15', '18', 'direct-suppose', 'arrow-end', 1, 'grey'],

        ['14-12', '14', '12', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],
        ['14-13', '14', '13', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],
        ['12-15', '12', '15', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],
        ['13-15', '13', '15', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],
        ['18-15', '18', '15', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],
        ['16-15', '16', '15', 'condition-necessaire', 'arrow-end', 0.1, 'grey'],

        ['14-12b', '14', '12', 'condition-necessaire', 'dash-line', 1, 'grey'],
        ['14-13b', '14', '13', 'condition-necessaire', 'dash-line', 1, 'grey'],
        ['12-15b', '12', '15', 'condition-necessaire', 'dash-line', 1, 'grey'],
        ['13-15b', '13', '15', 'condition-necessaire', 'dash-line', 1, 'grey'],
        ['18-15b', '18', '15', 'condition-necessaire', 'dash-line', 1, 'grey'],
        ['16-15b', '16', '15', 'condition-necessaire', 'dash-line', 1, 'grey']
    ]);
    return gDimensionsLinksTable;
}

function loadDimensionsPackages(){
    var gDimensionsPackagesTable;
    gDimensionsPackagesTable = new google.visualization.DataTable();
    gDimensionsPackagesTable.addColumn('string', 'id', 'id');
    gDimensionsPackagesTable.addColumn('string', 'from', 'from');
    gDimensionsPackagesTable.addColumn('string', 'to', 'to');
    gDimensionsPackagesTable.addColumn('string', 'text', 'text');
    gDimensionsPackagesTable.addColumn('number', 'progress', 'progress');
    gDimensionsPackagesTable.addColumn('string', 'image', 'image');
    gDimensionsPackagesTable.addColumn('string', 'title', 'title');
    gDimensionsPackagesTable.addRows([
        [
            '11-16',
            '11',
            '16',
            'direct-sur',
            0.6,
            'https://sites.google.com/site/transmondyn/help-min.png',
            '<b>Changement climatique -> Productivité</b> : <br>' +
                'adaptations socio-culturelles'
        ],
        [
            '11-18',
            '11',
            '18',
            'direct-sur',
            0.6,
            'https://sites.google.com/site/transmondyn/help-min.png',
            '<b>Changement climatique -> Innovation technologique</b> : <br>' +
                '[adaptations] techniques'
        ],
        [
            '18-10',
            '18',
            '10',
            'direct-sur',
            0.6,
            'https://sites.google.com/site/transmondyn/help-min.png',
            '<b>Innovation technologique -> Forme des migrations</b> : <br>' +
                'des migrations prennent place le long de la côte asiatique...' + '<br>' +
            'Il est raisonnable de les associer au développement<br> d\'une vie à proximité de la mer' +
                ' [...] ' +
                'il est très probable que les plus<br>longues et dangereuses traversées ont été le fruit<br>d\'une planification et d\'intentions partagées au<br>sein des groupes humains'
        ]
    ]);
    return gDimensionsPackagesTable;
}

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
          'radius': 5
        },
        'links': {
            'color': 'grey',
            'width': 1
        },
        'groups': {
            'évolution':
            {
                'style': 'triangle',
                'borderColor': 'black',
                'backgroundColor': '#ed5e50',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
                'radius' : 14
            },
            'stabilité':
            {
                'style': 'dot',
                'borderColor': 'black',
                'backgroundColor': '#9C83ED',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
                'radius': 14
            },
            'inconnue':
            {
                'style': 'star',
                'borderColor': 'black',
                'color': 'red',
                'backgroundColor': 'white',
                'fontColor': 'black',
                'fontSize': 14,
                'highlightColor': 'yellow',
                'radius': 14
            }
        }
    };
    return options;
}