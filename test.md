``` javascript2
viewof button = render(({ useSetter }) => {
    const { Button } = Antd;
    const [step_number, setStep_number] = useState(1);
    const update_step_number = (d) => setStep_number(step_number+1);
    useSetter({ step_number });
    return jsx`<${Button} key='b589b49d-e2b0-47ff-b7e3-db8e1baf9f37' onClick=${update_step_number}  >Click Me</${Button}> `;
})
```

``` javascript2
app_1 = render(({ useSetter }) => {
    const { Space } = Antd;
    return jsx`<${Space} key='69e70c44-6dca-4a84-b2a2-9f67179b7a6a' direction="vertical">
    text
    </${Space}>`;
})
```

``` javascript2
import {jsx, render, useState, component, useEffect, Fragment } from "https://grove-help.graphxr.com/react/react"
```

``` javascript2

```

``` javascript2

```

``` javascript2
industries
```

``` antChart
{"chartConfigs":{"30ebb072-2dfb-4df9-abf3-8d5530313741":{"chartKey":"30ebb072-2dfb-4df9-abf3-8d5530313741","createTime":1750211929505,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}}},"layouts":{"lg":[{"w":5,"h":10,"x":0,"y":0,"i":"30ebb072-2dfb-4df9-abf3-8d5530313741","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":5,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"md":[],"sm":[]},"dname":"2f1a01e4-f211-4b8a-978e-49034d602207"}
```

``` javascript2
aapl
```

``` javascript2
viewof select = render(({ useSetter }) => {
    const { Select } = Antd;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    useSetter({});
    return jsx`<${Select} key='046c4496-1359-4da1-bb5d-7dbf7b87302f'
        defaultValue="lucy"
        style=${{ width: 120 }}
        onChange=${handleChange}
        options=${[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "disabled", disabled: true, label: "Disabled" },
            { value: "Yiminghe", label: "yiminghe" },
        ]}
    />`;
})
```

``` javascript2
penguins
```

``` javascript2
vl
```

``` javascript2
chart = {
    const width = 640;
    const height = 400;
    const margin = {top: 20, right: 30, bottom: 30, left: 40};
    
    const x = d3.scaleUtc()
        .domain(d3.extent(aapl, d => d.Date))
        .range([margin.left, width - margin.right]);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(aapl, d => d.Close)])
        .range([height - margin.bottom, margin.top]);
    
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height);
    
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));
    
    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    
    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(d => x(d.Date))
            .y(d => y(d.Close))
            (aapl));
    
    return svg.node();
}
```

``` javascript2
d3
```

``` javascript2
library = require("d3-hexbin@0.2.2/build/d3-hexbin.js")
```

``` javascript2
topojson
```

``` plotChart
{"dataTypes":{"<!DOCTYPE html>":{"type":"string"}},"pinCode":false,"dname":"d91608d6-57c0-4a22-98e4-b0a78d5c6397","customise":{"title":"","subtitle":"","caption":"","height":"","widthType":"auto","width":300,"marginTop":"","marginRight":"","marginBottom":"","marginLeft":"","insetTop":"","insetRight":"","insetBottom":"","insetLeft":"","xLabel":"","xScale":"","xOptions":[],"yLabel":"","yScale":"","yOptions":[],"colorLegend":true,"colorScheme":"","colorScale":"","colorOptions":[]},"marks":{"xf":"","x":"","yf":"","y":"","colorf":"","color":"","sizef":"","size":"","fx":"","fy":"","mark":""},"selectedCategoryFrom":"shareData","selectedCategory":"_ac76a0bf_4ed8_490d_b970_eb4fa3d3cb7b"}
```

``` javascript2
aapl
```

``` javascript2
Plot.plot({
    marks: [
        Plot.areaY(aapl, {x: "Date", y: "Close"}),
        Plot.ruleY([0])
    ]
})
```

``` javascript2
Plot
```

``` javascript2
Plot.plot({
    marks: [
        Plot.dot(cars, {x: "power (hp)", y: "economy (mpg)"})
    ]
})
```

``` jsx
viewof form = render(({ useSetter }) => {  
    const { Button, Checkbox, Form, Input } = Antd;
    const [ remember, setRemember ] = useState(true);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const onFinish = (values) => {  
      console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    }; 
    useSetter({remember,password,username});
  
    return <Form key='2a4b0bd7-7565-4163-be92-ca0c8b27f934'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
            remember: remember,
            username: username,
            password: password,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={(e)=>{  setUsername(e.target.value); }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={(e)=>{  setPassword(e.target.value) }} />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox onChange={(e)=>{ setRemember(e.target.checked) }}>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
})
```

``` javascript2
b = aapl
```

``` plotChart
{"dataTypes":{"<!DOCTYPE html>":{"type":"string"}},"pinCode":false,"dname":"a30a0f5e-7d92-410e-a0b5-0ec28f5633b0","customise":{"title":"","subtitle":"","caption":"","height":"","widthType":"auto","width":300,"marginTop":"","marginRight":"","marginBottom":"","marginLeft":"","insetTop":"","insetRight":"","insetBottom":"","insetLeft":"","xLabel":"","xScale":"","xOptions":[],"yLabel":"","yScale":"","yOptions":[],"colorLegend":true,"colorScheme":"","colorScale":"","colorOptions":[]},"marks":{"xf":"","x":"","yf":"","y":"","colorf":"","color":"","sizef":"","size":"","fx":"","fy":"","mark":""},"selectedCategoryFrom":"shareData","selectedCategory":"b","name":"test"}
```

# Sample Datasets

``` antChart
{"chartConfigs":{"2865543d-2b2e-477c-9864-7d10c021732d":{"chartKey":"2865543d-2b2e-477c-9864-7d10c021732d","createTime":1747204569042,"renderType":"Chart","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"main","selectedCategory":"House","selectedProperties":["characterName","kills"],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"Waterfall","options":{"xField":"characterName","yField":"kills","title":{"text":"waterfall chart","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"a simple waterfall chart"},"padding":{"displayConfig":{"type":"Padding"},"value":"auto"},"autoFit":true,"renderer":{"displayConfig":{"type":"Select"},"selector":["canvas","svg"],"value":"canvas"},"risingFill":{"displayConfig":{"type":"Color"},"value":"#f4664a"},"fallingFill":{"displayConfig":{"type":"Color"},"value":"#30bf78"},"total":{"displayConfig":{"type":"On"},"style":{"label":"Total","fill":{"displayConfig":{"type":"Color"},"value":"#AAA"}}},"label":{"displayConfig":{"type":"On"},"position":{"displayConfig":{"type":"Select"},"selector":["top","bottom","middle","left","right"],"value":"top"},"offset":0,"offsetX":0,"offsetY":0,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"leaderLine":{"displayConfig":{"type":"Off"},"style":{"stroke":{"displayConfig":{"type":"Color"},"value":"#8c8c8c"},"lineWidth":1,"lineDash":{"displayConfig":{"type":"Off","onValue":[4,2]}}}},"xAxis":{"title":{"displayConfig":{"type":"Off"},"text":"characterName","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"Off"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"Off","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"yAxis":{"title":{"displayConfig":{"type":"Off"},"text":"kills","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"On"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"On","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"appendPadding":{"displayConfig":{"type":"AppendPadding"},"value":0},"tooltip":{"showContent":true,"shared":false,"customContent":{"displayConfig":{"type":"On","onValue":{"displayConfig":{"type":"JsText"},"value":"(title, data) => {\n                    let datas = _.uniq(_.map(data,(d)=>{\n                        return d.data?.datum?.SOURCE_CHART_DATA || d.data?.SOURCE_CHART_DATA || d.data?.datum || d.data;\n                    }))\n                    let bs = _.map(data, (d) => d.name);\n                    return datas.length && _.reduce(datas, (p,d,i)=>{ p += _.reduce(d, (prev, v, k) => {\n                        if (\"SPECIAL_GRAPHXR_NODE_ID\" !== k && \"SOURCE_CHART_DATA\" !== k) {\n                            if (~bs.indexOf(k)) {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div><b> <span class=\"fas fa-circle f10\" style=\"color:${data[bs.indexOf(k)].color}\"></span>${k}&nbsp;&nbsp;</b></div><div><b>${v}</b></div></div>`)\n                            } else {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div>${k}&nbsp;&nbsp;</div><div>${v}</div></div>`)\n                            }\n                        }\n                        return prev;\n                    }, (i == 0 ? \"\" : \"<hr>\") + (`<div class=\"mb1\"><b> <span class=\"fas fa-circle f10\" style=\"color:${data[i].color}\"></span>${data[i].title}</b></div>`));\n                    return p;\n                    }, \"\")\n                }"}}}},"linkMain":{"selectGraphNode":true,"flyTo":{"displayConfig":{"type":"Select"},"selector":["none","center","node"],"value":"center"}},"data":[]},"neo":{"query":"MATCH (n) RETURN * limit 2","selection":{},"labelProperty":"","selectionType":"","nodeLabel":"","propertyName":"","propertyValue":""},"reD":{"dbTable":true,"query":"","selectedTable":"goods","filters":[{}],"selectedColumns":["id","type","name","price","num","add_time"],"sorts":[{}],"slice":{"to":100,"from":0}}},"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b":{"chartKey":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","createTime":1747970704915,"renderType":"Chart","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"main","selectedCategory":"House","selectedProperties":["characterName","degree","houseName"],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"xField":"characterName","yField":"degree","title":{"text":"waterfall chart","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"a simple waterfall chart"},"padding":{"displayConfig":{"type":"Padding"},"value":"auto"},"autoFit":true,"renderer":{"displayConfig":{"type":"Select"},"selector":["canvas","svg"],"value":"canvas"},"risingFill":{"displayConfig":{"type":"Color"},"value":"#f4664a"},"fallingFill":{"displayConfig":{"type":"Color"},"value":"#30bf78"},"total":{"displayConfig":{"type":"On"},"style":{"label":"Total","fill":{"displayConfig":{"type":"Color"},"value":"#AAA"}}},"label":{"displayConfig":{"type":"On"},"position":{"displayConfig":{"type":"Select"},"selector":["top","bottom","middle","left","right"],"value":"top"},"offset":0,"offsetX":0,"offsetY":0,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"leaderLine":{"displayConfig":{"type":"Off"},"style":{"stroke":{"displayConfig":{"type":"Color"},"value":"#8c8c8c"},"lineWidth":1,"lineDash":{"displayConfig":{"type":"Off","onValue":[4,2]}}}},"xAxis":{"title":{"displayConfig":{"type":"Off"},"text":"characterName","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"Off"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"Off","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"yAxis":{"title":{"displayConfig":{"type":"Off"},"text":"degree","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"On"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"On","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"appendPadding":{"displayConfig":{"type":"AppendPadding"},"value":0},"tooltip":{"showContent":true,"shared":false,"customContent":{"displayConfig":{"type":"On","onValue":{"displayConfig":{"type":"JsText"},"value":"(title, data) => {\n                    let datas = _.uniq(_.map(data,(d)=>{\n                        return d.data?.datum?.SOURCE_CHART_DATA || d.data?.SOURCE_CHART_DATA || d.data?.datum || d.data;\n                    }))\n                    let bs = _.map(data, (d) => d.name);\n                    return datas.length && _.reduce(datas, (p,d,i)=>{ p += _.reduce(d, (prev, v, k) => {\n                        if (\"SPECIAL_GRAPHXR_NODE_ID\" !== k && \"SOURCE_CHART_DATA\" !== k) {\n                            if (~bs.indexOf(k)) {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div><b> <span class=\"fas fa-circle f10\" style=\"color:${data[bs.indexOf(k)].color}\"></span>${k}&nbsp;&nbsp;</b></div><div><b>${v}</b></div></div>`)\n                            } else {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div>${k}&nbsp;&nbsp;</div><div>${v}</div></div>`)\n                            }\n                        }\n                        return prev;\n                    }, (i == 0 ? \"\" : \"<hr>\") + (`<div class=\"mb1\"><b> <span class=\"fas fa-circle f10\" style=\"color:${data[i].color}\"></span>${data[i].title}</b></div>`));\n                    return p;\n                    }, \"\")\n                }"}}}},"linkMain":{"selectGraphNode":true,"flyTo":{"displayConfig":{"type":"Select"},"selector":["none","center","node"],"value":"node"}}}},"722d6dd7-0673-4579-8fcd-42dcd013c745":{"chartKey":"722d6dd7-0673-4579-8fcd-42dcd013c745","createTime":1748153795086,"renderType":"Code","active":true,"fetchPeriod":0,"plotCode":"","text":"viewof menu = render(({ useSetter }) => {\n    const { Menu } = Antd;\n    const { MailOutlined, AppstoreOutlined, SettingOutlined } = AntdIcons;\n    return  jsx`<${Menu} key='3f39960f-c6df-40db-945b-193353753642' mode=\"horizontal\" defaultSelectedKeys=${['mail']}>\n        <${Menu.Item} key=\"mail\" icon=${jsx`<${MailOutlined} />`}>\n          Navigation One\n        </${Menu.Item}>\n        <${Menu.SubMenu} key=\"SubMenu\" title=\"Navigation Two - Submenu\" icon=${jsx`<${SettingOutlined} />`}>\n          <${Menu.Item} key=\"two\" icon=${jsx`<${AppstoreOutlined} />`}>\n            Navigation Two\n          </${Menu.Item}>\n          <${Menu.Item} key=\"three\" icon=${jsx`<${AppstoreOutlined} />`}>\n            Navigation Three\n          </${Menu.Item}>\n          <${Menu.ItemGroup} title=\"Item Group\">\n            <${Menu.Item} key=\"four\" icon=${jsx`<${AppstoreOutlined} />`}>\n              Navigation Four\n            </${Menu.Item}>\n            <${Menu.Item} key=\"five\" icon=${jsx`<${AppstoreOutlined} />`}>\n              Navigation Five\n            </${Menu.Item}>\n         </${Menu.ItemGroup}>\n       </${Menu.SubMenu}>\n    </${Menu}>`;\n});","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Code title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}},"6b4481ac-2624-4afa-ade8-1a9572e60962":{"chartKey":"6b4481ac-2624-4afa-ade8-1a9572e60962","createTime":1749195445949,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}},"53285ba7-1195-4c5e-94fb-3fe3caf320fb":{"chartKey":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","createTime":1749263232252,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}}},"layouts":{"lg":[{"w":2,"h":6,"x":0,"y":0,"i":"2865543d-2b2e-477c-9864-7d10c021732d","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":0,"i":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":4,"i":"722d6dd7-0673-4579-8fcd-42dcd013c745","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":0,"i":"6b4481ac-2624-4afa-ade8-1a9572e60962","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":4,"i":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":7,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"xs":[{"w":2,"h":6,"x":0,"y":0,"i":"2865543d-2b2e-477c-9864-7d10c021732d","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":0,"i":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":4,"i":"722d6dd7-0673-4579-8fcd-42dcd013c745","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":4,"h":4,"x":0,"y":8,"i":"6b4481ac-2624-4afa-ade8-1a9572e60962","minW":2,"minH":3,"isResizable":true,"isDraggable":true},{"w":4,"h":4,"x":0,"y":12,"i":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"xxs":[{"w":2,"h":6,"x":0,"y":0,"i":"2865543d-2b2e-477c-9864-7d10c021732d","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":14,"i":"722d6dd7-0673-4579-8fcd-42dcd013c745","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":18,"i":"6b4481ac-2624-4afa-ade8-1a9572e60962","minW":2,"minH":3,"isResizable":true,"isDraggable":true},{"w":2,"h":4,"x":0,"y":22,"i":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"sm":[{"w":2,"h":6,"x":0,"y":0,"i":"2865543d-2b2e-477c-9864-7d10c021732d","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"722d6dd7-0673-4579-8fcd-42dcd013c745","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":6,"h":4,"x":0,"y":14,"i":"6b4481ac-2624-4afa-ade8-1a9572e60962","minW":2,"minH":3,"isResizable":true,"isDraggable":true},{"w":6,"h":4,"x":0,"y":18,"i":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"md":[{"w":2,"h":6,"x":0,"y":0,"i":"2865543d-2b2e-477c-9864-7d10c021732d","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":0,"i":"5bf87ccd-bbee-49a7-8a28-c86cb0966e0b","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":2,"y":4,"i":"722d6dd7-0673-4579-8fcd-42dcd013c745","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":0,"i":"6b4481ac-2624-4afa-ade8-1a9572e60962","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":4,"i":"53285ba7-1195-4c5e-94fb-3fe3caf320fb","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":7,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}]},"dname":"682bf57d-dd88-4f10-849e-1a7b989ac0aa"}
```

``` antChart
{"chartConfigs":{"dfe64a62-8088-4dfb-b1ea-093ab79831dc":{"chartKey":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","createTime":1748013419228,"renderType":"Graph","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"neo4j","selectedCategory":"movies","selectedProperties":[],"selectedDb":"","chartData":[{"nodes":"(-5337:Movie {name:\"Movie\",indexes:[],constraints:[\"Constraint( id=13, name='constraint_3044d997', type='NODE PROPERTY UNIQUENESS', schema=(:Movie {title}), ownedIndex=12 )\"]}),(-5338:Person {name:\"Person\",indexes:[\"born\",\"released\"],constraints:[\"Constraint( id=11, name='constraint_e26b1a8b', type='NODE PROPERTY UNIQUENESS', schema=(:Person {name}), ownedIndex=10 )\"]})","relationships":"(-5338)-[:ACTED_IN {name:\"ACTED_IN\"}]->(-5337),(-5338)-[:REVIEWED {name:\"REVIEWED\"}]->(-5337),(-5338)-[:PRODUCED {name:\"PRODUCED\"}]->(-5337),(-5338)-[:WROTE {name:\"WROTE\"}]->(-5337),(-5338)-[:FOLLOWS {name:\"FOLLOWS\"}]->(-5338),(-5338)-[:DIRECTED {name:\"DIRECTED\"}]->(-5337)","SOURCE_CHART_DATA":{"nodes":"(-5337:Movie {name:\"Movie\",indexes:[],constraints:[\"Constraint( id=13, name='constraint_3044d997', type='NODE PROPERTY UNIQUENESS', schema=(:Movie {title}), ownedIndex=12 )\"]}),(-5338:Person {name:\"Person\",indexes:[\"born\",\"released\"],constraints:[\"Constraint( id=11, name='constraint_e26b1a8b', type='NODE PROPERTY UNIQUENESS', schema=(:Person {name}), ownedIndex=10 )\"]})","relationships":"(-5338)-[:ACTED_IN {name:\"ACTED_IN\"}]->(-5337),(-5338)-[:REVIEWED {name:\"REVIEWED\"}]->(-5337),(-5338)-[:PRODUCED {name:\"PRODUCED\"}]->(-5337),(-5338)-[:WROTE {name:\"WROTE\"}]->(-5337),(-5338)-[:FOLLOWS {name:\"FOLLOWS\"}]->(-5338),(-5338)-[:DIRECTED {name:\"DIRECTED\"}]->(-5337)"}}],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[{"key":"nodes","title":"nodes","dataIndex":"nodes"},{"key":"relationships","title":"relationships","dataIndex":"relationships"}],"type":"","options":{"title":{"text":"empty Graph title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Graph description"},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}},"nodeColorScheme":{"displayConfig":{"type":"Select"},"selector":["neodash","nivo","category10","accent","dark2","paired","pastel1","pastel2","set1","set2","set3"],"value":"neodash"},"nodeLabelColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"black"}}},"nodeLabelFontSize":{"LABEL":"Node Label Font Size","displayConfig":{"type":"Number"},"minV":1.5,"maxV":50,"step":0.5,"value":3.5},"defaultNodeSize":{"LABEL":"Node Size","displayConfig":{"type":"Number"},"minV":2,"maxV":50,"step":1,"value":2},"nodeSizeProp":{"LABEL":"Node Size Property","displayConfig":{"type":"Text"},"value":"size"},"nodeColorProp":{"LABEL":"Node Color Property","displayConfig":{"type":"Text"},"value":"color"},"defaultRelColor":{"LABEL":"Relationship Color","displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#a0a0a0"}}},"defaultRelWidth":{"LABEL":"Relationship Width","displayConfig":{"type":"Number"},"minV":1,"maxV":50,"step":1,"value":1},"relLabelColor":{"LABEL":"Relationship Label Color","displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#a0a0a0"}}},"relLabelFontSize":{"LABEL":"Relationship Label Font Size","displayConfig":{"type":"Number"},"minV":1,"maxV":50,"step":0.25,"value":2.75},"relColorProp":{"LABEL":"Relationship Color Property","displayConfig":{"type":"Text"},"value":"color"},"relWidthProp":{"LABEL":"Relationship Width Property","displayConfig":{"type":"Text"},"value":"width"},"relationshipParticles":{"LABEL":"Animated particles on Relationships","displayConfig":{"type":"Boolean"},"value":false},"relationshipParticleSpeed":{"LABEL":"Speed of the particle animation","displayConfig":{"type":"Number"},"minV":0.001,"maxV":5,"step":0.001,"value":0.005},"layout":{"LABEL":"Graph Layout (experimental)","displayConfig":{"type":"Select"},"selector":["force-directed","tree","radial"],"value":"force-directed"},"showPropertiesOnHover":{"LABEL":"Show pop-up on Hover","displayConfig":{"type":"Boolean"},"value":true},"showPropertiesOnClick":{"LABEL":"Show properties on Click","displayConfig":{"type":"Boolean"},"value":true},"fixNodeAfterDrag":{"LABEL":"Fix node positions after Drag","displayConfig":{"type":"Boolean"},"value":true},"drilldownLink":{"LABEL":"Drilldown Icon Link","displayConfig":{"type":"Text"},"value":"http://bloom.neo4j.io"},"hideSelections":{"LABEL":"Hide Property Selection","displayConfig":{"type":"Boolean"},"value":false},"autorun":{"LABEL":"Auto-run query","displayConfig":{"type":"Boolean"},"value":true},"iconStyle":{"LABEL":"Icon Style on format { label : url}","displayConfig":{"type":"Text"},"value":""},"data":[]},"mongo":{"collectionName":"","filter":{},"filterTmp":{},"filterStr":"{}","projection":{},"projectionStr":"{}","column":[],"lowerBound":"min","upperBound":"max","isObjectId":true,"limit":1000,"sort":{},"sortStr":"{}","skip":0},"neo":{"query":"call db.schema.visualization()","selection":{"Movie":"name","Person":"name"},"labelProperty":"","selectionType":"","nodeLabel":"","propertyName":"","propertyValue":""}},"20a0784e-fa6c-457f-a595-470dfc89886c":{"chartKey":"20a0784e-fa6c-457f-a595-470dfc89886c","createTime":1748672912942,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}},"03bbb710-e12b-48d9-842e-c709bd1740ff":{"chartKey":"03bbb710-e12b-48d9-842e-c709bd1740ff","createTime":1749189325314,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}}},"layouts":{"lg":[{"w":5,"h":10,"x":0,"y":0,"i":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"20a0784e-fa6c-457f-a595-470dfc89886c","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":1,"y":14,"i":"03bbb710-e12b-48d9-842e-c709bd1740ff","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":10,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"md":[{"w":2,"h":4,"x":0,"y":0,"i":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":4,"i":"20a0784e-fa6c-457f-a595-470dfc89886c","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":1,"y":8,"i":"03bbb710-e12b-48d9-842e-c709bd1740ff","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":4,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"xs":[{"w":2,"h":4,"x":0,"y":0,"i":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":4,"i":"20a0784e-fa6c-457f-a595-470dfc89886c","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":1,"y":8,"i":"03bbb710-e12b-48d9-842e-c709bd1740ff","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":4,"h":4,"x":0,"y":12,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"xxs":[{"w":2,"h":4,"x":0,"y":0,"i":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":8,"i":"20a0784e-fa6c-457f-a595-470dfc89886c","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":12,"i":"03bbb710-e12b-48d9-842e-c709bd1740ff","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":4,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"sm":[{"w":2,"h":4,"x":0,"y":0,"i":"dfe64a62-8088-4dfb-b1ea-093ab79831dc","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":4,"i":"20a0784e-fa6c-457f-a595-470dfc89886c","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":2,"y":0,"i":"03bbb710-e12b-48d9-842e-c709bd1740ff","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":2,"y":4,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}]},"dname":"7e7521bf-fef5-4aa9-bdd5-66f3a627eac6"}
```

``` antChart
{"chartConfigs":{"f036a51c-d824-42bf-909d-62ae364a28dd":{"chartKey":"f036a51c-d824-42bf-909d-62ae364a28dd","createTime":1749195637447,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}},"6500af98-def4-4cf4-903c-092849fb59ba":{"chartKey":"6500af98-def4-4cf4-903c-092849fb59ba","createTime":1749195682047,"renderType":"Chart","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"main","selectedCategory":"House","selectedProperties":["characterName","kills"],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"Waterfall","options":{"xField":"characterName","yField":"kills","title":{"text":"waterfall chart","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"a simple waterfall chart"},"padding":{"displayConfig":{"type":"Padding"},"value":"auto"},"autoFit":true,"renderer":{"displayConfig":{"type":"Select"},"selector":["canvas","svg"],"value":"canvas"},"risingFill":{"displayConfig":{"type":"Color"},"value":"#f4664a"},"fallingFill":{"displayConfig":{"type":"Color"},"value":"#30bf78"},"total":{"displayConfig":{"type":"On"},"style":{"label":"Total","fill":{"displayConfig":{"type":"Color"},"value":"#AAA"}}},"label":{"displayConfig":{"type":"On"},"position":{"displayConfig":{"type":"Select"},"selector":["top","bottom","middle","left","right"],"value":"top"},"offset":0,"offsetX":0,"offsetY":0,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"leaderLine":{"displayConfig":{"type":"Off"},"style":{"stroke":{"displayConfig":{"type":"Color"},"value":"#8c8c8c"},"lineWidth":1,"lineDash":{"displayConfig":{"type":"Off","onValue":[4,2]}}}},"xAxis":{"title":{"displayConfig":{"type":"Off"},"text":"characterName","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"Off"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"Off","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"yAxis":{"title":{"displayConfig":{"type":"Off"},"text":"kills","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"On"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"On","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"appendPadding":{"displayConfig":{"type":"AppendPadding"},"value":0},"tooltip":{"showContent":true,"shared":false,"customContent":{"displayConfig":{"type":"On","onValue":{"displayConfig":{"type":"JsText"},"value":"(title, data) => {\n                    let datas = _.uniq(_.map(data,(d)=>{\n                        return d.data?.datum?.SOURCE_CHART_DATA || d.data?.SOURCE_CHART_DATA || d.data?.datum || d.data;\n                    }))\n                    let bs = _.map(data, (d) => d.name);\n                    return datas.length && _.reduce(datas, (p,d,i)=>{ p += _.reduce(d, (prev, v, k) => {\n                        if (\"SPECIAL_GRAPHXR_NODE_ID\" !== k && \"SOURCE_CHART_DATA\" !== k) {\n                            if (~bs.indexOf(k)) {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div><b> <span class=\"fas fa-circle f10\" style=\"color:${data[bs.indexOf(k)].color}\"></span>${k}&nbsp;&nbsp;</b></div><div><b>${v}</b></div></div>`)\n                            } else {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div>${k}&nbsp;&nbsp;</div><div>${v}</div></div>`)\n                            }\n                        }\n                        return prev;\n                    }, (i == 0 ? \"\" : \"<hr>\") + (`<div class=\"mb1\"><b> <span class=\"fas fa-circle f10\" style=\"color:${data[i].color}\"></span>${data[i].title}</b></div>`));\n                    return p;\n                    }, \"\")\n                }"}}}},"linkMain":{"selectGraphNode":true,"flyTo":{"displayConfig":{"type":"Select"},"selector":["none","center","node"],"value":"center"}},"data":[]},"neo":{"query":"MATCH (n) RETURN * limit 2","selection":{},"labelProperty":"","selectionType":"","nodeLabel":"","propertyName":"","propertyValue":""},"reD":{"dbTable":true,"query":"","selectedTable":"goods","filters":[{}],"selectedColumns":["id","type","name","price","num","add_time"],"sorts":[{}],"slice":{"to":100,"from":0}}}},"layouts":{"lg":[{"w":6,"h":8,"x":0,"y":0,"i":"6500af98-def4-4cf4-903c-092849fb59ba","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"md":[{"w":5,"h":7,"x":0,"y":0,"i":"6500af98-def4-4cf4-903c-092849fb59ba","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"sm":[{"w":6,"h":6,"x":0,"y":0,"i":"6500af98-def4-4cf4-903c-092849fb59ba","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"xs":[{"w":4,"h":6,"x":0,"y":0,"i":"6500af98-def4-4cf4-903c-092849fb59ba","minW":2,"minH":3,"isResizable":true,"isDraggable":true}],"xxs":[{"w":2,"h":6,"x":0,"y":0,"i":"6500af98-def4-4cf4-903c-092849fb59ba","minW":2,"minH":3,"isResizable":true,"isDraggable":true}]},"dname":"94a9029c-9c79-48fd-ac32-62f54329f848"}
```

``` javascript2
viewof datePicker = render(({
  useSetter
}) => {
  const {
    DatePicker,
    Space
  } = Antd;
  const {
    RangePicker
  } = DatePicker;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const App = () => jsx`<${Space} key="b95c4425-cd1f-4dce-ad23-99ee893d12eb" direction="vertical">
 <${DatePicker} onChange=${onChange}></${DatePicker}>
 <${DatePicker} onChange=${onChange} picker="week"></${DatePicker}>
 <${DatePicker} onChange=${onChange} picker="month"></${DatePicker}>
 <${DatePicker} onChange=${onChange} picker="quarter"></${DatePicker}>
 <${DatePicker} onChange=${onChange} picker="year"></${DatePicker}>
 <${RangePicker} onChange=${onChange}></${RangePicker}>
</${Space}>`;
  return jsx`<${App}></${App}>`;
})
```

``` antChart
{"chartConfigs":{"db152c30-14b8-4873-bb86-feebbd5f8140":{"chartKey":"db152c30-14b8-4873-bb86-feebbd5f8140","createTime":1747204569042,"renderType":"Chart","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"main","selectedCategory":"House","selectedProperties":["characterName","degree"],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"Basic Column","options":{"xField":"characterName","yField":"degree","title":{"text":"column chart","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"a simple column chart"},"padding":{"displayConfig":{"type":"Padding"},"value":"auto"},"autoFit":true,"renderer":{"displayConfig":{"type":"Select"},"selector":["canvas","svg"],"value":"canvas"},"columnWidthRatio":{"displayConfig":{"type":"Number"},"minV":0.1,"maxV":1,"step":0.1,"value":0.5},"legend":{"displayConfig":{"type":"Remove"},"position":{"displayConfig":{"type":"Select"},"selector":["top","top-left","top-right","left","left-top","left-bottom","right","right-top","right-bottom","bottom","bottom-left","bottom-right"],"value":"top-left"},"flipPage":true,"offsetX":0,"offsetY":0},"label":{"displayConfig":{"type":"Off"},"position":{"displayConfig":{"type":"Select"},"selector":["top","bottom","middle","left","right"],"value":"top"},"offset":0,"offsetX":0,"offsetY":0,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"xAxis":{"title":{"displayConfig":{"type":"Off"},"text":"characterName","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"Off"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"Off","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"yAxis":{"title":{"displayConfig":{"type":"Off"},"text":"degree","autoRotate":true},"label":{"offset":10,"offsetX":0,"offsetY":0,"rotate":{"displayConfig":{"type":"Number"},"minV":0,"maxV":10,"step":0.01,"value":0},"autoRotate":false,"autoHide":true,"style":{"displayConfig":{"type":"Off"},"fontSize":10,"textAlign":{"displayConfig":{"type":"Select"},"selector":["left","center","right"],"value":"center"},"fill":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"var(--text-color)"}}}}},"tickLine":{"displayConfig":{"type":"Off"},"length":5},"grid":{"displayConfig":{"type":"On"},"line":{"style":{"lineWidth":1}}},"min":{"displayConfig":{"type":"On","onValue":0}},"tickInterval":{"displayConfig":{"type":"Off","onValue":5}}},"color":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#5B8FF9"}}},"interactions":[{"type":{"displayConfig":{"type":"Select"},"selector":["element-active","element-selected","element-single-selected","element-highlight","element-highlight-by-color","element-highlight-by-x","legend-highlight","axis-label-highlight"],"value":"element-highlight"}},{"type":{"displayConfig":{"type":"Select"},"selector":["element-active","element-selected","element-single-selected","element-highlight","element-highlight-by-color","element-highlight-by-x","legend-highlight","axis-label-highlight"],"value":"element-highlight"}}],"appendPadding":{"displayConfig":{"type":"AppendPadding"},"value":0},"tooltip":{"showContent":true,"shared":false,"customContent":{"displayConfig":{"type":"On","onValue":{"displayConfig":{"type":"JsText"},"value":"(title, data) => {\n                    let datas = _.uniq(_.map(data,(d)=>{\n                        return d.data?.datum?.SOURCE_CHART_DATA || d.data?.SOURCE_CHART_DATA || d.data?.datum || d.data;\n                    }))\n                    let bs = _.map(data, (d) => d.name);\n                    return datas.length && _.reduce(datas, (p,d,i)=>{ p += _.reduce(d, (prev, v, k) => {\n                        if (\"SPECIAL_GRAPHXR_NODE_ID\" !== k && \"SOURCE_CHART_DATA\" !== k) {\n                            if (~bs.indexOf(k)) {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div><b> <span class=\"fas fa-circle f10\" style=\"color:${data[bs.indexOf(k)].color}\"></span>${k}&nbsp;&nbsp;</b></div><div><b>${v}</b></div></div>`)\n                            } else {\n                                prev += (`<div class=\"d-flex justify-content-between\"><div>${k}&nbsp;&nbsp;</div><div>${v}</div></div>`)\n                            }\n                        }\n                        return prev;\n                    }, (i == 0 ? \"\" : \"<hr>\") + (`<div class=\"mb1\"><b> <span class=\"fas fa-circle f10\" style=\"color:${data[i].color}\"></span>${data[i].title}</b></div>`));\n                    return p;\n                    }, \"\")\n                }"}}}},"linkMain":{"selectGraphNode":true,"flyTo":{"displayConfig":{"type":"Select"},"selector":["none","center","node"],"value":"node"}},"data":[]},"neo":{"query":"MATCH (n)-[r]->(m) RETURN *","selection":{"Movie":"title","Person":"name"},"labelProperty":"roles","selectionType":"","nodeLabel":"","propertyName":"","propertyValue":""},"reD":{"dbTable":true,"query":"","selectedTable":"goods","filters":[{}],"selectedColumns":["id","type","name","price","num","add_time"],"sorts":[{}],"slice":{"to":100,"from":0}}},"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1":{"chartKey":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","createTime":1747970704915,"renderType":"Chart","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"shareData","selectedCategory":"b","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty chart title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"a simple empty chart"}}},"39b0905b-fa46-492f-a9d1-7eef9fc34f69":{"chartKey":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","createTime":1748153795086,"renderType":"Markdown","active":true,"fetchPeriod":0,"plotCode":"","text":"","selectedCategoryFrom":"","selectedCategory":"","selectedProperties":[],"selectedDb":"","chartData":[],"emptyFills":{},"castColumns":{},"joinColumns":{},"chartColumns":[],"type":"","options":{"title":{"text":"empty Markdown title","size":{"displayConfig":{"type":"Select"},"selector":["h1","h2","h3","h4","h5","h6"],"value":"h6"}},"description":{"text":"Enter markdown here..."},"backgroundColor":{"displayConfig":{"type":"Off","onValue":{"displayConfig":{"type":"Color"},"value":"#fafafa"}}}}}},"layouts":{"lg":[{"w":2,"h":6,"x":0,"y":0,"i":"db152c30-14b8-4873-bb86-feebbd5f8140","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":2,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"xs":[{"w":2,"h":6,"x":0,"y":0,"i":"db152c30-14b8-4873-bb86-feebbd5f8140","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":4,"h":4,"x":0,"y":14,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"xxs":[{"w":2,"h":6,"x":0,"y":0,"i":"db152c30-14b8-4873-bb86-feebbd5f8140","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":14,"i":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"sm":[{"w":2,"h":6,"x":0,"y":0,"i":"db152c30-14b8-4873-bb86-feebbd5f8140","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":2,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}],"md":[{"w":2,"h":6,"x":0,"y":0,"i":"db152c30-14b8-4873-bb86-feebbd5f8140","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":6,"i":"37a7f5bc-4ac0-45df-8ec9-21be30c0eeb1","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":2,"h":4,"x":0,"y":10,"i":"39b0905b-fa46-492f-a9d1-7eef9fc34f69","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":true,"isResizable":true},{"w":3,"h":4,"x":2,"y":0,"i":"add","minW":2,"minH":3,"moved":false,"static":false,"isDraggable":false,"isResizable":false}]},"dname":"02adbde0-5d68-44fa-ba94-421d752450f3"}
```

``` javascript2

```

``` javascript2

```

``` javascript2
miserables
```

``` javascript2
i = industries
```

``` javascript2
f = flare
```

``` javascript2
123455
```

``` javascript2
a = alphabet
```

``` javascript2
aa = aapl
```

``` javascript2
w = weather
```

hightlight performance cause edit very slow??? comma,dot neednot?????

``` sql

```

``` javascript2
c = cars
```

``` javascript2
pgs = penguins
```

``` javascript2
app = render(({ useSetter }) => {
    const { Space } = Antd;
    return jsx`<${Space} key='916b507f-dbb6-40bd-8158-4fadee6de10f' direction="vertical">
    text
    </${Space}>`;
})
```

``` javascript2
require("htm@2.2.1/dist/htm.umd.js")
```

``` javascript2
{return (window.aa ?? 123)}
```
