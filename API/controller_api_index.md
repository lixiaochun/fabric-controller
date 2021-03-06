## Controller API index

**Version 1.0**
**Copyright(c) 2018 Nippon Telegraph and Telephone Corporation**

### Common API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Processing request|Getting list of operational state|000102|GET|/v1/operations|/v1/operations|
||Getting information of detailed operation state|000103|GET|/v1/operations/{operation_id}|/v1/operations/1234567890123|
|Controller status confirmation|Getting controller state|000201|GET|/v1/MSFcontroller/status|/v1/MSFcontroller/status|
|Controller log|Getting controller log|000301|GET|/v1/operations/log|/v1/operations/1234567890123|

### Underlay Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Equipment-type information management|Registering equipment information|010101|POST|/v1/equipment-types|/v1/equipment-types|
||Getting equipment list in switch cluster|010102|GET|/v1/equipment-types|/v1/equipment-types|
||Getting equipment information|010103|GET|/v1/equipment-types/{equipment_type_id}|/v1/equipment-types/10|
||Deleting equipment information|010104|DELETE|/v1/equipment-types/{equipment_type_id}|/v1/equipment-types/{equipment_type_id}|
|Switch-cluster management|Adding Switch-cluster|010201|POST|/v1/clusters|/v1/clusters|
||Getting list of Switch-cluster|010202|GET|/v1/clusters|/v1/clusters|
||Getting information of Switch-cluster|010203|GET|/v1/clusters/{cluster_id}|/v1/clusters/1|
||Deleting Switch-cluster|010204|DELETE|/v1/clusters/{cluster_id}|/v1/clusters/1|
|Node information|Getting list of nodes|010301|GET|/v1/clusters/{cluster_id}/nodes|/v1/clusters/1/nodes|
|Leaf management|Adding Leaf- node|010401|POST|/v1/clusters/{cluster_id}/nodes/leafs|/v1/clusters/1/nodes/leafs|
||Getting list of Leaf-nodes|010402|GET|/v1/clusters/{cluster_id}/nodes/leafs|/v1/clusters/1/nodes/leafs|
||Getting information of Leaf-node|010403|GET|/v1/clusters/{cluster_id}/nodes/leafs/{node_id}|/v1/clusters/1/nodes/leafs/1|
||Deleting Leaf-node|010404|DELETE|/v1/clusters/{cluster_id}/nodes/leafs/{node_id}|/v1/clusters/1/nodes/leafs/1|
||Updating Leaf-node|010405|PUT|/v1/clusters/{cluster_id}/nodes/leafs/{node_id}|/v1/clusters/1/nodes/leafs/1|
|Spine management|Adding Spine-node|010501|POST|/v1/clusters/{cluster_id}/nodes/spines|/v1/clusters/1/nodes/spines|
||Getting list of Spine-nodes|010502|GET|/v1/clusters/{cluster_id}/nodes/spines|/v1/clusters/1/nodes/spines|
||Getting information of Spine-node|010503|GET|/v1/clusters/{cluster_id}/nodes/spines/{node_id}|/v1/clusters/1/nodes/spines/1|
||Deletting Spine-node|010504|DELETE|/v1/clusters/{cluster_id}/nodes/spines/{node_id}|/v1/clusters/1/nodes/spines/1|
|RR (BGP Route Reflector) management|Getting list of RR-node|010604|GET|/v1/clusters/{cluster_id}/nodes/rrs|/v1/clusters/1/nodes/rrs|
||Getting infromation of RR-node|010605|GET|/v1/clusters/{cluster_id}/nodes/rrs/{node_id}|/v1/clusters/1/nodes/rrs/1|
|Interface information|Gettinig list of interfaces|010701|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces|/v1/clusters/1/nodes/leafs/1/interfaces|
|Interface management (Physical interface)|Getting list of physical interfaces|010801|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/physical-ifs|
||Getting information of physical interface|010802|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs/{if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/physical-ifs/1|
||Updating physical interface|010803|PUT|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs/{if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/physical-ifs/1|
|Interface management (Breakout interface)|Creating or deleting breakout interface|010901|PATCH|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/breakout-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/breakout-ifs|
||Getting list of breakout interfaces|010902|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/breakout-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/breakout-ifs|
||Getting information of breakout interface|010903|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/breakout-ifs/{breakout_if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/breakout-ifs/1-1|
|Interface management (Internal-link interface)|Getting list of internal-link interfaces|011001|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/internal-link-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/internal-link-ifs|
||Getting information of internal-link interface|011002|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/internal-link-ifs/{internal_link_if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/internal-link-ifs/1|
|Interface management (Link aggregation interface)|Creating Link-aggregation interface|011101|POST|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/lag-ifs|
||Getting list of Link-aggregation interfaces|011102|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs|/v1/clusters/1/nodes/leafs/1/interfaces/lag-ifs|
||Getting information of Link-aggregation interface|011103|GET|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs/{lag_if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/lag-ifs/1|
||Deleting Link-aggregation interface|011105|DELETE|/v1/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs/{lag_if_id}|/v1/clusters/1/nodes/leafs/1/interfaces/lag-ifs/1|
|Interface management (Inter-cluster link interface)|Creating inter-cluster link interface|011201|POST|/v1/clusters/{cluster_id}/interfaces/cluster-link-ifs|/v1/clusters/1/points/cluster-link-ifs|
||Getting list of inter-cluster link interfaces|011202|GET|/v1/clusters/{cluster_id}/interfaces/cluster-link-ifs|/v1/clusters/1/points/cluster-link-ifs|
||Getting information of inter-cluster link interface|011203|GET|/v1/clusters/{cluster_id}/interfaces/cluster-link-ifs/｛cluster_link_if_id｝|/v1/clusters/1/points/cluster-link-ifs/1|
||Deleting inter-cluster link interface|011204|DELETE|/v1/clusters/{cluster_id}/interfaces/cluster-link-ifs/｛cluster_link_if_id｝|/v1/clusters/1/points/cluster-link-ifs/1|
|Edge point management|Creating edge-point|011401|POST|/v1/clusters/{cluster_id}/points/edge-points|/v1/clusters/1/points/edge-points|
||Getting list of edge-points|011402|GET|/v1/clusters/{cluster_id}/points/edge-points|/v1/clusters/1/points/edge-points|
||Getting infromation of edge-point|011403|GET|/v1/clusters/{cluster_id}/points/edge-points/{edge_point_id}|/v1/clusters/1/points/edge-points/1|
||Deleting edge-point|011404|DELETE|/v1/clusters/{cluster_id}/points/edge-points/{edge_point_id}|/v1/clusters/1/points/edge-points/1|

### Overlay Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Slice|Creating Slice|020101|POST|/v1/slices/{slice_type}|/v1/slices/l2vpn/1<br>/v1/slices/l3vpn/100|
||Changing Slice|020102|PUT|/v1/slices/{slice_type}/{slice_id}|/v1/slices/l2vpn/1<br>/v1/slices/l3vpn/100|
||Deleting Slice|020103|DELETE|/v1/slices/{slice_type}/{slice_id}|/v1/slices/l2vpn/1<br>/v1/slices/l3vpn/100|
||Getting information of Slice|020104|GET|/v1/slices/{slice_type}/{slice_id}|v1/slices/l2vpn/1<br>/v1/slices/l3vpn/100|
||Getting list of Slices|020105|GET|/v1/slices/{slice_type}|/v1/slices/l2vpn/1<br>/v1/slices/l3vpn/100|
|CP|Creating or deleting CP|020201|PATCH|/v1/slices/{slice_type}/{slice_id}/cps|//v1/slices/l2vpn/1/cps<br>/v1/slices/l3vpn/100/cps|
||Creating CP|020202|POST|/v1/slices/{slice_type}/{slice_id}/cps|/v1/slices/l2vpn/1/cps<br>/v1/slices/l3vpn/100/cps|
||Changing CP|020203|PUT|/v1/slices/{slice_type}/{slice_id}/cps/{cp_id}|/v1/slices/l2vpn/1/cps/1<br>/v1/slices/l3vpn/100/cps/10|
||Deleting CP|020204|DELETE|/v1/slices/{slice_type}/{slice_id}/cps/{cp_id}|/v1/slices/l2vpn/1/cps/1<br>/v1/slices/l3vpn/100/cps/10|
||Getting information of CP|020205|GET|/v1/slices/{slice_type}/{slice_id}/cps/{cp_id}|/v1/slices/l2vpn/1/cps/1<br>/v1/slices/l3vpn/100/cps/10|
||Getting lists of CP|020206|GET|/v1/slices/{slice_type}/{slice_id}/cps|/v1/slices/l2vpn/1/cps<br>/v1/slices/l3vpn/100/cps|
||Creating or deleting static route|020207|PATCH|/v1/slices/{slice_type}/{slice_id}/cps/{cp_id}|/v1/slices/l3vpn/100/cps/1|

### Traffic Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Traffic information|Getting list of IF traffic|030102|GET|/v1/traffic/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces|/v1/traffic/clusters/1/nodes/1/interfaces|
||Getting IF traffic|030103|GET|/v1/traffic/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/{if_type}/{if_id}|/v1/traffic/clusters/1/nodes/1/interfaces/physical-ifs/1|
||Getting list of CP traffic|030104|GET|/v1/traffic/slices/{slice_type}/{slice_id}/cps|/v1/traffic/slices/l3vpn/1/cps|
||Getting CP traffic|030105|GET|/v1/traffic/slices/{slice_type}/{slice_id}/cps/{cp_id}|/v1/traffic/slices/l3vpn/1/cps/1|

### Fault Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Failure detection|Getting list of failures|050101|GET|/v1/failures/failure_status|/v1/failures/failure_status|

### Priority route Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Internal-link priority|Changing internal-link interface priority|060101|PUT|/v1/priority_routes/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/internal-link-ifs/{internal_link_if_id}|/v1/priority_routes/clusters/1/nodes/leafs/1/interfaces/internal-link-ifs/1|
||Getting information of internal-link interface priority|060102|GET|/v1/priority_routes/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/internal-link-ifs/{internal_link_if_id}|/v1/priority_routes/clusters/1/nodes/leafs/1/interfaces/internal-link-ifs/1|
||Getting list of internal-link interface priority|060103|GET|/v1/priority_routes/clusters/{cluster_id}/nodes|/v1/priority_routes/clusters/1/nodes|
|Switch priority|Adding or deleting switch to preffered switch group|060201|PATCH|/v1/priority_routes/clusters/{cluster_id}/priority_node_group|/v1/priority_routes/clusters/1/priority_node_group|
||Getting information of preffered switch group|060202|GET|/v1/priority_routes/clusters/{cluster_id}/priority_node_group|/v1/priority_routes/clusters/1/priority_node_group|

### Filter Management API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Filter information|Creating or Deleting filter by physical interface|070104|PATCH|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs/{physical_if}|/v1/filter/clusters/1/nodes/leafs/1/interfaces/physical-ifs/1|
||Getting list of filter by physical interface|070105|GET|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs|/v1/filter/clusters/1/nodes/leafs/1/interfaces/physical-ifs|
||Getting information of filter by physical interface|070106|GET|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/physical-ifs/{physical_if}|/v1/filter/clusters/1/nodes/leafs/1/interfaces/physical-ifs/1|
||Creating or Deleting filter by Link-aggregation interface|070107|PACTH|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs/{lag_if_id}|/v1/filter/clusters/1/nodes/leafs/1/interfaces/lag-ifs/1|
||Getting list of filter by Link-aggregation interface|0700108|GET|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs|/v1/filter/clusters/1/nodes/leafs/1/interfaces/lag-ifs|
||Getting information of filter by Link-aggregation interface|070109|GET|/v1/filter/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}/interfaces/lag-ifs/{lag_if_id}|/v1/filter/clusters/1/nodes/leafs/1/interfaces/lag-ifs/1|

### Switch software Upgrade API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Bypass traffic to switch|Bypass traffic to switch|080101|PUT|/v1/detour/clusters/{cluster_id}/nodes/{fabric_type}/{node_id}|/v1/detour/clusters/1/nodes/spine/1|
||Getting information of switch whose traffic is diverted|080102|GET|/v1/detour/clusters/{cluster_id}/nodes|/v1/detour/clusters/1/nodes|
|Execute Switch OS upgrade|Execute Switch OS upgrade|080201|POST|/v1/upgrade_operations/|/v1/upgrade_operations/|
||Cancel Switch OS upgrade|080202|PUT|/v1/upgrade_operations/{operation_id}|/v1/operations/1234567890123|

### Controller software Upgrade API
|group|Interface(API) description|Identification ID|Method|URI|URI example|
|:----|:----|:----|:----|:----|:----|
|Software upgrade status check|Execute controller construction|090101|PUT|/v1/manage/renewal|/v1/manage/renewal|
||Controller construction exe status acquisition|090102|GET|/v1/manage/renewal|/v1/manage/renewal|
||Controller system switchover|090103|POST|/v1/manage/switchover|/v1/manage/switchover|


