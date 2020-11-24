export default [{
  _id: 'Wazuh-App-Overview-COMMAND-SourceTable',
  _type: 'visualization',
  _source: {
    title: 'System/Users Table',
    visState:
      '{"title":"System/Users Table","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.subjectUserName","orderBy":"1","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"User/System"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-COMMAND-Overview',
  _type: 'visualization',
  _source: {
    title: 'Overview',
    visState:
      '{"title":"Overview","type":"histogram","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-15m","to":"now"},"useNormalizedEsInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{},"customLabel":"Timestamp"},"schema":"segment"},{"id":"6","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":4,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Rule"},"schema":"group"}],"params":{"type":"histogram","grid":{"categoryLines":false,"valueAxis":""},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100,"rotate":0},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"histogram","mode":"stacked","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{"show":false},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"},"row":false}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-COMMAND-Alert-Level',
  _type: 'visualization',
  _source: {
    title: 'Alert Level',
    visState:
      '{"title":"Alert Level","type":"pie","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"rule.id","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Rule"},"schema":"segment"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.level","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Level"},"schema":"segment"}],"params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100},"row":true}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-COMMAND-CMD-Table',
  _type: 'visualization',
  _source: {
    title: 'Executed Commands (CMD)',
    visState:
      '{"title":"Executed Commands (CMD)","type":"table","aggs":[{"id":"5","enabled":true,"type":"max","params":{"field":"rule.level","customLabel":"Level"},"schema":"metric"},{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.commandLine","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Command"},"schema":"bucket"},{"id":"6","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.newProcessName","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Process"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"}],"params":{"perPage":15,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}},{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.groups","negate":false,"params":{"query":"cmd"},"type":"phrase","index":"wazuh-alerts"},"query":{"match_phrase":{"rule.groups":"cmd"}}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-COMMAND-Powershel-Table',
  _type: 'visualization',
  _source: {
    title: 'Executed Powershell Commands',
    visState:
      '{"title":"Executed Powershell Commands","type":"table","aggs":[{"id":"5","enabled":true,"type":"max","params":{"field":"rule.level","customLabel":"Level"},"schema":"metric"},{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.win.eventdata.scriptBlockText","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Command"},"schema":"bucket"},{"id":"6","enabled":false,"type":"terms","params":{"field":"data.win.eventdata.newProcessName","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Process"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"}],"params":{"perPage":15,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}},{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.groups","negate":false,"params":{"query":"powershell"},"type":"phrase","index":"wazuh-alerts"},"query":{"match_phrase":{"rule.groups":"powershell"}}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-COMMAND-SourceTableIP',
  _type: 'visualization',
  _source: {
    title: 'Executed Powershell Commands',
    visState:
      '{"title":"AttackDetection_Table_IP","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":false,"type":"terms","params":{"field":"data.win.eventdata.subjectUserName","orderBy":"1","order":"desc","size":100,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"User/System"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"agent.ip","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"IP"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"language":"kuery","query":""},"filter":[{"$state":{"store":"appState"},"meta":{"alias":null,"disabled":false,"key":"rule.level","negate":false,"params":{"gte":10,"lt":15},"type":"range","index":"wazuh-alerts"},"range":{"rule.level":{"gte":10,"lt":15}}}],"index":"wazuh-alerts"}'
    }
  }
},
]