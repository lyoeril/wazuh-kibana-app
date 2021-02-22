export default [{
  _id: 'Wazuh-App-Overview-OFFICE365-Operations',
  _type: 'visualization',
  _source: {
    title: 'IP/Operation Pie',
    visState:
      '{"title":"IP/Operation Pie","type":"pie","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.office_365.Operation","orderBy":"1","order":"desc","size":50,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Operation"},"schema":"segment"},{"id":"3","enabled":true,"type":"terms","params":{"field":"data.office_365.ClientIP","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"IP"},"schema":"segment"}],"params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-OFFICE365-Overview',
  _type: 'visualization',
  _source: {
    title: 'Alerts Time',
    visState:
      '{"title":"Alerts Time","type":"histogram","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"date_histogram","params":{"field":"timestamp","timeRange":{"from":"now-15m","to":"now"},"useNormalizedEsInterval":true,"scaleMetricValues":false,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{},"customLabel":"Timestamp"},"schema":"segment"},{"id":"6","enabled":true,"type":"terms","params":{"field":"data.office_365.Operation","orderBy":"1","order":"desc","size":4,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Rule"},"schema":"group"}],"params":{"type":"histogram","grid":{"categoryLines":false,"valueAxis":""},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"filter":true,"truncate":100,"rotate":0},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":true,"type":"histogram","mode":"stacked","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"lineWidth":2,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false,"labels":{"show":false},"thresholdLine":{"show":false,"value":10,"width":1,"style":"full","color":"#E7664C"},"row":false}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-OFFICE365-Table-User',
  _type: 'visualization',
  _source: {
    title: 'User Table',
    visState:
      '{"title":"User Table","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.office_365.UserId","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"User"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-OFFICE365-Table-IP',
  _type: 'visualization',
  _source: {
    title: 'IP Table',
    visState:
      '{"title":"IP Table","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.office_365.ClientIP","orderBy":"1","order":"desc","size":20,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"User"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-OFFICE365-Table-OperationView',
  _type: 'visualization',
  _source: {
    title: 'Operations Overview',
    visState:
      '{"title":"Operations Overview","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.office_365.Operation","orderBy":"1","order":"desc","size":50,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Operation"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"data.office_365.Workload","orderBy":"1","order":"desc","size":50,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Workload"},"schema":"bucket"}],"params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":""}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-OFFICE365-Table-SplitRules',
  _type: 'visualization',
  _source: {
    title: 'Detailed Alerts',
    visState:
      '{"title":"Detailed Office365 Alerts","type":"table","aggs":[{"id":"1","enabled":true,"type":"count","params":{},"schema":"metric"},{"id":"2","enabled":true,"type":"terms","params":{"field":"data.office_365.UserId","orderBy":"1","order":"desc","size":5000,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"User"},"schema":"bucket"},{"id":"3","enabled":true,"type":"terms","params":{"field":"data.office_365.ClientIP","orderBy":"1","order":"desc","size":5000,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Client"},"schema":"bucket"},{"id":"5","enabled":true,"type":"terms","params":{"field":"data.office_365.Workload","orderBy":"1","order":"desc","size":5000,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Workload"},"schema":"bucket"},{"id":"6","enabled":true,"type":"terms","params":{"field":"data.office_365.Operation","orderBy":"1","order":"desc","size":5000,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Operation"},"schema":"split"},{"id":"7","enabled":true,"type":"terms","params":{"field":"rule.description","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Description"},"schema":"bucket"}],"params":{"perPage":50,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","row":true}}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[],"index":"wazuh-alerts"}'
    }
  }
}
]