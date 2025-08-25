// fiber를 보면 type - html element, props - 속성들을 가리킴.
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

// root 엘리먼트를 container로 지정함.
const container = document.getElementById("root") as HTMLElement;

// node는 element type에 따라 생성되는 element 객체이다.
const node = document.createElement(element.type);
// node의 title 값을 element.props에 있는 title로 지정해주자.
node["title"] = element.props.title;

// text 노드를 생성한뒤, 텍스트의 value를 element.props.children으로 지정해주자.
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

// appdenChild를 통해 node에 text를 붙이고, container에 node를 붙여주자.
// 즉 <h1 title="foo">Hello</h1> 모양이 된다.
node.appendChild(text);
container.appendChild(node);
