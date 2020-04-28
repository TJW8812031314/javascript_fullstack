// 当节点类型相同时，去看一下属性是否相同

// 产生一个属性的补丁包{type:'ATTRS', attrs: {class:"list-group"}}

// 新的dom节点不在{type: 'REMOVE', index: xxxxx}

// 节点类型不相同，直接采用替换模式{type: 'REPLACE', node: newNode}

// 文本的变化{type: 'TEXT', text: 1}

function diff (oldTree, newTree) {
  let patches = {}
  let index = 0
  // 递归树，比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patches)

  return patches;
}

// 节点属性对比
function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  // 判断老的属性中和新的属性的关系
  for(let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key] // 有可能会出现undefined
    }
  }
  // 新节点新增属性
  for(let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }
  return patch
}

function diffChildren(oldChildren, newChildren, index, patches) {
  // 比较老的第一个和新的第一个
  // if (oldChildren.type === newChildren.type) {
  //   let attrs = diffAttr(oldNode.props, newNode.props)
  // }
  // 深层遍历子节点
  oldChildren.forEach((child, idx) => {
    // 索引不应该是index了————————————
    // index 每次传递给walk时，index都应该基于同一个序号递增
    walk(child, newChildren[idx], ++Index, patches)
  });
}
// 判断子节点是不是字符串
function isString(node) {
  return Object.prototype.toString.call(node) === '[object String]'
}

const ATTRS = 'ATTRS'// 属性的补丁包
const TEXT = 'TEXT'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
let Index = 0
// 节点对比
function walk(oldNode, newNode, index, patches) {
  let currentPatch = []
  if (!newNode) {
    currentPatch.push({type: REMOVE, index})
  }else if (isString(oldNode) && isString(newNode)) {// 判断文本节点是否一致
    if (oldNode !== newNode) {
      currentPatch.push({type: TEXT, text: newNode})
    }
  } else if (oldNode.type === newNode.type) {
    // 比较属性是否有更改
    let attrs = diffAttr(oldNode.props, newNode.props)
    // console.log(attrs )
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({type: ATTRS, attrs: attrs})
    }
    // 如果有子节点，就遍历子节点
    diffChildren(oldNode.children, newNode.children, index, patches)
  } else {
    // 说明了节点被替换了
    currentPatch.push({type: REPLACE, newNode})
  }
  if (currentPatch.length > 0) {// 当前元素确实有补丁
    // 将元素和补丁对应起来，放到大补丁包
    patches[index] = currentPatch
    // console.log(patches)
  }
  
}

export default diff;