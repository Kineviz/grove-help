``` antChart
{
 "chartConfigs": {
  "70524087-629f-4877-b1a3-f01f9a0767c8": {
   "chartKey": "70524087-629f-4877-b1a3-f01f9a0767c8",
   "createTime": 1753104193477,
   "renderType": "Markdown",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "1. text\n2. aaa\n3. ${a}",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Markdown title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "b6d9b730-26db-41fa-8e21-d3616cce9ab8": {
   "chartKey": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
   "createTime": 1753104244581,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "a = 2323",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "6169fa60-2e0f-4f6e-9adc-e743e33abd00": {
   "chartKey": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
   "createTime": 1753104259555,
   "renderType": "Jsx",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "viewof datePicker = render(({ useSetter }) => {\n    const { DatePicker, Space } = Antd;\n    const { RangePicker } = DatePicker;\n    const onChange = (date, dateString) => {\n        console.log(date, dateString);\n    };\n    const App = () => (\n        <Space key='d5a569ae-f150-4fd8-b730-54e7c2d68950' direction=\"vertical\">\n        <DatePicker onChange={onChange} />\n        <DatePicker onChange={onChange} picker=\"week\" />\n        <DatePicker onChange={onChange} picker=\"month\" />\n        <DatePicker onChange={onChange} picker=\"quarter\" />\n        <DatePicker onChange={onChange} picker=\"year\" />\n        <RangePicker onChange={onChange} />\n        </Space>\n    );\n    return <App />\n})",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Jsx title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "99e1f8ea-66af-4dab-8e23-078ea9737445": {
   "chartKey": "99e1f8ea-66af-4dab-8e23-078ea9737445",
   "createTime": 1753104292756,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "viewof form = render(({ useSetter }) => {\n    const { Button, Checkbox, Form, Input } = Antd;\n    const [ remember, setRemember ] = useState(true);\n    const [ username, setUsername ] = useState(\"\");\n    const [ password, setPassword ] = useState(\"\");\n    const onFinish = (values) => {\n      console.log('Success:', values);\n    };\n    const onFinishFailed = (errorInfo) => {\n      console.log('Failed:', errorInfo);\n    };\n    useSetter({remember,password,username});\n    return jsx`<${Form} key='48ed59fb-8261-4a2f-aa11-f2d2eaa9873b'\n        name=\"basic\"\n        labelCol=${{\n          span: 8,\n        }}\n        wrapperCol=${{\n          span: 16,\n        }}\n        initialValues=${{\n            remember: remember,\n            username: username,\n            password: password,\n        }}\n        onFinish=${onFinish}\n        onFinishFailed=${onFinishFailed}\n        autoComplete=\"off\"\n      >\n        <${Form.Item}\n          label=\"Username\"\n          name=\"username\"\n          rules=${[\n            {\n              required: true,\n              message: 'Please input your username!',\n            },\n          ]}\n        >\n          <${Input} onChange=${(e)=>{  setUsername(e.target.value); }} />\n        </${Form.Item}>\n        <${Form.Item}\n          label=\"Password\"\n          name=\"password\"\n          rules=${[\n            {\n              required: true,\n              message: 'Please input your password!',\n            },\n          ]}\n        >\n          <${Input.Password} onChange=${(e)=>{  setPassword(e.target.value) }} />\n        </${Form.Item}>\n        <${Form.Item}\n          name=\"remember\"\n          valuePropName=\"checked\"\n          wrapperCol=${{\n            offset: 8,\n            span: 16,\n          }}\n        >\n          <${Checkbox} onChange=${(e)=>{ setRemember(e.target.checked) }}>Remember me</${Checkbox}>\n        </${Form.Item}>\n        <${Form.Item}\n          wrapperCol=${{\n            offset: 8,\n            span: 16,\n          }}\n        >\n          <${Button} type=\"primary\" htmlType=\"submit\">\n            Submit\n          </${Button}>\n        </${Form.Item}>\n    </${Form}>`\n})",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "348bc63c-f663-468b-984f-27f1a70978df": {
   "chartKey": "348bc63c-f663-468b-984f-27f1a70978df",
   "createTime": 1753104351045,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "html`<a style=\"color:red;background-color:yellow;\">testabc back</a>`",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "4100bbeb-de7f-4b62-a628-20ae97f22162": {
   "chartKey": "4100bbeb-de7f-4b62-a628-20ae97f22162",
   "createTime": 1753110912323,
   "renderType": "Markdown",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "``` javascript\nlet a  =  123;\nlet c = 456;\nreturn a+c;\n```",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Markdown title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  }
 },
 "layouts": {
  "lg": [
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "70524087-629f-4877-b1a3-f01f9a0767c8",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 3,
    "y": 0,
    "i": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 6,
    "y": 0,
    "i": "99e1f8ea-66af-4dab-8e23-078ea9737445",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 9,
    "y": 0,
    "i": "348bc63c-f663-468b-984f-27f1a70978df",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 3,
    "y": 4,
    "i": "4100bbeb-de7f-4b62-a628-20ae97f22162",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 6,
    "y": 4,
    "i": "add",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": false,
    "isResizable": false
   }
  ],
  "md": [
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "70524087-629f-4877-b1a3-f01f9a0767c8",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 3,
    "y": 0,
    "i": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 6,
    "y": 0,
    "i": "99e1f8ea-66af-4dab-8e23-078ea9737445",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 7,
    "y": 4,
    "i": "348bc63c-f663-468b-984f-27f1a70978df",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "4100bbeb-de7f-4b62-a628-20ae97f22162",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "sm": [
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "99e1f8ea-66af-4dab-8e23-078ea9737445",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "348bc63c-f663-468b-984f-27f1a70978df",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 16,
    "i": "4100bbeb-de7f-4b62-a628-20ae97f22162",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "xs": [
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "99e1f8ea-66af-4dab-8e23-078ea9737445",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "348bc63c-f663-468b-984f-27f1a70978df",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 16,
    "i": "4100bbeb-de7f-4b62-a628-20ae97f22162",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "xxs": [
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "b6d9b730-26db-41fa-8e21-d3616cce9ab8",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "6169fa60-2e0f-4f6e-9adc-e743e33abd00",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "99e1f8ea-66af-4dab-8e23-078ea9737445",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "348bc63c-f663-468b-984f-27f1a70978df",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 16,
    "i": "4100bbeb-de7f-4b62-a628-20ae97f22162",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ]
 },
 "dname": "bc93f5da-905f-40d6-8a61-d686e996c673"
}
```

``` antChart
{
 "chartConfigs": {
  "4edbacaf-ca2a-4926-bbd2-499527c604ac": {
   "chartKey": "4edbacaf-ca2a-4926-bbd2-499527c604ac",
   "createTime": 1753104193477,
   "renderType": "Markdown",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "1. text\n2. aaa\n3. ${a}",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Markdown title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "604b1537-d267-4f21-a8a7-be355fb9830e": {
   "chartKey": "604b1537-d267-4f21-a8a7-be355fb9830e",
   "createTime": 1753104244581,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "a = 2323",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "8ea34ef1-2bb5-46c3-a013-ede96e3a5393": {
   "chartKey": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
   "createTime": 1753104259555,
   "renderType": "Jsx",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "viewof datePicker = render(({ useSetter }) => {\n    const { DatePicker, Space } = Antd;\n    const { RangePicker } = DatePicker;\n    const onChange = (date, dateString) => {\n        console.log(date, dateString);\n    };\n    const App = () => (\n        <Space key='d5a569ae-f150-4fd8-b730-54e7c2d68950' direction=\"vertical\">\n        <DatePicker onChange={onChange} />\n        <DatePicker onChange={onChange} picker=\"week\" />\n        <DatePicker onChange={onChange} picker=\"month\" />\n        <DatePicker onChange={onChange} picker=\"quarter\" />\n        <DatePicker onChange={onChange} picker=\"year\" />\n        <RangePicker onChange={onChange} />\n        </Space>\n    );\n    return <App />\n})",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Jsx title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b": {
   "chartKey": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
   "createTime": 1753104292756,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "viewof form = render(({ useSetter }) => {\n    const { Button, Checkbox, Form, Input } = Antd;\n    const [ remember, setRemember ] = useState(true);\n    const [ username, setUsername ] = useState(\"\");\n    const [ password, setPassword ] = useState(\"\");\n    const onFinish = (values) => {\n      console.log('Success:', values);\n    };\n    const onFinishFailed = (errorInfo) => {\n      console.log('Failed:', errorInfo);\n    };\n    useSetter({remember,password,username});\n    return jsx`<${Form} key='48ed59fb-8261-4a2f-aa11-f2d2eaa9873b'\n        name=\"basic\"\n        labelCol=${{\n          span: 8,\n        }}\n        wrapperCol=${{\n          span: 16,\n        }}\n        initialValues=${{\n            remember: remember,\n            username: username,\n            password: password,\n        }}\n        onFinish=${onFinish}\n        onFinishFailed=${onFinishFailed}\n        autoComplete=\"off\"\n      >\n        <${Form.Item}\n          label=\"Username\"\n          name=\"username\"\n          rules=${[\n            {\n              required: true,\n              message: 'Please input your username!',\n            },\n          ]}\n        >\n          <${Input} onChange=${(e)=>{  setUsername(e.target.value); }} />\n        </${Form.Item}>\n        <${Form.Item}\n          label=\"Password\"\n          name=\"password\"\n          rules=${[\n            {\n              required: true,\n              message: 'Please input your password!',\n            },\n          ]}\n        >\n          <${Input.Password} onChange=${(e)=>{  setPassword(e.target.value) }} />\n        </${Form.Item}>\n        <${Form.Item}\n          name=\"remember\"\n          valuePropName=\"checked\"\n          wrapperCol=${{\n            offset: 8,\n            span: 16,\n          }}\n        >\n          <${Checkbox} onChange=${(e)=>{ setRemember(e.target.checked) }}>Remember me</${Checkbox}>\n        </${Form.Item}>\n        <${Form.Item}\n          wrapperCol=${{\n            offset: 8,\n            span: 16,\n          }}\n        >\n          <${Button} type=\"primary\" htmlType=\"submit\">\n            Submit\n          </${Button}>\n        </${Form.Item}>\n    </${Form}>`\n})",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  },
  "8d16fb4c-d004-4a29-b5df-5279fd20af7f": {
   "chartKey": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
   "createTime": 1753104351045,
   "renderType": "Code",
   "active": true,
   "fetchPeriod": 0,
   "plotCode": "",
   "text": "html`<a style=\"color:red;background-color:yellow;\">testabc back</a>`",
   "selectedCategoryFrom": "",
   "selectedCategory": "",
   "selectedProperties": [],
   "selectedDb": "",
   "chartData": [],
   "emptyFills": {},
   "castColumns": {},
   "joinColumns": {},
   "chartColumns": [],
   "type": "",
   "options": {
    "title": {
     "text": "empty Code title",
     "size": {
      "displayConfig": {
       "type": "Select"
      },
      "selector": [
       "h1",
       "h2",
       "h3",
       "h4",
       "h5",
       "h6"
      ],
      "value": "h6"
     }
    },
    "description": {
     "text": "Enter markdown here..."
    },
    "backgroundColor": {
     "displayConfig": {
      "type": "Off",
      "onValue": {
       "displayConfig": {
        "type": "Color"
       },
       "value": "#fafafa"
      }
     }
    }
   }
  }
 },
 "layouts": {
  "lg": [
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "604b1537-d267-4f21-a8a7-be355fb9830e",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 3,
    "y": 0,
    "i": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 6,
    "y": 0,
    "i": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 9,
    "y": 0,
    "i": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "md": [
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "4edbacaf-ca2a-4926-bbd2-499527c604ac",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "604b1537-d267-4f21-a8a7-be355fb9830e",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 3,
    "y": 0,
    "i": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 6,
    "y": 0,
    "i": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 7,
    "y": 4,
    "i": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": true,
    "isResizable": true
   },
   {
    "w": 3,
    "h": 4,
    "x": 0,
    "y": 8,
    "minW": 2,
    "minH": 3,
    "moved": false,
    "static": false,
    "isDraggable": false,
    "isResizable": false
   }
  ],
  "sm": [
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "604b1537-d267-4f21-a8a7-be355fb9830e",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 6,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "xs": [
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "604b1537-d267-4f21-a8a7-be355fb9830e",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 4,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ],
  "xxs": [
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 0,
    "i": "604b1537-d267-4f21-a8a7-be355fb9830e",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 4,
    "i": "8ea34ef1-2bb5-46c3-a013-ede96e3a5393",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 8,
    "i": "8dfcb706-bfd3-4779-8ee9-2733d6cdac7b",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   },
   {
    "w": 2,
    "h": 4,
    "x": 0,
    "y": 12,
    "i": "8d16fb4c-d004-4a29-b5df-5279fd20af7f",
    "minW": 2,
    "minH": 3,
    "isResizable": true,
    "isDraggable": true
   }
  ]
 },
 "dname": "5f01cb95-7605-4e88-98c0-6faf65b4fca7"
}
```

``` javascript2
import {jsx, render, useState, component, useEffect, Fragment } from "https://grove-help.graphxr.com/react/react"
```

``` plotChart
{"dataTypes":{"compid":{"type":"string"},"dtarrival":{"type":"date"},"bol":{"type":"string"},"container":{"type":"string"},"descr":{"type":"string"},"orgncntr":{"type":"string"},"orgncntrcd":{"type":"string"},"orgnpoint":{"type":"string"},"loadport":{"type":"string"},"loadcntr":{"type":"string"},"unloadport":{"type":"string"},"unloadcntr":{"type":"string"},"unloadcntrcd":{"type":"string"},"shippernam":{"type":"string"},"consignnam":{"type":"string"},"notifynam":{"type":"string"},"vesselname":{"type":"string"},"vesselcode":{"type":"string"},"weight":{"type":"number"},"qty":{"type":"number"},"shipperaddress":{"type":"string"},"consigneeaddress":{"type":"string"},"notifyaddress":{"type":"string"}},"dname":"5da3a59c-2955-44b5-ae8f-62c2911bb2bb","customise":{"title":"","subtitle":"","caption":"","height":"","widthType":"auto","width":300,"marginTop":"","marginRight":"","marginBottom":"","marginLeft":"","insetTop":"","insetRight":"","insetBottom":"","insetLeft":"","xLabel":"","xScale":"","xOptions":[],"yLabel":"","yScale":"","yOptions":[],"colorLegend":true,"colorScheme":"","colorScale":"","colorOptions":[]},"marks":{"xf":"","x":"loadport","yf":"","y":"","colorf":"","color":"","sizef":"","size":"","fx":"","fy":"","mark":""},"selectedCategoryFrom":"files","selectedCategory":"Enhance0713/files/test.csv","name":""}
```

``` syncdata
{"value":"","pinCode":true,"codeMode":"javascript2","syncFile":true,"syncFileKey":"Enhance0713/files/savedQuery.db","initRead":true,"zip":true,"fileType":"db","variantName":"savedQuery","hide":false}
```

``` sql
{"value":"","pinCode":true,"codeMode":"sql","tableName":"","dbTable":true}
```

``` sql
{"value":"","pinCode":true,"codeMode":"sql","tableName":""}
```
