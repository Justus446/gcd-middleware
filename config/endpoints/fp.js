let DHIS_BASE_API_URL = process.env.REACT_APP_DHIS_BASE_API_URL;
let APP_BASE_URL =
  process.env.REACT_APP_APP_BASE_URL || 'http://41.89.94.99:3000';
let fp = [
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Levels list',
	  id: 'all__levels_list',
	  url: `${DHIS_BASE_API_URL}/organisationUnitLevels.json?paging=false&fields=name,level`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Organisation unit details',
	  id: 'all__org_unit_details',
	  local_url: `${APP_BASE_URL}/api/common/organisationUnit`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Counties list',
	  id: 'all__counties_list',
	  local_url: `${APP_BASE_URL}/api/common/counties`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?filter=level:eq:2&fields=id,name,level&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Subcounties list',
	  id: 'all__subcounties_list',
	  local_url: `${APP_BASE_URL}/api/common/subcounties`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?filter=level:eq:3&fields=id,name,level,parent&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Wards list',
	  id: 'all__wards_list',
	  local_url: `${APP_BASE_URL}/api/common/wards`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?filter=level:eq:4&fields=id,name,level,parent&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Facilities list',
	  id: 'all__facilities_list',
	  local_url: `${APP_BASE_URL}/api/common/facilities`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?filter=level:eq:5&fields=id,name,level,parent&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'CUs list',
	  id: 'all__cus_list',
	  local_url: `${APP_BASE_URL}/api/common/community-units`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?filter=level:eq:6&fields=id,name,level,parent&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'MFL codes',
	  id: 'all__mfl_codes',
	  local_url: `${APP_BASE_URL}/api/common/mfl-codes`,
	  url: `${DHIS_BASE_API_URL}/organisationUnits.json?fields=id,code&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'User details',
	  id: 'all__user_details',
	  local_url: `${APP_BASE_URL}/api/common/defaults`,
	  url: `${DHIS_BASE_API_URL}/me.json`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Malaria Commodities',
	  id: 'all__commodities',
	  local_url: `${APP_BASE_URL}/api/common/commodities`,
	  url: `${DHIS_BASE_API_URL}/dataSets/g3RQRuh8ikd.json?fields=dataSetElements[dataElement[id,name]]`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Facilities assigned form',
	  id: 'all__mcf_orgunits',
	  local_url: `${APP_BASE_URL}/api/common/mcf-facilities`,
	  url: `${DHIS_BASE_API_URL}/dataSets.json?fields=id,name,organisationUnits[id,name,code,level]&filter=id:ilike:g3RQRuh8ikd&paging=false`,
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Global',
	  level: 'All',
	  name: 'Expected Reports',
	  id: 'all__expected_reports',
	  local_url: `${APP_BASE_URL}/api/common/expected-reports`,
	  url: `${DHIS_BASE_API_URL}/analytics.json?dimension=dx:g3RQRuh8ikd.EXPECTED_REPORTS`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Dashboard',
	  level: 'All',
	  name: 'Stock Status',
	  id: 'all__stock_status',
	  local_url: `${APP_BASE_URL}/api/dashboard/stockstatus`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:vBtxrMus3Qf;H7CkBPdObiC;KWavo9MWGBT;E5ehG5Qmk5Y;xvxsOVLQWqh;HP1u3rO8rM7;ZbLcoTanQnP;Zz6gJ3FAKjr;z5rdAD1Z9rH;DWMK6mvF9LH;VHtSG6l59rb;hH9gmEmEhH4.i9dqmLZr7fd;dl4JcBnxu0X.i9dqmLZr7fd;qaBPR9wbWku.i9dqmLZr7fd;bGGT0F7iRxt.i9dqmLZr7fd;J6qnTev1LXw.i9dqmLZr7fd;tfPZ6sGgh4q.i9dqmLZr7fd;XgJfT71Unkn.i9dqmLZr7fd;MsS41X1GEFr.i9dqmLZr7fd;AR7RhdC90IV.i9dqmLZr7fd;AVDzuypqGt9.i9dqmLZr7fd;QKvDccYJ18W.i9dqmLZr7fd;m1U1MJZoK9Q.QvctQfKAQn3;uiU7PDbqn74.QvctQfKAQn3;nGR47qCgOfQ.QvctQfKAQn3;CxoGtEwF44m.QvctQfKAQn3;CH3syaQ3wJ3.QvctQfKAQn3;ri9reJBhA2Y.QvctQfKAQn3;QZpWVTFZEE7.QvctQfKAQn3;WLS1R40DxXt.QvctQfKAQn3;RXJmB0afFhv.QvctQfKAQn3;YSjqRqkkQdi.QvctQfKAQn3;FyLIhJocwlR.QvctQfKAQn3`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: '',
	  Filters: '',
	  Notes: ''
	},
	{
	  page: 'Dashboard',
	  level: 'All',
	  name: 'MOS by commodity',
	  id: 'all__mos_by_commodity',
	  local_url: `${APP_BASE_URL}/api/dashboard/mos-by-commodity`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:vBtxrMus3Qf;H7CkBPdObiC;KWavo9MWGBT;HP1u3rO8rM7;E5ehG5Qmk5Y;ZbLcoTanQnP;Zz6gJ3FAKjr;xvxsOVLQWqh;z5rdAD1Z9rH;DWMK6mvF9LH;VHtSG6l59rb`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: '',
	  Notes: ''
	},
	{
	  page: 'Dashboard',
	  level: 'All',
	  name: 'Facilities stock status (count)',
	  id: 'all__facilities_stock_status',
	  local_url: `${APP_BASE_URL}/api/dashboard/facility-stock-status`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:vBtxrMus3Qf;H7CkBPdObiC;KWavo9MWGBT;HP1u3rO8rM7;E5ehG5Qmk5Y;ZbLcoTanQnP;Zz6gJ3FAKjr;xvxsOVLQWqh;z5rdAD1Z9rH;DWMK6mvF9LH;VHtSG6l59rb`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Filters: '',
	  Notes: ''
	},
  
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Combined Oral Contraceptive Pills',
	  id: 'county__combined_oral_contraceptive_pills',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/hH9gmEmEhH4`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;m1U1MJZoK9Q.QvctQfKAQn3;hH9gmEmEhH4.i9dqmLZr7fd;vBtxrMus3Qf`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Progestin Only Pills',
	  id: 'county__progestin_only_pills',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/dl4JcBnxu0X`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;uiU7PDbqn74.QvctQfKAQn3;dl4JcBnxu0X.i9dqmLZr7fd;H7CkBPdObiC`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Emergency Contraceptive Pills',
	  id: 'county__emergency_contraceptive_pills',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/qaBPR9wbWku`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;nGR47qCgOfQ.QvctQfKAQn3;qaBPR9wbWku.i9dqmLZr7fd;KWavo9MWGBT`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Cycle Beads',
	  id: 'county__cycle_beads',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/bGGT0F7iRxt`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;CxoGtEwF44m.QvctQfKAQn3;bGGT0F7iRxt.i9dqmLZr7fd;E5ehG5Qmk5Y`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Injectables',
	  id: 'county__injectables',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/J6qnTev1LXw`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;CH3syaQ3wJ3.QvctQfKAQn3;J6qnTev1LXw.i9dqmLZr7fd;xvxsOVLQWqh`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'IUCDs',
	  id: 'county__iucds',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/tfPZ6sGgh4q`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;ri9reJBhA2Y.QvctQfKAQn3;tfPZ6sGgh4q.i9dqmLZr7fd;HP1u3rO8rM7`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Implants (1-Rod)',
	  id: 'county__implants_1_rod',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/XgJfT71Unkn`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;QZpWVTFZEE7.QvctQfKAQn3;XgJfT71Unkn.i9dqmLZr7fd;ZbLcoTanQnP`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Implants (2-Rod)',
	  id: 'county__implants_2_rod',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/MsS41X1GEFr`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;WLS1R40DxXt.QvctQfKAQn3;MsS41X1GEFr.i9dqmLZr7fd;Zz6gJ3FAKjr`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Female Condoms',
	  id: 'county__female_condoms',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/AR7RhdC90IV`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;RXJmB0afFhv.QvctQfKAQn3;AR7RhdC90IV.i9dqmLZr7fd;z5rdAD1Z9rH`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Male Condoms',
	  id: 'county__male_condoms',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/AVDzuypqGt9`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;YSjqRqkkQdi.QvctQfKAQn3;AVDzuypqGt9.i9dqmLZr7fd;DWMK6mvF9LH`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status',
	  level: 'County',
	  name: 'Others',
	  id: 'county__others',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/one/QKvDccYJ18W`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;FyLIhJocwlR.QvctQfKAQn3;QKvDccYJ18W.i9dqmLZr7fd;VHtSG6l59rb`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Stock status all',
	  level: 'County',
	  name: 'All commodities',
	  id: 'county__all_commodities',
	  local_url: `${APP_BASE_URL}/api/county/stockstatus/all`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:m1U1MJZoK9Q.QvctQfKAQn3;uiU7PDbqn74.QvctQfKAQn3;nGR47qCgOfQ.QvctQfKAQn3;CxoGtEwF44m.QvctQfKAQn3;CH3syaQ3wJ3.QvctQfKAQn3;ri9reJBhA2Y.QvctQfKAQn3;QZpWVTFZEE7.QvctQfKAQn3;WLS1R40DxXt.QvctQfKAQn3;RXJmB0afFhv.QvctQfKAQn3;YSjqRqkkQdi.QvctQfKAQn3;FyLIhJocwlR.QvctQfKAQn3;hH9gmEmEhH4.i9dqmLZr7fd;dl4JcBnxu0X.i9dqmLZr7fd;qaBPR9wbWku.i9dqmLZr7fd;bGGT0F7iRxt.i9dqmLZr7fd;J6qnTev1LXw.i9dqmLZr7fd;tfPZ6sGgh4q.i9dqmLZr7fd;XgJfT71Unkn.i9dqmLZr7fd;MsS41X1GEFr.i9dqmLZr7fd;AR7RhdC90IV.i9dqmLZr7fd;AVDzuypqGt9.i9dqmLZr7fd;QKvDccYJ18W.i9dqmLZr7fd;vBtxrMus3Qf;H7CkBPdObiC;KWavo9MWGBT;E5ehG5Qmk5Y;xvxsOVLQWqh;HP1u3rO8rM7;ZbLcoTanQnP;Zz6gJ3FAKjr;z5rdAD1Z9rH;DWMK6mvF9LH;VHtSG6l59rb`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'hfVjCurKxh2',
	  default_org_unit_level: '',
	  Notes: ''
	},
	{
	  page: 'Reporting Rate',
	  level: 'County',
	  name: 'Reporting Rate Trend',
	  id: 'county__reporting_rate_trend',
	  local_url: `${APP_BASE_URL}/api/county/reportingrate/trend`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;g3RQRuh8ikd.REPORTING_RATE_ON_TIME`,
	  default_period: 'LAST_12_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 1,
	  Notes: ''
	},
	{
	  page: 'Reporting Rate',
	  level: 'County',
	  name: 'Reporting Rate Trend (latest subcounty)',
	  id: 'county__latest_reporting_rate_subcounty',
	  local_url: `${APP_BASE_URL}/api/county/reportingrate/latesttrend`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 3,
	  Notes: ''
	},
  
	{
	  page: 'Reporting Rate',
	  level: 'County',
	  name: 'Facility Reporting Rate',
	  id: 'county__facility_reporting_rate',
	  local_url: `${APP_BASE_URL}/api/county/reportingrate/facility`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.ACTUAL_REPORTS;g3RQRuh8ikd.EXPECTED_REPORTS`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'vvOK1BxTbet',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Reporting Rate',
	  level: 'County',
	  name: 'Subcounty Reporting Rate',
	  id: 'county__subcounty_reporting_rate',
	  local_url: `${APP_BASE_URL}/api/county/reportingrate/subcounty`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.ACTUAL_REPORTS;g3RQRuh8ikd.EXPECTED_REPORTS`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'vvOK1BxTbet',
	  default_org_unit_level: 4,
	  Notes: ''
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Combined Oral Contraceptive Pills",
	  id: "county__dq_concordance_cocp",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/hH9gmEmEhH4`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AVDzhH9gmEmEhH4uypqGt9.hH9gmEmEhH4;AVDzuypqGt9.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Progestin Only Pills",
	  id: "county__dq_concordance_pop",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/dl4JcBnxu0X`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:dl4JcBnxu0X.Cs84jrj1YFp;dl4JcBnxu0X.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Emergency Contraceptive Pills",
	  id: "county__dq_concordance_ecp",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/qaBPR9wbWku`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:qaBPR9wbWku.Cs84jrj1YFp;qaBPR9wbWku.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Cycle Beads",
	  id: "county__dq_concordance_cb",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/bGGT0F7iRxt`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:bGGT0F7iRxt.Cs84jrj1YFp;bGGT0F7iRxt.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Injectables",
	  id: "county__dq_concordance_inj",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/J6qnTev1LXw`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:J6qnTev1LXw.Cs84jrj1YFp;J6qnTev1LXw.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "IUCDs",
	  id: "county__dq_concordance_iucd",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/tfPZ6sGgh4q`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:tfPZ6sGgh4q.Cs84jrj1YFp;tfPZ6sGgh4q.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Implants (1 rod)",
	  id: "county__dq_concordance_i1r",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/XgJfT71Unkn`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:XgJfT71Unkn.Cs84jrj1YFp;XgJfT71Unkn.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Implants (2 rod)",
	  id: "county__dq_concordance_i2r",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/MsS41X1GEFr`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:MsS41X1GEFr.Cs84jrj1YFp;MsS41X1GEFr.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
		page: "Data Quality: Concordance",
		level: "County",
		name: "Female Condoms",
		id: "county__dq_concordance_fcd",
		local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/AR7RhdC90IV`,
		url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AR7RhdC90IV.Cs84jrj1YFp;AR7RhdC90IV.i9dqmLZr7fd`,
		default_period: "LAST_MONTH",
		default_org_unit: "HfVjCurKxh2",
		default_level: 5,
		notes: ""
	},
	{
		page: "Data Quality: Concordance",
		level: "County",
		name: "Male Condoms",
		id: "county__dq_concordance_mcd",
		local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/AVDzuypqGt9`,
		url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AVDzuypqGt9.Cs84jrj1YFp;AVDzuypqGt9.i9dqmLZr7fd`,
		default_period: "LAST_MONTH",
		default_org_unit: "HfVjCurKxh2",
		default_level: 5,
		notes: ""
	},
	{
	  page: "Data Quality: Concordance",
	  level: "County",
	  name: "Others",
	  id: "county__dq_concordance_other",
	  local_url: `${APP_BASE_URL}/api/county/dataquality/concordance/QKvDccYJ18W`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:QKvDccYJ18W.Cs84jrj1YFp;QKvDccYJ18W.i9dqmLZr7fd`,
	  default_period: "LAST_MONTH",
	  default_org_unit: "HfVjCurKxh2",
	  default_level: 5,
	  notes: ""
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Combined Oral Contraceptive Pills',
	  id: 'county__dq_consistency_cocp',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/hH9gmEmEhH4`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:hH9gmEmEhH4.Cs84jrj1YFp;hH9gmEmEhH4.VW51Ep3auXR;hH9gmEmEhH4.JQ7EF0X1LIJ;hH9gmEmEhH4.to0Pssxkq4S;hH9gmEmEhH4.AO6xfSyHuHU;hH9gmEmEhH4.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Progestin Only Pills',
	  id: 'county__dq_consistency_pop',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/dl4JcBnxu0X`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:dl4JcBnxu0X.Cs84jrj1YFp;dl4JcBnxu0X.VW51Ep3auXR;dl4JcBnxu0X.JQ7EF0X1LIJ;dl4JcBnxu0X.to0Pssxkq4S;dl4JcBnxu0X.AO6xfSyHuHU;dl4JcBnxu0X.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Emergency Contraceptive Pills',
	  id: 'county__dq_consistency_ecp',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/qaBPR9wbWku`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:qaBPR9wbWku.Cs84jrj1YFp;qaBPR9wbWku.VW51Ep3auXR;qaBPR9wbWku.JQ7EF0X1LIJ;qaBPR9wbWku.to0Pssxkq4S;qaBPR9wbWku.AO6xfSyHuHU;qaBPR9wbWku.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Cycle Beads',
	  id: 'county__dq_consistency_cb',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/bGGT0F7iRxt`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:bGGT0F7iRxt.Cs84jrj1YFp;bGGT0F7iRxt.VW51Ep3auXR;bGGT0F7iRxt.JQ7EF0X1LIJ;bGGT0F7iRxt.to0Pssxkq4S;bGGT0F7iRxt.AO6xfSyHuHU;bGGT0F7iRxt.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Injectables',
	  id: 'county__dq_consistency_inj',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/J6qnTev1LXw`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:J6qnTev1LXw.Cs84jrj1YFp;J6qnTev1LXw.VW51Ep3auXR;J6qnTev1LXw.JQ7EF0X1LIJ;J6qnTev1LXw.to0Pssxkq4S;J6qnTev1LXw.AO6xfSyHuHU;J6qnTev1LXw.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'IUCDs',
	  id: 'county__dq_consistency_iucd',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/tfPZ6sGgh4q`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:tfPZ6sGgh4q.Cs84jrj1YFp;tfPZ6sGgh4q.VW51Ep3auXR;tfPZ6sGgh4q.JQ7EF0X1LIJ;tfPZ6sGgh4q.to0Pssxkq4S;tfPZ6sGgh4q.AO6xfSyHuHU;tfPZ6sGgh4q.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Implants (1 rod)',
	  id: 'county__dq_consistency_i1r',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/XgJfT71Unkn`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:XgJfT71Unkn.Cs84jrj1YFp;XgJfT71Unkn.VW51Ep3auXR;XgJfT71Unkn.JQ7EF0X1LIJ;XgJfT71Unkn.to0Pssxkq4S;XgJfT71Unkn.AO6xfSyHuHU;XgJfT71Unkn.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Implants (2 rod)',
	  id: 'county__dq_consistency_i2r',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/MsS41X1GEFr`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:MsS41X1GEFr.Cs84jrj1YFp;MsS41X1GEFr.VW51Ep3auXR;MsS41X1GEFr.JQ7EF0X1LIJ;MsS41X1GEFr.to0Pssxkq4S;MsS41X1GEFr.AO6xfSyHuHU;MsS41X1GEFr.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Female Condoms',
	  id: 'county__dq_consistency_fcd',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/AR7RhdC90IV`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AR7RhdC90IV.Cs84jrj1YFp;AR7RhdC90IV.VW51Ep3auXR;AR7RhdC90IV.JQ7EF0X1LIJ;AR7RhdC90IV.to0Pssxkq4S;AR7RhdC90IV.AO6xfSyHuHU;AR7RhdC90IV.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Male Condoms',
	  id: 'county__dq_consistency_mcd',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/AVDzuypqGt9`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AVDzuypqGt9.Cs84jrj1YFp;AVDzuypqGt9.VW51Ep3auXR;AVDzuypqGt9.JQ7EF0X1LIJ;AVDzuypqGt9.to0Pssxkq4S;AVDzuypqGt9.AO6xfSyHuHU;AVDzuypqGt9.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Data Quality: Consistency',
	  level: 'County',
	  name: 'Others',
	  id: 'county__dq_consistency_other',
	  local_url: `${APP_BASE_URL}/api/county/dataquality/consistency/QKvDccYJ18W`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:QKvDccYJ18W.Cs84jrj1YFp;QKvDccYJ18W.VW51Ep3auXR;QKvDccYJ18W.JQ7EF0X1LIJ;QKvDccYJ18W.to0Pssxkq4S;QKvDccYJ18W.AO6xfSyHuHU;QKvDccYJ18W.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Summary',
	  level: 'County',
	  name: 'Indicator Summary',
	  id: 'county__indicator_summary',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatorsummary`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:g3RQRuh8ikd.REPORTING_RATE;g3RQRuh8ikd.REPORTING_RATE_ON_TIME;vBtxrMus3Qf;E5ehG5Qmk5Y;KWavo9MWGBT;HP1u3rO8rM7;ZbLcoTanQnP;Zz6gJ3FAKjr;xvxsOVLQWqh;H7CkBPdObiC;DWMK6mvF9LH;z5rdAD1Z9rH;VHtSG6l59rb`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Combined Oral Contraceptive Pills',
	  id: 'county__indicator_trends_cocp',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/hH9gmEmEhH4`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:hH9gmEmEhH4`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Progestin Only Pills',
	  id: 'county__indicator_trends_pop',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/dl4JcBnxu0X`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:dl4JcBnxu0X`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Emergency Contraceptive Pills',
	  id: 'county__indicator_trends_ecp',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/qaBPR9wbWku`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:qaBPR9wbWku`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Cycle Beads',
	  id: 'county__indicator_trends_cb',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/bGGT0F7iRxt`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:bGGT0F7iRxt`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Injectables',
	  id: 'county__indicator_trends_inj',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/J6qnTev1LXw`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:J6qnTev1LXw`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'IUCDs',
	  id: 'county__indicator_trends_iucd',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/tfPZ6sGgh4q`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:tfPZ6sGgh4q`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Implants (1 rod)',
	  id: 'county__indicator_trends_i1r',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/XgJfT71Unkn`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:XgJfT71Unkn`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Implants (2 rod)',
	  id: 'county__indicator_trends_i2r',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/MsS41X1GEFr`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:MsS41X1GEFr`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Female Condoms',
	  id: 'county__indicator_trends_fcd',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/AR7RhdC90IV`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AR7RhdC90IV`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Male Condoms',
	  id: 'county__indicator_trends_mcd',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/AVDzuypqGt9`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:AVDzuypqGt9`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Supply Chain Performance Trends',
	  level: 'County',
	  name: 'Others',
	  id: 'county__indicator_trends_other',
	  local_url: `${APP_BASE_URL}/api/county/supplychain/indicatortrends/QKvDccYJ18W`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:QKvDccYJ18W`,
	  default_period: 'LAST_6_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Accountability',
	  level: 'County',
	  name: 'Accountability',
	  id: 'county__accountability',
	  local_url: `${APP_BASE_URL}/api/county/accountability`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:hH9gmEmEhH4.Cs84jrj1YFp;dl4JcBnxu0X.Cs84jrj1YFp;qaBPR9wbWku.Cs84jrj1YFp;bGGT0F7iRxt.Cs84jrj1YFp;J6qnTev1LXw.Cs84jrj1YFp;tfPZ6sGgh4q.Cs84jrj1YFp;XgJfT71Unkn.Cs84jrj1YFp;MsS41X1GEFr.Cs84jrj1YFp;AR7RhdC90IV.Cs84jrj1YFp;AVDzuypqGt9.Cs84jrj1YFp;QKvDccYJ18W.Cs84jrj1YFp;hH9gmEmEhH4.JQ7EF0X1LIJ;dl4JcBnxu0X.JQ7EF0X1LIJ;qaBPR9wbWku.JQ7EF0X1LIJ;bGGT0F7iRxt.JQ7EF0X1LIJ;J6qnTev1LXw.JQ7EF0X1LIJ;tfPZ6sGgh4q.JQ7EF0X1LIJ;XgJfT71Unkn.JQ7EF0X1LIJ;MsS41X1GEFr.JQ7EF0X1LIJ;AR7RhdC90IV.JQ7EF0X1LIJ;AVDzuypqGt9.JQ7EF0X1LIJ;QKvDccYJ18W.JQ7EF0X1LIJ;hH9gmEmEhH4.VW51Ep3auXR;dl4JcBnxu0X.VW51Ep3auXR;qaBPR9wbWku.VW51Ep3auXR;bGGT0F7iRxt.VW51Ep3auXR;J6qnTev1LXw.VW51Ep3auXR;tfPZ6sGgh4q.VW51Ep3auXR;XgJfT71Unkn.VW51Ep3auXR;MsS41X1GEFr.VW51Ep3auXR;AR7RhdC90IV.VW51Ep3auXR;AVDzuypqGt9.VW51Ep3auXR;QKvDccYJ18W.VW51Ep3auXR;hH9gmEmEhH4.to0Pssxkq4S;dl4JcBnxu0X.to0Pssxkq4S;qaBPR9wbWku.to0Pssxkq4S;bGGT0F7iRxt.to0Pssxkq4S;J6qnTev1LXw.to0Pssxkq4S;tfPZ6sGgh4q.to0Pssxkq4S;XgJfT71Unkn.to0Pssxkq4S;MsS41X1GEFr.to0Pssxkq4S;AR7RhdC90IV.to0Pssxkq4S;AVDzuypqGt9.to0Pssxkq4S;QKvDccYJ18W.to0Pssxkq4S;hH9gmEmEhH4.AO6xfSyHuHU;dl4JcBnxu0X.AO6xfSyHuHU;qaBPR9wbWku.AO6xfSyHuHU;bGGT0F7iRxt.AO6xfSyHuHU;J6qnTev1LXw.AO6xfSyHuHU;tfPZ6sGgh4q.AO6xfSyHuHU;XgJfT71Unkn.AO6xfSyHuHU;MsS41X1GEFr.AO6xfSyHuHU;AR7RhdC90IV.AO6xfSyHuHU;AVDzuypqGt9.AO6xfSyHuHU;QKvDccYJ18W.AO6xfSyHuHU;hH9gmEmEhH4.i9dqmLZr7fd;dl4JcBnxu0X.i9dqmLZr7fd;qaBPR9wbWku.i9dqmLZr7fd;bGGT0F7iRxt.i9dqmLZr7fd;J6qnTev1LXw.i9dqmLZr7fd;tfPZ6sGgh4q.i9dqmLZr7fd;XgJfT71Unkn.i9dqmLZr7fd;MsS41X1GEFr.i9dqmLZr7fd;AR7RhdC90IV.i9dqmLZr7fd;AVDzuypqGt9.i9dqmLZr7fd;QKvDccYJ18W.i9dqmLZr7fd`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 1,
	  Notes: ''
	},
	{
	  page: 'Issues vs Receipts',
	  level: 'County',
	  name: 'Issues vs Receipts',
	  id: 'county__issues_vs_receipts',
	  local_url: `${APP_BASE_URL}/api/county/issuesvsreceipts`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:jfUzb86mBSP.DTnItSklSr8;HwvUHnslwbh.DTnItSklSr8;OLYLVMDHEj8.DTnItSklSr8;UJeKVZzAnfS.DTnItSklSr8;naztfZrbMtd.DTnItSklSr8;EtG9ozt2joA.DTnItSklSr8;Umi8ZsiqBHw.DTnItSklSr8;BnGDrFwyQp9.yuvCdaFqdCW;c0MB4RmVjxk.yuvCdaFqdCW;qnZmg5tNSMy.yuvCdaFqdCW;gVp1KSFI69G.yuvCdaFqdCW;iOARK31NdLp.yuvCdaFqdCW;imheYfA1Kiw.yuvCdaFqdCW;eFqDcjgvt39.EJ8nUfcupBq`,
	  default_period: 'LAST_3_MONTHS',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 1,
	  Notes: ''
	},
	{
	  page: 'Health Facility Followup',
	  level: 'County',
	  name: 'Understocked Facilities',
	  id: 'county__understocked_facilities',
	  local_url: `${APP_BASE_URL}/api/county/hffollowup/understocked`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:SSARcWY2Ge1;iOARK31NdLp.rPAsF4cpNxm;naztfZrbMtd.miM6uIJ2cWx`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	},
	{
	  page: 'Health Facility Followup',
	  level: 'County',
	  name: 'Overstocked Facilities',
	  id: 'county__overstocked_facilities',
	  local_url: `${APP_BASE_URL}/api/county/hffollowup/overstocked`,
	  url: `${DHIS_BASE_API_URL}/26/analytics.json?dimension=dx:SSARcWY2Ge1;iOARK31NdLp.rPAsF4cpNxm;naztfZrbMtd.miM6uIJ2cWx`,
	  default_period: 'LAST_MONTH',
	  default_org_unit: 'HfVjCurKxh2',
	  default_org_unit_level: 5,
	  Notes: ''
	}
  ]

  module.exports = fp
