// 当节点类型相同时，去看一下属性是否相同

// 产生一个属性的补丁包{type:'ATTRS', attrs: {class:"list-group"}}

// 新的dom节点不在{type: 'REMOVE', index: xxxxx}

// 节点类型不相同，直接采用替换模式{type: 'REPLACE', node: newNOde}

// 文本的变化{type: 'TEXT', text: 1}

function diff (oldTree, newTree) {
  let patches = {}
  let index = 0
  // 递归树，比较后的结果放到补丁包中
  walk(oldTree, newTree, index, patches)

  return patches;
}

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

const ATTRS = 'ATTRS'// 属性的补丁包

function walk(oldNode, newNOde, index, patches) {
  let currentPath = []
  if (oldNode.type === newNOde.type) {
    // 比较属性是否有更改
    let attrs = diffAttr(oldNode.props, newNOde.props)
    // console.log(attrs )
    if (Object.keys(attrs).length > 0) {
      currentPath.push({type: ATTRS, attrs: attrs})
    }
  }
  if (currentPath.length > 0) {// 当前元素确实有补丁
    // 将元素和补丁对应起来，放到大补丁包
    patches[index] = currentPath
  }
  console.log(patches)
}

export default diff;