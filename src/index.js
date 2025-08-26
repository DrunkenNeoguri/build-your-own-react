import { render } from "./render";

// note.ts 내용을 참고해서 컴포넌트 제작 함수를 만들어보자.
export function createComponent(tagName, textContent) {
  // react처럼 root 컴포넌트 안에서 해당 컴포넌트가 생성되어야 한다. 아니면 무효화.
  const container = document.getElementById("root");
  if (!container) {
    return;
  }

  // root 컴포넌트에 붙일 html element와 text node를 생성.
  const node = document.createElement(tagName);
  const text = document.createTextNode(textContent);

  node.appendChild(text);
  container.appendChild(node);
}

// *여기까지가 기본적으로 우리가 생각하는 react 컴포넌트 만드는 과정

// 이제 fiber 형태를 생각해서 아래와 같이 만들어보자.
export function createElementByType(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

// 텍스트 입력 노드에는 하위 노드 이어지는 게 없으므로 패스
export function createTextNodeByType(text) {
  return {
    type: "text",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

// React가 될 이 객체를 Raccoons라고 지었다.
const Raccoons = {
  createElementByType,
  render,
};

// 그리고 이제 이 객체가 Raccoons에서 컴포넌트를 생성할 때 트리가 되어주는 친구이다.
// const previousElement = Raccoons.createElementByType(
//   createElementByType("div", { id: "foo" }),
//   createElementByType("li", {})
// );

// 위 형태를 아래와 jsx를 통해서 babel에 변환해달라는 느낌으로 입력하면 React와 유사한 형태가 된다.
/** @jsx Raccoons.createElementByType */
const element = (
  <div id="foo">
    <li>bar</li>
  </div>
);

// 이제 렌더 함수를 만들었다면 Raccoons 객체에 메소드로 render를 추가해주고, id="root"인 컴포넌트에 렌더링이 되도록 해주자.
const container = document.getElementById("root");
Raccoons.render(element, container);
