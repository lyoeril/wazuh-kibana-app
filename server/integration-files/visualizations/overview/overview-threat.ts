export default [{
  _id: 'Wazuh-App-Overview-THREAT-Events-over-time',
  _type: 'visualization',
  _source: {
    title: 'Events over time',
    visState:
      '{"title":"Events over time","type":"area","params":{"scale":"linear","yAxis":{},"smoothLines":true,"addTimeMarker":false,"interpolate":"linear","addLegend":true,"shareYAxis":true,"mode":"overlap","defaultYExtents":false,"setYExtents":false,"addTooltip":true,"times":[],"type":"area","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal","setYExtents":false,"defaultYExtents":false},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"area","mode":"normal","data":{"label":"Count","id":"1"},"interpolate":"cardinal","valueAxis":"ValueAxis-1"}],"legendPosition":"right"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"group","params":{"field":"data.alert.category","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","size":20,"order":"desc","orderBy":"1"}},{"id":"3","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","interval":"auto","customInterval":"2h","min_doc_count":1,"extended_bounds":{}}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Unknown Traffic, Not Suspicious Traffic","params":["Unknown Traffic","Not Suspicious Traffic"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Unknown Traffic"}},{"match_phrase":{"data.alert.category":"Not Suspicious Traffic"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Top-5-rules',
  _type: 'visualization',
  _source: {
    title: 'Top 5 rules',
    visState:
      '{"title":"Export rule distr","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"sum","schema":"metric","params":{"field":"rule.level"}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"data.alert.category","size":20,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Unknown Traffic, Not Suspicious Traffic","params":["Unknown Traffic","Not Suspicious Traffic"],"alias":null,"negate":true,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Unknown Traffic"}},{"match_phrase":{"data.alert.category":"Not Suspicious Traffic"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Network-Scan-Source',
  _type: 'visualization',
  _source: {
    title: 'Source',
    visState:
      '{"title":"NetworkSource","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":2,"format":{"id":1},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":false,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}},{"id":"7","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.srcip","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Detection of a Network Scan,A Network Trojan was detected","params":["Detection of a Network Scan","A Network Trojan was detected"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Detection of a Network Scan"}},{"match_phrase":{"data.alert.category":"A Network Trojan was detected"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Network-Scan',
  _type: 'visualization',
  _source: {
    title: 'Network Scan',
    visState:
      '{"title":"TableNetworkScan","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":4,"format":{"id":"1"},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":2,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":3,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature_id","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"ID"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"GeoLocation.country_name","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Country"}},{"id":"5","enabled":true,"type":"terms","schema":"bucket","params":{"field":"GeoLocation.city_name","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"City"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Detection of a Network Scan,A Network Trojan was detected","params":["Detection of a Network Scan","A Network Trojan was detected"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Detection of a Network Scan"}},{"match_phrase":{"data.alert.category":"A Network Trojan was detected"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Network-Scan-Destination',
  _type: 'visualization',
  _source: {
    title: 'Destination',
    visState:
      '{"title":"NetworkDestination","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":2,"format":{"id":"1"},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":false,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}},{"id":"7","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.dstip","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"type":"phrases","key":"data.alert.category","value":"Detection of a Network Scan,A Network Trojan was detected","params":["Detection of a Network Scan","A Network Trojan was detected"],"alias":null,"negate":false,"disabled":false,"index":"wazuh-alerts"},"query":{"bool":{"should":[{"match_phrase":{"data.alert.category":"Detection of a Network Scan"}},{"match_phrase":{"data.alert.category":"A Network Trojan was detected"}}],"minimum_should_match":1}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Privacy-Violation',
  _type: 'visualization',
  _source: {
    title: 'Potential Corporate Privacy Violation',
    visState:
      '{"title":"PotentialCorporatePrivacyViolation","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":2,"format":{"id":"1"},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature_id","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"ID"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":10,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"alias":null,"negate":false,"disabled":false,"type":"phrase","key":"data.alert.category","params":{"query":"Potential Corporate Privacy Violation"},"index":"wazuh-alerts"},"query":{"match":{"data.alert.category":{"query":"Potential Corporate Privacy Violation","type":"phrase"}}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Privacy-Violation-Source',
  _type: 'visualization',
  _source: {
    title: 'Potential Corporate Privacy Violation Source',
    visState:
      '{"title":"NetworkSource","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":2,"format":{"id":1},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":false,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}},{"id":"7","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.srcip","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"alias":null,"negate":false,"disabled":false,"type":"phrase","key":"data.alert.category","params":{"query":"Potential Corporate Privacy Violation"},"index":"wazuh-alerts"},"query":{"match":{"data.alert.category":{"query":"Potential Corporate Privacy Violation","type":"phrase"}}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Privacy-Violation-Destination',
  _type: 'visualization',
  _source: {
    title: 'Potential Corporate Privacy Violation Destination',
    visState:
      '{"title":"NetworkDestination","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","percentageCol":"","dimensions":{"metrics":[{"accessor":2,"format":{"id":"1"},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"3","enabled":false,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature"}},{"id":"7","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.dstip","orderBy":"1","order":"desc","size":5,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","query":{"query":"","language":"kuery"},"filter":[{"meta":{"alias":null,"negate":false,"disabled":false,"type":"phrase","key":"data.alert.category","params":{"query":"Potential Corporate Privacy Violation"},"index":"wazuh-alerts"},"query":{"match":{"data.alert.category":{"query":"Potential Corporate Privacy Violation","type":"phrase"}}},"$state":{"store":"appState"}}],"index":"wazuh-alerts"}'
    }
  }
},
//NEW VIS
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-NIDS-Nodes',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alerts - NIDS NODE',
    visState:
      '{"title":"OwlH - Alerts - NIDS NODE","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"agent.name","order":"desc","size":100,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"OwlH NIDS Node"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-Table',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alert table',
    visState:
      '{"title":"OwlH - Alert table","type":"table","params":{"perPage":30,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":2,"direction":"desc"},"showTotal":false,"totalFunc":"sum","dimensions":{"metrics":[{"accessor":4,"format":{"id":"number"},"params":{},"aggType":"count"}],"buckets":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":1,"format":{"id":"terms","params":{"id":"url","otherBucketLabel":"Other","missingBucketLabel":"Missing","urlTemplate":"https://35.180.116.102/ruleset-search.html?&search={{value}}","labelTemplate":"{{value}}"}},"params":{},"aggType":"terms"},{"accessor":2,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":3,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature","orderBy":"1","order":"desc","size":20000,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Alert name"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.signature_id","orderBy":"1","order":"desc","size":1,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"SID"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.severity","orderBy":"1","order":"desc","size":1,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Sev."}},{"id":"5","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.category","orderBy":"1","order":"desc","size":1,"otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Category"}}]}',
    uiStateJSON: '{}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-Categories',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alert Categories',
    visState:
      '{"title":"OwlH - Alert Categories","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.alert.category","size":200,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Categories"}}]}',
    uiStateJSON: '{"vis":{"params":{"sort":{"columnIndex":1,"direction":"desc"}}}}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-Severity',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alert Severity',
    visState:
      '{"title":"OwlH - Alert Severity","type":"pie","params":{"type":"pie","addTooltip":true,"addLegend":true,"legendPosition":"right","isDonut":true,"labels":{"show":false,"values":true,"last_level":true,"truncate":100}},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"segment","params":{"field":"data.alert.severity","size":10,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Alert Severity"}},{"id":"3","enabled":true,"type":"terms","schema":"segment","params":{"field":"data.alert.signature_id","size":100,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Signature  ID"}}]}',
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-Time',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alerts time',
    visState:
      '{"title":"OwlH - Alerts time","type":"histogram","params":{"type":"histogram","grid":{"categoryLines":false,"style":{"color":"#eee"}},"categoryAxes":[{"id":"CategoryAxis-1","type":"category","position":"bottom","show":true,"style":{},"scale":{"type":"linear"},"labels":{"show":true,"truncate":100},"title":{}}],"valueAxes":[{"id":"ValueAxis-1","name":"LeftAxis-1","type":"value","position":"left","show":true,"style":{},"scale":{"type":"linear","mode":"normal"},"labels":{"show":true,"rotate":0,"filter":false,"truncate":100},"title":{"text":"Count"}}],"seriesParams":[{"show":"true","type":"histogram","mode":"stacked","data":{"label":"Count","id":"1"},"valueAxis":"ValueAxis-1","drawLinesBetweenPoints":true,"showCircles":true}],"addTooltip":true,"addLegend":true,"legendPosition":"right","times":[],"addTimeMarker":false},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"date_histogram","schema":"segment","params":{"field":"timestamp","useNormalizedEsInterval":true,"interval":"auto","drop_partials":false,"min_doc_count":1,"extended_bounds":{}}},{"id":"3","enabled":true,"type":"terms","schema":"group","params":{"field":"data.alert.signature_id","order":"desc","size":400,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}}]}',
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-Payload',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alerts Payload',
    visState:
      '{"title":"OwlH - Alerts - Payload","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":null,"direction":null},"showTotal":false,"totalFunc":"sum","dimensions":{"metrics":[{"accessor":4,"format":{"id":"number"},"params":{},"aggType":"count"}],"buckets":[{"accessor":1,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":2,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"},{"accessor":3,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}],"splitRow":[{"accessor":0,"format":{"id":"terms","params":{"id":"string","otherBucketLabel":"Other","missingBucketLabel":"Missing"}},"params":{},"aggType":"terms"}]},"row":true},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"split","params":{"field":"data.alert.signature","order":"desc","size":10,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing"}},{"id":"3","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.srcip","order":"desc","size":5,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Source ip"}},{"id":"4","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.dstip","order":"desc","size":1,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Dest ip"}},{"id":"5","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.payload_printable","order":"desc","size":10,"orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Payload"}}]}',
    uiStateJSON: '',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-SourceIP-Table',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alert Source IP Table',
    visState:
      '{"title":"OwlH - Alert Source IP Table","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.srcip","size":20000,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Source IP"}}]}',
    uiStateJSON: '{"vis":{"params":{"sort":{"columnIndex":1,"direction":"desc"}}}}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
{
  _id: 'Wazuh-App-Overview-THREAT-Alert-DestinationIP-Table',
  _type: 'visualization',
  _source: {
    title: 'OwlH - Alert Destination IP Table',
    visState:
      '{"title":"OwlH - Alert Destination IP Table","type":"table","params":{"perPage":10,"showPartialRows":false,"showMetricsAtAllLevels":false,"sort":{"columnIndex":1,"direction":"desc"},"showTotal":false,"totalFunc":"sum"},"aggs":[{"id":"1","enabled":true,"type":"count","schema":"metric","params":{}},{"id":"2","enabled":true,"type":"terms","schema":"bucket","params":{"field":"data.dstip","size":20000,"order":"desc","orderBy":"1","otherBucket":false,"otherBucketLabel":"Other","missingBucket":false,"missingBucketLabel":"Missing","customLabel":"Destination IP"}}]}',
    uiStateJSON: '{"vis":{"params":{"sort":{"columnIndex":1,"direction":"desc"}}}}',
    description: '',
    version: 1,
    kibanaSavedObjectMeta: {
      searchSourceJSON:
        '{"index":"wazuh-alerts","filter":[],"query":{"query":"","language":"lucene"}}'
    }
  }
},
]