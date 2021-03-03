const fullExample = {
	"base_settings": {
		"tracking_id": "0N1iCw5hdsBPrtxStETA123_-NzsWw2T0Bxao8oL3SI",
		"project_name": "demo project"
	},
	"body": [{
		"slide": {
			"id": "zSTRw18JtjYl899TRxhUl1lGmKGtROWPv_c591sjh6E",
			"table_text": "IceCream Question",
			"question_text": "How likely is it that you eat ice cream in the morning?",
			"base_text": "Weighted Base (All Answering) : ALL",
			"layout": {
				"slide_master_index": 0,
				"slide_layout_index": 0
			}
		},
		"charts": [{
			"rows": [{
					"id": "choice-1111",
          "text": "Don't know",
          "visible" : true
				},
				{
					"id": "choice-2222",
          "text": "Yes",
          "visible" : true
				},
				{
					"id": "choice-3333",
          "text": "No",
          "visible" : false
				}

			],
			"columns": [{
					"id": "total",
					"text": "Total",
					"items": [{
						"id": "totality",
						"text": "Total",
						"base": 1949.0,
						"data": [
							106.0,
							105.0,
							26.0
						]
					}]
				},
				{
					"id": "gender",
          "text": "Gender",
					"items": [{
							"id": "male",
							"text": "Male",
              "base": 175.0,
              "selected" : true,
							"data": [
								0,
								105.0,
								26.0
							]
						},
						{
							"id": "female",
							"text": "Female",
							"base": 175.0,
							"data": [
								123,
								210.0,
								260.0
							]
						}
					]
				}
      ],
      "view_settings": {
        "placeholder_index": 0,
        "chart_type": "bar",
        "hide_percentage": true
      }
		}],
		"custom_obj": {
			"total_max_bytes_size": 300
		}
	}],
	"custom_obj": {
		"total_max_bytes_size": 300
	}
}


module.exports = fullExample;