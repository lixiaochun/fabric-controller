// 定数定義

// REST発行時のslice_type
MSF.Json = {
    // Leaf追加
    P010401: {
        PARM: {
            cluster_id: ""
        },

        JSON: {
            node_id: '',
            equipment_type_id: '',
            leaf_type: 'BL',
            host_name: '',
            mac_address: '',
            username: '',
            password: '',
            provisioning: '',
            vpn_type: '',
            plane: MSF.Conf.Rest.MFC.PLANE,
            snmp_community: '',
            ntp_server_address: '',
            breakout: {
                local: {
                    breakout_ifs: [
                        {
                            breakout_if_ids: ['','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        }
                    ]
                },
                opposite: [
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    }
                ]
            },
            internal_links: {
                physical_links: [
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    }
                ],
                lag_links: [
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            management_if_address: '',
            management_if_prefix: ''
        }
    },
    // Spine追加
    P010501: {
        PARM: {
            cluster_id: ""
        },

        JSON: {
            node_id: '',
            equipment_type_id: '',
            host_name: '',
            mac_address: '',
            username: '',
            password: '',
            provisioning: '',
            snmp_community: '',
            ntp_server_address: '',
            breakout: {
                local: {
                    breakout_ifs: [
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        },
                        {
                            breakout_if_ids: ['','','','','','','','','',''],
                            base_if: {
                                physical_if_id: ''
                            },
                            division_number: '',
                            breakout_if_speed: ''
                        }
                    ]
                },
                opposite: [
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        breakout_ifs: [
                            {
                                breakout_if_ids: ['','','','','','','','','',''],
                                base_if: {
                                    physical_if_id: ''
                                },
                                division_number: '',
                                breakout_if_speed: ''
                            }
                        ]
                    }
                ]
            },
            internal_links: {
                physical_links: [
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        internal_link_if: {
                            local: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            },
                            opposite: {
                                physical_if: {
                                    physical_if_id: '',
                                    physical_if_speed: ''
                                },
                                breakout_if: {
                                    breakout_if_id: ''
                                }
                            }
                        }
                    }
                ],
                lag_links: [
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    },
                    {
                        opposite_node_id: '',
                        local_traffic_threshold: null,
                        opposite_traffic_threshold: null,
                        member_ifs: [
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            },
                            {
                                local: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                },
                                opposite: {
                                    physical_if: {
                                        physical_if_id: '',
                                        physical_if_speed: ''
                                    },
                                    breakout_if: {
                                        breakout_if_id: ''
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            management_if_address: '',
            management_if_prefix: ''
        }
    },
    // breakout登録
    P010901_add: {
        PARM: {
            cluster_id: "",
            fabric_type: "",
            node_id: ""
        },

        JSON: {
            noname: [
                {
                    op: 'add',
                    path: '',
                    value: {
                        base_if: {
                            physical_if_id: ''
                        },
                        division_number: '',
                        breakout_if_speed: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        base_if: {
                            physical_if_id: ''
                        },
                        division_number: '',
                        breakout_if_speed: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        base_if: {
                            physical_if_id: ''
                        },
                        division_number: '',
                        breakout_if_speed: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        base_if: {
                            physical_if_id: ''
                        },
                        division_number: '',
                        breakout_if_speed: ''
                    }
                }
            ]
        }
    },
    // breakout削除
    P010901_delete: {
        PARM: {
            cluster_id: "",
            fabric_type: "",
            node_id: ""
        },

        JSON: {
            noname: [
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                }
            ]
        }
    },
    //CP生成_l2
    P020201_add_l2: {
        PARM: {
            slice_type: "",
            slice_id: ""
        },

        JSON: {
            noname: [
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        pair_cp_id: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        esi: '',
                        lacp_system_id: '',
                        port_mode: ''
                    }
                }
            ]
        }
    },
    //CP生成_l3
    P020201_add_l3: {
        PARM: {
            slice_type: "",
            slice_id: ""
        },

        JSON: {
            noname: [
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                },
                {
                    op: 'add',
                    path: '',
                    value: {
                        cluster_id: '',
                        edge_point_id: '',
                        vlan_id: '',
                        mtu: '',
                        qos: {
                            ingress_shaping_rate: '',
                            egress_shaping_rate: '',
                            egress_queue_menu: ''
                        },
                        ipv4_address: '',
                        ipv6_address: '',
                        ipv4_prefix: '',
                        ipv6_prefix: '',
                        bgp: {
                            role: '',
                            neighbor_as: '',
                            neighbor_ipv4_address: '',
                            neighbor_ipv6_address: ''
                        },
                        static_routes: [
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            },
                            {
                                addr_type: '',
                                address: '',
                                prefix: '',
                                next_hop: ''
                            }
                        ],
                        vrrp: {
                            group_id: '',
                            role: '',
                            virtual_ipv4_address: ''
                        },
                        traffic_threshold: ''
                    }
                }
            ]
        }
    },
    //CP削除
    P020201_delete: {
        PARM: {
            slice_type: "",
            slice_id: ""
        },

        JSON: {
            noname: [
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                },
                {
                    op: 'remove',
                    path: ''
                }
            ]
        }
    },
    // CP変更
    P020203: {
        PARM: {
            slice_type: "",
            slice_id: "",
            cp_id: ""
        },

        JSON: {
            action: MSF.Const.ActionType.Update,
            update_option: {
                qos_update_option: {
                    ingress_shaping_rate: '',
                    egress_shaping_rate: '',
                    egress_queue_menu: ''
                }
            }
            
        }
    }
};

