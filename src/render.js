export function render(element, container) {
  // element가 text인지 html 요소인지를 구분
  const dom = (element.type = "text"
    ? document.createTextNode("")
    : document.createElement(element.type));

  // 하위 노드들이 있는지, 있다면 각각에도 속성들이 있는지 확인
  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  // 모두 정리됐다면 최상위부터 최하위 요소까지 전부 순회되면서 렌더링 되도록 처리
  element.props.children.forEach((child) => {
    return render(child, dom);
  });
  container.appendChild(dom);
}
