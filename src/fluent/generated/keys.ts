import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app-1': {
                        table: 'x_1658278_riskview_application'
                        id: '11b44a25753a44c7b6edc1092417c24a'
                    }
                    'app-2': {
                        table: 'x_1658278_riskview_application'
                        id: '2cff23e1d41246dbb5681ecd7a1185cd'
                    }
                    'app-3': {
                        table: 'x_1658278_riskview_application'
                        id: '50b0f9709a6e4c8fa13d22a0f7253dc9'
                    }
                    'app-4': {
                        table: 'x_1658278_riskview_application'
                        id: '0b1dc9cabc9c417898e117abc5a82459'
                    }
                    'app-5': {
                        table: 'x_1658278_riskview_application'
                        id: '6efc0f63baf5418c8d55fc8b772a78ff'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '862242463cca40d68f671af5c290511d'
                    }
                    'control-1': {
                        table: 'x_1658278_riskview_risk_control'
                        id: '30c60714e1ae490f9be1349a10d8b8dd'
                    }
                    'control-2': {
                        table: 'x_1658278_riskview_risk_control'
                        id: 'b66b8e92d5e14fa7ba2119fd2968d724'
                    }
                    'control-3': {
                        table: 'x_1658278_riskview_risk_control'
                        id: '85bc03cd38e54415b717b616b42ba731'
                    }
                    'control-4': {
                        table: 'x_1658278_riskview_risk_control'
                        id: '5a9994c1b80443d3a251242821583f72'
                    }
                    'control-5': {
                        table: 'x_1658278_riskview_risk_control'
                        id: 'b3a5733cc99d4085a73443e4cae716ff'
                    }
                    'control-6': {
                        table: 'x_1658278_riskview_risk_control'
                        id: '84a912749fc74e1da431c9e8befc2a11'
                    }
                    'cri-app-menu': {
                        table: 'sys_app_application'
                        id: 'c84c215da69c40fe97a377db661d3eef'
                        deleted: true
                    }
                    'cri-mod-applications': {
                        table: 'sys_app_module'
                        id: '6d6f66fed3574bf3a4dbcac62155b089'
                        deleted: true
                    }
                    'cri-mod-dashboard': {
                        table: 'sys_app_module'
                        id: '761d6519946844d7afa894f5ca0a308e'
                        deleted: true
                    }
                    'cri-mod-risk-controls': {
                        table: 'sys_app_module'
                        id: '0eddf00c3fa341f49bc0aff9fc2f9adc'
                        deleted: true
                    }
                    'cri-mod-security-incidents': {
                        table: 'sys_app_module'
                        id: '926823afb514477a9747d86f26876566'
                        deleted: true
                    }
                    'cri-mod-vulnerabilities': {
                        table: 'sys_app_module'
                        id: '728fa08f58a34b1c90738e85dbe868b0'
                        deleted: true
                    }
                    'incident-1': {
                        table: 'x_1658278_riskview_security_incident'
                        id: 'eec90bebf64049e49db49f88a772c947'
                    }
                    'incident-2': {
                        table: 'x_1658278_riskview_security_incident'
                        id: '1f466290a7764ad69abe0e08ac27f8fe'
                    }
                    'incident-3': {
                        table: 'x_1658278_riskview_security_incident'
                        id: '75f3dc86fb0c4b47a4d8cef5865d9f1d'
                    }
                    'incident-4': {
                        table: 'x_1658278_riskview_security_incident'
                        id: '66d546518def44edba337aae8e96f64b'
                    }
                    'incident-5': {
                        table: 'x_1658278_riskview_security_incident'
                        id: '0076aa436ed74be59a6edc2f3a21177d'
                    }
                    'incident-6': {
                        table: 'x_1658278_riskview_security_incident'
                        id: '1ff40ff691864551bd41db6fc4324197'
                    }
                    'module-applications': {
                        table: 'sys_app_module'
                        id: '2b7cf9e73a0245d49969a9710bf3d183'
                        deleted: false
                    }
                    'module-dashboard': {
                        table: 'sys_app_module'
                        id: 'ace8570d025748b799d16d39cd9019fc'
                        deleted: false
                    }
                    'module-risk-controls': {
                        table: 'sys_app_module'
                        id: '4345e2e051d1414bb114d478f2ee29f7'
                        deleted: false
                    }
                    'module-security-incidents': {
                        table: 'sys_app_module'
                        id: '3cc7232a30a14ad9bb1d0ffe7c16033d'
                        deleted: false
                    }
                    'module-vulnerabilities': {
                        table: 'sys_app_module'
                        id: '1fd54614108043039ca2fdff28bc6490'
                        deleted: false
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a332cb8e10f44e9dad5b7cb430be58c9'
                    }
                    'riskview-menu': {
                        table: 'sys_app_application'
                        id: '3cb3634f1cdb4ce5b2222df0514b433f'
                        deleted: false
                    }
                    'vuln-1': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '2174febdbe7245eebf095e5517ebe0cb'
                    }
                    'vuln-2': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: 'c1b2e2a82300432c8526b80383b471b8'
                    }
                    'vuln-3': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '75e525e8168b4f5d95c7a9c9a58cec92'
                    }
                    'vuln-4': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '27a1c43f7199465ab56117d9c07a069e'
                    }
                    'vuln-5': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: 'ec3ec822d5aa42d18be05c63eb443dfb'
                    }
                    'vuln-6': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '90454a87742b4d039e909c9f57d68ae1'
                    }
                    'vuln-7': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '3af2eb37757b4b36b4d486c41a60c20f'
                    }
                    'vuln-8': {
                        table: 'x_1658278_riskview_vulnerability'
                        id: '3ce0a20c5bba4574bbe566adf817e75b'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00b2951458914b90acd8e2f2738d492a'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'affected_application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '015724f72f534b3f88171d6ba1fffab6'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '063f9301403e4822b87bc7c4399fb4f0'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07570be444a94fecbfafe3b846e992a8'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '079d18457b8a42909d01e61452b446b9'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '081f6dcf7bcf4c0eb8ff872df42a084f'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'remediation_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b1eb38bb6b74073aaff8db56e276499'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0b77fb643bec40a699e1e1e6ccfc9e5c'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0dc7743c126e4fe192f6b5c334e24d78'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '111afadacbc34b879086534b91105745'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '159a53aac98a4aedad23d094f4050132'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1819478597584a60a354cdb74e177f2e'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '18a0c78fb89b4959b6171586e7b02334'
                        key: {
                            name: 'x_1658278_riskview/main.js.map'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '197e6da9bef5470a8289532c5560e687'
                        key: {
                            application_file: '278c45c480fc4b949451bf52b4cfa9cd'
                            source_artifact: '21695a2dc34d471693a306b7aee7e70b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a90ccb801d14ccfa82be8937e9ccb17'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'resolved_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '21695a2dc34d471693a306b7aee7e70b'
                        key: {
                            name: 'x_1658278_riskview_dashboard.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '243ded0a128f4cd19eb7c64d739fcc44'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'business_unit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '244a1b64abcc4c2da4011b0d47ebffab'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2559a2c831fa4a0ead0c5f5c7dc6529b'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                            value: 'effective'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25b736e0caaf4578aa0fe97ca647f395'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'affected_application'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26b34bd1fde24ee088d7c9673bc1a845'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '278c45c480fc4b949451bf52b4cfa9cd'
                        key: {
                            name: 'x_1658278_riskview/main'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '290355254cf34b9199819e257fb7dbf3'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c39dc90e71847b08333a9f1fce5c3b3'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2efef8d1537843e98a78c12a7331a7b6'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32ea027bc6e34f8cbf96712be19b0917'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3415b85bf5154cb98399151958f39996'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35323f05ea7742b090cf1891cb00ee9d'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '354f2d667dd94b209c0d522ca2f0c47a'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36c55799c1624479bb51a127be84f81c'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37196978523b443faa43de212c99186c'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38d6edd4ab9742c08d03b208f4099cba'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3cc141123d38418a90f8921cb370eb31'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3da7dc953fdd45c2810b6883e96f03e9'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3f1c451ba1bd47e0a28f6307e8dee440'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ffd56fdc6f34dd0a40d5b60124f5637'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                            value: 'implemented'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4028504cfdf146c39d37198fd0d8588c'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43f2b55671e340489e93156bd82c45d0'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'reported_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4402bf0f14224969be39949485fa2ae1'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45a2e8722cb24b6b8a594c009638e954'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '46cded2a56ab44078825a52bc2ecf22c'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48aef022026c4c77aeb476bacbbdd067'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c7f1cbfac5d455d8d4de7a9e916b856'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4f513c43e30a466f8c6889d08cf67e1f'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f9a0528618147feb962944026937d76'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '560e81c804cc4358b94bd4b8d5d2e148'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                            value: 'mitigated'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5657df3cd9984aa8a54fd6f2506a13bd'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'related_vulnerability'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57663f12e4064e868fe2a4866a436784'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5855bdc51e194560a5dfa2715f78bab7'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5b04568af0894377a1559b48ebee0630'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60e9e48333bc4934bdd78431c5730d91'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60f4a369eafe4b7e9dd98f1e3e63d0a4'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'discovered_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '65e6c01b262e4e1e865e44281d64e206'
                        key: {
                            name: 'x_1658278_riskview_application'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '66ae7385510c456eb050772866e51d82'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                            value: 'ineffective'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '679939bf40314f56bf0c2a6bfd0f859d'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                            value: 'compensating'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d84204c412c4ef1925355714159443d'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71085f746c5642f6b4fb45c2d71e8b74'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '71fb2c5d76ad42f4a902eaf7186bbd90'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                            value: 'partially_effective'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75a92acf9bb141c6a282a671832226e4'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75ee40d343a94930a804e3dcde5a3bdb'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'reported_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '773241eb6c9740d1acfb1cdef4d004d5'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            value: 'investigating'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '792cd71839fb4c77abefd6e74954feac'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a4d3b2dc5f843d9bf744b6d3f8b5ebe'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ad66efadea4478791bcb38252f34377'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7c2dcd0941dc45adb8176ab2cc5ac285'
                        key: {
                            application_file: '18a0c78fb89b4959b6171586e7b02334'
                            source_artifact: '21695a2dc34d471693a306b7aee7e70b'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '854e942243394bb6b2b749e289d451c4'
                        key: {
                            application_file: '9fd5c256ef9541f3b565c353fdac6087'
                            source_artifact: '21695a2dc34d471693a306b7aee7e70b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8724ce8777224371b08c6cf48901ee7e'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8dd2a646002b4fbb822012a49c9a0174'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f17b1519a00486aaa160175b7606feb'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '92bf5f9537cf403986050eb3824bad67'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '93dddd3dbbe34243a0f9b6a07d3d0542'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9768c331996444e08b874b3b3c59576f'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '97ef3327651e4ef8abc8af1b27c9ea5f'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d8e0c401c614f04b1ffce5ad6831fd0'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9efc99fb04d04286a43a68e0184f5962'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                            value: 'preventive'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '9fd5c256ef9541f3b565c353fdac6087'
                        key: {
                            endpoint: 'x_1658278_riskview_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7f03be4501b4c8e9656c79875990575'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'owner'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a7f37699ebf74c45a9fceb286958abed'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a9445ad4d2584dba8aaaa96a0ddabf78'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'related_vulnerability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae685c474468473592b776f829e3629e'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aed88fd92bd0487594dfc0c9d3b389ac'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2dba1d7ce5c483697ddde4ca6fe2dfb'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4904c9ee5b54ebfbf087f97f130e318'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'application'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b7174fd948b545c4b79ddb13f41165a0'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9ff706d0d2d4c95af1087c79c53ea6d'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'baefc808cbf54d0da79b96f4307d56b2'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc4548f4a84448d4845be93d610ed6c4'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'resolved_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdab0c0c0cf4422db04b13be7bb8c1a0'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdcfe64873634cb7b73ebb705317ce37'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1671e0e1e08408fab2ad9585c0e176b'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'business_unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c411616f1819481ba2c0e26abf8c3bcb'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c5b3a8168f3b4e5e8fe6107927f83c4a'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'remediation_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c92c39956ccb4fcc9670a282cc64ae86'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'cvss_score'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c9aa31e1deee424c974977631b51180e'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb236ccbc54f4f3a8ea6dbef4778326d'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cce41efee7bf408db130f664979ba63d'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                            value: 'detective'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccfcfbe31a944ed893d66a68c7e0397a'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'cvss_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd0eb0edc310f4381b307498b7241cb4c'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd21d9d1e78a04cf6b47ba69c8d1cf1b4'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd22d867024bb4e01a05dcf1b1025f9c6'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2f2b9251ee84b5cb915baa798e93b27'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'discovered_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd4ab9d53e4c14ebeb41932db8bde56ae'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4c46de6382447b2bf1bdef8250c9666'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'control_type'
                            value: 'corrective'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd96e2e75de774edbaad8bdfdeb68eae2'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'criticality'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd99cc4065b1642f78cfe60c3949a3a34'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da68b24c1a6845afa3d530890f4deb56'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de1b7c118e4a422fb4537cb101f85fd1'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'affected_application'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e30bc76927f642a5a98bc380164eaeea'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e3a1d0ae69d54feeb878011e9de20033'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                            value: 'not_started'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4898dfc53df41dca3ffe9be460b5c99'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'affected_application'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e65aa07c5b8246b68a85ef7173e96e9c'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e79b0bc9aa0643348b93cd78d6bab573'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                            value: 'planned'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7b5798ccf6e4296a69bce76d0c42f15'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                            value: 'decommissioned'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea25f4a3609e45ca96b68c45b59e6ef0'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f013ea243d8e4d0bbd9756bd4f355af4'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'effectiveness'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f33a0178648b4280b124d97642ba933e'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                            element: 'status'
                            value: 'contained'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f58fc7b780544a1db01d5f6dd573ff11'
                        key: {
                            name: 'x_1658278_riskview_vulnerability'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f6a6eb64210f442ebabedbb34b7312ab'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9a8d7615f8d4147a79e37dbc5d141eb'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'implementation_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fab8fe67dcdf405282aae01594e9c13d'
                        key: {
                            name: 'x_1658278_riskview_security_incident'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fad46f645ea941c5ac5183b15ca5ee83'
                        key: {
                            name: 'x_1658278_riskview_risk_control'
                            element: 'description'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fd2cbed7cdea4ece916cdf366ef9a830'
                        key: {
                            name: 'x_1658278_riskview_application'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fee69d1b594340c49137eb7a65618b28'
                        key: {
                            name: 'x_1658278_riskview_application'
                            element: 'name'
                        }
                    },
                ]
            }
        }
    }
}
