define(['underscore'], function (_) {
	
	this.VRouterScatterChartMockdata = {
		"data": [
		    {
		      "name": "b1s10",
		      "value": {
		        "VrouterStatsAgent": {
		          "cpu_info": {
		            "sys_mem_info": {
		              "total": 32789716,
		              "buffers": 204800,
		              "free": 31073916,
		              "used": 1715800
		            },
		            "meminfo": {
		              "virt": 399976,
		              "peakvirt": 432236
		            },
		            "cpu_share": 0.0583333,
		            "num_cpu": 4,
		            "cpuload": {
		              "fifteen_min_avg": 0.0125,
		              "five_min_avg": 0.01,
		              "one_min_avg": 0.005
		            }
		          },
		          "cpu_share": [
		            {
		              "history-10": {
		                "{\"ts\":1420526771980803}": 0.0555556,
		                "{\"ts\":1420526051973566}": 0.0569444,
		                "{\"ts\":1420526951982741}": 0.0791667,
		                "{\"ts\":1420527491988650}": 0.0847222,
		                "{\"ts\":1420526591978910}": 0.0527778,
		                "{\"ts\":1420526411977062}": 0.0833333,
		                "{\"ts\":1420526231975442}": 0.0555556,
		                "{\"ts\":1420527311986685}": 0.0555556,
		                "{\"ts\":1420527131984752}": 0.0833287,
		                "{\"ts\":1420527671990631}": 0.0583333
		              }
		            },
		            {
		              "s-3600-topvals": {
		                "2015 Jan 06 07:01:11.990": 0.0583333
		              }
		            },
		            {
		              "s-3600-summary": {
		                "sum": "0.0583333",
		                "b1": "1"
		              }
		            }
		          ]
		        },
		        "NodeStatus": {
		          "process_status": [
		            {
		              "instance_id": "0",
		              "module_id": "VRouterAgent",
		              "state": "Functional",
		              "description": null,
		              "connection_infos": [
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5269"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "control-node:10.84.25.27",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.29:5269"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "control-node:10.84.25.29",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:53"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "dns-server:10.84.25.27",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.29:53"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "dns-server:10.84.25.29",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:8086"
		                  ],
		                  "status": "Up",
		                  "type": "Collector",
		                  "name": null,
		                  "description": "Established"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "Collector",
		                  "description": "SubscribeResponse"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "dns-server",
		                  "description": "SubscribeResponse"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "xmpp-server",
		                  "description": "SubscribeResponse"
		                }
		              ]
		            }
		          ],
		          "process_info": [
		            {
		              "process_name": "contrail-vrouter-agent",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733508925324",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            },
		            {
		              "process_name": "contrail-vrouter-nodemgr",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733506924047",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            },
		            {
		              "process_name": "openstack-nova-compute",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733501160465",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            }
		          ]
		        },
		        "VrouterAgent": {
		          "xmpp_peer_list": [
		            {
		              "status": true,
		              "ip": "10.84.25.29",
		              "primary": true,
		              "setup_time": 1417733506733793
		            },
		            {
		              "status": true,
		              "ip": "10.84.25.27",
		              "primary": false,
		              "setup_time": 1417735023419099
		            }
		          ],
		          "build_info": "{\"build-info\":[{\"build-time\":\"2014-11-21 00:51:32.593969\",\"build-hostname\":\"unknown\",\"build-git-ver\":\"3591a0f\",\"build-user\":\"mganley\",\"build-version\":\"1.21\",\"build-id\":\"1.21-74\",\"build-number\":\"74\"}]}",
		          "self_ip_list": [
		            "10.84.21.10"
		          ],
		          "control_ip": "10.84.21.10"
		        },
		        "ConfigData": {
		          "virtual-router": {
		            "fq_name": [
		              "default-global-system-config",
		              "b1s10"
		            ],
		            "uuid": "c5748e28-f169-4625-a3f7-a6934b19deae",
		            "parent_uuid": "5e060c66-e457-4beb-923c-d66458fea406",
		            "parent_href": "http://10.84.25.28:9100/global-system-config/5e060c66-e457-4beb-923c-d66458fea406",
		            "parent_type": "global-system-config",
		            "href": "http://10.84.25.28:9100/virtual-router/c5748e28-f169-4625-a3f7-a6934b19deae",
		            "id_perms": {
		              "enable": true,
		              "uuid": {
		                "uuid_mslong": 14228153429270284000,
		                "uuid_lslong": 11815095298980176000
		              },
		              "created": "2014-12-04T22:50:35.090214",
		              "description": null,
		              "user_visible": true,
		              "last_modified": "2014-12-04T22:50:35.090214",
		              "permissions": {
		                "owner": "cloud-admin",
		                "owner_access": 7,
		                "other_access": 7,
		                "group": "admin",
		                "group_access": 7
		              }
		            },
		            "display_name": "b1s10",
		            "virtual_router_ip_address": "10.84.21.10",
		            "name": "b1s10"
		          }
		        },
		        "VRouterAgent": {}
		      },
		      "nodeStatus": "Up"
		    },
		    {
		      "name": "b1s11",
		      "value": {
		        "NodeStatus": {
		          "process_info": [
		            {
		              "process_name": "contrail-vrouter-agent",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733499964338",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            },
		            {
		              "process_name": "contrail-vrouter-nodemgr",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733497962449",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            },
		            {
		              "process_name": "openstack-nova-compute",
		              "process_state": "PROCESS_STATE_RUNNING",
		              "last_stop_time": null,
		              "start_count": 1,
		              "core_file_list": [],
		              "last_start_time": "1417733491843691",
		              "stop_count": 0,
		              "last_exit_time": null,
		              "exit_count": 0
		            }
		          ],
		          "process_status": [
		            {
		              "instance_id": "0",
		              "module_id": "VRouterAgent",
		              "state": "Functional",
		              "description": null,
		              "connection_infos": [
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5269"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "control-node:10.84.25.27",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.29:5269"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "control-node:10.84.25.29",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:53"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "dns-server:10.84.25.27",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.29:53"
		                  ],
		                  "status": "Up",
		                  "type": "XMPP",
		                  "name": "dns-server:10.84.25.29",
		                  "description": "OpenSent"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:8086"
		                  ],
		                  "status": "Up",
		                  "type": "Collector",
		                  "name": null,
		                  "description": "Established"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "Collector",
		                  "description": "SubscribeResponse"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "dns-server",
		                  "description": "SubscribeResponse"
		                },
		                {
		                  "server_addrs": [
		                    "10.84.25.27:5998"
		                  ],
		                  "status": "Up",
		                  "type": "Discovery",
		                  "name": "xmpp-server",
		                  "description": "SubscribeResponse"
		                }
		              ]
		            }
		          ]
		        },
		        "VrouterStatsAgent": {
		          "cpu_info": {
		            "sys_mem_info": {
		              "total": 32789716,
		              "buffers": 204812,
		              "free": 31075472,
		              "used": 1714244
		            },
		            "meminfo": {
		              "virt": 399976,
		              "peakvirt": 432236
		            },
		            "cpu_share": 0.101389,
		            "num_cpu": 4,
		            "cpuload": {
		              "fifteen_min_avg": 0.0125,
		              "five_min_avg": 0.01,
		              "one_min_avg": 0.0025
		            }
		          },
		          "cpu_share": [
		            {
		              "history-10": {
		                "{\"ts\":1420527122388953}": 0.104167,
		                "{\"ts\":1420526402381709}": 0.0805556,
		                "{\"ts\":1420527662394390}": 0.101389,
		                "{\"ts\":1420526762385343}": 0.0763889,
		                "{\"ts\":1420526042377988}": 0.0819444,
		                "{\"ts\":1420526942387214}": 0.104167,
		                "{\"ts\":1420526582383603}": 0.0791667,
		                "{\"ts\":1420526222379936}": 0.137492,
		                "{\"ts\":1420527482392580}": 0.101383,
		                "{\"ts\":1420527302390779}": 0.075
		              }
		            },
		            {
		              "s-3600-topvals": {
		                "2015 Jan 06 07:01:02.394": 0.101389
		              }
		            },
		            {
		              "s-3600-summary": {
		                "sum": "0.101389",
		                "b1": "1"
		              }
		            }
		          ]
		        },
		        "VrouterAgent": {
		          "xmpp_peer_list": [
		            {
		              "status": true,
		              "ip": "10.84.25.29",
		              "primary": true,
		              "setup_time": 1417733497358053
		            },
		            {
		              "status": true,
		              "ip": "10.84.25.27",
		              "primary": false,
		              "setup_time": 1417734229009326
		            }
		          ],
		          "build_info": "{\"build-info\":[{\"build-time\":\"2014-11-21 00:51:32.593969\",\"build-hostname\":\"unknown\",\"build-git-ver\":\"3591a0f\",\"build-user\":\"mganley\",\"build-version\":\"1.21\",\"build-id\":\"1.21-74\",\"build-number\":\"74\"}]}",
		          "self_ip_list": [
		            "10.84.21.11"
		          ],
		          "control_ip": "10.84.21.11"
		        },
		        "ConfigData": {
		          "virtual-router": {
		            "fq_name": [
		              "default-global-system-config",
		              "b1s11"
		            ],
		            "uuid": "c0793312-c32f-4ebd-b0a0-b38244270dab",
		            "parent_uuid": "5e060c66-e457-4beb-923c-d66458fea406",
		            "parent_href": "http://10.84.25.29:9100/global-system-config/5e060c66-e457-4beb-923c-d66458fea406",
		            "parent_type": "global-system-config",
		            "href": "http://10.84.25.29:9100/virtual-router/c0793312-c32f-4ebd-b0a0-b38244270dab",
		            "id_perms": {
		              "enable": true,
		              "uuid": {
		                "uuid_mslong": 13869172683141239000,
		                "uuid_lslong": 12727369919019553000
		              },
		              "created": "2014-12-04T22:50:26.107542",
		              "description": null,
		              "user_visible": true,
		              "last_modified": "2014-12-04T22:50:26.107542",
		              "permissions": {
		                "owner": "cloud-admin",
		                "owner_access": 7,
		                "other_access": 7,
		                "group": "admin",
		                "group_access": 7
		              }
		            },
		            "display_name": "b1s11",
		            "virtual_router_ip_address": "10.84.21.11",
		            "name": "b1s11"
		          }
		        },
		        "VRouterAgent": {}
		      },
		      "nodeStatus": "Up"
		    }
		]
	};
	
	return {
		VRouterScatterChartMockdata :  VRouterScatterChartMockdata
	};
});