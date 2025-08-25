// note.ts 내용을 참고해서 컴포넌트 제작 함수를 만들어보자.
export function createComponent(tagName, textContent) {
  // react처럼 root 컴포넌트 안에서 해당 컴포넌트가 생성되어야 한다. 아니면 무효화.
  const container = document.getElementById("root") as HTMLElement;
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
